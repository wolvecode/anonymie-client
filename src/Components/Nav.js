import React from 'react'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className=" na navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a className="navbar-brand ml-5" href="#">
          <div className="logo ml-5">
            <i className="far fa-user pt-2"></i>
            <p className="pt-2">nonymi</p>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link nav-li" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Spaces
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}
          </ul>
          <form className="form-inline my-2 mr-5">
            <input
              className="form-control mr-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    )
  }
}
