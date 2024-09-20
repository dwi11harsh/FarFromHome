"use client";

import { IsHamburgerMenuOpen } from "@repo/ui/store";
import { motion, MotionConfig } from "framer-motion";
import { useAtom } from "jotai";

export const Hamburger = (): JSX.Element => {
  const [active, setActive] = useAtom(IsHamburgerMenuOpen);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        onClick={() => setActive((prev) => !prev)}
        className="relative h-16 w-16 rounded-full bg-white/0"
        animate={active ? "open" : "close"}
      >
        {/* upper line */}
        <motion.span
          style={{
            left: "50%",
            top: "30%",
            x: "-50%",
            y: "-50%",
            width: "50%",
            height: "5%",
          }}
          className="absolute bg-blue-700 rounded-full"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["30%", "30%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "30%"],
            },
          }}
        />
        {/* middle line */}
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            width: "50%",
            height: "5%",
          }}
          className="absolute bg-blue-700 rounded-full"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        {/* lower line */}
        <motion.span
          style={{
            left: "calc(50% + 5%)",
            bottom: "30%",
            x: "-27%",
            y: "50%",
            width: "25%",
            height: "5%",
          }}
          className="absolute bg-blue-700 rounded-full"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              bottom: ["30%", "50%", "50%"],
              left: "44%",
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "30%"],
              left: "calc(50% + 5%)",
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
