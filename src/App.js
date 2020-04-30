import React from 'react'
import Login from './Components/Login'
import User from './Components/Home'
import CommentStat from './Components/CommentStat'
import Sidebar from './Components/Sidebar'
import EditSuggestion from './Components/EditSuggestion'
import SuggestionLog from './Components/SugThread'
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
        <SuggestionLog path="sug" />
        <User path="/user" />
        <EditSuggestion path="/edit/:id" />
        <CommentStat path="/stat" />
        <Sidebar path="/bar" />
        <Register path="/reg" />
      </Router>
    )
  }
}

export default App
