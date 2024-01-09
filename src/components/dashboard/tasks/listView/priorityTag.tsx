import { TaskCategory } from "@/lib/typings/interfaces/task.interface";

const priorityMap = {
  HIGH: {
    bg: "#421c1c",
    text: "#d53636",
    dot: "bg-red-600",
  },
  MEDIUM: {
    bg: "#42341c",
    text: "orange",
    dot: "orange",
  },
  LOW: {
    bg: "#19261f",
    text: "green",
    dot: "green",
  },
};

const PriorityBadge: React.FC<TaskCategory> = ({ name }) => {
  return (
    <span
      className={`bg-[#311919] relative px-8 py-1 text-[#A30B0B] rounded- text-sm font-medium before:rounded-full before:w-2 before:h-2  before:absolute before:inset-0 before:left-3 before:bg-[#A30B0B] before:translate-y-[-50%] before:top-1/2 before:shadow-sm border-2 border-[#3E2525]`}
    >
      {name}
    </span>
  );
};

export default PriorityBadge;
