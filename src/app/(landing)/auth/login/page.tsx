import LeftContent from "@/components/landing/onboarding/leftContent";
import RightContent from "@/components/landing/onboarding/rightContent";
import SocialButtonGroup from "@/components/landing/onboarding/socialButtonGroup";

const Register = () => {
  return (
    <main className="min-h-screen container mx-auto items-center w-screen grid grids-cols-1 lg:grid-cols-5 lg:mt-[-104px] py-12 md:py-0">
      <LeftContent />
      <div className="mt-10 md:mt-0 lg:col-span-2 flex justify-between items-center flex-col md:px-12 w-full ">
        <RightContent />
        <span
          className="w-full my-8 text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-card-foreground 
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-card-foreground before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-card-bg-card-foreground tracking-wide"
        >
          Or connect with
        </span>
        <SocialButtonGroup />
      </div>
    </main>
  );
};

export default Register;
