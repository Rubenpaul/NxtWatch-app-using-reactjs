import {NotFoundContainer, NotFoundImage} from './styledComponents'

import NavBar from '../NavBar'

const NotFound = () => (
  <>
    <NavBar />
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not found"
      />
    </NotFoundContainer>
  </>
)

export default NotFound
