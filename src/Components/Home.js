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
          <p className="sign-text">Comment Anonymously</p>
          <form>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                class=""
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="col-lg-5 col-md-5 hidden-sm-down side2 p-0">
          <div className="grad1"></div>
          <div className="justify">
            <div className="grad2"></div>
            <h3>Hello!</h3>
            <p>
              Welcome to Anonymi, a platform that enables <br /> random users to
              comment base on suggestion <br /> suggestion that relate to them
              (express their feelings)
            </p>
          </div>
          <div className="grad3"></div>
          <div className="grad4"></div>
        </div>
      </div>
    </div>
  )
}
