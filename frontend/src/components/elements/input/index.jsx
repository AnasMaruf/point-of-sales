import React from "react";
import { Label } from "./Label";
import { Input } from "./input";

export const InputForm = ({
  label,
  type,
  htmlFor,
  name,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
