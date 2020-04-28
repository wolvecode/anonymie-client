import React from 'react'
import { login } from '../utils/request'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isLoading: false
  }

  handleOnChange = (key, element) => {
    this.setState({
      [key]: element.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password, isLoading } = this.state
    if (isLoading) return false
    this.setState({
      isLoading: true
    })
    login({ email, password })
      .then(data => console.log(data))
      .catch(error => error(error))
  }

  render() {
    const { isLoading, email, password } = this.state

    return (
      <div className="container-fluid">
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
              <form onSubmit={this.handleSubmit}>
                <div className="align">
                  <i className="fas fa-envelope-square ty"></i>
                  <input
                    type="text"
                    className="input"
                    onChange={elm => this.handleOnChange('email', elm)}
                    value={email}
                    name="email"
                    placeholder="Emial"
                  />
                </div>
                <div className="align">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    className="input-field"
                    className="form"
                    onChange={elm => this.handleOnChange('password', elm)}
                    value={password}
                    name="password"
                    placeholder="Password"
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
                Enter your details to create <br /> an account
              </p>
              <form>
                <button>SIGN UP</button>
              </form>
            </div>
            <div className="grad3"></div>
            <div className="grad4"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
