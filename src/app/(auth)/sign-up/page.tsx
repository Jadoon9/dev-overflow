"use client";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import { signUpWithCredentials } from "@/lib/actions/auth.action";
import React from "react";

const SignUp = () => {
  const defaultValues = {
    username: "",
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = async (data: typeof defaultValues) => {
    const result = await signUpWithCredentials(data);
    return result;
  };

  return (
    <div>
      <AuthForm
        schema={SignUpSchema}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        formType="SIGN_UP"
      />
    </div>
  );
};

export default SignUp;
