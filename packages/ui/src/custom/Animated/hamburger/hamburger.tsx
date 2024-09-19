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
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors duration-500 hover:bg-white/30"
        animate={active ? "open" : "close"}
        initial={false}
      >
        {/* upper line */}
        <motion.span
          style={{
            left: "50%",
            top: "30%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-1 w-10 bg-white"
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
          }}
          className="absolute h-1 w-10 bg-white"
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
            left: "calc(50% + 10px)",
            bottom: "30%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-1 w-5 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              bottom: ["30%", "50%", "50%"],
              left: "50%",
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "30%"],
              left: "calc(50% + 10px)",
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
