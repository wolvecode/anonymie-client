import React from 'react'
import './css/Login'

export default function Login() {
  return (
    <div className="row col-lg-6     offset-lg-3 border border-muted mt-5 mb-5">
      <div className="form-group justify-content-center p-5">
        <h1 className="text-center">Login</h1>
        <form action="#">
          <div className="form pt-4">
            <input
              type="text"
              name="Email"
              id=""
              placeholder="Enter Email"
              className="form-control"
              required
            />
          </div>
          <div className="form pt-4">
            <input
              type="password"
              name="Password"
              id=""
              placeholder="Enter Password"
              className="form-control"
              required
            />
          </div>
          <div className="form pt-4">
            <button className="form-control bg-info btn-group-lg">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
