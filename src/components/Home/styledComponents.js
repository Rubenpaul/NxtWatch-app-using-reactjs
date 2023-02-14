import styled from 'styled-components'

export const HomeContainer = styled.div`
  font-family: 'Roboto';
`

export const HomeDetails = styled.div`
  //   border: 1px solid green;
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 30px;
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
  background-color: #f1f1f1;
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
`

export const SearchInput = styled.input`
  border: 1px solid #1e293b;
  height: 100%;
  width: 85%;
  padding-left: 20px;
  font-size: 16px;
  outline: none;
  color: #475569;
`

export const SearchBtn = styled.button`
  border: 1px solid #1e293b;
  width: 15%;
  height: 100%;
  cursor: pointer;
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

export const HomeFailureContainer = styled(LoaderContainer)`
  flex-direction: column;
`

export const HomeFailureImage = styled.img`
  height: 300px;
  width: 350px;
`

export const HomeFailureHeading = styled.h1`
  color: #383838;
  font-size: 27px;
  text-align: center;
  width: 90%;
  margin-bottom: 0px;
  margin-top: 30px;
`

export const HomeFailureParagraph = styled.p`
  color: #909090;
  font-size: 21px;
  text-align: center;
  width: 90%;
  line-height: 2;
`

export const FailureRetryBtn = styled.button`
  height: 48px;
  width: 120px;
  font-size: 18px;
  background-color: #4f46e5;
  color: #ffffff;
  border: 0px;
  border-radius: 7px;
  cursor: pointer;
`
