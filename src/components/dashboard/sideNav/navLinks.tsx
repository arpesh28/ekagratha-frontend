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
          <Link href="#" className="my-1" key={link.name + index}>
            <Button
              variant="ghost"
              className={clsx(
                "text-sm text-lightMain tracking-wide w-full justify-start py-5 hover:bg-darkSecondary hover:text-lightMain",
                { "bg-darkSecondary": pathname === link.href }
              )}
            >
              <LinkIcon />
              <span className="ml-4">{link.name}</span>
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
