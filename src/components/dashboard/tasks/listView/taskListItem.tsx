"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/lib/typings/interfaces/task.interface";
import clsx from "clsx";
import CategoryBadge from "./categoryBadge";
import { heebo } from "@/lib/fonts";
import { SideModal } from "../../modals/sideModal";
import { useState } from "react";

const TaskListItem: React.FC<Task> = ({ name, priority, status }) => {
  //  states
  const [openDetails, setOpenDetails] = useState(false);

  const toggleDetailsModal = () => {
    setOpenDetails((prev) => !prev);
  };

  return (
    <>
      <li
        className={clsx(
          ` transition-all border-b-[0.5px] border-border duration-300 hover:bg-cardGradient hover:border-border dark:hover:brightness-150 px-3 lg:px-5 py-2 relative rounded-md rounder-sm mb-1 md:after:content-none after:content-['']  after:rounded-full after:w-3 after:h-3  after:absolute after:right-[-2px] after:top-[-2px] after:shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm ${heebo.className} cursor-pointer  transition-all duration-400`,
          {
            "after:bg-redText after:shadow-redText": priority === "high",
            "after:bg-yellowText after:shadow-yellowText":
              priority === "medium",
            "after:bg-greenText after:shadow-greenText": priority === "low",
          }
        )}
        onClick={toggleDetailsModal}
      >
        <div className="flex  justify-start items-center">
          <Checkbox
            className={`w-4 h-4 rounded-full`}
            id="terms"
            checked={status == 1}
          />
          {/* radial-gradient(    circle at center,    #0f1118, #121219,    #0f1118, rgb(13 12 21)   ) */}
          <label
            htmlFor="terms"
            className={clsx(
              "text-xs ml-4  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-ellipsis overflow-hidden line-clamp-2 mr-5 cursor-pointer",
              {
                "line-through opacity-50 text-greenText": status == 1,
              }
            )}
          >
            {name}
          </label>
        </div>
        <div className="flex items-start mt-2 ml-8 md:m-0">
          {/* <span
            className={clsx(
              `font-medium hidden md:block text-md mr-4 uppercase `,
              {
                "text-redText": priority == "high",
                "text-yellowText": priority == "medium",
                "text-greenText": priority == "low",
              }
            )}
          >
            {priority}
          </span> */}
          {/* <div className="mr-4 hidden lg:block">
          <CategoryBadge name="NPM Package" />
          <CategoryBadge name="Node.js" />
          <CategoryBadge name="MongoDB" />
        </div> */}
          <div
            className={`text-xs font-medium text-gray-500 md:text-gray-400 text-right  md:flex lg:block  items-end justify-start `}
          >
            <span>Jan 26</span>
            <span className="font-light ml-2 text-gray-500">2:30pm</span>
          </div>
        </div>
      </li>

      {openDetails && (
        <SideModal open={openDetails} toggleModal={toggleDetailsModal} />
      )}
    </>
  );
};

export default TaskListItem;
