import { TaskListView } from "@/lib/typings/interfaces/task.interface";
import TaskListItem from "./taskListItem";

const ListView: React.FC<TaskListView> = ({ title, subTitle }) => {
  return (
    <div className="bg-cardContainerGradient rounded-lg p-3 lg:p-5 shadow-cardContainerShadow border-2 border-border">
      <h2 className="font-bold text-lg mb-5">
        {title}
        <span className="font-normal before:content-[''] before:bg-foreground before:inline-block before:align-middle before:w-1 before:h-1 text-gray-500 before:mx-2">
          {subTitle}
        </span>
      </h2>
      <ul>
        <TaskListItem
          key={0}
          name="Learn Swift for IOS Development"
          priority="high"
          status={0}
        />
        <TaskListItem
          key={1}
          name="Develop Ekagratha App"
          priority="medium"
          status={0}
        />
        <TaskListItem
          key={2}
          name="Design & Develop Personal Portfolio showcasing skills and projects."
          priority="low"
          status={1}
        />
      </ul>
    </div>
  );
};

export default ListView;
