import React from 'react'
import Notification from './components/atoms/Notification'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Notification />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
