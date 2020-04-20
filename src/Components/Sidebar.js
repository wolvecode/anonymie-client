import React from 'react'
import '../style/style'

class Sidebar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div class="row" id="body-row">
          <div
            id="sidebar-container"
            class="sidebar-expanded d-none d-md-block"
          >
            <div>
              <div className="logo-s justify-content-center">
                <i className="far fa-user "></i>
                <p className="i">nonymi</p>
              </div>
              <div className="line justify-content-center"></div>
            </div>

            <ul class="list-group">
              <a
                href="#submenu1"
                data-toggle="collapse"
                aria-expanded="false"
                class="b-color list-group-item list-group-item-action flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-center align-items-center">
                  <span class="fa fa-dashboard fa-fw mr-3"></span>
                  <span class="menu-collapsed dropdown-toggle">Dashboard</span>
                  <span class="submenu-icon ml-auto"></span>
                </div>
              </a>

              <div id="submenu1" class="collapse sidebar-submenu">
                <a
                  href="#"
                  class="list-group-item list-group-item-action b-color text-white"
                >
                  <span class="menu-collapsed">Chahgag</span>
                </a>
              </div>
              <a
                href="#submenu2"
                data-toggle="collapse"
                aria-expanded="false"
                class="b-color list-group-item list-group-item-action flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-center align-items-center">
                  <span class="fa fa-user fa-fw mr-3"></span>
                  <span class="menu-collapsed">Categories</span>
                  <span class="submenu-icon ml-auto"></span>
                  <span class="submenu-icon ml-auto"></span>
                </div>
              </a>
              <a
                href="#"
                class="b-color list-group-item list-group-item-action"
              >
                <div class="d-flex w-100 justify-content-center align-items-center">
                  <span class="fa fa-tasks fa-fw mr-3"></span>
                  <span class="menu-collapsed">Related Report</span>
                  <span class="submenu-icon ml-auto"></span>
                </div>
              </a>
              <a
                href="#"
                class="b-color list-group-item list-group-item-action"
              >
                <div class="d-flex w-100 justify-content-center align-items-center">
                  <span class="fa fa-calendar fa-fw mr-3"></span>
                  <span class="menu-collapsed">Stared</span>
                  <span class="submenu-icon ml-auto"></span>
                </div>
              </a>
              <a
                href="#"
                class="b-color list-group-item list-group-item-action"
              >
                <div class="d-flex w-100 justify-content-center align-items-center">
                  <span class="fa fa-envelope-o fa-fw mr-3"></span>
                  <span class="menu-collapsed">
                    Profile{' '}
                    <span class="badge badge-pill badge-primary ml-2">5</span>
                  </span>
                  <span class="submenu-icon ml-auto"></span>
                </div>
              </a>
              <div className="menu-down">
                <a
                  href="#"
                  class="b-color list-group-item list-group-item-action"
                >
                  <div class="d-flex w-100 justify-content-center align-items-center">
                    <span class="fa fa-question fa-fw mr-3"></span>
                    <span class="menu-collapsed">Tools</span>
                    <span class="submenu-icon ml-auto"></span>
                  </div>
                </a>
                <a
                  href="#"
                  class="b-color list-group-item list-group-item-action"
                >
                  <div class="d-flex w-100 justify-content-center align-items-center">
                    <span class="fa fa-question fa-fw mr-3"></span>
                    <span class="menu-collapsed">Report</span>
                    <span class="submenu-icon ml-auto"></span>
                  </div>
                </a>
                <a
                  href="#top"
                  data-toggle="sidebar-colapse"
                  class="b-color list-group-item list-group-item-action d-flex align-items-center"
                >
                  <div class="d-flex w-100 justify-content-center align-items-center">
                    <span id="collapse-icon" class="fa fa-2x mr-3"></span>
                    <span id="collapse-text" class="menu-collapsed">
                      Collapse
                    </span>
                    <span class="submenu-icon ml-auto"></span>
                  </div>
                </a>
              </div>
            </ul>
          </div>
          {/* Editable Content */}
          <div class="col p-0">
            <h1 class="display-4">Collapsing Sidebar Menu</h1>
            <div class="card">
              <h5 class="card-header font-weight-light">Requirements</h5>
              <div class="card-body">
                <ul>
                  <li>JQuery</li>
                  <li>Bootstrap 4.3</li>
                  <li>FontAwesome</li>
                  <h1>hello world</h1>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
