import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Home from './components/Home.jsx'

const App = () => {
  return <ChakraProvider>
    <Home />
  </ChakraProvider>
}

export default App
