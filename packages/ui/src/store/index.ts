// User Logged In State and their role
import { atom } from "jotai";
import { LoggedInType } from "@repo/ui/types";

export const IsLoggedIn = atom<LoggedInType>({
  isLoggedIn: false,
  role: "buyer",
});

export const IsHamburgerMenuOpen = atom<boolean>(false);
