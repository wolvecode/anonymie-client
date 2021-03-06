import React from 'react'
import '../style/style'

export default function Sidebar({ children }) {
  return (
    <div>
      <div className="row" id="body-row">
        <div
          id="sidebar-container"
          className=" col-sm-8 fixed-top sidebar-expanded"
        >
          <div>
            <div className="logo-s justify-content-center pt-2">
              <i className="far fa-user pt-2"></i>
              <span className="bold">nonymi</span>
            </div>
            <div className="line justify-content-center"></div>
          </div>

          <ul className="list-group pl-4">
            <a
              href="/sug"
              className="b-st list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-center align-items-center">
                <span className="fa fa-tasks fa-fw mr-3"></span>
                <span className="menu-collapsed">Sugggestion</span>
                <span className="submenu-icon ml-auto"></span>
              </div>
            </a>

            <div className="menu-down">
              <div className="move-down">
                <a
                  href="#top"
                  data-toggle="sidebar-colapse"
                  className="b-st list-group-item list-group-item-action d-flex align-items-center"
                >
                  <div className="d-flex w-100 justify-content-center align-items-center">
                    <span id="collapse-icon" className="fa fa-2x mr-2"></span>
                    <span id="collapse-text" className="menu-collapsed">
                      Collapse
                    </span>
                    <span className="submenu-icon ml-auto"></span>
                  </div>
                </a>
              </div>
            </div>
          </ul>
        </div>
        {/* Editable Content */}
        <div className="col bg-light">{children}</div>
      </div>
    </div>
  )
}
