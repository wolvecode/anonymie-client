import React from 'react'
import Login from './Components/Login'
import AdminSect from './Components/Adminsect'
import SugList from './Components/SugList'
import UserComment from './Components/UserComment'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './Components/Register'
import { signup } from './utils/request'

class App extends React.Component {
  constructor() {
    super()
  }
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
          <Route exact path="/SugList">
            <SugList />
          </Route>
          <Route exact path="/UserComment">
            <UserComment />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
