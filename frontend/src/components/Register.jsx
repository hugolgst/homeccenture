import React from 'react'
import { Box, Heading, Flex, Input } from '@chakra-ui/react'
import { NextButton } from './Elements.jsx'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory()
    
    return <Box
        w="100vw"
        h="100vh"
        backgroundColor="#EDEDED"
    >
        <Flex
            direction="column"
            alignItems="center"
            m="0 5vw"
        >
            <Heading m="4vh 20px">Please give us a bit more detail about you.</Heading>

            <Input 
                placeholder="Your name" 
                backgroundColor="white"
                borderRadius="25px"
                m="0 5vw"
            />

            <NextButton
                onClick={() => {
                    history.push('/register')
                }}
            >Next</NextButton>
        </Flex>
    </Box>
}

export default Register