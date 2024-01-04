import Form from "@/components/landing/onboarding/form";
import SocialButtonGroup from "@/components/landing/onboarding/socialButtonGroup";
import Image from "next/image";

const Register = () => {
  return (
    <main className="min-h-screen container mx-auto items-center w-screen grid grids-cols-1 lg:grid-cols-5 lg:mt-[-104px] py-12 md:py-0">
      <div className="lg:col-span-3 md:flex flex-row justify-start items-center relative">
        <div className="w-64 h-64 md:w-96 md:h-96 bg-accent blur-3xl top-0 left-0 opacity-30 absolute md:top-[-10rem]  md:left-[-10rem] "></div>
        <div className="w-64 h-64 md:w-96 md:h-96 bg-primary blur-3xl bottom-0 right-0  opacity-30 absolute md:bottom-[-6rem]  md:right-[15rem]"></div>
        <div className="text-content text-left relative lg:top-[-30px]">
          <h1 className="text-3xl text-foreground md:text-5xl font-semibold tracking-wider text-textPrimary z-10 text-center md:text-left">
            Time Mastery <br />
            Starts Here
          </h1>
          <p className="text-sm md:text-lg tracking-wider opacity-50 mt-2 md:mt-5 font-medium text-wrap md:max-w-72 z-10 text-center md:text-left">
            Seamlessly Sign In to Take Control of Your Schedule
          </p>
        </div>
        <div className="absolute md:block right-0 top-[-100px] lg:relative lg:top-[50px] md:z-0 opacity-20 md:opacity-100">
          <Image
            alt="Register Illustration"
            height={400}
            width={400}
            priority
            className="w-72 lg:w-96"
            src="/Images/register-illustration.svg"
          />
        </div>
      </div>

      <div className="mt-10 md:mt-0 lg:col-span-2 flex justify-between items-center flex-col md:px-12 w-full ">
        <Form />
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
