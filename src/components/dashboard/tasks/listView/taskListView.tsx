import TaskListItem from "./taskListItem";

const ListView = () => {
  return (
    <div className="bg-darkPrimary rounded-2xl p-5 mt-5">
      <h2 className="font-bold text-lg mb-5">
        Todo{" "}
        <span className="font-normal before:content-[''] before:bg-white before:inline-block before:align-middle before:w-1 before:h-1 text-gray-500 before:mx-2">
          Almost There!
        </span>
      </h2>
      <ul>
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
        <TaskListItem />
      </ul>
    </div>
  );
};

export default ListView;
