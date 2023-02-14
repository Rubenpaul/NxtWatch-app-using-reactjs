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
  AnchorLink,
} from './styledComponents'

const HomeVideoItem = props => {
  const {eachVideo} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = eachVideo
  const {name, profileImageUrl} = channel

  return (
    <AnchorLink href={`/videos/${id}`}>
      <HomeVideoListItem>
        <ThumbnailContainer>
          <HomeItemThumbNail src={thumbnailUrl} alt="video thumbnail" />
        </ThumbnailContainer>
        <ItemDetailsContainer>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <VideoDetails>
            <VideoDescription>{title}</VideoDescription>
            <VideoContainer>
              <VideoChannelName>{name}</VideoChannelName>
              <UnOrderList>
                <ListItem1>{viewCount}</ListItem1>
                <ListItem2>{publishedAt}</ListItem2>
              </UnOrderList>
            </VideoContainer>
          </VideoDetails>
        </ItemDetailsContainer>
      </HomeVideoListItem>
    </AnchorLink>
  )
}

export default HomeVideoItem
