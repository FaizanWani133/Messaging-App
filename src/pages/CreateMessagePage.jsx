import {
  Avatar,
  Button,
  Heading,
  HStack,
  Skeleton,
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
  const [loading2, setLoading2] = useState(false);
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
      .post(`https://messaging-app-server.onrender.com/api/messages/create/${id}`, {
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
    setLoading2(true);
    axios
      .get(`https://messaging-app-server.onrender.com/api/contacts/${id}`)
      .then((res) => setContact(res.data)).finally(()=> setLoading2(false))
  }, [id]);

  return (
    <Stack maxW={"500px"} margin="auto">
      <Heading textAlign={"center"} fontSize="25px" mb={"30px"}>
        Create Message
      </Heading>
      <HStack border={"1px solid rgba(0,0,0,0.1)"} padding="10px" borderRadius={"10px"}>
        <Text fontWeight={"bold"}>To :</Text>
        {!loading2 ?<> <Avatar
          size={"xs"}
          name={contact.firstName + " " + contact.lastName}
        ></Avatar>
        <Text>{contact.firstName + " " + contact.lastName}</Text></>:<Skeleton><Text>Faizan WANi</Text></Skeleton>}
       
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
