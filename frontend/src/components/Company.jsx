import React from 'react'
import { useHistory } from 'react-router-dom'
import { useToast, Box, Flex, Image, Text, Heading } from '@chakra-ui/react'
import { BackButton } from './Elements'

const Company = () => {
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
            <Heading m="4vh 20px" marginBottom="1vh">Company's board</Heading>

            <BackButton 
                onClick={() => {
                    history.push('/home')
                }}
            />
        </Flex>
    </Box>
}

export default Company