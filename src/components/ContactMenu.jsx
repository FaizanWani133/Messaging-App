import {  Box, Text} from '@chakra-ui/react'
import React from 'react'
import ContactList from './ContactList'

function ContactMenu() {
  return (
    <Box maxW="500px"  margin="auto"  >
        <Text fontSize="25px" fontWeight={"bold"} mb="20px"  textAlign={"center"}>CONTACTS LIST</Text>
        <ContactList></ContactList>
    </Box>
  )
}

export default ContactMenu