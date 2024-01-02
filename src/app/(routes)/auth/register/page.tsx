// import { Button } from "react-daisyui";

import { Button } from "@/ui/components/ui/button";
import { Input } from "@/ui/components/ui/input";
import Image from "next/image";

const Register = () => {
  return (
    <main className="mx-auto container min-h-screen flex items-center justify-center w-screen">
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

        <div className="col-span-1 flex justify-center items-center px-12 w-full">
          <form>
            <div className="flex flex-col">
              <div className="pb-12">
                <div className="pb-4">
                  <Input type="email" placeholder="Enter Your Email" />
                </div>
                <div>
                  <Input type="password" placeholder="Enter Your Password" />
                </div>
              </div>
              <Button className="text-textDark w-full">Click Me</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
