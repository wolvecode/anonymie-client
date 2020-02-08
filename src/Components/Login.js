import React from 'react'
import './css/Login'

export default function Login() {
  return (
    <div className="col-lg-6">
      <div className="form-style pt-5 pb-5">
        <h1 className="text-center">Login</h1>
        <form action="#" className="form-label">
          <div className="form pt-4">
            <input
              type="text"
              name="Email"
              id=""
              placeholder="Enter Email"
              className="form-control form-control-lg"
              required
            />
          </div>
          <div className="form pt-4">
            <input
              type="password"
              name="Password"
              id=""
              placeholder="Enter Password"
              className="form-control form-control-lg"
              required
            />
          </div>
          <div className="form pt-4">
            <button className="form-control bg-info btn btn-lg form-control-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
