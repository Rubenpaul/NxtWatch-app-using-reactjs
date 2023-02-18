import {Link, withRouter} from 'react-router-dom'

import cookies from 'js-cookie'
import './index.css'

import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'

import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'

import {
  NavContainer,
  AppLogo,
  NavItemsContainer,
  NavItem,
  NavButton,
  NavImage,
  ResponseContainerMobile,
  ResponseContainerDesktop,
  LogoutBtn,
  Paragraph,
  Button,
  ButtonContainer,
  PopupContent,
} from './styledComponents'

const NavBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const onClickLogout = () => {
        const {history} = props

        cookies.remove('jwt_token')
        history.replace('/login')
      }

      const theme = isDarkTheme ? 'dark' : 'light'

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      return (
        <NavContainer theme={theme}>
          <Link to="/">
            <AppLogo src={imageUrl} alt="website logo" />
          </Link>

          <NavItemsContainer>
            <NavItem>
              <NavButton onClick={changeTheme} data-testid="theme">
                {theme === 'dark' ? (
                  <FiSun size={30} color="#ffffff" />
                ) : (
                  <FaMoon size={30} />
                )}
              </NavButton>
            </NavItem>

            <ResponseContainerMobile>
              <NavItem>
                <NavButton>
                  <GiHamburgerMenu
                    size={30}
                    color={theme === 'dark' ? '#ffffff' : null}
                  />
                </NavButton>
              </NavItem>

              <Popup
                modal
                trigger={
                  <NavItem>
                    <NavButton>
                      <FiLogOut
                        size={30}
                        color={theme === 'dark' ? '#ffffff' : null}
                      />
                    </NavButton>
                  </NavItem>
                }
              >
                {close => (
                  <>
                    <Paragraph>Are you sure, you want to logout</Paragraph>
                    <ButtonContainer>
                      <Button type="button" onClick={() => close()} outline>
                        Cancel
                      </Button>

                      <Button type="button" onClick={onClickLogout}>
                        Confirm
                      </Button>
                    </ButtonContainer>
                  </>
                )}
              </Popup>
            </ResponseContainerMobile>

            <ResponseContainerDesktop>
              <NavItem>
                <NavButton>
                  <NavImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavButton>
              </NavItem>

              <Popup
                modal
                trigger={
                  <NavItem>
                    <LogoutBtn theme={theme}>Logout</LogoutBtn>
                  </NavItem>
                }
              >
                {close => (
                  <PopupContent theme={theme}>
                    <Paragraph theme={theme}>
                      Are you sure, you want to logout
                    </Paragraph>
                    <ButtonContainer>
                      <Button type="button" onClick={() => close()} outline>
                        Cancel
                      </Button>

                      <Button type="button" onClick={onClickLogout}>
                        Confirm
                      </Button>
                    </ButtonContainer>
                  </PopupContent>
                )}
              </Popup>
            </ResponseContainerDesktop>
          </NavItemsContainer>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(NavBar)
