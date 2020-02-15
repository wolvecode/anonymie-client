import React from 'react'
import Login from './Components/Login'
import AdminSect from './Components/Adminsect'
import SugList from './Components/SugList'
import UserComment from './Components/UserComment'
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
          <Route exact path="/SugList">
            <SugList />
          </Route>
          <Route exact path="/UserComment">
            <UserComment />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
