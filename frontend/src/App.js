import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Register from './components/Register.jsx'
import Profile from './components/Profile.jsx'

const theme = extendTheme({
  fonts: {
    body: '"Poppins", sans-serif',
    heading: '"Poppins", sans-serif'
  },

  colors: {
    'bonzai': {
      500: '#7c983b',
      400: '#9eb173',
      300: '#c1d690'
    }
  }
})

const App = () => {
  return <ChakraProvider theme={theme}>
    <style>
    {`
      body {
        background-color: #EDEDED !important;
      }
    `}
    </style>

    <Router>
      <Switch>
        <Route path="/home/profile">
          <Profile />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
}

export default App
