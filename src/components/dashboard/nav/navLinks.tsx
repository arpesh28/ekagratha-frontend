"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navItems } from "./config";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FireExtinguisherIcon, UserRound, View } from "lucide-react";

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
            <LinkIcon
              className="text-gray-400 group-hover:text-sideNav-foreground"
              size={"14px"}
            />
            <span className="ml-3">{link.name}</span>
          </Link>
        );
      })}
      <Accordion type="single" collapsible className="my-3">
        <AccordionItem value="item-1">
          <AccordionTrigger className="my-1 py-1 px-3 hover:no-underline">
            <span className="text-xs text-gray-600">Your Teams</span>
          </AccordionTrigger>
          <AccordionContent className="">
            <Link
              href="#"
              className={clsx(
                "text-xs text-sideNav-foreground tracking-wide w-full justify-start hover:bg-cardSelection flex items-center rounded-sm transition-all duration-300 px-3 group py-1"
              )}
            >
              <span className="bg-cardSelection h-full p-2 rounded-md">
                <UserRound
                  className="text-gray-400 group-hover:text-sideNav-foreground"
                  size={"10px"}
                />
              </span>
              <span className="ml-3">Engineering</span>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
};

export default NavLinks;
