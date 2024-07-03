import React from "react";
import { FormLogin } from "../components/fragments/FormLogin";
import { AuthLayout } from "../components/layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login" description="Please sign in to your account">
      <FormLogin />
    </AuthLayout>
  );
};
