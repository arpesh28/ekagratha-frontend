import Link from "next/link";
import NavLinks from "./navLinks";
import ThemeToggler from "@/components/themeToggler";

const SideNav = () => {
  return (
    <div className="h-full fixed w-60 bg-sideNav hidden lg:flex flex-col justify-between overflow-hidden px-4 py-8 border-r-[1px] border-border ">
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
