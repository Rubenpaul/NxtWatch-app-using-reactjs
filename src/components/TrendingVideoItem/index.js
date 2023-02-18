import {formatDistanceToNow} from 'date-fns'

import {
  TrendingVideoListItem,
  TrendingItemThumbNail,
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
  AnchorLink,
  Para,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const TrendingVideoItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

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
        <AnchorLink to={`/videos/${id}`}>
          <TrendingVideoListItem>
            <ThumbnailContainer>
              <TrendingItemThumbNail src={thumbnailUrl} alt="video thumbnail" />
            </ThumbnailContainer>
            <ItemDetailsContainer>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <VideoDetails>
                <VideoDescription isDarkTheme={isDarkTheme}>
                  {title}
                </VideoDescription>
                <VideoContainer>
                  <VideoChannelName isDarkTheme={isDarkTheme}>
                    {name}
                  </VideoChannelName>
                  <UnOrderList>
                    <ListItem1>
                      <Para isDarkTheme={isDarkTheme}>{viewCount}</Para>
                    </ListItem1>
                    <ListItem2>
                      <Para isDarkTheme={isDarkTheme}>{postedAt} ago</Para>
                    </ListItem2>
                  </UnOrderList>
                </VideoContainer>
              </VideoDetails>
            </ItemDetailsContainer>
          </TrendingVideoListItem>
        </AnchorLink>
      )
    }}
  </ThemeContext.Consumer>
)

export default TrendingVideoItem
