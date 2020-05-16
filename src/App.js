import React, { useState } from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Components/Login'
import CommentStat from './Components/CommentStat'
import EditSuggestion from './Components/EditSuggestion'
import SuggestionLog from './Components/SugThread'
import { Router } from '@reach/router'
import Register from './Components/Register'
import ComThread from './Components/StaredComment'
import General from './Components/General'
import UserComment from './Components/UserComment'
import NotFound from './Components/NotFound'
import ListStared from './Components/ListStared'

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       auth: false
//     }
//   }
//   render() {
//     return (
//       <AuthApi.Provider value={this.state.auth}>
//         <Router>
//           <Login path="/admin/login" />
//           <UserComment path="/user/:id" />
//           <SuggestionLog path="sug" />
//           <General path="/" />
//           <ListStared path="/stared/:id" />
//           <NotFound path="*" />
//           <ComThread path="/suggestion/comment/:id" />
//           <EditSuggestion path="/edit/:id" />
//           <CommentStat path="/stat" />
//           <RouteRegistration path="/admin/reg" />
//         </Router>
//       </AuthApi.Provider>
//     )
//   }
// }

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <div>
      <Router>
        <Login path="/admin/login" />
        <UserComment path="/user/:id" />
        <SuggestionLog path="sug" />
        <General path="/" />
        <ListStared path="/stared/:id" />
        <NotFound path="*" />
        <ComThread path="/suggestion/comment/:id" />
        <EditSuggestion path="/edit/:id" />
        <CommentStat path="/stat" />
        <Register path="/admin/reg" />
      </Router>
    </div>
  )
}

export default App
