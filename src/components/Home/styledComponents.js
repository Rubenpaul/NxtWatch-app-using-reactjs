import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto';
  display: flex;
`

export const HomeDetails = styled.div`
  width: 100%;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  @media screen and (min-width: 768px) {
    width: 80%;
    background-color: ${props =>
      props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  }
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding-left: 30px;
  padding-right: 30px;
  height: 270px;

  @media screen and (min-width: 768px) {
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const BannerTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CloseBtn = styled.button`
  height: 40px;
  width: 40px;
  padding: none;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin-top: 0px;
`

export const WebsiteLogo = styled.img`
  height: 48px;
  width: 250px;
`

export const BuyPremium = styled.p`
  font-size: 18px;
  line-height: 2;
  width: 46%;
  color: #1e293b;
  font-weight: 400;
`

export const GetItNowBtn = styled.button`
  height: 50px;
  width: 160px;
  background-color: #ffffff;
  border: 1px solid #000000;
  outline: none;
  margin-top: 10px;
  color: #1e293b;
  font-weight: bold;
  font-size: 17px;
`

export const HomeSearchAndDetailsContainer = styled.div`
  padding-top: 10px;
`

export const SearchContainer = styled.div`
  border: 1px solid #1e293b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  height: 45px;
  padding: 0px;
  border-radius: 6px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 43%;
  }
`

export const SearchInput = styled.input`
  border: 1px solid #1e293b;
  height: 100%;
  width: 85%;
  padding-left: 20px;
  font-size: 16px;
  outline: none;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  background-color: transparent;
`

export const SearchBtn = styled.button`
  border: 1px solid #1e293b;
  width: 15%;
  height: 100%;
  cursor: pointer;
  background-color: ${props =>
    props.theme === 'dark' ? '#7e858e' : '#f9f9f9'};
`

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeVideosList = styled.ul`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const FailureContainer = styled(LoaderContainer)`
  flex-direction: column;
  @media screen and (min-width: 768px) {
    height: 900px;
  }
`

export const FailureImage = styled.img`
  height: 200px;
  width: 230px;

  @media screen and (min-width: 576px) {
    height: 300px;
    width: 350px;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  font-size: 24px;
  text-align: center;
  width: 90%;
  margin-bottom: 0px;
  margin-top: 30px;
  @media screen and (min-width: 576px) {
    font-size: 27px;
  }
`

export const FailureParagraph = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  font-size: 17px;
  text-align: center;
  width: 80%;
  line-height: 2;
  @media screen and (min-width: 576px) {
    font-size: 21px;
  }
`

export const FailureRetryBtn = styled.button`
  height: 35px;
  width: 110px;
  background-color: #4f46e5;
  color: #ffffff;
  border: 0px;
  border-radius: 7px;
  font-size: 13px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    height: 48px;
    width: 120px;
    font-size: 18px;
  }
`
