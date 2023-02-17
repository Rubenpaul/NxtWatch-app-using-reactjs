import styled from 'styled-components'

export const SideBar = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20%;
    height: 900px;
    font-family: 'Roboto';
    background-color: ${props => {
      const {theme} = props
      const color = theme === 'dark' ? '#212121' : '#ffffff'
      return color
    }};
  }
`

export const Menu = styled.ul`
  padding-left: 0px;
  width: 100%;
`
export const MenuItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => {
    const {theme} = props
    const color = theme === 'dark' ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
`

export const MenuItemText = styled.p`
  margin-left: 30px;
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
`

export const ContactDetails = styled.div`
  padding-left: 20px;
`

export const ContactHeading = styled.h1`
  font-size: 21px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#424242')};
`

export const SocialAppsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  width: 100%;
`

export const SocialAppItem = styled.li`
  list-style-type: none;
  margin-right: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const SocialImage = styled.img`
  height: 40px;
  width: 40px;
`

export const ContactDescription = styled.p`
  width: 80%;
  line-height: 1.5;
  color: #64748b;
  font-weight: bold;
`
