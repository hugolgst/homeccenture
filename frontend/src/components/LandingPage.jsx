import React from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { NextButton } from './Elements.jsx'

const LandingPage = () => {
  const history = useHistory()

  return <Box
    w="100vw"
    h="100vh"
    backgroundImage="url('assets/background.png')"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
  >
    <Flex
      direction="column"
      alignItems="center"
      m="0 5vw"
    >
      <Heading m="4vh 20px">Welcome.</Heading>

      <Text
        textAlign="center"
        fontSize="18px"
      >
        <strong>Homeccenture</strong> uses machine learning to enlightens your home-office experience by recommending you activities.
      </Text>

      <NextButton
        onClick={() => {
          history.push('/register')
        }}
      >Next</NextButton>
    </Flex>
  </Box>
}

export default LandingPage