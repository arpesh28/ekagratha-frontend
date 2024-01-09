import { TaskCategory } from "@/lib/typings/interfaces/task.interface";

const CategoryBadge: React.FC<TaskCategory> = ({ name }) => {
  return (
    <span
      className={`bg-[#2d2d4e] px-2 py-1 text-[#9195ff] rounded-[2px] text-sm font-medium`}
    >
      {name}
    </span>
  );
};

export default CategoryBadge;
