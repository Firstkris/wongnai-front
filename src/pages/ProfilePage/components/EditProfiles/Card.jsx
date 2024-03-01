import React from "react";

export default function Card({ children }) {
  return (
    <div className="ml-10 mr-20 my-8 rounded-lg bg-white w-2/3 ">
      <div className="flex flex-col gap-8 px-5 py-6">{children}</div>
    </div>
  );
}
