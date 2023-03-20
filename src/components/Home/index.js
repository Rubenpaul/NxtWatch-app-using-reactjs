import {RiCloseLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'

import {Component} from 'react'
import cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'

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

  publishedYearsAgo = dateString => {
    const publishedTimestamp = Date.parse(dateString)
    const currentTimestamp = Date.now()
    const differenceInMs = currentTimestamp - publishedTimestamp
    const yearsAgo = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365))
    return `${yearsAgo} years ago`
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
      publishedAt: this.publishedYearsAgo(eachVideo.published_at),
      thumbnailUrl: eachVideo.thumbnail_url,
      viewCount: eachVideo.view_count,
    }))

    return updatedVideosList
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
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading isDarkTheme={isDarkTheme}>
              No Search results found
            </FailureHeading>
            <FailureParagraph isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </FailureParagraph>
            <FailureRetryBtn type="button" onClick={this.onClickRetry}>
              Retry
            </FailureRetryBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeSuccessView = () => {
    const {homeVideosObj} = this.state
    const {total} = homeVideosObj

    return (
      <>
        {total !== 0 ? this.renderHomeListVideosView() : this.renderNoViews()}
      </>
    )
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

  renderHomeFailureView = () => (
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
    <Banner data-testid="banner">
      <BannerTopContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseBtn onClick={this.onClickCloseBtn} data-testid="close">
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
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <NavBar />
              <Container>
                <SideBarContainer />
                <HomeDetails data-testid="home" isDarkTheme={isDarkTheme}>
                  {isCloseClicked ? null : this.renderBannerSection()}
                  <HomeSearchAndDetailsContainer isDarkTheme={isDarkTheme}>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        isDarkTheme={isDarkTheme}
                      />
                      <SearchBtn
                        type="button"
                        onClick={this.onClickSearch}
                        isDarkTheme={isDarkTheme}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch size={20} />
                      </SearchBtn>
                    </SearchContainer>
                    {this.renderHomeResultView()}
                  </HomeSearchAndDetailsContainer>
                </HomeDetails>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
