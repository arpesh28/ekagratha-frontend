import { TaskCategory } from "@/lib/typings/interfaces/task.interface";

const CategoryBadge: React.FC<TaskCategory> = ({ name }) => {
  return (
    <span
      className={`bg-muted mx-1 px-2 py-1 text-muted-foreground rounded-sm text-sm font-bold`}
    >
      {name}
    </span>
  );
};

export default CategoryBadge;
