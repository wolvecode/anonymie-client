import React from 'react'
import Login from './Login'
import Register from './Register'
import SuggestionLog from './SugThread'
import General from './General'
import UserComment from './UserComment'
import NotFound from './NotFound'
import ListStared from './ListStared'
// import { Router } from '@reach/router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/login" component={Login} />
        <Route path="/admin/reg" component={Register} />
        <Route path="/sug" component={SuggestionLog} />
        <Route path="/user" component={General} />
        <Route path="/user/:id/" component={UserComment} />
        <Route path="sug" component={SuggestionLog} />
        <Route exact path="/stared/:id" component={ListStared} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default Routes
