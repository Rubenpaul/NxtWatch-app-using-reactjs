import {
  Container,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import NavBar from '../NavBar'
import SideBarContainer from '../SideBarContainer'

const NotFound = () => (
  <>
    <NavBar />
    <Container>
      <SideBarContainer />
      <NotFoundContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundDescription>
          We are sorry, the page you requested could not be found.
        </NotFoundDescription>
      </NotFoundContainer>
    </Container>
  </>
)

export default NotFound
