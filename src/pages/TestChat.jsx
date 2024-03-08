import React from "react";

function TestChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  //   const {sender} = useAuth()
  const sender = 1;
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

    await socket.emit("message", { message, received });
    setMessage("");
  };

  useEffect(() => {
    socket.on("received", (msg) => {
      //   console.log(msg);
      console.log(msg);
      setChat([...chat, { ...msg }]);
    });
    console.log(socket, "socket");
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

export default TestChat;
