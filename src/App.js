import React from 'react'
import Login from './Components/Login'
import AdminSect from './Components/Adminsect'
import SugList from './Components/SugList'
import Comment from './Components/Comment'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Admin">
            <AdminSect />
          </Route>
          <Route match="/SugList">
            <SugList />
          </Route>
          <Route path="/Comment">
            <Comment />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
