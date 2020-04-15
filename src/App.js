import React from 'react'
import Login from './Components/Login'
import AdminSect from './Components/Adminsect'
import SugList from './Components/SugList'
import Sidebar from './Components/Sidebar'
import { Router } from '@reach/router'
import Register from './Components/Register'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Login path="/" />
        <AdminSect path="/user" />
        <SugList path="/suglist" />
        <Sidebar path="/sidebar" />
        <Register path="/reg" />
      </Router>
    )
  }
}

export default App
