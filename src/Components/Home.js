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
          <form className="text-center">
            <div className="form-inline d-flex justify-content-center">
              <h3 className=" justify-content-center mr-3">
                Choose suggestion
              </h3>
              <select className="form-control form-inline col-md-4 mt-4 mb-4">
                <option>Select</option>
                <option>Lorem ipsum dolor sit amet.</option>
                <option>Lorem ipsum dolor sit amet.</option>
                <option>Lorem ipsum dolor sit amet.</option>
                <option>
                  \Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates beatae labore maxime repellat perspiciatis quod
                </option>
                <option>Lorem ipsum dolor sit amet</option>
              </select>
            </div>
            <div>
              <textarea
                className="m-auto d-block"
                name="comment"
                id="exampleFormControlTextarea1"
                rows="10"
                cols="50"
              ></textarea>
            </div>
            <div className="d-flex justify-content-around">
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
