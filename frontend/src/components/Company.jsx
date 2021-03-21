import React from 'react'
import { useHistory } from 'react-router-dom'
import { CircularProgress, CircularProgressLabel, Box, Flex, Image, Text, Heading } from '@chakra-ui/react'
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
            <Heading m="4vh 20px" marginBottom="20vh">Company's board</Heading>

            <Text 
                marginBottom="25px"
                fontSize="17px"
                fontWeight="bold"
                textAlign="center"
            >Weekly bonsaï health leaderboard.</Text>
            <Flex direction="column">
                <Flex alignItems="center" m="10px 0">
                    <Image src="/assets/thomas.png" h="70px" borderRadius="25px" />
                    <Flex direction="column" width="40vw" m="0 20px">
                        <Text fontWeight="bold">Thomas</Text>
                        <Text>4 activities viewed.</Text>
                    </Flex>
                    <CircularProgress value={80} color="bonzai.500">
                        <CircularProgressLabel>80%</CircularProgressLabel>
                    </CircularProgress>
                </Flex>
                <Flex alignItems="center" m="10px 0">
                    <Image src="/assets/valeran.png" h="70px" borderRadius="25px" />
                    <Flex direction="column" width="40vw" m="0 20px">
                        <Text fontWeight="bold">Valeran</Text>
                        <Text>3 activities viewed.</Text>
                    </Flex>
                    <CircularProgress value={70} color="bonzai.500">
                        <CircularProgressLabel>70%</CircularProgressLabel>
                    </CircularProgress>
                </Flex>
                <Flex alignItems="center" m="10px 0">
                    <Image src="/assets/hugo.jpeg" h="70px" borderRadius="25px" />
                    <Flex direction="column" width="40vw" m="0 20px">
                        <Text fontWeight="bold">Hugo</Text>
                        <Text>1 activity viewed.</Text>
                    </Flex>
                    <CircularProgress value={40} color="bonzai.500">
                        <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                </Flex>
            </Flex>

            <BackButton 
                onClick={() => {
                    history.push('/home')
                }}
            />
        </Flex>
    </Box>
}

export default Company