import {
  GamingVideoContainer,
  GamingThumbNail,
  GamingHeading,
  GamingDescription,
  AnchorLink,
} from './styledComponents'

const GamingVideoItem = props => {
  const {eachVideo} = props
  const {id, title, thumbnailUrl, viewCount} = eachVideo

  return (
    <AnchorLink to={`/videos/${id}`}>
      <GamingVideoContainer>
        <GamingThumbNail src={thumbnailUrl} alt="video thumbnail" />
        <GamingHeading>{title}</GamingHeading>
        <GamingDescription>{viewCount} Watching Worldwide</GamingDescription>
      </GamingVideoContainer>
    </AnchorLink>
  )
}

export default GamingVideoItem
