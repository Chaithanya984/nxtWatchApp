import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  Background,
  SubBox,
  ImgBox,
  DarkLightImg,
  Labeled,
  InputCont,
  InputBox,
  InputConts,
  PasswordShowCont,
  ButtonLog,
  InputChecks,
  Labels,
} from './styledComponent'
import NxtwatchContext from '../../context/NxtwatchContext'

class Login extends Component {
  state = {
    inputName: '',
    inputPassword: '',
    isValid: false,
    showError: false,
    showMsg: '',
  }

  callAcess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  LoginSumbit = async event => {
    event.preventDefault()
    const {inputPassword, inputName} = this.state
    const urls = 'https://apis.ccbp.in/login'
    const datas = {username: inputName, password: inputPassword}
    const options = {
      method: 'POST',
      body: JSON.stringify(datas),
    }

    const sendResponse = await fetch(urls, options)
    const data = await sendResponse.json()
    if (sendResponse.ok) {
      console.log(data)
      this.callAcess(data.jwt_token)
    } else {
      this.setState({showError: true, showMsg: data.error_msg})
    }
  }

  callMyname = event => {
    this.setState({inputName: event.target.value})
  }

  callMyPassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  callValid = event => {
    this.setState({isValid: event.target.checked})
  }

  render() {
    const {inputName, isValid, showError, showMsg} = this.state
    const getCookies = Cookies.get('jwt_token')

    if (getCookies !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isdarkOrWhite} = value
          return (
            <Background outline={isdarkOrWhite}>
              <SubBox as="form" onSubmit={this.LoginSumbit}>
                <ImgBox>
                  <DarkLightImg
                    src={
                      isdarkOrWhite
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </ImgBox>
                <InputCont>
                  <Labeled htmlFor="userId">USERNAME</Labeled>
                  <br />
                  <InputBox
                    onChange={this.callMyname}
                    placeholder="Username"
                    type="text"
                    id="userId"
                    value={inputName}
                  />
                </InputCont>
                <InputConts>
                  <Labeled htmlFor="userPassword">PASSWORD</Labeled>
                  <br />
                  <InputBox
                    placeholder="Password"
                    onChange={this.callMyPassword}
                    type={isValid ? 'text' : 'password'}
                    id="userPassword"
                  />
                </InputConts>
                <PasswordShowCont>
                  <InputChecks
                    id="showId"
                    onChange={this.callValid}
                    type="checkbox"
                  />
                  <br />
                  <Labels htmlFor="showId">Show Password</Labels>
                </PasswordShowCont>
                <ImgBox>
                  <ButtonLog type="submit">Login</ButtonLog>
                </ImgBox>
                {showError && <p>{showMsg}</p>}
              </SubBox>
            </Background>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Login
