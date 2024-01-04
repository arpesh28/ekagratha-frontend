"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { PiMoonStarsDuotone, PiSunDuotone } from "react-icons/pi";
import { RxMoon } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();

  const toggleSwitch = () => setTheme(theme == "dark" ? "light" : "dark");

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className={clsx(
        "w-14 h-8 bg-card shadow-sm flex justify-start rounded-full px-2 py-1 cursor-pointer",
        {
          "justify-end": theme === "dark",
        }
      )}
      onClick={toggleSwitch}
    >
      <motion.div className="w-5 h-5 rounded-full" layout transition={spring}>
        <AnimatePresence>
          {theme === "dark" ? (
            <PiMoonStarsDuotone className="text-2xl text-primary" />
          ) : (
            <PiSunDuotone className="text-2xl text-primary" />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeToggler;
