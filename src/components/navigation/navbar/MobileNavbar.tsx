import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import routes from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "./Navlinks";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          alt="menu"
          width={20}
          height={20}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light-900_dark200 border-none "
      >
        <SheetTitle className="hidden"> Navigation </SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            alt="logo"
            width={20}
            height={20}
          />
          <p className="h2-bold text-dark-100 font-space-grotesk dark:text-light-900  pt-6 pl-3">
            Dev<span className="text-primary-500">Overflow</span>
          </p>
        </Link>

        <div className="no-scrollbar flex flex-col h-[calc(100vh-80px)] justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col pt-16 gap-6">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>

          <div className="flex flex-col gap-6">
            <SheetClose asChild>
              <Link href={routes.SIGN_IN}>
                <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Sign In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={routes.SIGN_UP}>
                <Button className="small-medium btn-tertiary text-dark400_light900 min-h-[41px]  w-full rounded-lg border px-4 py-3 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
