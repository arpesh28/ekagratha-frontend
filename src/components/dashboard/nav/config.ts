import { GanttChart, Users, BarChart2, } from "lucide-react";


export const navItems = [
  {
    name: "Personal",
    href: "/dashboard/personal",
    icon: GanttChart,
    heading: "Personal Todos",
  },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: BarChart2,
    heading: "Project Management",
  },
  {
    name: "Team",
    href: "/dashboard/team",
    icon: Users,
    heading: "Team Management",
  },
];
