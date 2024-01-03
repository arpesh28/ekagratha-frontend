import { Checkbox } from "@/components/ui/checkbox";

const TaskListItem = () => {
  return (
    <li className="bg-darkSecondary  px-5 py-3 rounded-lg mb-[2px] flex items-center justify-start">
      <div className="flex items-center justify-start">
        <Checkbox className="w-4 h-4 rounded-full" id="terms" />
        <span className="font-semibold text-md ml-4 text-[#ab4040]">HIGH</span>
        <label
          htmlFor="terms"
          className="text-sm ml-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
        >
          Accept terms and conditions
        </label>
      </div>
    </li>
  );
};

export default TaskListItem;
