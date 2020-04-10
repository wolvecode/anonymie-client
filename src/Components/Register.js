import React from 'react'
import './css/register.css'
import { signup } from '../utils/request'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      signup: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(fullName, email, password) {
    signup(fullName, email, password).then(sign =>
      this.setState({
        signup: sign
      })
    )
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
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
                  <i class="fas fa-envelope-square"></i>
                  <input
                    type="text"
                    className="form input-field"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div className="align">
                  <i class="fas fa-envelope-square"></i>
                  <input
                    type="text"
                    className="form"
                    placeholder="Name"
                    name="fullName"
                    required
                  />
                </div>
                <div className="align">
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    className="form"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>
                <div className="align a">
                  <button>SIGN UP</button>
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
