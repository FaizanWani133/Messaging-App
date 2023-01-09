import {
  Avatar,
  Box,
  Button,

  Heading,

  SkeletonCircle,
  SkeletonText,

  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContactInfo() {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://messaging-app-server.onrender.com/api/contacts/${id}`)
      .then((res) => setContact(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);
  if (error) return navigate(`/contacts/${id}/pagenotfound`);
 
  return (
    <Stack
      margin={"auto"}
      maxWidth="400px"
      textAlign={"center"}
      justify="center"
      align={"center"}
    >
      <Heading mb={"20px"} fontSize={"25px"}>
        CONTACT INFO
      </Heading>
      {loading && (
        <Box padding='10' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      )}
      {!loading && <><Avatar size={"xl"} name={contact.firstName + " " + contact.lastName} />
      <Text fontSize={"20px"} fontWeight={"bold"}>
        {contact.firstName + " " + contact.lastName}
      </Text>
      <Text fontSize={"20px"} fontWeight={"bold"}>
        {contact.phone}
      </Text>
      <Button
        colorScheme={"purple"}
        onClick={() => navigate(`/messages/create/${id}`)}
      >
        Send Message
      </Button></>}
      
    </Stack>
  );
}

export default ContactInfo;
