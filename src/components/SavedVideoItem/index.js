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
  Para,
  AnchorLink,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const SavedVideoItem = props => (
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
        <TrendingVideoListItem>
          <AnchorLink to={`/videos/${id}`}>
            <ThumbnailContainer>
              <TrendingItemThumbNail src={thumbnailUrl} alt="video thumbnail" />
            </ThumbnailContainer>
            <ItemDetailsContainer>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <VideoDetails>
                <VideoDescription theme={theme}>{title}</VideoDescription>
                <VideoContainer>
                  <VideoChannelName theme={theme}>{name}</VideoChannelName>
                  <UnOrderList>
                    <Para theme={theme}>{viewCount}</Para>
                    <Para theme={theme}>{publishedAt}</Para>
                  </UnOrderList>
                </VideoContainer>
              </VideoDetails>
            </ItemDetailsContainer>
          </AnchorLink>
        </TrendingVideoListItem>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideoItem
