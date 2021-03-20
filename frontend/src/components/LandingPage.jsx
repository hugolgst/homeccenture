import React from 'react'
import { Flex, Heading, Text, Button, Box } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const LandingPage = () => {
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
      <Heading m="3vh 20px">Welcome.</Heading>

      <Text
        textAlign="center"
        fontSize="18px"
      >
        <strong>Homeccenture</strong> uses machine learning to enlightens your home-office experience by recommending you activities.
      </Text>

      <Button
        position="absolute"
        bottom="5vh"
        rightIcon={<ArrowForwardIcon />}
        backgroundColor="bonzai.400"
        color="white"
      >Next</Button>
    </Flex>
  </Box>
}

export default LandingPage