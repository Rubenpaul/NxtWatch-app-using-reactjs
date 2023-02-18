import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AnchorLink = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  @media screen and (min-width: 576px) {
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    width: 96%;
  }
  @media screen and (min-width: 768px) {
    width: 800px;
    margin-left: 40px;
  }
`

export const TrendingVideoListItem = styled.li`
  list-style-type: none;
  @media screen and (min-width: 576px) {
    display: flex;
    width: 100%;
  }
`

export const ThumbnailContainer = styled.div`
  padding: none;
  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
`

export const TrendingItemThumbNail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    height: 240px;
    width: 350px;
  }
`

export const ItemDetailsContainer = styled.div`
  display: flex;
  padding: 20px;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const ChannelImage = styled.img`
  height: 60px;
  width: 55px;
  margin-right: 30px;
  align-self: flex-start;
  @media screen and (min-width: 576px) {
    height: 40px;
    margin-right: 20px;
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
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#383838')}
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#383838')}
  }
    @media screen and (min-width: 768px) {
     color: ${props => (props.theme === 'dark' ? '#ffffff' : '#383838')}
    }
`

export const VideoContainer = styled.div`
  display: flex;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    font-size: 15px;
  }
`

export const VideoChannelName = styled.p`
  margin-top: 0px;
  margin-right: 0px;
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
    color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#475569')};
  }
`

export const UnOrderList = styled.div`
  display: flex;

  @media screen and (min-width: 576px) {
    padding-left: 0px;
  }
`

export const Para = styled.p`
  font-size: 12px;
  margin-right: 20px;
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
    color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#475569')};
    margin-right: 20px;
  }
`
