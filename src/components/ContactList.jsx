/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, Stack } from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Contact from "./Contact";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://messaging-app-server.onrender.com/api/contacts`)
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
    console.log(contacts);
  });
  if(loading)return <Center><Spinner margin={"auto"} size='xl' /></Center>
  return (
    <Stack spacing={"1.5"}>
      {contacts.map((el) => (
        <Contact lastName={el.lastName} firstName={el.firstName} id={el._id} />
      ))}
    </Stack>
  );
}

export default ContactList;
