import {RiCloseLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'

import {Component} from 'react'
import cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import NavBar from '../NavBar'
import SideBarContainer from '../SideBarContainer'
import HomeVideoItem from '../HomeVideoItem'

import {
  Container,
  HomeDetails,
  Banner,
  WebsiteLogo,
  BuyPremium,
  BannerTopContainer,
  CloseBtn,
  GetItNowBtn,
  HomeSearchAndDetailsContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
  HomeVideosList,
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
class Home extends Component {
  state = {
    homeVideosObj: {},
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    isCloseClicked: false,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})

    const jwtToken = cookies.get('jwt_token')
    const {searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    const {searchInput} = this.state
    this.setState({searchInput}, this.getHomeVideos)
  }

  onClickCloseBtn = () => {
    this.setState({isCloseClicked: true})
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  onSubmitSuccess = updatedData => {
    this.setState({
      homeVideosObj: updatedData,
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

  renderHomeListVideosView = () => {
    const {homeVideosObj} = this.state

    return (
      <HomeVideosList>
        {homeVideosObj.videos.map(eachVideo => (
          <HomeVideoItem eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </HomeVideosList>
    )
  }

  renderNoViews = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHeading>No Search results found</FailureHeading>
      <FailureParagraph>
        Try different key words or remove search filter
      </FailureParagraph>
      <FailureRetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </FailureRetryBtn>
    </FailureContainer>
  )

  renderHomeSuccessView = () => {
    const {homeVideosObj} = this.state
    const {total} = homeVideosObj
    return (
      <>
        {total === 0 ? this.renderNoViews() : this.renderHomeListVideosView()}
      </>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeFailureView = () => (
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

  renderHomeResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.in_progress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderHomeSuccessView()
      case apiStatusConstants.failure:
        return this.renderHomeFailureView()
      default:
        return null
    }
  }

  renderBannerSection = () => (
    <Banner>
      <BannerTopContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseBtn onClick={this.onClickCloseBtn}>
          <RiCloseLine size={30} />
        </CloseBtn>
      </BannerTopContainer>
      <BuyPremium>Buy Nxt Watch Premium prepaid plans with UPI</BuyPremium>
      <GetItNowBtn>GET IT NOW</GetItNowBtn>
    </Banner>
  )

  render() {
    const {searchInput, isCloseClicked} = this.state
    return (
      <>
        <NavBar />
        <Container>
          <SideBarContainer />
          <HomeDetails>
            {isCloseClicked ? null : this.renderBannerSection()}
            <HomeSearchAndDetailsContainer>
              <SearchContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
                <SearchBtn type="button" onClick={this.onClickSearch}>
                  <AiOutlineSearch size={20} />
                </SearchBtn>
              </SearchContainer>
              {this.renderHomeResultView()}
            </HomeSearchAndDetailsContainer>
          </HomeDetails>
        </Container>
      </>
    )
  }
}
export default Home
