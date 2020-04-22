import React from 'react'
import Login from './Components/Login'
import AdminSect from './Components/Adminsect'
import CommentStat from './Components/CommentStat'
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
        <CommentStat path="/stat" />
        <Sidebar path="/bar" />
        <Register path="/reg" />
      </Router>
    )
  }
}

export default App
