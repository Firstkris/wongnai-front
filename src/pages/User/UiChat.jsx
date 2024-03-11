import React from "react";
import { Chat } from "../Chat";

export default function UiChat() {
  return (
    // <!-- This is an example component -->
    <div class="container mx-auto shadow-lg rounded-lg">
      {/* <!-- headaer --> */}
      <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <div class="font-semibold text-2xl">GoingChat</div>
      </div>
      {/* <!-- end header -->
    <!-- Chatting --> */}
      <div class="flex flex-row justify-between bg-white">
        {/* <!-- chat list --> */}
        <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          {/* <!-- search compt --> */}
          <div class="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>
          {/* <!-- end search compt -->
        <!-- user list --> */}
          <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
            <div class="w-1/4">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div class="w-full">
              <div class="text-lg font-semibold">Luis1994</div>
              <span class="text-gray-500">Pick me at 9:00 Am</span>
            </div>
          </div>

          {/* <!-- end user list --> */}
        </div>
        {/* <!-- end chat list -->
      <!-- message --> */}

        <Chat restaurantId={1} userId={2} role={"USER"} />
      </div>
    </div>
  );
}
