import React from 'react'
import '../style/style'

export default function Home({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-7  side1 p-0">
          <div className="logo">
            <i className="far fa-user"></i>
            <p>nonymi</p>
          </div>
          <p className="sign-text">Comment Anonymously</p>
          <form className="text-center select-op">
            <div className="justify-content-center">
              <select class="form-control col-md-4 m-4">
                <option>Lorem ipsum dolor sit amet.</option>
                <option>Lorem ipsum dolor sit amet.</option>
                <option>Lorem ipsum dolor sit amet.</option>
                <option>Lorem ipsum dolor sit amet.</option>
                <option>Lorem ipsum dolor sit amet</option>
              </select>
            </div>
            <div class="form-group ">
              <textarea
                className="m-auto display-block"
                id="exampleFormControlTextarea1"
                rows="10"
                cols="50"
              ></textarea>
            </div>
            <div className="but text-center">
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="col-lg-5 col-md-5 hidden-sm-down side2 p-0 pt-5">
          <div className="grad1"></div>
          <div className="justify">
            <div className="grad2"></div>
            <h3>Hello!</h3>
            <span className="">
              Welcome to Anonymi, a platform that enables <br /> random users to
              comment base on suggestion <br />
              hhjds hdhh
              <br />
              hhjds
            </span>
          </div>
          <div className="grad3 mt-5"></div>
          <div className="grad4 mt-5"></div>
        </div>
      </div>
    </div>
  )
}
