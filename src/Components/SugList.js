import React from 'react'
import Home from './Home'

export default function SugList() {
  return (
    <Home>
      <div className="row p-4">
        <div>
          <h1 className="display-4 font-weight-bolder">Anoymie</h1>
        </div>
      </div>
      <div className="row justify-content-center pt-2">
        <div className="col-lg-8">
          <ul className="list-group p-4">
            <li className="list-group-item border-danger text-center mb-2">
              Dr Babatunde activaness in class
            </li>
            <li className="list-group-item border-danger text-center mb-2">
              Mrs Yusuf class approach
            </li>
            <li className="list-group-item border-danger text-center mb-2">
              Dr, Mrs Ajao style of teaching
            </li>
            <li className="list-group-item border-danger text-center mb-2">
              School leactures general approach
            </li>
            <li className="list-group-item border-danger text-center mb-2">
              About Information Communication Technology
            </li>
          </ul>
        </div>
      </div>
    </Home>
  )
}
