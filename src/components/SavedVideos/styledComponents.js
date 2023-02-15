import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto';
  display: flex;
`

export const NoSavedViewsContainer = styled.div`
  background-color: #f1f1f1;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 900px;
    width: 80%;
  }
`

export const NoVideosImage = styled.img`
  height: 250px;
  width: 330px;
  @media screen and (min-width: 768px) {
    height: 380px;
    width: 550px;
  }
`
export const NoVideosHeading = styled.h1`
  font-size: 25px;
  margin-top: 30px;
  color: #231f20;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-top: 50px;
  }
`

export const NoVideosDescription = styled.p`
  font-size: 20px;
  color: #909090;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`
