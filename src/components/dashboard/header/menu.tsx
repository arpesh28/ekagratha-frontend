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
import { LogOut, ChevronDown } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="hover:bg-transparent group !border-0 focus-visible:ring-0"
          variant="ghost"
        >
          <Avatar className="h-5 w-5 group-hover:border-2 duration-100 transition-all ease-in-out">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="h-full w-full bg-primary flex items-center justify-center">
              AG
            </AvatarFallback>
          </Avatar>
          {/* <div className="hidden md:flex flex-col items-start ml-3 tracking-wide font-semibold text-xs">
            <span className="">Arpesh Gadekar</span>
            <span className="text-gray-500 tracking-wide font-light text-xs">
              arpesh@gmail.com
            </span>
          </div> */}
          <ChevronDown className="ml-2 text-sm" size={"14px"} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black bg-background hover:bg-background border-border">
        <DropdownMenuLabel className="">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="" />
        <DropdownMenuItem className="hover:cursor-pointer hover:bg-primary hover:text-white">
          <LogOut className="mr-2 h-4 w-4" size={"14px"} />
          <Link className="text-xs font-semibold" href="/auth/login">Log out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
