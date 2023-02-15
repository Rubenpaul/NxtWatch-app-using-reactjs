import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto';
  display: flex;
`

export const NotFoundContainer = styled.div`
  background-color: #f9f9f9;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 80%;
    height: 900px;
  }
`

export const NotFoundImage = styled.img`
  height: 300px;
  width: 280px;
  @media screen and (min-width: 768px) {
    height: 450px;
    width: 550px;
  }
`

export const NotFoundHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
  color: #1e293b;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`

export const NotFoundDescription = styled.p`
  font-size: 15px;
  text-align: center;
  width: 70%;
  margin-top: 0px;
  color: ;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
