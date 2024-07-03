import React from "react";
import { FormRegister } from "../components/fragments/FormRegister";
import { AuthLayout } from "../components/layouts/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register" description="Please sign up to your account">
      <FormRegister />
    </AuthLayout>
  );
};
