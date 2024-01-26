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
              "my-1 text-xs text-sideNav-foreground tracking-wide w-full justify-start py-2 hover:bg-cardSelection flex items-center px-3 rounded-sm transition-all duration-300 group",
              {
                "bg-cardSelection": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="text-gray-400 group-hover:text-white" />
            <span className="ml-3">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
