/* eslint-disable react/prop-types */
import React from "react";

const defaultClasses = `
                w-full
                focus:outline-none
                py-1.5 px-3
                border
                rounded-lg
                focus:border-blue-500
                focus:ring-2 focus:ring-blue-300
              
`;
export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  errorMessage,
}) {
  const extendedClasses = errorMessage
    ? "border-red-500 focus:ring-red-300"
    : "border-gray-300 focus:border-blue-500 focus:ring-blue-300";

  return (
    <>
      <input
        className={`focus:outline-none ${defaultClasses} ${extendedClasses}`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />

      {errorMessage ? (
        <small className="text-red-500">{errorMessage}</small>
      ) : (
        ""
      )}
    </>
  );
}
