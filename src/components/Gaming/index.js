import {Component} from 'react'
import Loader from 'react-loader-spinner'
import cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import NavBar from '../NavBar'
import GamingVideoItem from '../GamingVideoItem'
import SideBarContainer from '../SideBarContainer'

import ThemeContext from '../../context/ThemeContext'

import {
  Container,
  MenuContainer,
  MenuHeadingContainer,
  MenuIconContainer,
  MenuItemName,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  FailureRetryBtn,
  GamingVideosList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideos: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})

    const jwtToken = cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        total: fetchedData.videos.length,
        videos: this.getUpdatedVideosList(fetchedData.videos),
      }
      this.onSubmitSuccess(updatedData)
    } else {
      this.onSubmitFailure()
    }
  }

  onSubmitSuccess = updatedData => {
    this.setState({
      gamingVideos: updatedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  onSubmitFailure = () => {
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  getUpdatedVideosList = videos => {
    const updatedVideosList = videos.map(eachVideo => ({
      title: eachVideo.title,
      id: eachVideo.id,
      thumbnailUrl: eachVideo.thumbnail_url,
      viewCount: eachVideo.view_count,
    }))

    return updatedVideosList
  }

  onClickRetry = () => {
    this.getGamingVideos()
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

  renderGamingFailureView = () => (
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

  renderGamingVideos = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosList>
        {gamingVideos.videos.map(eachVideo => (
          <GamingVideoItem eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </GamingVideosList>
    )
  }

  renderGamingResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.in_progress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.failure:
        return this.renderGamingFailureView()
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
                <MenuContainer isDarkTheme={isDarkTheme} data-testid="gaming">
                  <MenuHeadingContainer
                    isDarkTheme={isDarkTheme}
                    data-testid="banner"
                  >
                    <MenuIconContainer>
                      <SiYoutubegaming size={45} color="ff0000" />
                    </MenuIconContainer>
                    <MenuItemName isDarkTheme={isDarkTheme}>
                      Gaming
                    </MenuItemName>
                  </MenuHeadingContainer>
                  {this.renderGamingResultView()}
                </MenuContainer>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
