import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

const TeamCard = () => {
  return (
    <div className="w-full p-4 border-2 rounded-lg bg-card border-border">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div className="relative flex w-12 h-12 overflow-hidden rounded-md">
            <Image src="/Images/figma.png" objectFit="cover" fill alt="figma" />
          </div>
          <div>
            <h2 className="text-lg font-medium tracking-md ">Engineering</h2>
            <p className="font-light text-gray-400 text-md">
              Subtitle of something
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-md">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-black bg-background hover:bg-background border-border">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Invite</DropdownMenuItem>
              <DropdownMenuItem>View Members</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                Delete Team
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mt-5">
        <p className="mt-1 antialiased tracking-wide opacity-60 font-extralight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          perferendis quo quod culpa doloremque harum praesentium similique
          sunt.
        </p>
      </div>
      <div className="flex mt-4 ml-3">
        <Avatar className="w-8 h-8 -ml-3 border-2 border-card">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-8 h-8 -ml-3 border-2 border-card">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-8 h-8 -ml-3 border-2 border-card">
          <AvatarFallback>+4</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default TeamCard;
