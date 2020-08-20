import React from 'react'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Notification from './components/atoms/Notification'
import LoginPage from './components/pages/LoginPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

// FIXME: MaterialUI gobal theme ovveride, replace to another file for sharing with storybook.js
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#003594"
    }
  }
});

function App() {
  return (
    <Router>
      <Notification />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
