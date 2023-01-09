import { Center, Spinner, Table, Td, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageRow from "./MessageRow";
function isoTimestampToTime(timestamp) {
    // Create a new JavaScript Date object from the timestamp
    var date = new Date(timestamp);
    // Hour part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // AM or PM
    var ampm = hours >= 12 ? 'PM' : 'AM';
    // Convert hours from military time
    hours = hours % 12;
    // Add '0' to the hours if needed
    hours = "0" + hours;
    // Will display time in 10:30:23 format
    var formattedTime = hours.substr(-2) + ':' + minutes.substr(-2) + ' ' + ampm;
    return formattedTime;
  }
  
  

function MessageList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://messaging-app-server.onrender.com/api/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  });
  return (
    <>
    {loading ? <Center height={"100%"}><Spinner size={"xl"}></Spinner></Center>:<Table size={{base:"sm",sm:"sm",lg:"md"}} >
        <Thead>
            <Tr><Td></Td><Td>Name</Td><Td>Time</Td><Td>OTP</Td></Tr>
        </Thead>
        
      {
      
        messages.map((el) => (
          <MessageRow
            otp={el.message}
            name={el.contact.firstName + " " + el.contact.lastName}
            time={isoTimestampToTime(el.updatedAt)}
          />
        ))
}
      
    </Table>}
    </>
  );
}

export default MessageList;
