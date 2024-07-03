import React from "react";
import { InputForm } from "../elements/input";
import { Button } from "../elements/button";

export const FormLogin = () => {
  const handleChange = (e) => {};

  return (
    <form action="">
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
      <Button className="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
