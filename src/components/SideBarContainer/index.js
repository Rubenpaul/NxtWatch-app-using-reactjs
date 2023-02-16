import {AiFillHome, AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {FaFacebook} from 'react-icons/fa'

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

const SideBarContainer = () => (
  <SideBar>
    <Menu>
      <MenuItem>
        <AiFillHome size={25} color="#ff0000" />
        <MenuItemText>Home</MenuItemText>
      </MenuItem>
      <MenuItem>
        <HiFire size={25} color="#606060" />
        <MenuItemText>Trending</MenuItemText>
      </MenuItem>
      <MenuItem>
        <SiYoutubegaming size={25} color="#606060" />
        <MenuItemText>Gaming</MenuItemText>
      </MenuItem>
      <MenuItem>
        <MdPlaylistAdd size={25} color="#606060" />
        <MenuItemText>Saved Videos</MenuItemText>
      </MenuItem>
    </Menu>
    <ContactDetails>
      <ContactHeading>CONTACT US</ContactHeading>
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

export default SideBarContainer
