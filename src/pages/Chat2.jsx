import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8888/");

function Chat2({
  received = "RESTAURANT1",
  role = "USER",
  userId = 2,
  restaurantId = 1,
}) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sender = role + 2;
  useEffect(() => {
    socket.auth = { sender };

    socket.connect();
    return () => socket.disconnect();
  }, []);

  const change = (e) => {
    setMessage(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    await socket.emit("message", {
      message,
      received,
      role,
      userId,
      restaurantId,
    });
    setMessage("");
  };

  useEffect(() => {
    socket.on("received", (msg) => {
      // setChat([...chat, { message: msg, sender: 2, received: 1 }]);
      setChat([...chat, { ...msg }]);
    });
  }, [chat]);
  console.log(chat);
  return (
    <div>
      <form onSubmit={submit}>
        <input onChange={change} value={message} type="text" name="" id="" />
        <button>send</button>
      </form>
      <div className="p-4">
        {chat
          .filter(
            (item) => item.received == received || item.received == sender
          )
          .map((el) => (
            <div className="flex">
              <span className={el.received == received ? "text-red-500" : ""}>
                {el.received == received ? "sender : " : "received : "}
              </span>
              <h1
                className={`mr-4 ${
                  el.received == received ? "text-red-500" : ""
                }`}
              >
                {el.message}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Chat2;
