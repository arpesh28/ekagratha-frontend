"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/lib/typings/interfaces/task.interface";
import clsx from "clsx";
// import CategoryBadge from "./categoryBadge";
import { heebo } from "@/lib/fonts";
import { SideModal } from "../../modals/sideModal";
import { useState } from "react";

const TaskBoardItem: React.FC<Task> = ({ name, priority, status }) => {
  //  states
  const [openDetails, setOpenDetails] = useState(false);

  const toggleDetailsModal = () => {
    setOpenDetails((prev) => !prev);
  };

  return (
    <>
      <li
        className={clsx(
          `transition-all duration-300 dark:hover:brightness-110 bg-card px-3 py-3 relative rounded-sm mb-1.5 flex flex-row items-start justify-between shadow-sm ${heebo.className} cursor-pointer transition-all duration-400 border border-border`
        )}
        onClick={toggleDetailsModal}
      >
        <div className="flex flex-col justify-start items-start">
          <span className="text-xs font-light text-gray-400 mb-1">
            ENG-1123
          </span>
          <h2
            className={clsx(
              "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-ellipsis overflow-hidden line-clamp-2 cursor-pointer mb-1 font-medium tracking-wide"
            )}
          >
            {name}
          </h2>
          <div className="flex ">
            <div
              className={`text-[11px] text-gray-500 md:text-gray-400 text-right  md:flex lg:flex items-center space-x-1 justify-start bg-cardContainer/30 px-1 py-0.5  border border-border mt-1 flex`}
            >
              <span className="block w-2 h-2 bg-red-500 rounded-full"></span>{" "}
              <span className="text-red-500">HIGH</span>
            </div>
            <div
              className={`text-[11px] text-gray-500 md:text-gray-400 text-right  md:flex lg:block items-end justify-start bg-cardContainer/30 px-1 py-0.5  border border-border mt-1`}
            >
              <span>Jan 26</span>
              <span className="ml-2">2:30pm</span>
            </div>
          </div>
        </div>
        <div>
          <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center p-1">
            <span className="text-[9px] text-center">AG</span>
          </div>
        </div>
      </li>

      {openDetails && (
        <SideModal open={openDetails} toggleModal={toggleDetailsModal} />
      )}
    </>
  );
};

export default TaskBoardItem;
