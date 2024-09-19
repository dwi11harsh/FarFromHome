"use client";

import { Hamburger } from "@repo/ui";
import { NavLogo } from "./lib/NavLogo";
import React from "react";

export const Navbar = (): JSX.Element => {
  const [active, setActive] = React.useState(false);
  return (
    <nav className="fixed top-0 z-50 shadow-sm w-full pr-4 bg-green-500">
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
