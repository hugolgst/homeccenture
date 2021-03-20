import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import Home from './components/Home.jsx'
import LandingPage from './components/LandingPage.jsx'

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
    <LandingPage />
  </ChakraProvider>
}

export default App
