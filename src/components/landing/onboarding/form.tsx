"use client";
import { useRouter } from "next/navigation";

//  Components
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const Form = () => {
  const router = useRouter();
  return (
    <form
      className="w-full"
      onSubmit={(e) => router.replace("/dashboard/personal")}
    >
      <h1 className="text-2xl md:text-3xl font-semibold tracking-wider text-textPrimary text-center mb-3">
        Register
      </h1>
      <p className="text-md text-gray-400 mb-5 text-center">
        Streamline Your Day, One Task at a Time, Register Now!
      </p>
      <div className="flex flex-col">
        <div className="mb-8">
          <div className="pb-2">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="mt-1"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Enter Your Password"
              className="mt-1"
            />
          </div>
        </div>
        <Button className="w-full" type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};

export default Form;
