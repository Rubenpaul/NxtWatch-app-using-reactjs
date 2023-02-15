import {Component} from 'react'
import cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import NavBar from '../NavBar'
import SideBarContainer from '../SideBarContainer'
import TrendingVideoItem from '../TrendingVideoItem'

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
    <LoaderContainer>
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
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
      <>
        <NavBar />
        <Container>
          <SideBarContainer />
          <MenuContainer>
            <MenuHeadingContainer>
              <MenuIconContainer>
                <HiFire size={45} color="#ff0000" />
              </MenuIconContainer>
              <MenuItemName>Trending</MenuItemName>
            </MenuHeadingContainer>
            {this.renderTrendingResultView()}
          </MenuContainer>
        </Container>
      </>
    )
  }
}

export default Trending
