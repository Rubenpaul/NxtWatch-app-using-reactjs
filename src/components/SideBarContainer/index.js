import './index.css'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {
  SideBar,
  Menu,
  MenuItem,
  MenuItemText,
  ContactDetails,
  ContactHeading,
  SocialAppsContainer,
  SocialAppItem,
  ContactDescription,
  SocialImage,
} from './styledComponents'

const ActiveMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const SideBarContainer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark' : 'light'
      return (
        <ActiveMenuContext.Consumer>
          {activeMenuValue => {
            const {activeMenu, changeActiveMenu} = activeMenuValue

            const iconColor = isDarkTheme ? '#424242' : '#7e858e'
            const iconActive = '#ff0b37'

            return (
              <SideBar theme={theme}>
                <Menu>
                  <Link to="/" className="link">
                    <MenuItem
                      theme={theme}
                      isActive={activeMenu === ActiveMenuConstants.home}
                      key="HOME"
                      onClick={() => changeActiveMenu(ActiveMenuConstants.home)}
                    >
                      <AiFillHome
                        size={25}
                        color={
                          activeMenu === ActiveMenuConstants.home
                            ? iconActive
                            : iconColor
                        }
                      />
                      <MenuItemText theme={theme}>Home</MenuItemText>
                    </MenuItem>
                  </Link>

                  <Link to="/trending" className="link">
                    <MenuItem
                      theme={theme}
                      isActive={activeMenu === ActiveMenuConstants.trending}
                      key="TRENDING"
                      onClick={() =>
                        changeActiveMenu(ActiveMenuConstants.trending)
                      }
                    >
                      <HiFire
                        size={25}
                        color={
                          activeMenu === ActiveMenuConstants.trending
                            ? iconActive
                            : iconColor
                        }
                      />
                      <MenuItemText theme={theme}>Trending</MenuItemText>
                    </MenuItem>
                  </Link>

                  <Link to="/gaming" className="link">
                    <MenuItem
                      theme={theme}
                      isActive={activeMenu === ActiveMenuConstants.gaming}
                      key="GAMING"
                      onClick={() =>
                        changeActiveMenu(ActiveMenuConstants.gaming)
                      }
                    >
                      <SiYoutubegaming
                        size={25}
                        color={
                          activeMenu === ActiveMenuConstants.gaming
                            ? iconActive
                            : iconColor
                        }
                      />
                      <MenuItemText theme={theme}>Gaming</MenuItemText>
                    </MenuItem>
                  </Link>

                  <Link to="/saved-videos" className="link">
                    <MenuItem
                      theme={theme}
                      isActive={activeMenu === ActiveMenuConstants.savedVideos}
                      key="SAVED_VIDEOS"
                      onClick={() =>
                        changeActiveMenu(ActiveMenuConstants.savedVideos)
                      }
                    >
                      <MdPlaylistAdd
                        size={25}
                        color={
                          activeMenu === ActiveMenuConstants.savedVideos
                            ? iconActive
                            : iconColor
                        }
                      />
                      <MenuItemText theme={theme}>Saved Videos</MenuItemText>
                    </MenuItem>
                  </Link>
                </Menu>
                <ContactDetails>
                  <ContactHeading theme={theme}>CONTACT US</ContactHeading>
                  <SocialAppsContainer>
                    <SocialAppItem>
                      <SocialImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                    </SocialAppItem>
                    <SocialAppItem>
                      <SocialImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                    </SocialAppItem>
                    <SocialAppItem>
                      <SocialImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </SocialAppItem>
                  </SocialAppsContainer>
                  <ContactDescription>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactDescription>
                </ContactDetails>
              </SideBar>
            )
          }}
        </ActiveMenuContext.Consumer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBarContainer
