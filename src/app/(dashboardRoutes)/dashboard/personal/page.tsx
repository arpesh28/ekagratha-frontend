import MainContainer from "@/components/dashboard/mainContainer";
import ListView from "@/components/dashboard/tasks/listView/taskListView";

const Register = () => {
  return (
    <MainContainer>
      <ListView title="Todo" subTitle="Some pending work" />
      <ListView title="In Progress" subTitle="Almost There!" />
      <ListView title="Completed" subTitle="Great Job!" />
    </MainContainer>
  );
};

export default Register;
