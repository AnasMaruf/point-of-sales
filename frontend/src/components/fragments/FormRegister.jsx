import React from "react";
import { Button } from "../elements/button";
import { InputForm } from "../elements/input";

export const FormRegister = () => {
  const handleChange = (e) => {};
  return (
    <form action="">
      <InputForm
        type="text"
        label="Username"
        placeholder="John Doe"
        name="username"
        onChange={handleChange}
      />
      <InputForm
        type="email"
        label="Email"
        placeholder="example@gmail.com"
        name="email"
        onChange={handleChange}
      />
      <InputForm
        type="password"
        label="Password"
        placeholder="********"
        name="password"
        onChange={handleChange}
      />
      <InputForm
        type="password"
        label="Confirm Password"
        placeholder="********"
        name="confPassword"
        onChange={handleChange}
      />
      <Button className="bg-blue-600 w-full" type="submit">
        Register
      </Button>
    </form>
  );
};
