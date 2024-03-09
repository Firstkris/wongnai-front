import React from "react";

// eslint-disable-next-line react/prop-types
function Card({ children, w }) {
  return (
    <div className={`
    flex flex-col w-full ${w} gap-6 mx-auto border rounded-lg bg-gray-200 p-6`}>
      {children}
    </div>
  );
}

export default Card;
