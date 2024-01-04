//  Shadcn/ui
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

//  Icon
import { IoIosArrowDown } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="hover:bg-transparent group !border-0 focus-visible:ring-0"
          variant="ghost"
        >
          <Avatar className="h-10 w-10 group-hover:border-2 duration-100 transition-all ease-in-out">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
          <IoIosArrowDown className="ml-2 text-xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-md border-[1px] border-gray-700 bg-darkOption hover:bg-darkOption">
        <DropdownMenuLabel className="">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="hover:cursor-pointer">
          <FiLogOut className="mr-2 h-4 w-4" />
          <Link href="/auth/login">Log out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
