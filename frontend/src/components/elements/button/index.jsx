import React from "react";

export const Button = ({ children, className, type }) => {
  return (
    <button className={`rounded py-2 ${className}`} type={type}>
      {children}
    </button>
  );
};
