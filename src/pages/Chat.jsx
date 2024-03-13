// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import io from "socket.io-client";
// import axios from "../configs/axios";
// const socket = io.connect("http://localhost:8888/");

// export function Chat({ received, role, userId, restaurantId, id }) {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const run = async () => {
//     const data = await axios.get(`/chat/${restaurantId}/${userId}`);
//     setChat(data.data.data);
//   };

//   // const {sender} = useAuth() (1) กูเป็นอะไรไม่รู้แหละ แต่จะ เอา role มา + id
//   const sender = role == "RESTAURANT" ? "USER" + id : "RESTAURANT" + id; // แล้วไปเอา หน้า received ออก
//   //   const sender = role + 1;
//   useEffect(() => {
//     run();
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
//       userId,
//       restaurantId,
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
//             (item) =>
//               item.received == received ||
//               item.received == sender ||
//               item.userId == userId
//           )
//           .map((el, index) => (
//             <div className="flex" key={index}>
//               <span
//                 className={
//                   el.received == received || el.sender == "USER"
//                     ? "text-red-500"
//                     : ""
//                 }
//               >
//                 {el.received == received || el.sender == "USER"
//                   ? "sender : "
//                   : "received : "}
//               </span>
//               <h1
//                 className={`mr-4 ${
//                   el.received == received || el.sender == "USER"
//                     ? "text-red-500"
//                     : ""
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
//           <div key={2}>
//             talk 2{" "}
//             {
//               <Chat
//                 received={2}
//                 restaurantId={1}
//                 userId={2}
//                 id={2}
//                 role="RESTAURANT"
//               />
//             }
//           </div>
//         ) : (
//           <div key={3}>
//             talk 3{" "}
//             {
//               <Chat
//                 received={3}
//                 restaurantId={1}
//                 userId={3}
//                 id={3}
//                 role="RESTAURANT"
//               />
//             }
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default { Chat, ChatRoomeA };
//
//
//
//
//
//
//

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import io from "socket.io-client";

import axios from "../configs/axios";
import { useRef } from "react";
import { useUser } from "../feature/user/contexts/UserContext";
import { useRestaurant } from "../hooks/hooks";
// const socket = io.connect("http://localhost:8888/");

export function Chat({ role, userId, restaurantId, socket }) {
  const chatBox = useRef();
  const { user } = useUser();
  // const { socket } = useRestaurant();

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  console.log("chat", chat);

  const run = async () => {
    const data = await axios.get(`/chat/${restaurantId}/${userId}`);
    setChat(data.data.data);
  };

  // const {sender} = useAuth() (1) กูเป็นอะไรไม่รู้แหละ แต่จะ เอา role มา + id

  const sender =
    role != "RESTAURANT" ? "USER" + userId : "RESTAURANT" + restaurantId; //แล้วไปเอา หน้า received ออก
  const received =
    role == "RESTAURANT" ? "USER" + userId : "RESTAURANT" + restaurantId; // แล้วไปเอา หน้า received ออก

  //   const sender = role + 1;
  console.log(role);

  useEffect(() => {
    run();
  }, [restaurantId, userId]);

  console.log(userId);

  // useEffect(() => {
  //   socket.auth = { sender };
  //   // console.log("first");
  //   socket.connect();
  //   return () => socket.disconnect();
  // }, [userId, restaurantId]);

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
      setChat([...chat, { ...msg }]);
    });
  }, [chat]);

  const scrollBottom = () => {
    chatBox.current?.scrollIntoView({ behavior: "auto", block: "start" });
  };

  useEffect(() => {
    scrollBottom();
  }, [chat]);

  return (
    <>
      <div className="w-full">
        <div
          className="flex flex-col mb-4 px-4 overflow-scroll  scroll_hidden
           h-[500px]"
        >
          {chat
            .filter(
              (item) =>
                item.received == received ||
                item.received == sender ||
                item.userId == userId
            )
            .map((el) => (
              <div
                className={`${
                  // el.received == received || el.sender == "USER"
                  el.sender !== role ? " items-start " : " items-end"
                }   text-black  flex flex-col`}
                key={el.id}
              >
                <div className="flex flex-col flex-wrap max-w-[50%] gap-2">
                  <div className="flex gap-3">
                    {el.sender == "RESTAURANT" ? (
                      <img
                        src={el.restaurantid.profileImg}
                        className="w-[35px] h-[35px] rounded-full"
                      />
                    ) : (
                      <img
                        src={el.userid.imgProfile}
                        className="w-[35px] h-[35px] rounded-full"
                      />
                    )}
                    <span
                      className={
                        el.sender !== role
                          ? " font-bold text-lg"
                          : "text-right font-bold  text-lg"
                      }
                    >
                      {el.sender == "USER"
                        ? el.userid.name
                        : el.restaurantid.restaurantName}
                    </span>
                  </div>
                  <div
                    className={`mr-4 flex flex-wrap   ${
                      el.sender !== role
                        ? "ml-2 py-3 px-4 text-white  bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl break-all "
                        : "mr-2 py-3 px-4 text-white  bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl break-all "
                    }`}
                  >
                    {el.message}
                  </div>
                </div>
              </div>
            ))}
          <div ref={chatBox} />
        </div>
        <form onSubmit={submit}>
          <div class="py-5 px-4 flex gap-4">
            <input
              class="w-full bg-gray-300 py-5 px-3 rounded-xl"
              placeholder="type your message here..."
              onChange={change}
              value={message}
              type="text"
              name=""
              id=""
            />
            <button className="gray_primary text-2xl">send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export function ChatRoomeA() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setToggle((r) => !r)}>click</button>
      <div>
        {toggle ? (
          <div key={2}>
            talk 2{" "}
            {
              <Chat
                // received={`USER${2}`}
                restaurantId={1}
                userId={2}
                role="RESTAURANT"
              />
            }
          </div>
        ) : (
          <div key={3}>
            talk 3{" "}
            {
              <Chat
                received={`USER${3}`}
                restaurantId={1}
                userId={3}
                role="RESTAURANT"
              />
            }
          </div>
        )}
      </div>
    </div>
  );
}

// export default { Chat, ChatRoomeA };
