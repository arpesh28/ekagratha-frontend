import MainContainer from "@/components/dashboard/mainContainer";
import TeamCard from "@/components/dashboard/teams/teamCard";

const Register = () => {
  return (
    <MainContainer classes="flex items-start gap-2 w-full  lg:w-[calc(100%-30px)] h-[calc(100%-156px)] lg:h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </MainContainer>
  );
};

export default Register;
