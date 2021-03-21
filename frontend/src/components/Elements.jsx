import React from 'react'
import { ArrowForwardIcon, ArrowBackIcon, DeleteIcon } from '@chakra-ui/icons'
import { Button, Text } from '@chakra-ui/react'

export const BackButton = (props) => {
    return <Text
        position="absolute"
        bottom="6vh"
        left="10vw"
        color="black"
        p="8px"
        {...props}
    ><ArrowBackIcon />Back</Text>
}

export const NextButton = (props) => {
    return <Button
        position="absolute"
        bottom="6vh"
        right="10vw"
        rightIcon={<ArrowForwardIcon />}
        backgroundColor="bonzai.400"
        color="white"
        _hover={{
            backgroundColor: 'bonzai.500'
        }}
        {...props}
    >Next</Button>
}

export const DeleteButton = (props) => {
    return <Button
        position="absolute"
        bottom="6vh"
        right="10vw"
        rightIcon={<DeleteIcon />}
        backgroundColor="red.400"
        color="white"
        _hover={{
            backgroundColor: 'red.500'
        }}
        {...props}
    >Delete account</Button>
}