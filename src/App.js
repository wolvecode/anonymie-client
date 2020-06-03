import React, { useState } from 'react'
import Login from './Components/Login'
import EditSuggestion from './Components/EditSuggestion'
import SuggestionLog from './Components/SugThread'
import Register from './Components/Register'
import ComThread from './Components/StaredComment'
import General from './Components/Home'
import UserComment from './Components/UserComment'
import NotFound from './Components/NotFound'
import ListStared from './Components/ListStared'
import AuthApi from './utils/AuthApi'
import {
  BrowserRouter as Routers,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <div>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Routers>
          <Switch>
            <Route path="/admin/login" component={Login} />
            <Route path="/user/:id" component={UserComment} />
            <Route exact path="/" component={General} />
            <RouteProtected path="/sug" component={SuggestionLog} auth={auth} />
            <Route path="/stared/:id" component={ListStared} />
            <Route path="/suggestion/comment/:id" component={ComThread} />
            <Route path="/edit/:id" component={EditSuggestion} />
            <Route path="/admin/reg" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Routers>
      </AuthApi.Provider>
    </div>
  )
}

const RouteProtected = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi)
  return (
    <Route
      {...rest}
      render={props =>
        authApi.auth ? <Component {...props} /> : <Redirect to="/admin/login" />
      }
    />
  )
}

const RouteGeneral = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi)
  return (
    <Route
      {...rest}
      render={props =>
        authApi.auth ? <Component {...props} /> : <Redirect to="/sug" />
      }
    />
  )
}

export default App
