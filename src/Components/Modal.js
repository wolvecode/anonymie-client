import React from 'react'

export default function Modal() {
  return (
    <div>
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
                    className="btn btn-group-lg b-style"
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
      <div className="c">
        <button
          className="btn fixed text-right"
          display="static"
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <i className="fab fa-medrt"></i>
        </button>
      </div>
    </div>
  )
}
