import React from 'react'
import Login from './Components/Login'
import User from './Components/Home'
import CommentStat from './Components/CommentStat'
import Sidebar from './Components/Sidebar'
import EditSuggestion from './Components/EditSuggestion'
import SuggestionLog from './Components/SugThread'
import { Router } from '@reach/router'
import Register from './Components/Register'
import ComThread from './Components/StaredComment'
import General from './Components/General'

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
        <General path="general" />
        <ComThread path="/suggestion/comment/:id" />
        <EditSuggestion path="/edit/:id" />
        <CommentStat path="/stat" />
        <Sidebar path="/bar" />
        <Register path="/reg" />
      </Router>
    )
  }
}

export default App
