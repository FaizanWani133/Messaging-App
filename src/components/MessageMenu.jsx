import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import MessageList from './MessageList'

function MessageMenu() {
  return (
    <Stack maxW={"500px"} margin="auto">
        <Heading textAlign={"center"}>Messages List</Heading>
        <MessageList/>
    </Stack>
  )
}

export default MessageMenu