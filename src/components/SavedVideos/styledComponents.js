import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto';
  display: flex;
`

export const MenuContainer = styled.div`
  background-color: ${props => (props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9')}
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
    background-color: ${props =>
      props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'}
  }
`

export const MenuHeadingContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f1f1f1'};
  display: flex;
  align-items: center;
  padding: 20px;
`

export const MenuIconContainer = styled.div`
  background-color: #d7dfe9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  height: 80px;
  width: 80px;
  border-radius: 100%;
`

export const MenuItemName = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#231f20')};
  font-weight: bold;
`

export const NoSavedViewsContainer = styled.div`
  background-color: #f1f1f1;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 900px;
    width: 80%;
  }
`

export const NoVideosImage = styled.img`
  height: 250px;
  width: 330px;
  @media screen and (min-width: 768px) {
    height: 380px;
    width: 550px;
  }
`
export const NoVideosHeading = styled.h1`
  font-size: 25px;
  margin-top: 30px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-top: 50px;
    color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  }
`

export const NoVideosDescription = styled.p`
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 23px;
    color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  }
`
export const VideosList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
