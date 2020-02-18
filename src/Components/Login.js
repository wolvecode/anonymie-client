import React from 'react'
import Home from './Home'

export default function Login() {
  return (
    <Home>
      <h1 className="display-4 font-weight-bolder m-4"> Anoymie</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="form-style pb-5">
            <h3 className="display-4 font-weight-bolder text-center">Login</h3>
            <form action="/" method="post" className="form-label">
              <div className="form pt-4">
                <input
                  type="text"
                  name="Email"
                  placeholder="Enter Email"
                  className="form-control border-danger form-control-lg"
                  required
                />
              </div>
              <div className="form pt-4">
                <input
                  type="password"
                  name="Password"
                  placeholder="Enter Password"
                  className="form-control form-control-lg"
                  required
                />
              </div>
              <div className=" btn-log text-center pt-4">
                <button className=" bg-info btn btn-lg form-control-lg">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Home>
  )
}
