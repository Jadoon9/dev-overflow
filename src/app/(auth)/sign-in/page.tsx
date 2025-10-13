"use client";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth.action";
import React from "react";

const SignIn = () => {
  const defaultValues = {
    email: "",
    password: "",
  };
  
  const onSubmit = async (data: typeof defaultValues) => {
    const result = await signInWithCredentials(data);
    return result;
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
