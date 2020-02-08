import React from 'react'
import Home from './Components/Home'
import AdminSect from './Components/Adminsect'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Admin">
            <AdminSect />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
