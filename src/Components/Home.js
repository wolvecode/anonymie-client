import React from 'react'
import './css/Home'
import Login from './Login'

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid pt-5 col-lg-8 offset-lg-2">
        <div className="row border border-muted  justify-content-center">
          <Login />
        </div>
      </div>
    )
  }
}

export default Home
