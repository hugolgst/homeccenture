import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

export const NextButton = (props) => {
    return <Button
        position="absolute"
        bottom="5vh"
        rightIcon={<ArrowForwardIcon />}
        backgroundColor="bonzai.400"
        color="white"
        _hover={{
        backgroundColor: 'bonzai.500'
        }}
        {...props}
    >Next</Button>
}