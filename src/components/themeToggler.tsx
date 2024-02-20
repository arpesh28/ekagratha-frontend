"use client";
import { useTheme } from "next-themes";
import { PiMoonStarsDuotone, PiSunDuotone } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
//test comment
const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();
  const toggleSwitch = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  return (
    <div
      className={clsx(
        "hidden w-28 h-8 shadow-sm  md:flex justify-start items-center rounded-full  p-1 border-0 cursor-pointer bg-cardSelection relative",
        {
          "justify-end  border-primary": theme === "dark",
        }
      )}
      onClick={toggleSwitch}
    >
      <motion.div
        className=" rounded-full absolute z-2"
        layout
        transition={{
          type: "tween",
          ease: "circOut",
        }}
      >
        <div className="bg-primary-foreground rounded-full w-14 h-8  flex items-center justify-center shadow-sm"></div>
      </motion.div>
      <div className="z-10 w-full h-full rounded-full flex justify-around items-center">
        <PiSunDuotone
          className={clsx("text-sm", { "text-primary": theme == "light" })}
        />

        <PiMoonStarsDuotone
          className={clsx("text-sm", { "text-primary": theme == "dark" })}
        />
      </div>
    </div>
  );
};

export default ThemeToggler;
