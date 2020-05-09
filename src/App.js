import React from 'react'
import Login from './Components/Login'
import CommentStat from './Components/CommentStat'
import Sidebar from './Components/Sidebar'
import EditSuggestion from './Components/EditSuggestion'
import SuggestionLog from './Components/SugThread'
import { Router } from '@reach/router'
import Register from './Components/Register'
import ComThread from './Components/StaredComment'
import General from './Components/General'
import UserComment from './Components/UserComment'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Login path="/admin/login" />
        <UserComment path="/user/:id" />
        <SuggestionLog path="sug" />
        <General path="/" />
        <ComThread path="/suggestion/comment/:id" />
        <EditSuggestion path="/edit/:id" />
        <CommentStat path="/stat" />
        <Register path="/admin/reg" />
      </Router>
    )
  }
}

export default App
