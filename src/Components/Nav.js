import React from 'react'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav
        className=" na navbar navbar-expand-md navbar-light bg-light fixed-top"
        role="navigation"
      >
        <a className="navbar-brand ml-5" href="/">
          <div className="logo ml-5">
            <i className="far fa-user pt-2"></i>
            <p className="pt-2">nonymi</p>
          </div>
        </a>
        <button
          className="navbar-toggler pt-0"
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
            </li> */}
          </ul>
          <form className="form-inline my-2 mr-5">
            <input
              onChange={this.props.refreshFunction}
              className="form-control-md form-control-lg mr-5"
              type="search"
              placeholder="Search by typing ..."
            />
          </form>
        </div>
      </nav>
    )
  }
}
