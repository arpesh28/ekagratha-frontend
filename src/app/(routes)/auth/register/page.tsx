import Form from "@/components/onboarding/form";
import SocialButtonGroup from "@/components/onboarding/socialButtonGroup";
import Image from "next/image";

const Register = () => {
  return (
    <main className="min-h-screen mx-auto flex items-center w-full justify-around">
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-2 flex flex-row justify-center items-center relative">
          <div className="w-96 h-96 bg-purple-950 blur-3xl opacity-75 absolute top-[-10rem] left-[-10rem] z-0"></div>
          <div className="w-96 h-96 bg-blue-950 blur-3xl opacity-75 absolute bottom-[-6rem] right-[15rem] z-0"></div>
          <div className="text-content text-left relative top-[-30px]">
            <h1 className="text-5xl font-semibold tracking-wider text-textPrimary z-10">
              Time Mastery <br />
              Starts Here
            </h1>
            <p className="text-md tracking-wider mt-10 font-light text-wrap max-w-72 z-10">
              Seamlessly Sign In to Take Control of Your Schedule
            </p>
          </div>
          <div className="relative top-[50px]">
            <Image
              alt="Register Illustration"
              height={400}
              width={400}
              src="/Images/register-illustration.svg"
            />
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center flex-col px-12 w-full ">
          <Form />
          <span
            className="w-full my-8 text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-lightMain 
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-lightMain before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-lightMain tracking-wide"
          >
            Or connect with
          </span>
          <SocialButtonGroup />
        </div>
      </div>
    </main>
  );
};

export default Register;
