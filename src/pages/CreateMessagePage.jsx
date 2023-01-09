import {
  Avatar,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function CreateMessagePage() {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const toast = useToast();

  function handleClick() {
    setLoading(true);

    const pattern = /^Hi, your OTP is \d{6}$/i;
    if (!pattern.test(message)) {
      setError(
        'Message must contain "Hi, your OTP is" followed by a 6 digit number'
      );
      setLoading(false);
      return;
    }

    axios
      .post(`http://localhost:8080/api/messages/create/${id}`, {
        message,
      })
      .then((res) => {
        console.log(res);
        setMessage("");
        return toast({
          title: res.data.message,
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      })
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/contacts/${id}`)
      .then((res) => setContact(res.data));
  }, [id]);

  return (
    <Stack maxW={"500px"} margin="auto">
      <Heading textAlign={"center"} fontSize="25px" mb={"30px"}>
        Create Message
      </Heading>
      <HStack border={"1px solid rgba(0,0,0,0.1)"} padding="10px" borderRadius={"10px"}>
        <Text fontWeight={"bold"}>To :</Text>
        <Avatar
          size={"xs"}
          name={contact.firstName + " " + contact.lastName}
        ></Avatar>
        <Text>{contact.firstName + " " + contact.lastName}</Text>
      </HStack>
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter Your Message Here"
      ></Textarea>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button isLoading={loading} onClick={handleClick} colorScheme={"purple"}>
        Send Message
      </Button>
    </Stack>
  );
}

export default CreateMessagePage;
