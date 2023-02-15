import {Component} from 'react'
import Loader from 'react-loader-spinner'
import cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import NavBar from '../NavBar'
import GamingVideoItem from '../GamingVideoItem'
import SideBarContainer from '../SideBarContainer'

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
    const fetchedData = await response.json()

    const updatedData = {
      total: fetchedData.total,
      videos: this.getUpdatedVideosList(fetchedData.videos),
    }

    if (response.ok === true) {
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
    <LoaderContainer>
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingFailureView = () => (
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
      <>
        <NavBar />
        <Container>
          <SideBarContainer />
          <MenuContainer>
            <MenuHeadingContainer>
              <MenuIconContainer>
                <SiYoutubegaming size={45} color="ff0000" />
              </MenuIconContainer>
              <MenuItemName>Gaming</MenuItemName>
            </MenuHeadingContainer>
            {this.renderGamingResultView()}
          </MenuContainer>
        </Container>
      </>
    )
  }
}

export default Gaming
