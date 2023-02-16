import {Component} from 'react'
import cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'

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
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {videoDetails: {}, apiStatus: apiStatusConstants.initial}

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
    const fetchedData = await response.json()

    const updatedData = {
      id: fetchedData.video_details.id,
      description: fetchedData.video_details.description,
      title: fetchedData.video_details.title,
      publishedAt: fetchedData.video_details.published_at,
      thumbnailUrl: fetchedData.video_details.thumbnail_url,
      videoUrl: fetchedData.video_details.video_url,
      viewCount: fetchedData.video_details.view_count,
      channel: {
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
      },
    }

    if (response.ok === true) {
      this.onSubmitSuccess(updatedData)
    } else {
      this.onSubmitFailure()
    }
  }

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
    <LoaderContainer>
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoItemFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureParagraph>
        We are having some trouble to complete your request. Please try again
      </FailureParagraph>
      <FailureRetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </FailureRetryBtn>
    </FailureContainer>
  )

  renderVideoItemView = () => {
    const {videoDetails} = this.state
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

    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <>
        <ReactPlayerContainer>
          <ReactPlayer
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            light={thumbnailUrl}
          />
        </ReactPlayerContainer>
        <VideoItemDetailsContainer>
          <VideoTitle>{title}</VideoTitle>
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
                <BiLike size={25} color="#64748b" />
                <VideoIconType>Like</VideoIconType>
              </VideoIcon>
              <VideoIcon>
                <BiDislike size={25} color="#64748b" />
                <VideoIconType>Dislike</VideoIconType>
              </VideoIcon>
              <VideoIcon>
                <RiPlayListAddFill size={25} color="#64748b" />
                <VideoIconType>Save</VideoIconType>
              </VideoIcon>
            </VideoIconsContainer>
          </VideoItemContainer>
          <HorizontalLine />
          <VideoIconAndDetails>
            <Icon src={profileImageUrl} alt="channel logo" />
            <VideoChannelContainer>
              <VideoChannel>{name}</VideoChannel>
              <ChannelSubscribers>
                {subscriberCount} subscribers
              </ChannelSubscribers>
            </VideoChannelContainer>
          </VideoIconAndDetails>
          <ChannelDescription>{description}</ChannelDescription>
        </VideoItemDetailsContainer>
      </>
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
      <>
        <NavBar />
        <Container>
          <SideBarContainer />
          <MenuContainer>{this.renderVideoItemResultView()}</MenuContainer>
        </Container>
      </>
    )
  }
}

export default VideoItemDetails
