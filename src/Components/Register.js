import React from 'react'
import './css/register.css'

export default function Register() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5 side3">
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
            <form action="">
              <button>SIGN IN</button>
            </form>
            <div className="grad7"></div>
          </div>
          <div className="grad8"></div>
        </div>
        <div className="col-7  side4">
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
            <form action="" method="post">
              <div className="align">
                <i class="fas fa-envelope-square"></i>
                <input
                  type="text"
                  className="form"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="align">
                <i class="fas fa-envelope-square"></i>
                <input type="text" className="form" placeholder="Name" />
              </div>
              <div className="align">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  className="form"
                  placeholder="Password"
                  name="password"
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
