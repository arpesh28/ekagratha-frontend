import MainContainer from "@/components/dashboard/mainContainer";
import BoardView from "@/components/dashboard/tasks/boardView/taskBoardView";

const Register = () => {
  return (
    <MainContainer classes="flex items-start space-x-4 w-[calc(100%-30px)]">
      <BoardView title="Todo" subTitle="Some Pending Tasks" />
      <BoardView title="Todo" subTitle="Some Pending Tasks" />
      <BoardView title="Todo" subTitle="Some Pending Tasks" />
    </MainContainer>
  );
};

export default Register;
