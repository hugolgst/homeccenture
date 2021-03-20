import React from 'react'
import { Box, Heading, Flex, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Home = () => {
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