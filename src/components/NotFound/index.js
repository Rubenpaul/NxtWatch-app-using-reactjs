import {
  Container,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import NavBar from '../NavBar'
import SideBarContainer from '../SideBarContainer'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <NavBar />
          <Container>
            <SideBarContainer />
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImage src={imgUrl} alt="not found" />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </Container>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
