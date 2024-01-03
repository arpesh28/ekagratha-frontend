"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navItems } from "./config";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col mt-8">
      {navItems?.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <Link
            href={link.href}
            key={link.name + index}
            className={clsx(
              "my-1 text-sm text-lightMain tracking-wide w-full justify-start py-3 hover:bg-darkSecondary hover:text-lightMain flex items-center px-5 rounded-sm transition-all duration-300",
              { "bg-darkSecondary": pathname === link.href }
            )}
          >
            <LinkIcon />
            <span className="ml-4">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
