import React from "react";
import { Chat } from "../Chat";
import { useUser } from "../../feature/user/contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import * as ApiMerchant from "../../apis/merchant";
import { useRestaurant } from "../../hooks/hooks";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
const socket = io.connect("http://localhost:8888/");

export default function UiChatMerchant() {
  //   const { user } = useUser();
  const [user, setUser] = useState("");

  const [chatBox, setChatBox] = useState([]);
  const { restaurant, setRestaurant } = useRestaurant();

  const { restaurantId } = useParams();

  console.log("restaurant", restaurant);
  const getChat = async (id) => {
    console.log(id);
    // const chatData = await ApiUser.getChatDataByUserId(user?.id);\
    const chatData = await ApiMerchant.getChatDataByRestaurantId(id);
    console.log("chatData", chatData);
    setChatBox(chatData.data.data);
  };

  console.log("chatBox", chatBox);

  useEffect(() => {
    getChat(restaurantId);
  }, []);

  return (
    // <!-- This is an example component -->
    <div className="container mx-auto mt-12 shadow-lg   ">
      {/* <!-- headaer --> */}
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <div className="font-semibold text-2xl">Chatbox</div>
      </div>
      {/* <!-- end header -->
    <!-- Chatting --> */}
      <div className="flex flex-row justify-between  bg-white min-h-[630px]">
        {/* <!-- chat list --> */}
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          {/* <!-- search compt --> */}
          <div className="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>
          {/* <!-- end search compt -->
        <!-- user list --> */}
          {chatBox.map((el) => (
            <div
              onClick={() => setUser(+el.userId)}
              className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 cursor-pointer ${
                el.restaurantId == restaurant ? "bg-[#ebf5ff]" : ""
              } `}
              key={el.restaurantId}
            >
              <div className="w-1/4">
                <img
                  src={el.img_profile}
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">{el.name}</div>
              </div>
            </div>
          ))}

          {/* <!-- end user list --> */}
        </div>
        {/* <!-- end chat list -->
      <!-- message --> */}

        {user ? (
          <Chat
            socket={socket}
            restaurantId={+restaurantId}
            userId={user}
            // userId={2}
            // role={user?.role}
            role={"RESTAURANT"}
          />
        ) : null}
      </div>
    </div>
  );
}
