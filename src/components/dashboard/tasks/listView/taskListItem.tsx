import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/lib/typings/interfaces/task.interface";
import clsx from "clsx";
import CategoryBadge from "./categoryBadge";
import { heebo } from "@/lib/fonts";

const TaskListItem: React.FC<Task> = ({ name, priority, status }) => {
  return (
    <li
      className={`bg-card px-5 py-3 rounded-lg mb-1 flex items-center justify-between shadow-sm ${heebo.className}`}
    >
      <div className="flex items-center justify-start">
        <Checkbox
          className={`w-4 h-4 rounded-full`}
          id="terms"
          checked={status == 1}
        />

        <label
          htmlFor="terms"
          className={clsx(
            "text-sm ml-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            {
              "line-through": status == 1,
            }
          )}
        >
          {name}
        </label>
      </div>
      <div className="flex items-center">
        <span
          className={clsx(`font-medium text-md mr-4 uppercase `, {
            "text-redText": priority == "high",
            "text-yellowText": priority == "medium",
            "text-greenText": priority == "low",
          })}
        >
          {priority}
        </span>
        <div className="mr-4">
          <CategoryBadge name="NPM Package" />
          <CategoryBadge name="Node.js" />
          <CategoryBadge name="MongoDB" />
        </div>
        <div className={`text-sm font-medium text-gray-400 `}>
          10-01-24 <span className="font-light ml-2 text-gray-500">2:30pm</span>
        </div>
      </div>
    </li>
  );
};

export default TaskListItem;
