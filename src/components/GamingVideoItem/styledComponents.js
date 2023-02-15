import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AnchorLink = styled(Link)`
  text-decoration: none;
  height: 350px;
  width: 180px;
  list-style-type: none;
  margin-right: 15px;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    height: 320px;
  }
  @media screen and (min-width: 768px) {
    height: 500px;
    width: 300px;
    margin-bottom: 40px;
  }
`

export const GamingVideoContainer = styled.li`
  width: 100%;
  list-style-type: none;
`

export const GamingThumbNail = styled.img`
  width: 100%;
  height: 220px;
  @media screen and (min-width: 576px) {
    height: 230px;
  }
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 100%;
  }
`

export const GamingHeading = styled.h1`
  font-size: 17px;
  color: #424242;
`

export const GamingDescription = styled.p`
  font-size: 17px;
  color: #616e7c;
  line-height: 1.5;
  margin-top: 0px;
  width: 70%;
  @media screen and (min-width: 576px) {
    width: 100%;
    font-size: 16px;
  }
`
