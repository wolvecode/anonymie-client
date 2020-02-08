import React, { useState } from 'react'
import './css/AdminSect'

export default function AdminSect() {
  const [seacrh, setSearch] = useState('No suggestion available')
  return (
    <div className="container-fluid border border-muted shadow mt-5 col-lg-8 offset-lg-2">
      <div className="col-lg-12  b-container form-inline">
        <div className="brand">
          <h1 className="">Anoymie</h1>
        </div>
        <div className="ml-auto">
          <input type="text" placeholder="Search" className="input-group form-control-lg" />
        </div>
      </div>
      <div className="col-lg-8 offset-2">
        <h4 className="text-center">No suggestion available</h4>
        <ul className="list-group mb-4">
          <li className="list-group-item text-center font-weight-bolder ">{seacrh}</li>
        </ul>
      </div>
    </div>
  )
}
