// import { Button } from "react-daisyui";

const Register = () => {
  return (
    <main className="mx-auto container min-h-screen flex items-center justify-center w-screen">
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-2 flex flex-row justify-center items-center">
          <div className="text-content text-left">
            <h1 className="text-5xl font-medium tracking-wider text-textPrimary">
              Time Mastery <br />
              Starts Here
            </h1>
            <p className="text-md tracking-wider mt-5 font-light text-wrap max-w-56">
              Seamlessly Sign In to Take Control of Your Schedule
            </p>
          </div>
          <div className="text-content text-left">
            <h1 className="text-5xl font-medium tracking-wider ">
              Time Mastery <br />
              Starts Here
            </h1>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          Flex 3
        </div>
      </div>
    </main>
  );
};

export default Register;
