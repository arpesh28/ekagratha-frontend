"use client";
import { usePathname, useRouter } from "next/navigation";

//  Components
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const Form = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <form
      className="w-full"
      onSubmit={(e) => router.replace("/dashboard/personal")}
    >
      <h1 className="text-2xl md:text-3xl font-semibold tracking-wider text-textPrimary text-center mb-3 capitalize">
        {pathname?.split("/")?.[2]}
      </h1>
      <p className="text-md text-gray-400 mb-5 text-center">
        Streamline Your Day, One Task at a Time,{" "}
        <span className="capitalize">{pathname?.split("/")?.[2]}</span> Now!
      </p>
      <div className="flex flex-col">
        <div className="mb-8">
          <div className="pb-2">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="mt-1 bg-input shadow-sm border-0"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Enter Your Password"
              className="mt-1 bg-input shadow-sm border-0"
            />
          </div>
        </div>
        <Button className="w-full bg-primary uppercase" type="submit">
          {pathname?.split("/")?.[2]}
        </Button>
      </div>
    </form>
  );
};

export default Form;
