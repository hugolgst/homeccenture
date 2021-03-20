import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Heading, Flex, Text, CircularProgress, CircularProgressLabel, useToast } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { getSuggestion } from '../api'

const Home = () => {
  const history = useHistory()
  const toast = useToast()

  useEffect(async () => {
    if (!localStorage.getItem('homeccenture-token')) {
      toast({
        title: 'You are not logged in.',
        status: 'error',
        position: 'top'
      })
      history.push('/')
    }

    console.log(await getSuggestion())
  }, [])

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
      <Heading m="4vh 20px" marginBottom="1vh">Hi, {'{name}'}</Heading>
      <Text marginBottom="45px">What about {'{x}'} at 6pm?</Text>

      <CircularProgress value={80} color="bonzai.500">
        <CircularProgressLabel>80%</CircularProgressLabel>
      </CircularProgress>

      <Text
        color="gray"
        textDecoration="underline"
        position="absolute"
        bottom="8vh"
      >View profile <ArrowForwardIcon /></Text>
    </Flex>
  </Box>
}

export default Home