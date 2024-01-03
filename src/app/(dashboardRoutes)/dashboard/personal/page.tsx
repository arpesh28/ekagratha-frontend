import ListView from "@/components/dashboard/tasks/listView/taskListView";

const Register = () => {
  return (
    <main className="min-h-screen pr-12 w-full pt-12 pl-80 md:pt-24">
      <ListView title="Todo" subTitle="Some pending work" />
      <ListView title="In Progress" subTitle="Almost There!" />
      <ListView title="Completed" subTitle="Great Job!" />
    </main>
  );
};

export default Register;
