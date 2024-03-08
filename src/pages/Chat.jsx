// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:8888/");

// export function Chat({ received, role = "RESTAURANT" }) {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   // const {sender} = useAuth()
//   const sender = role + 1;
//   useEffect(() => {
//     socket.auth = { sender };
//     console.log("first");
//     socket.connect();
//     return () => socket.disconnect();
//   }, []);

//   const change = (e) => {
//     setMessage(e.target.value);
//   };

//   const submit = async (e) => {
//     e.preventDefault();

//     await socket.emit("message", {
//       message,
//       received,
//       role,
//     });
//     setMessage("");
//   };

//   useEffect(() => {
//     socket.on("received", (msg) => {
//       setChat([...chat, { ...msg }]);
//     });
//   }, [chat]);
//   console.log(chat);
//   return (
//     <div>
//       <form onSubmit={submit}>
//         <input onChange={change} value={message} type="text" name="" id="" />
//         <button>send</button>
//       </form>
//       <div className="p-4">
//         {chat
//           .filter(
//             (item) => item.received == received || item.received == sender
//           )
//           .map((el, index) => (
//             <div className="flex" key={index}>
//               <span className={el.received == received ? "text-red-500" : ""}>
//                 {el.received == received ? "sender : " : "received : "}
//               </span>
//               <h1
//                 className={`mr-4 ${
//                   el.received == received ? "text-red-500" : ""
//                 }`}
//               >
//                 {el.message}
//               </h1>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export function ChatRoomeA() {
//   const [toggle, setToggle] = useState(true);
//   return (
//     <div>
//       <button onClick={() => setToggle((r) => !r)}>click</button>
//       <div>
//         {toggle ? (
//           <div key={2}>talk 2 {<Chat received={`USER${2}`} />}</div>
//         ) : (
//           <div key={3}>talk 3 {<Chat received={`USER${3}`} />}</div>
//         )}
//       </div>
//     </div>
//   );
// }

// // export default { Chat, ChatRoomeA };
