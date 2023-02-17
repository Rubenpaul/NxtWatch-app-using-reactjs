import './index.css'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

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
  UnOrderList,
  ListItem1,
  ListItem2,
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

      let postedAt = formatDistanceToNow(new Date(publishedAt))
      const postedAtList = postedAt.split(' ')

      if (postedAtList.length === 3) {
        postedAtList.shift()
        postedAt = postedAtList.join(' ')
      }

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
                  <UnOrderList>
                    <ListItem1>{viewCount}</ListItem1>
                    <ListItem2>{postedAt} ago</ListItem2>
                  </UnOrderList>
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
