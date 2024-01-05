"use client";
import clsx from "clsx";
import { navItems } from "./config";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-sideNav border-t-2 border-border overflow-hidden shadow-2xl">
      <ul className="grid grid-flow-col gap-4 overflow-auto px-4 py-2 items-center h-full">
        {navItems?.map((link, index) => {
          const LinkIcon = link.icon;
          return (
            <li
              key={index + link.href}
              className={clsx(
                "text-center py-4 min-w-[80px] items-center rounded-xl ",
                {
                  "bg-cardSelection !text-primary": pathname === link.href,
                }
              )}
            >
              <Link
                href={link.href}
                className={`flex w-full flex-col items-center  justify-center font-medium h-full rounded-xl `}
              >
                <LinkIcon className="text-lg" />
                <span className={clsx(`mt-2 text-xs text-sideNav-foreground`)}>
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BottomNav;
