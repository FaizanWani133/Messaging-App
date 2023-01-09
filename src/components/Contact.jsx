import { Avatar,  Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Contact({lastName,firstName,id}) {
  
  return (
    <Link to={`/contacts/${id}`}>
        <Flex _hover={{background:"red"}} align='center' gap={"20px"}>
            <Avatar name={firstName+" "+lastName}/>
            <Text fontSize={"18px"} fontWeight="bold">{firstName+" "+lastName}</Text>
        </Flex>
    </Link>
  )
}

export default Contact