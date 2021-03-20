import React from 'react'
import { Box, Heading, Flex, Input, Text, Select } from '@chakra-ui/react'
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
            <Heading m="4vh 20px" marginBottom="8vh">Please give us a bit more detail about you.</Heading>

            <Text
                w="70vw"
            >Your name</Text>
            <Input 
                placeholder="" 
                backgroundColor="white"
                borderRadius="25px"
                m="5px 5vw"
                marginBottom="2vh"
                w="70vw"
            />

            <Text
                w="70vw"
            >Your age</Text>
            <Input 
                placeholder="" 
                backgroundColor="white"
                borderRadius="25px"
                m="5px 5vw"
                marginBottom="2vh"
                w="70vw"
            />

            <Text
                w="70vw"
            >The categories you like</Text>
            <Input 
                placeholder="Sport, meditation" 
                backgroundColor="white"
                borderRadius="25px"
                m="5px 5vw"
                marginBottom="2vh"
                w="70vw"
            />

            <Text
                w="70vw"
            >When do you want to be notified</Text>
            <Select
                w="70vw"
                backgroundColor="white"
                borderRadius="25px"
                marginBottom="2vh"
            >
                <option value="option1">8am</option>
                <option value="option2">12am</option>
                <option value="option3">6pm</option>
            </Select>

            <Text
                w="70vw"
            >How many times would you like us to notify you</Text>
            <Input 
                placeholder="3" 
                backgroundColor="white"
                borderRadius="25px"
                m="5px 5vw"
                marginBottom="2vh"
                w="70vw"
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