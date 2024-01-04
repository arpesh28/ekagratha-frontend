import Link from "next/link";
import NavLinks from "./navLinks";

const SideNav = () => {
  return (
    <div className="h-full fixed w-60 bg-sideNav overflow-hidden px-4 py-8 border-r-[1px] border-border">
      <Link className="" href="/">
        <div className="text-cardContainer-foreground font-bold tracking-wider text-xl">
          Ekagratha
        </div>
      </Link>
      <NavLinks />
    </div>
  );
};

export default SideNav;
