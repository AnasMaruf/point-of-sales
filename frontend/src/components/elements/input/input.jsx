import React from "react";

export const Input = ({ type, placeholder, name, onChange }) => {
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};
