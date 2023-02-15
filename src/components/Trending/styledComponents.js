import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto';
  display: flex;
`

export const MenuContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const MenuHeadingContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  padding: 20px;
`

export const MenuIconContainer = styled.div`
  background-color: #d7dfe9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  height: 80px;
  width: 80px;
  border-radius: 100%;
`

export const MenuItemName = styled.h1`
  color: #231f20;
  font-weight: bold;
`
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TrendingVideosList = styled.ul`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`

export const FailureContainer = styled(LoaderContainer)`
  flex-direction: column;
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
  color: #383838;
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
  color: #909090;
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
