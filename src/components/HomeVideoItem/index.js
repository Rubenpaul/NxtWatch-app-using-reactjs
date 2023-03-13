import './index.css'
import {Link} from 'react-router-dom'

import {
  HomeVideoListItem,
  HomeItemThumbNail,
  ThumbnailContainer,
  ItemDetailsContainer,
  ChannelImage,
  VideoDetails,
  VideoDescription,
  VideoContainer,
  VideoChannelName,
  DetailsDiv,
  Para1,
  Para2,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const HomeVideoItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'

      const {eachVideo} = props
      const {
        id,
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = eachVideo

      const {name, profileImageUrl} = channel
      return (
        <Link to={`/videos/${id}`} className="link">
          <HomeVideoListItem>
            <ThumbnailContainer>
              <HomeItemThumbNail src={thumbnailUrl} alt="video thumbnail" />
            </ThumbnailContainer>
            <ItemDetailsContainer>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <VideoDetails>
                <VideoDescription theme={theme}>{title}</VideoDescription>
                <VideoContainer>
                  <VideoChannelName>{name}</VideoChannelName>
                  <DetailsDiv>
                    <Para1>{viewCount}</Para1>
                    <Para2>{publishedAt} ago</Para2>
                  </DetailsDiv>
                </VideoContainer>
              </VideoDetails>
            </ItemDetailsContainer>
          </HomeVideoListItem>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default HomeVideoItem
