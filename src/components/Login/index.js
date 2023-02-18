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
  ShowPasswordLabel,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
    type: 'password',
    isError: false,
  }

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
    this.setState({isError: false})
  }

  onSubmitFailure = jsonData => {
    this.setState({errMsg: jsonData.error_msg, isError: true})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onchangeCheckbox = event => {
    this.setState({type: event.target.checked ? 'text' : 'password'})
  }

  render() {
    const {username, password, errMsg, type, isError} = this.state

    const accessToken = cookies.get('jwt_token')

    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDarkTheme={isDarkTheme}>
              <LoginCard isDarkTheme={isDarkTheme}>
                <NxtWatchImage src={websiteLogo} alt="website logo" />
                <Form onSubmit={this.onSubmitForm}>
                  <InputAndLabelContainer>
                    <Label htmlFor="username" isDarkTheme={isDarkTheme}>
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      placeholder="Username"
                      id="username"
                      value={username}
                      onChange={this.onChangeUsername}
                      isDarkTheme={isDarkTheme}
                    />
                  </InputAndLabelContainer>
                  <InputAndLabelContainer>
                    <Label htmlFor="password" isDarkTheme={isDarkTheme}>
                      PASSWORD
                    </Label>
                    <Input
                      type={type}
                      placeholder="Password"
                      id="password"
                      value={password}
                      onChange={this.onChangePassword}
                      isDarkTheme={isDarkTheme}
                    />
                  </InputAndLabelContainer>
                  <PasswordShowContainer>
                    <Checkbox
                      type="checkbox"
                      onChange={this.onchangeCheckbox}
                      id="showPassword"
                    />
                    <ShowPasswordLabel
                      htmlFor="showPassword"
                      isDarkTheme={isDarkTheme}
                    >
                      Show Password
                    </ShowPasswordLabel>
                  </PasswordShowContainer>
                  <LoginBtn type="submit">Login</LoginBtn>
                  <ErrorMsg>{isError && `* ${errMsg}`}</ErrorMsg>
                </Form>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
