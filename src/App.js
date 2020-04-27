import React from 'react'
import Login from './Components/Login'
import AdminSect from './Components/Adminsect'
import CommentStat from './Components/CommentStat'
import Sidebar from './Components/Sidebar'
import { SugInteraction as EditSug } from './Components/SugInteraction'
import { Router } from '@reach/router'
import { Home } from './Components/Home'
import Register from './Components/Register'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Login path="/" />
        <EditSug path="sug" />
        <AdminSect path="/user" />
        <CommentStat path="/stat" />
        <Sidebar path="/bar" />
        <Register path="/reg" />
      </Router>
    )
  }
}

export default App
