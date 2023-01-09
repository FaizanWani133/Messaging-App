import { Stack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Contact from './Contact';

function ContactList() {
    const [contacts,setContacts]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/api/contacts').then(res=>setContacts(res.data)).catch(err => console.error(err))
        console.log(contacts)
    },[contacts])
  return (
    <Stack spacing={"1.5"}   >
        {contacts.map(el=><Contact lastName={el.lastName} firstName={el.firstName} id={el._id}/>)}
    </Stack>
  )
}

export default ContactList