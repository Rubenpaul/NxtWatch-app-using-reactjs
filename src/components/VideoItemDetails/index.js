import {Component} from 'react'
import cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'

import NavBar from '../NavBar'
import SideBarContainer from '../SideBarContainer'

import {
  Container,
  MenuContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  FailureRetryBtn,
  ReactPlayerContainer,
  VideoItemDetailsContainer,
  VideoTitle,
  VideoItemContainer,
  UnOrderList,
  ListItem1,
  Para,
  ListItem2,
  VideoIconsContainer,
  VideoIcon,
  VideoIconType,
  HorizontalLine,
  VideoIconAndDetails,
  Icon,
  VideoChannelContainer,
  VideoChannel,
  ChannelSubscribers,
  ChannelDescription,
  Button,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = {
        id: fetchedData.video_details.id,
        description: fetchedData.video_details.description,
        title: fetchedData.video_details.title,
        publishedAt: this.publishedYearsAgo(
          fetchedData.video_details.published_at,
        ),
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
      }
      this.onSubmitSuccess(updatedData)
    } else {
      this.onSubmitFailure()
    }
  }

  publishedYearsAgo = dateString => {
    const publishedTimestamp = Date.parse(dateString)
    const currentTimestamp = Date.now()
    const differenceInMs = currentTimestamp - publishedTimestamp
    const yearsAgo = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365))
    return `${yearsAgo} years ago`
  }

  //   getUpdatedDate = date => {
  //     let postedAt = formatDistanceToNow(new Date(date))
  //     const postedAtList = postedAt.split(' ')

  //     if (postedAtList.length === 3) {
  //       postedAtList.shift()
  //       postedAt = postedAtList.join(' ')
  //     }
  //     return postedAt
  //   }

  onSubmitSuccess = updatedData => {
    this.setState({
      videoDetails: updatedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  onSubmitFailure = () => {
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  onClickRetry = () => {
    this.getVideoItemDetails()
  }

  renderLoaderView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LoaderContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoItemFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'

        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={imageUrl} alt="failure view" />
            <FailureHeading theme={theme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureParagraph theme={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureParagraph>
            <FailureRetryBtn type="button" onClick={this.onClickRetry}>
              Retry
            </FailureRetryBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onClickLike = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      dislike: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      dislike: !prevState.dislike,
      like: false,
    }))
  }

  renderVideoItemView = () => {
    const {videoDetails, like, dislike} = this.state
    const {
      viewCount,
      videoUrl,
      thumbnailUrl,
      publishedAt,
      title,
      description,
      id,
      channel,
    } = videoDetails

    const likeIsActive = like ? 'active' : 'not-active'
    const dislikeIsActive = dislike ? 'active' : 'not-active'

    const {name, profileImageUrl, subscriberCount} = channel
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <>
              <ReactPlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </ReactPlayerContainer>
              <VideoItemDetailsContainer>
                <VideoTitle theme={theme}>{title}</VideoTitle>
                <VideoItemContainer>
                  <UnOrderList>
                    <ListItem1>
                      <Para>{viewCount} views</Para>
                    </ListItem1>
                    <ListItem2>
                      <Para>{publishedAt}</Para>
                    </ListItem2>
                  </UnOrderList>
                  <VideoIconsContainer>
                    <VideoIcon>
                      <Button
                        type="button"
                        onClick={this.onClickLike}
                        theme={likeIsActive}
                      >
                        <BiLike size={25} />
                        <VideoIconType theme={likeIsActive}>Like</VideoIconType>
                      </Button>
                    </VideoIcon>
                    <VideoIcon>
                      <Button
                        type="button"
                        onClick={this.onClickDisLike}
                        theme={dislikeIsActive}
                      >
                        <BiDislike size={25} />
                        <VideoIconType theme={dislikeIsActive}>
                          Dislike
                        </VideoIconType>
                      </Button>
                    </VideoIcon>
                    <SavedVideosContext.Consumer>
                      {val => {
                        const {savedVideosList, updateSave} = val

                        const present = savedVideosList.find(
                          each => each.id === id,
                        )

                        const saveIsActive =
                          present !== undefined ? 'active' : 'not-active'
                        const saveText =
                          present !== undefined ? 'Saved' : 'Save'

                        return (
                          <VideoIcon>
                            <Button
                              type="button"
                              onClick={() => updateSave(videoDetails)}
                              theme={saveIsActive}
                            >
                              <RiPlayListAddFill size={25} />
                              <VideoIconType theme={saveIsActive}>
                                {saveText}
                              </VideoIconType>
                            </Button>
                          </VideoIcon>
                        )
                      }}
                    </SavedVideosContext.Consumer>
                  </VideoIconsContainer>
                </VideoItemContainer>
                <HorizontalLine />
                <VideoIconAndDetails>
                  <Icon src={profileImageUrl} alt="channel logo" />
                  <VideoChannelContainer>
                    <VideoChannel theme={theme}>{name}</VideoChannel>
                    <ChannelSubscribers>
                      {subscriberCount} subscribers
                    </ChannelSubscribers>
                  </VideoChannelContainer>
                </VideoIconAndDetails>
                <ChannelDescription>{description}</ChannelDescription>
              </VideoItemDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideoItemResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.in_progress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderVideoItemView()
      case apiStatusConstants.failure:
        return this.renderVideoItemFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <>
              <NavBar />
              <Container>
                <SideBarContainer />
                <MenuContainer theme={theme} data-testid="videoItemDetails">
                  {this.renderVideoItemResultView()}
                </MenuContainer>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
