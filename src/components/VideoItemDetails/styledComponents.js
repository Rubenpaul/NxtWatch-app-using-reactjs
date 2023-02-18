import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto';
  display: flex;
`

export const MenuContainer = styled.div`
  background-color: ${props => (props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9')}
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin-right: 20px;
    background-color: ${props =>
      props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'}
  }
`
export const ReactPlayerContainer = styled.div`
  height: 360px;
  @media screen and (min-width: 768px) {
    height: 420px;
  }
`

export const VideoItemDetailsContainer = styled.div`
  padding: 20px;
`
export const VideoTitle = styled.p`
  font-size: 21px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : ' #383838')}
  line-height: 1.5;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    color: ${props => (props.theme === 'dark' ? '#ffffff' : ' #383838')}
  }
`

export const VideoItemContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const UnOrderList = styled.ul`
  display: flex;
  padding-left: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const ListItem1 = styled.li`
  margin-right: 30px;
  list-style-type: none;
  padding: 0px;
  color: #64748b;
  font-weight: 400;
`
export const Para = styled.p`
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ListItem2 = styled.li`
  margin-right: 30px;
  list-style-type: disc;
  padding: 0px;
  color: #64748b;
  font-weight: 400;
  //   @media screen and (min-width: 768px) {
  //     font-size: 14px;
  //   }
`

export const VideoIconsContainer = styled.ul`
  padding-left: 0px;
  margin-top: 0px;
  display: flex;
  align-items: center;
`

export const VideoIcon = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-right: 35px;
`

export const VideoIconType = styled.p`
  margin-left: 8px;
  font-size: 16px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
  font-weight: 500;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #cccccc;
`

export const VideoIconAndDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

export const Icon = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 40px;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  } ;
`

export const VideoChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoChannel = styled.p`
  font-size: 17px;
  margin-bottom: 2px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#1e293b')}
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 20px;
     color: ${props => (props.theme === 'dark' ? '#ffffff' : '#1e293b')}
  } ;
`

export const ChannelSubscribers = styled.p`
  font-size: 14px;
  color: #64748b;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  } ;
`

export const ChannelDescription = styled.p`
  font-size: 16px;
  color: #64748b;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  } ;
`

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled(LoaderContainer)`
  flex-direction: column;
`

export const FailureImage = styled.img`
  height: 200px;
  width: 230px;
  @media screen and (min-width: 576px) {
    height: 300px;
    width: 350px;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  font-size: 24px;
  text-align: center;
  width: 90%;
  margin-bottom: 0px;
  margin-top: 30px;
  @media screen and (min-width: 576px) {
    font-size: 27px;
  }
`

export const FailureParagraph = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  font-size: 17px;
  text-align: center;
  width: 80%;
  line-height: 2;
  @media screen and (min-width: 576px) {
    font-size: 21px;
  }
`

export const FailureRetryBtn = styled.button`
  height: 35px;
  width: 110px;
  background-color: #4f46e5;
  color: #ffffff;
  border: 0px;
  border-radius: 7px;
  font-size: 13px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    height: 48px;
    width: 120px;
    font-size: 18px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: 0px;
`
