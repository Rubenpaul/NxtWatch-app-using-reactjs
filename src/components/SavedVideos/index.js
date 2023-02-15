import {Component} from 'react'

import NavBar from '../NavBar'
import SideBarContainer from '../SideBarContainer'

import {
  Container,
  NoSavedViewsContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoSavedView = () => (
    <NoSavedViewsContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoVideosHeading>No saved videos found</NoVideosHeading>
      <NoVideosDescription>
        You can save your videos while watching them
      </NoVideosDescription>
    </NoSavedViewsContainer>
  )

  render() {
    return (
      <>
        <NavBar />
        <Container>
          <SideBarContainer />
          {this.renderNoSavedView()}
        </Container>
      </>
    )
  }
}

export default SavedVideos
