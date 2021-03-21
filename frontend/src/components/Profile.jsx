import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useToast, Box, Flex, Image, Text, Heading } from '@chakra-ui/react'
import { BackButton, DeleteButton } from './Elements'

const Profile = () => {
    const toast = useToast()
    const history = useHistory()

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
    }, [])

    return <Box
        h="100vh"
        w="100vw"
        backgroundColor="#EDEDED"
    >
         <Flex
            direction="column"
            alignItems="center"
            m="0 5vw"
        >
            <Heading m="4vh 20px" marginBottom="1vh">Your profile</Heading>
            <Heading m="0 20px" fontSize="17px" marginBottom="16vh" textAlign="end" w="45vw">clearly.</Heading>

            <Text 
                marginBottom="25px"
                fontSize="17px"
                fontWeight="bold"
            >Your Bonsaï health over time.</Text>
            <Flex direction="column">
                <Flex alignItems="center" m="10px 0">
                    <Image src="/assets/bonzai-1.png" h="70px" />
                    <Text width="40vw" m="0 20px"><strong>This week</strong>, 1 activity viewed.</Text>
                </Flex>
                <Flex alignItems="center" m="10px 0">
                    <Image src="/assets/bonzai-2.png" h="70px" />
                    <Text width="40vw" m="0 20px"><strong>8-14 march</strong>, 4 activites viewed.</Text>
                </Flex>
                <Flex alignItems="center" m="10px 0">
                    <Image src="/assets/bonzai-3.png" h="70px" />
                    <Text width="40vw" m="0 20px"><strong>1-7 march</strong>, 2 activities viewed.</Text>
                </Flex>
            </Flex>

            <BackButton 
                onClick={() => {
                    history.push('/home')
                }}
            />

            <DeleteButton 
                onClick={() => {
                    localStorage.removeItem('homeccenture-token')
                    history.push('/')
                }}
            />
        </Flex>
    </Box>
}

export default Profile