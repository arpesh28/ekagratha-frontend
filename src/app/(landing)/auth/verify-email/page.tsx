import RightContent from "@/components/landing/onboarding/rightContent";
import LeftContent from "@/components/landing/onboarding/leftContent";
import SocialButtonGroup from "@/components/landing/onboarding/socialButtonGroup";
import VerifyEmail from "@/components/landing/onboarding/verifyEmail";

const Register = () => {
  return (
    <main className="min-h-screen container mx-auto items-center w-screen grid grids-cols-1 lg:grid-cols-5 lg:mt-[-104px] py-12 md:py-0">
      <LeftContent />
      <div className="mt-10 md:mt-0 lg:col-span-2 flex justify-between items-center flex-col md:px-12 w-full ">
        <VerifyEmail />
      </div>
    </main>
  );
};

export default Register;
