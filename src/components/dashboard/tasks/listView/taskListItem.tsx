import { Checkbox } from "@/components/ui/checkbox";
import { TaskTypes } from "@/lib/typings/types/tasks.types";
import clsx from "clsx";

const TaskListItem: React.FC<TaskTypes> = ({ name, priority, status }) => {
  return (
    <li className="bg-darkSecondary  px-5 py-3 rounded-lg mb-[2px] flex items-center justify-start">
      <div className="flex items-center justify-start">
        <Checkbox
          className="w-4 h-4 rounded-full"
          id="terms"
          checked={status == 1}
        />
        <span
          className={clsx("font-medium text-md ml-4 uppercase", {
            "text-[#ab4040]": priority == "high",
            "text-[#CC8E16]": priority == "medium",
            "text-[#219653]": priority == "low",
          })}
        >
          {priority}
        </span>
        <label
          htmlFor="terms"
          className="text-sm ml-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 line-through"
        >
          {name}
        </label>
      </div>
    </li>
  );
};

export default TaskListItem;
