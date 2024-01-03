import { TaskCategory } from "@/lib/typings/interfaces/task.interface";

const CategoryBadge: React.FC<TaskCategory> = ({ name }) => {
  return (
    <span className="bg-[#2d3043] mx-1 px-2 py-1 rounded-sm text-sm">
      {name}
    </span>
  );
};

export default CategoryBadge;
