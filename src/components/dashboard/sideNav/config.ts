import { FiUsers } from "react-icons/fi";
import { SiCodeforces, SiCodefactor } from "react-icons/si";

export const navItems = [
  {
    name: "Personal",
    href: "/dashboard/personal",
    icon: SiCodefactor,
  },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: SiCodeforces,
  },
  {
    name: "Team",
    href: "/dashboard/team",
    icon: FiUsers,
  },
];
