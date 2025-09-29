"use client";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import React from "react";

const SignIn = () => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (data: typeof defaultValues) => {
    console.log(data);
    return { success: true };
  };
  return (
    <div>
      <AuthForm
        schema={SignInSchema}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        formType="SIGN_IN"
      />
    </div>
  );
};

export default SignIn;
