import {Component} from 'react'
import cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginCard,
  NxtWatchImage,
  Form,
  InputAndLabelContainer,
  Label,
  Input,
  PasswordShowContainer,
  Checkbox,
  ShowPasswordText,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', errMsg: '', type: 'password'}

  onSubmitForm = event => {
    event.preventDefault()
    this.Login()
  }

  Login = async () => {
    const {username, password} = this.state

    const userCredentials = {
      username,
      password,
    }

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }

    const response = await fetch(apiUrl, options)
    const jsonData = await response.json()
    console.log(jsonData)

    if (response.ok === true) {
      this.onSubmitSuccess(jsonData)
    } else if (response.ok === false) {
      this.onSubmitFailure(jsonData)
    }
  }

  onSubmitSuccess = jsonData => {
    const {history} = this.props

    const jwtToken = jsonData.jwt_token
    cookies.set('jwt_token', `${jwtToken}`, {expires: 7})

    history.replace('/')
  }

  onSubmitFailure = jsonData => {
    this.setState({errMsg: jsonData.error_msg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onchangeCheckbox = event => {
    console.log(event.target.checked)

    if (event.target.checked) {
      this.setState({type: 'text'})
    } else {
      this.setState({type: 'password'})
    }
  }

  render() {
    const {username, password, errMsg, type} = this.state

    const accessToken = cookies.get('jwt_token')

    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <LoginCard>
          <NxtWatchImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Form onSubmit={this.onSubmitForm}>
            <InputAndLabelContainer>
              <Label htmlFor="username">USERNAME</Label>
              <Input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </InputAndLabelContainer>
            <InputAndLabelContainer>
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                type={type}
                placeholder="Password"
                id="password"
                value={password}
                onChange={this.onChangePassword}
              />
            </InputAndLabelContainer>
            <PasswordShowContainer>
              <Checkbox type="checkbox" onChange={this.onchangeCheckbox} />
              <ShowPasswordText>Show Password</ShowPasswordText>
            </PasswordShowContainer>
            <LoginBtn type="submit">Login</LoginBtn>
            <ErrorMsg>{errMsg}</ErrorMsg>
          </Form>
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login
