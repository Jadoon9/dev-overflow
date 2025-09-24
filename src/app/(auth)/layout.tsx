import React from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center  bg-auth-light dark:bg-auth-dark bg-no-repeat bg-cover bg-center !px-4 !py-10">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="!space-y-2.5 my-2.5">
            <h1 className="bold text-dark100_light900">Join DevOverflow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your questions answered.
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}

        <SocialAuthForm />
      </section>
    </div>
  );
};

export default AuthLayout;
