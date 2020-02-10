import React from 'react'
import Home from './Home'
import './css/AdminSect'

export default function AdminSect() {
  return (
    <Home>
      <div className="row p-4">
        <div className="">
          <h1 className="display-4 font-weight-bolder">Anoymie</h1>
        </div>
        <div className="ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="input-group form-control-lg"
          />
        </div>
      </div>
      <div className="row pl-4">
        <div className="col-lg-10">
          <div>
            <h3>Mr Bababtunde Approach</h3>
          </div>
          <div className="">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              placeat doloribus ipsa similique accusantium et veritatis odio est
              quo voluptatum exercitationem, sit possimus repellendus aliquam
              porro asperiores aperiam reiciendis maiores.
            </p>
          </div>
          <div>
            <div>
              <h3>Mr Bababtunde Approach</h3>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                placeat doloribus ipsa similique accusantium et veritatis odio
                est quo voluptatum exercitationem, sit possimus repellendus
                aliquam porro asperiores aperiam reiciendis maiores.
              </p>
            </div>
          </div>
          <div>
            <div className="">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                placeat doloribus ipsa similique accusantium et veritatis odio
                est quo voluptatum exercitationem, sit possimus repellendus
                aliquam porro asperiores aperiam reiciendis maiores.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>Mr Bababtunde Approach</h3>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                placeat doloribus ipsa similique accusantium et veritatis odio
                est quo voluptatum exercitationem, sit possimus repellendus
                aliquam porro asperiores aperiam reiciendis maiores.
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className="inline">Mr Bababtunde Approach</h3>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                placeat doloribus ipsa similique accusantium et veritatis odio
                est quo voluptatum exercitationem, sit possimus repellendus
                aliquam porro asperiores aperiam reiciendis maiores.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="ml-auto">
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="add fab fa-medrt"></i>
          </button>

          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">Hello world</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  )
}
