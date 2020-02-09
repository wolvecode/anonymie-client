import React, { useState } from 'react'
import Home from './Home'
import './css/AdminSect'

export default function AdminSect() {
  const [seacrh, setSearch] = useState('No suggestion available')
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
      <div className="row justify-content-center pb-5">
        <div className="col-lg-8">
          <ul className="list-group">
            <li className="list-group-item border-danger text-center mb-2 font-weight-bold">
              hel
            </li>
            <li className="list-group-item border-danger text-center mb-2 font-weight-bold">
              hel
            </li>
            <li className="list-group-item border-danger text-center mb-2 font-weight-bold">
              hel
            </li>
            <li className="list-group-item border-danger text-center mb-2 font-weight-bold">
              hel
            </li>
            <li className="list-group-item border-danger text-center mb-2 font-weight-bold">
              hel
            </li>
          </ul>
        </div>
      </div>
    </Home>
  )
}
