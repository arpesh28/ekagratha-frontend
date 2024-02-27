"use client";

import SignUpForm from "@/forms/signupForm";
import { usePathname, useRouter } from "next/navigation";

const RightContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currPage = pathname?.split("/")?.[2];
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-wider text-textPrimary text-center mb-3 capitalize">
        {currPage}
      </h1>
      <p className="text-md text-gray-400 mb-5 text-center">
        Streamline Your Day, One Task at a Time,{" "}
        <span className="capitalize">{currPage}</span> Now!
      </p>

      {currPage === "login" ? <SignUpForm /> : <SignUpForm />}
    </div>
  );
};

export default RightContent;
