import Link from "next/link";
import NavLinks from "./navLinks";
import ThemeToggler from "@/components/themeToggler";

const SideNav = () => {
  return (
    <div className="h-full  sticky w-60 bg-sideNavGradient shadow-cardContainerShadow  hidden lg:flex flex-col justify-between overflow-hidden px-4 py-4 border-r-[1px] border-border ">
      <div>
        <Link className="" href="/">
          <div className="text-cardContainer-foreground font-bold tracking-wider text-xl">
            Ekagratha
          </div>
        </Link>
        <NavLinks />
      </div>

      <ThemeToggler />
    </div>
  );
};

export default SideNav;