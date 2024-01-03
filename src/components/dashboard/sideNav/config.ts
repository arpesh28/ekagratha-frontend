import { FiUsers } from "react-icons/fi";
import { SiCodeforces, SiCodefactor } from "react-icons/si";

export const navItems = [
  {
    name: "Personal",
    href: "/dashboard/personal",
    icon: SiCodefactor,
    heading: "Personal Todos",
  },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: SiCodeforces,
    heading: "Project Management",
  },
  {
    name: "Team",
    href: "/dashboard/team",
    icon: FiUsers,
    heading: "Team Management",
  },
];
