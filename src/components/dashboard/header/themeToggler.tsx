"use client";
import { useTheme } from "next-themes";
import { PiMoonStarsDuotone, PiSunDuotone } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();
  const toggleSwitch = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className={clsx(
        "hidden mx-4 w-20 h-10 bg-card shadow-sm md:flex justify-start items-center rounded-full px-4 py-2 border-0 cursor-pointer",
        {
          "justify-end  border-primary bg-cardSelection": theme === "dark",
        }
      )}
      onClick={toggleSwitch}
    >
      <motion.div className="w-5 rounded-full" layout transition={spring}>
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
