import React, { useState } from 'react'
import axios from 'axios'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'
import AuthApi from '../utils/AuthApi'

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [redirectToReferrer, setRedirectToReferrer] = useState(false)

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  const authApi = React.useContext(AuthApi)
  function handleSubmit(event) {
    event.preventDefault()

    const sign = {
      email: email,
      password: password
    }

    axios
      .post(process.env.baseUrl + '/login/', sign)
      .then(res => {
        console.log(res.data)
        authApi.setAuth(true)
        props.history.push('/sug')
      })
      .catch(() => {
        store.addNotification({
          title: 'INVALID',
          message: 'Wrong Email Or Password',
          type: 'danger',
          container: 'top-left',
          insert: 'top',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],

          dismiss: {
            duration: 2000,
            pauseOnHover: true,
            onScreen: true,
            showIcon: true
          },
          width: 450
        })
        setEmail('')
        setPassword('')
      })
  }

  return (
    <div className="container-fluid">
      <ReactNotification />
      <div className="row side">
        <div className="col-lg-7 col-md-7  side1 p-0">
          <div className="logo">
            <i className="far fa-user"></i>
            <p className="pt-2">nonymi</p>
          </div>
          <p className="sign-text">Sign in to Dashboard</p>
          <div className="b">
            <a href="" className=" brand">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="" className=" brand">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="" className=" brand">
              <i className="fab fa-google"></i>
            </a>
          </div>
          <div className="form-group my-form">
            <p>or use your email account</p>
            <form onSubmit={handleSubmit}>
              <div className="align">
                {/* <i className="fas fa-envelope-square ty"></i> */}
                <input
                  type="text"
                  className="input"
                  onChange={handleEmail}
                  value={email}
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="align">
                {/* <i className="fas fa-lock"></i> */}
                <input
                  type="password"
                  className="input-field"
                  className="form"
                  onChange={handlePassword}
                  value={password}
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="align a">
                <div>
                  <a href="">Forget your password?</a>
                  <div className="underline justify-content-center"></div>
                </div>
                <div>
                  <button disabled={isLoading}>SIGN IN</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 hidden-sm-down side2 p-0">
          <div className="grad1"></div>
          <div className="justify">
            <div className="grad2"></div>
            <h3>Hello!</h3>
            <p>
              Welcome to nonymi app <br />
              An app that gives users chance to express how they feel.
              <br />
              Please login to manage this app
            </p>
            <form>
              {/* <button formAction="/admin/reg">SIGN UP</button> */}
              <br />
              <br />
              <br />
              <br />
            </form>
          </div>
          <div className="grad3"></div>
          <div className="grad4"></div>
        </div>
      </div>
    </div>
  )
}
