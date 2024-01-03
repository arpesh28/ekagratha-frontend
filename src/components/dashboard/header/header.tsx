"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

//  Icon
import { TbLogout } from "react-icons/tb";

//  Components
import { navItems } from "../sideNav/config";

//  Shadcn/ui
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="container items-center w-[calc(100%-240px)] fixed right-0 pt-8 flex justify-between ">
      <div>
        <h3 className="text-2xl">
          {navItems.find((item) => item.href == pathname)?.heading}
        </h3>
        <p className="text-sm text-gray-600">Hi, Arpesh!</p>
      </div>
      <div className="flex items-center justify-center">
        <Button
          size="icon"
          className="bg-transparent hover:bg-transparent  transition-all ease-in-out duration-500 group p-0"
        >
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17C12.0002 17.5046 11.8096 17.9906 11.4665 18.3605C11.1234 18.7305 10.6532 18.9572 10.15 18.995L10 19H8C7.49542 19.0002 7.00943 18.8096 6.63945 18.4665C6.26947 18.1234 6.04284 17.6532 6.005 17.15L6 17H12ZM9 9.54067e-10C10.815 -2.9945e-05 12.559 0.704894 13.8642 1.96607C15.1694 3.22726 15.9338 4.94609 15.996 6.76L16 7V10.764L17.822 14.408C17.9015 14.567 17.9413 14.7429 17.938 14.9206C17.9346 15.0984 17.8883 15.2727 17.8029 15.4286C17.7174 15.5845 17.5955 15.7174 17.4475 15.8158C17.2995 15.9143 17.1298 15.9754 16.953 15.994L16.838 16H1.162C0.984165 16.0001 0.808968 15.957 0.651422 15.8745C0.493876 15.792 0.35868 15.6725 0.257418 15.5264C0.156156 15.3802 0.0918485 15.2116 0.0700054 15.0351C0.0481623 14.8586 0.0694352 14.6795 0.132001 14.513L0.178001 14.408L2 10.764V7C2 5.14348 2.7375 3.36301 4.05025 2.05025C5.36301 0.737498 7.14349 9.54069e-10 9 9.54067e-10Z"
              fill="#636E72"
            />
          </svg>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="hover:bg-transparent group !border-0 focus-visible:ring-0"
              variant="ghost"
            >
              <Avatar className="h-10 w-10 group-hover:border-2 duration-100 transition-all ease-in-out">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback className="h-full w-full bg-primary flex items-center justify-center">
                  AG
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start ml-5 tracking-wide font-semibold">
                <span>Arpesh Gadekar</span>
                <span className="text-gray-500 tracking-wide font-light">
                  arpesh@gmail.com
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 rounded-md border-[1px] border-gray-700 bg-darkOption hover:bg-darkOption">
            <DropdownMenuLabel className="">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem className="hover:cursor-pointer">
              <FiLogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
