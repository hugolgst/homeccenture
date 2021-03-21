import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Heading, Flex, Text, CircularProgress, CircularProgressLabel, useToast } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { getSuggestion } from '../api'
import { result } from 'lodash'

const Home = () => {
  const history = useHistory()
  const toast = useToast()
  const [suggestion, setSuggestion] = useState()

  useEffect(async () => {
    if (!localStorage.getItem('homeccenture-token')) {
      toast({
        title: 'You are not logged in.',
        status: 'error',
        position: 'top',
        isClosable: true,
      })
      history.push('/')
    }

    const sugg = await getSuggestion()
    setSuggestion(sugg)
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
      {suggestion ? <>
        <Heading m="4vh 20px" marginBottom="1vh">Hi, {suggestion['user']}</Heading>
        <Text 
          marginBottom="45px" 
          textAlign="center"
          h="5vh"
        >What about <a style={{
          textDecoration: 'underline'
        }} href={suggestion['url']}>{suggestion['desc']}</a> at 6pm?</Text>
      </> : <></>}

      <CircularProgress value={40} color="bonzai.500">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>

      <Text
        color="gray"
        textDecoration="underline"
        position="absolute"
        right="10vw"
        bottom="8vh"
      >
        <Link to="/home/profile">View profile <ArrowForwardIcon /></Link>
      </Text>

      <Text
        color="gray"
        textDecoration="underline"
        position="absolute"
        left="10vw"
        bottom="8vh"
      >
        <Link to="/home/company">View company <ArrowForwardIcon /></Link>
      </Text>
    </Flex>
  </Box>
}

export default Home