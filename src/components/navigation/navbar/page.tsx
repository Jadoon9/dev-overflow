"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Theme from "./Theme";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import routes from "@/constants/routes";

const Navbar = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: routes.SIGN_IN });
  };

  return (
    <nav className="flex-between background-light-900_dark-200 fixed z-50 w-full gap-5 p-6 shadow-light-200 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/site-logo.svg" alt="logo" width={23} height={23} />
        <p className="text-dark-100 font-space-grotesk text-2xl font-bold leading-[26px] tracking-tight max-sm:hidden ">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <p>Global Search</p>

      <div className="flex-between gap-5">
        {session ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {session.user?.name}
            </span>
            <Button onClick={handleLogout} variant="outline" size="sm">
              Sign Out
            </Button>
          </div>
        ) : (
          <Link href="/sign-in">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
        )}
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
