import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkTheme === true ? '#0f0f0f' : '#f9f9f9'};
  @media screen and (min-width: 768px) {
    height: 100vh;
    background-color: ${props =>
      props.isDarkTheme === true ? '#0f0f0f' : '#f9f9f9'};
  }
`

export const LoginCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: ${props =>
    props.isDarkTheme === true ? 'black' : 'white'};
  box-shadow: 10px 10px 8px 10px #f9f9f9;
  border-radius: 10px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
    background-color: ${props =>
      props.isDarkTheme === true ? 'black' : 'white'};
  }
`

export const NxtWatchImage = styled.img`
  height: 40px;
  width: 200px;
  margin-top: 30px;
  margin-bottom: 15px;
`

export const Form = styled.form`
  padding: 20px;
  width: 100%;
`
export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 25px;
`

export const Label = styled.label`
  font-weight: 500;
  font-size: 13px;
  color: ${props => (props.isDarkTheme === true ? 'white' : '#475569')};
  margin-bottom: 10px;
`

export const Input = styled.input`
  height: 45px;
  padding-left: 25px;
  background-color: ${props =>
    props.isDarkTheme === true ? 'black' : 'white'};

  border: 1px solid #e2e8f0;
  border-radius: 5px;
  outline: none;
`
export const PasswordShowContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`

export const Checkbox = styled.input`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`

export const ShowPasswordLabel = styled.label`
  font-size: 15px;
  color: ${props => (props.isDarkTheme === true ? 'white' : 'black')};
  font-weight: 500;
`

export const LoginBtn = styled.button`
  height: 48px;
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: bold;
  font-size: 17px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  margin-top: 2px;
`
