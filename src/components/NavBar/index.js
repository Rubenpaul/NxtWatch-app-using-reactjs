import {Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import {
  NavContainer,
  AppLogo,
  NavItemsContainerMobile,
  NavItem,
} from './styledComponents'

const NavBar = () => (
  <NavContainer>
    <Link to="/">
      <AppLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
    </Link>

    <NavItemsContainerMobile>
      <NavItem>
        <FaMoon size={40} />
      </NavItem>
      <NavItem>
        <GiHamburgerMenu size={40} />
      </NavItem>
      <NavItem>
        <FiLogOut size={40} />
      </NavItem>
    </NavItemsContainerMobile>
  </NavContainer>
)

export default NavBar
