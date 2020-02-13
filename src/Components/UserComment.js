import React from 'react'
import Home from './Home'

export default function UserComment() {
  return (
    <Home>
      <div className="row p-4">
        <div className="p-4">
          <h1>Anoymie</h1>
        </div>
        <div className="col-lg-12">
          <div className="pt-4">
            <h6>100 Lorem ipsum dolor sit amet.</h6>
            <h5>Mr Babatunde Class Approach</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              velit harum cupiditate ratione in perferendis, molestias nobis
              vel, facilis porro quo enim, voluptatum veniam commodi? Alias,
              facere accusantium laborum corrupti dolorem quas. Et facilis
              numquam earum minus accusantium tempore nihil!
            </p>
          </div>
          <form action="form">
            <div>
              <textarea
                className="border-danger"
                name=""
                id=""
                cols="45"
                rows="7"
              ></textarea>
            </div>
            <div className="comment pt-4">
              <button className="btn-primary form-control btn btn-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Home>
  )
}
