import React from 'react'
import '../style/style'

export default function Sidebar({ children }) {
  return (
    <div>
      <div class="row" id="body-row">
        <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">
          <div>
            <div className="logo-s justify-content-center pt-2">
              <i className="far fa-user pt-2"></i>
              <span className="bold">nonymi</span>
            </div>
            <div className="line justify-content-center"></div>
          </div>

          <ul class="list-group pl-4">
            <a
              href="#submenu1"
              data-toggle="collapse"
              aria-expanded="false"
              class="b-st list-group-item align-items-start"
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
                class="list-group-item list-group-item-action b-st text-white"
              >
                <span class="menu-collapsed">Chahgag</span>
              </a>
            </div>
            <a
              href="#submenu2"
              data-toggle="collapse"
              aria-expanded="false"
              class="b-st list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-center align-items-center">
                <span class="fa fa-user fa-fw mr-3"></span>
                <span class="menu-collapsed">Categories</span>
                <span class="submenu-icon ml-auto"></span>
                <span class="submenu-icon ml-auto"></span>
              </div>
            </a>
            <a href="#" class="b-st list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-center align-items-center">
                <span class="fa fa-tasks fa-fw mr-3"></span>
                <span class="menu-collapsed">Related Report</span>
                <span class="submenu-icon ml-auto"></span>
              </div>
            </a>
            <a href="#" class="b-st list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-center align-items-center">
                <span class="fa fa-calendar fa-fw mr-3"></span>
                <span class="menu-collapsed">Stared</span>
                <span class="submenu-icon ml-auto"></span>
              </div>
            </a>
            <a href="#" class="b-st list-group-item list-group-item-action">
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
              <div className="move-down">
                <a href="#" class="b-st list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-center align-items-center">
                    <span class="fa fa-question fa-fw mr-3"></span>
                    <span class="menu-collapsed">Tools</span>
                    <span class="submenu-icon ml-auto"></span>
                  </div>
                </a>
                <a href="#" class="b-st list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-center align-items-center">
                    <span class="fa fa-question fa-fw mr-3"></span>
                    <span class="menu-collapsed">Report</span>
                    <span class="submenu-icon ml-auto"></span>
                  </div>
                </a>
                <a
                  href="#top"
                  data-toggle="sidebar-colapse"
                  class="b-st list-group-item list-group-item-action d-flex align-items-center"
                >
                  <div class="d-flex w-100 justify-content-center align-items-center">
                    <span id="collapse-icon" class="fa fa-2x mr-2"></span>
                    <span id="collapse-text" class="menu-collapsed">
                      Collapse
                    </span>
                    <span class="submenu-icon ml-auto"></span>
                  </div>
                </a>
              </div>
            </div>
          </ul>
        </div>
        {/* Editable Content */}
        <div class="col p-0">{children}</div>
      </div>
    </div>
  )
}
