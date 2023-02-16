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

const TrendingVideoItem = props => {
  const {eachVideo} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = eachVideo
  const {name, profileImageUrl} = channel

  return (
    <AnchorLink to={`/videos/${id}`}>
      <TrendingVideoListItem>
        <ThumbnailContainer>
          <TrendingItemThumbNail src={thumbnailUrl} alt="video thumbnail" />
        </ThumbnailContainer>
        <ItemDetailsContainer>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <VideoDetails>
            <VideoDescription>{title}</VideoDescription>
            <VideoContainer>
              <VideoChannelName>{name}</VideoChannelName>
              <UnOrderList>
                <ListItem1>
                  <Para>{viewCount}</Para>
                </ListItem1>
                <ListItem2>
                  <Para>{publishedAt}</Para>
                </ListItem2>
              </UnOrderList>
            </VideoContainer>
          </VideoDetails>
        </ItemDetailsContainer>
      </TrendingVideoListItem>
    </AnchorLink>
  )
}

export default TrendingVideoItem
