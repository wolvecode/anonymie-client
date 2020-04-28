import React from 'react'
import Login from './Components/Login'
import User from './Components/Home'
import CommentStat from './Components/CommentStat'
import Sidebar from './Components/Sidebar'
import SuggestionList from './Components/SugThread'
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
        <SuggestionList path="sug" />
        <User path="/user" />
        <CommentStat path="/stat" />
        <Sidebar path="/bar" />
        <Register path="/reg" />
      </Router>
    )
  }
}

export default App
