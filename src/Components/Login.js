import React from 'react'

export default function Login() {
  return (
    <div className="container-fluid">
      <div className="row side">
        <div className="col-lg-7 col-md-7  side1 p-0">
          <div className="logo">
            <i className="far fa-user"></i>
            <p>nonymi</p>
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
            <form action="">
              <div className="align">
                <i class="fas fa-envelope-square ty"></i>
                <input type="text" className="input" placeholder="Name" />
              </div>
              <div className="align">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  className="input-field"
                  className="form"
                  placeholder="Password"
                />
              </div>
              <div className="align a">
                <div>
                  <a href="">Forget your password?</a>
                  <div className="underline justify-content-center"></div>
                </div>
                <div>
                  <button>SIGN IN</button>
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
            <form action="">
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
