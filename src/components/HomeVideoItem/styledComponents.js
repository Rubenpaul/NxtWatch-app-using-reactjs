import styled from 'styled-components'

// export const AnchorLink = styled(Link)`
//   text-decoration: none;
//   margin-top: 10px;
//   margin-bottom: 20px;
//   width: 100%;
//   @media screen and (min-width: 576px) {
//     width: 46%;
//     margin-left: 10px;
//     margin-right: 10px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 300px;
// //   }
// `
export const HomeVideoListItem = styled.li`
  list-style-type: none;
`

export const ThumbnailContainer = styled.div`
  padding: none;
`

export const HomeItemThumbNail = styled.img`
  width: 100%;
`

export const ItemDetailsContainer = styled.div`
  display: flex;
  padding: 20px;
  @media screen and (min-width: 576px) {
    padding: 10px;
  }
`

export const ChannelImage = styled.img`
  height: 60px;
  width: 55px;
  margin-right: 30px;
  align-self: flex-start;
  @media screen and (min-width: 576px) {
    height: 40px;
    margin-right: 18px;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoDescription = styled.p`
  margin-top: 0px;
  font-size: 20px;
  line-height: 1.7;
  text-decoration:none;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#181818')} 
  font-weight: 400;
  @media screen and (min-width: 576px) {
    font-size: 17px;
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#ffffff')}
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#181818')} 
  }
`

export const VideoContainer = styled.div`
  display: flex;
  color: #475569;
  font-weight: bold;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    font-size: 15px;
  }
`

export const VideoChannelName = styled.p`
  margin-top: 0px;
  margin-right: 0px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const UnOrderList = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    padding-left: 0px;
  }
`

export const ListItem1 = styled.p`
  margin-right: 30px;
  list-style-type: disc;
  @media screen and (min-width: 576px) {
    list-style-type: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const ListItem2 = styled.p`
  margin-right: 30px;
  list-style-type: disc;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
