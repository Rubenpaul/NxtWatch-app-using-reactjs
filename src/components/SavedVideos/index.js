import {Component} from 'react'

import {HiFire} from 'react-icons/hi'
import NavBar from '../NavBar'
import SideBarContainer from '../SideBarContainer'
import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'
import SavedVideoItem from '../SavedVideoItem'

import {
  Container,
  MenuContainer,
  MenuHeadingContainer,
  MenuIconContainer,
  MenuItemName,
  NoSavedViewsContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  VideosList,
} from './styledComponents'

class SavedVideos extends Component {
  savedVideos = themeValue => {
    const {isDarkTheme} = themeValue

    const theme = isDarkTheme ? 'dark' : 'light'

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideosList} = value
          if (savedVideosList.length === 0) {
            return (
              <NoSavedViewsContainer>
                <NoVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoVideosHeading theme={theme}>
                  No saved videos found
                </NoVideosHeading>
                <NoVideosDescription theme={theme}>
                  You can save your videos while watching them
                </NoVideosDescription>
              </NoSavedViewsContainer>
            )
          }
          return (
            <VideosList>
              {savedVideosList.map(eachVideo => (
                <SavedVideoItem eachVideo={eachVideo} key={eachVideo.id} />
              ))}
            </VideosList>
          )
        }}
      </SavedVideosContext.Consumer>
    )
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
                <MenuContainer theme={theme} data-testid="savedVideos">
                  <MenuHeadingContainer theme={theme} data-testid="banner">
                    <MenuIconContainer>
                      <HiFire size={45} color="#ff0000" />
                    </MenuIconContainer>
                    <MenuItemName theme={theme}>Saved Videos</MenuItemName>
                  </MenuHeadingContainer>
                  {this.savedVideos(value)}
                </MenuContainer>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
