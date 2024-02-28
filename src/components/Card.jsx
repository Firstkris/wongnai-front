import React from "react";

// eslint-disable-next-line react/prop-types
function Card({ children }) {
  return (
    <div className='flex flex-col w-full gap-4 rounded-3xl mx-auto'>{children}</div>
  );
}

export default Card;
