import { EmailIcon } from '@chakra-ui/icons'
import { Td, Tr } from '@chakra-ui/react'
import React from 'react'
function extractOTP(string) {
    // Use a regular expression to search for 6 digits in the string
    var match = string.match(/\d{6}/);
    // If a match was found, return the OTP
    if (match) {
      return match[0];
    }
    // If no match was found, return null
    return 'null';
  }
  

function MessageRow({name,time,otp}) {
  return (
    <Tr><Td ><EmailIcon/></Td>
        <Td >{name}</Td>
        <Td>{time}</Td>
        <Td>{extractOTP(otp)}</Td>
    </Tr>
  )
}

export default MessageRow