"use client";

//  Components
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Form = () => {
  return (
    <form className="w-full">
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
        <Button className="w-full">Register</Button>
      </div>
    </form>
  );
};

export default Form;
