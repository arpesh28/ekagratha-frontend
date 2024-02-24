import MainContainer from "@/components/dashboard/mainContainer";
import BoardView from "@/components/dashboard/tasks/boardView/taskBoardView";

const Register = () => {
  return (
    <MainContainer classes="flex items-start space-x-4 w-full  lg:w-[calc(100%-30px)] h-[calc(100%-156px)] lg:h-auto">
      <BoardView title="Todo" subTitle="Some Pending Tasks" />
      <BoardView title="Todo" subTitle="Some Pending Tasks" />
      <BoardView title="Todo" subTitle="Some Pending Tasks" />
    </MainContainer>
  );
};

export default Register;
