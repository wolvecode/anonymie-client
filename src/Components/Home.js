import React from 'react'

export default function Home({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-7  side1 p-0">
          <div className="logo">
            <i className="far fa-user"></i>
            <p>nonymi</p>
          </div>
          <p className="sign-text">Choose suggestion for comment</p>
        </div>
        <div className="col-lg-5 col-md-5 hidden-sm-down side2 p-0">
          <div className="grad1"></div>
          <div className="justify">
            <div className="grad2"></div>
            <h3>Hello!</h3>
            <p>
              Enter your details to create <br /> an account
            </p>
          </div>
          <div className="grad3"></div>
          <div className="grad4"></div>
        </div>
      </div>
    </div>
  )
}
