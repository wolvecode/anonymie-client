import React from 'react'
import Home from './Home'
import './css/style.css'

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
      <div className="row pl-4 pt-5">
        <div className="">
          <div className="row pl-3 pr-4">
            <h3 className="">Mr Bababtunde Approach</h3>
            <button className="ml-auto btn">
              <i class="ml-auto fas fa-ellipsis-v"></i>
            </button>
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
            <div className="row pl-3 pr-4">
              <h3 className="">Mr Bababtunde Approach</h3>
              <button className="ml-auto btn">
                <i class="ml-auto fas fa-ellipsis-v"></i>
              </button>
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
            <div className="row pl-3 pr-4">
              <h3 className="">Mr Bababtunde Approach</h3>
              <button className="ml-auto btn">
                <i class="ml-auto fas fa-ellipsis-v"></i>
              </button>
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
            <div className="row pl-3 pr-4">
              <h3 className="">Mr Bababtunde Approach</h3>
              <button className="ml-auto btn">
                <i class="ml-auto fas fa-ellipsis-v"></i>
              </button>
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
            <div className="row pl-3 pr-4">
              <h3 className="">Mr Bababtunde Approach</h3>
              <button className="ml-auto btn">
                <i class="ml-auto fas fa-ellipsis-v"></i>
              </button>
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
        <div>
          <button
            className="btn fixed"
            display="static"
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fab fa-medrt"></i>
          </button>
        </div>
        <div className="ml-auto">
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
                    Add Suggestion
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
                <div className="modal-body">
                  <form className="col-lg-10">
                    <div className="form-group">
                      <label for="recipient-name" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="border-danger form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="message-text" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="border-danger form-control"
                        id="message-text"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="btn btn-group-lg b-style btn-primary"
                    >
                      Add
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
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
