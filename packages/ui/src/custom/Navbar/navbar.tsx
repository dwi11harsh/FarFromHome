"use client";

import { Hamburger } from "@repo/ui";
import { NavLogo } from "./lib/NavLogo";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="mt-1 rounded-full fixed top-0 z-50 shadow-md w-full pr-4 bg-white">
      <div className="flex justify-between">
        <div>
          <NavLogo />
        </div>
        <div className="flex items-center justify-center">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};
