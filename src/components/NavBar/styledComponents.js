import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${props => {
    const {theme} = props
    const color = theme === 'dark' ? '#212121' : '#ffffff'
    return color
  }};
`

export const AppLogo = styled.img`
  height: 38px;
  width: 180px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '')};
`

export const NavItemsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const NavItem = styled.li`
  list-style-type: none;
  margin-right: 17px;
`

export const ResponseContainerMobile = styled.ul`
  padding-left: 0px;
  width: 100px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ResponseContainerDesktop = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  display: none;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
    display: flex;
  }
`

export const NavImage = styled.img`
  height: 30px;
  width: 30px;
`

export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
`
export const LogoutBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: transparent;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#3b82f6')};
  border: ${props =>
    props.theme === 'dark' ? '1px solid #ffffff' : '1px solid #3b82f6'};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
`

export const Paragraph = styled.p`
  font-size: 18px;
  color: #1e293b;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#606060')};
`

export const Button = styled.button`
  height: 38px;
  width: 90px;
  background-color: ${props =>
    props.outline === true ? 'transparent' : '#3b82f6'};
  color: ${props => (props.outline === true ? '#606060' : '#ffffff')};
  font-weight: bold;
  border: ${props => (props.outline === true ? '1px solid #606060' : '0px')};
  border-radius: 5px;
  outline: none;
  margin-top: 30px;
  cursor: pointer;
`
export const PopupContent = styled.div`
  height: 180px;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
