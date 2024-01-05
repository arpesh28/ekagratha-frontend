import ListView from "@/components/dashboard/tasks/listView/taskListView";

const Register = () => {
  return (
    <main className="min-h-screen lg:pr-12 w-full pt-5 lg:pl-80 px-2 lg:px-10 md:pt-24">
      <ListView title="Todo" subTitle="Some pending work" />
      <ListView title="In Progress" subTitle="Almost There!" />
      <ListView title="Completed" subTitle="Great Job!" />
    </main>
  );
};

export default Register;
