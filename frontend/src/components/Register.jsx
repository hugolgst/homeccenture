import React, { useEffect, useState } from 'react'
import { Box, Heading, Flex, Input, Text, Select, useToast } from '@chakra-ui/react'
import { BackButton, NextButton } from './Elements.jsx'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../api'

const Register = () => {
    const history = useHistory()
    const toast = useToast()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [categories, setCategories] = useState()
    const [hours, setHours] = useState('8am')
    const [notifOccurences, setNotifOccurences] = useState()

    useEffect(() => {
        registerUser({
            name: 'Hugo',
            age: 18,
            activities: ['sport'],
            hours: '6pm',
            notification_occurences: 3
        })
    }, [])
    
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
                _focus={{
                    outlineColor: ''
                }}
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
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
                _focus={{
                    outlineColor: ''
                }}
                value={age}
                onChange={(e) => {
                    if (isNaN(e.target.value)) {
                        setAge(undefined)
                        return 
                    } 

                    setAge(e.target.value)
                }}
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
                _focus={{
                    outlineColor: ''
                }}
                value={categories}
                onChange={(e) => {
                    setCategories(e.target.value)
                }}
            />

            <Text
                w="70vw"
            >When do you want to be notified</Text>
            <Select
                w="70vw"
                backgroundColor="white"
                borderRadius="25px"
                marginBottom="2vh"
                _focus={{
                    outlineColor: ''
                }}
                value={hours}
                onChange={(e) => {
                    setHours(e.target.value)
                }}
            >
                <option value="8am">8am</option>
                <option value="12am">12am</option>
                <option value="6pm">6pm</option>
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
                _focus={{
                    outlineColor: ''
                }}
                value={notifOccurences}
                onChange={(e) => {
                    setNotifOccurences(e.target.value)
                }}
            />

            <BackButton
                onClick={() => {
                    history.push('/')
                }}
            />

            <NextButton
                onClick={async () => {
                    if (!name || !age || !categories || !notifOccurences) {
                        toast({
                            title: 'One or more of the fields is/are empty.',
                            status: 'error',
                            position: 'top'
                        })
                        return
                    }

                    const response = await registerUser({
                        name,
                        age,
                        hours,
                        activities: categories.split(','),
                        notification_occurences: notifOccurences
                    })
                    
                    if (response.registered) {
                        toast({
                            title: 'Registered successfully',
                            status: 'success',
                            position: 'top'
                        })

                        localStorage.setItem('homeccenture-token', response.token)
                        history.push('/home')
                    }
                }}
            />
        </Flex>
    </Box>
}

export default Register