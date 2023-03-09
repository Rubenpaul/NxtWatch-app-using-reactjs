import {Component} from 'react'
import cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import NavBar from '../NavBar'
import SideBarContainer from '../SideBarContainer'
import TrendingVideoItem from '../TrendingVideoItem'

import ThemeContext from '../../context/ThemeContext'

import {
  Container,
  MenuContainer,
  MenuHeadingContainer,
  MenuIconContainer,
  MenuItemName,
  TrendingVideosList,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  FailureRetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideos: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})

    const jwtToken = cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        total: fetchedData.total,
        videos: this.getUpdatedVideosList(fetchedData.videos),
      }
      this.onSubmitSuccess(updatedData)
    } else {
      this.onSubmitFailure()
    }
  }

  onSubmitSuccess = updatedData => {
    this.setState({
      trendingVideos: updatedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  onSubmitFailure = () => {
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  getUpdatedVideosList = videos => {
    const updatedVideosList = videos.map(eachVideo => ({
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      title: eachVideo.title,
      id: eachVideo.id,
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      viewCount: eachVideo.view_count,
    }))

    return updatedVideosList
  }

  onClickRetry = () => {
    this.getTrendingVideos()
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

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosList>
        {trendingVideos.videos.map(eachVideo => (
          <TrendingVideoItem eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </TrendingVideosList>
    )
  }

  renderTrendingFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={imageUrl} alt="failure view" />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureParagraph isDarkTheme={isDarkTheme}>
              We are having some trouble
            </FailureParagraph>
            <FailureRetryBtn type="button" onClick={this.onClickRetry}>
              Retry
            </FailureRetryBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.in_progress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <NavBar />
              <Container>
                <SideBarContainer />
                <MenuContainer isDarkTheme={isDarkTheme} data-testid="trending">
                  <MenuHeadingContainer
                    isDarkTheme={isDarkTheme}
                    data-testid="banner"
                  >
                    <MenuIconContainer>
                      <HiFire size={45} color="#ff0000" />
                    </MenuIconContainer>
                    <MenuItemName isDarkTheme={isDarkTheme}>
                      Trending
                    </MenuItemName>
                  </MenuHeadingContainer>
                  {this.renderTrendingResultView()}
                </MenuContainer>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
