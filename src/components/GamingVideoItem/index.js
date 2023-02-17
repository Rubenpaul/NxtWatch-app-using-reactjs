import ThemeContext from '../../context/ThemeContext'

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
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <AnchorLink to={`/videos/${id}`}>
            <GamingVideoContainer>
              <GamingThumbNail src={thumbnailUrl} alt="video thumbnail" />
              <GamingHeading theme={theme}>{title}</GamingHeading>
              <GamingDescription theme={theme}>
                {viewCount} Watching Worldwide
              </GamingDescription>
            </GamingVideoContainer>
          </AnchorLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
