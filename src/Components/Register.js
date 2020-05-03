import React from 'react'
import '../style/style'
import { signUp } from '../utils/request'

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    fullName: '',
    isLoading: false
  }

  handleSubmit = event => {
    event.preventDefault()
    const { isLoading, email, password, fullName } = this.state
    if (isLoading) return false
    this.setState({
      isLoading: true
    })
    signUp({ fullName, email, password })
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }

  handleChange = (key, element) => {
    this.setState({
      [key]: element.target.value
    })
  }
  render() {
    const { email, password, fullName, isLoading } = this.state

    return (
      <div className="container-fluid">
        <div className="row side-reg">
          <div className="col-lg-5 col-md-5 side3">
            <div className="icon">
              <i className="far fa-user"></i>
              <p>nonymi</p>
            </div>
            <div className="grad5"></div>
            <div className="move">
              <div className="grad6"></div>
              <h3>Welcome Back!</h3>
              <p>
                Sign in into dashboard with <br /> your personal details
              </p>
              <form>
                <button>SIGN IN</button>
              </form>
              <div className="grad7"></div>
            </div>
            <div className="grad8"></div>
          </div>
          <div className="col-lg-7 col-md-7  side4">
            <div className="icn">
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
            </div>
            <div className="form-group my-form">
              <p>or use your email for registration</p>
              <form method="post" onSubmit={this.handleSubmit}>
                <div className="align">
                  <i className="fas fa-envelope-square"></i>
                  <input
                    type="text"
                    className="form"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={elm => this.handleChange('email', elm)}
                    required
                  />
                </div>
                <div className="align">
                  <i className="fas fa-envelope-square"></i>
                  <input
                    type="text"
                    className="form"
                    placeholder="Name"
                    value={fullName}
                    onChange={elm => this.handleChange('fullName', elm)}
                    name="fullName"
                    required
                  />
                </div>
                <div className="align">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    className="form"
                    placeholder="Password"
                    value={password}
                    onChange={elm => this.handleChange('password', elm)}
                    name="password"
                    required
                  />
                </div>
                <div className="align a">
                  <button disabled={isLoading}>SIGN UP</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
