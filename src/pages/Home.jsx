import { Button, Heading, Wrap } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <Heading textAlign={'center'}>MESSAGING APP</Heading>
    <Wrap justify="center" align="center" padding={"50px"}>
        <Link to={"/contacts"}><Button minW={"200px"} height="200px" colorScheme={"purple"} fontSize="20px" _hover={{transform:"scale(0.9)"}}>CONTACTS</Button></Link>
        <Link to={"/messages"}><Button minW={"200px"} height="200px" colorScheme={"orange"} fontSize="20px" _hover={{transform:"scale(0.9)"}}>MESSAGES</Button></Link>
    </Wrap>
    </>
  )
}

export default Home