"use client";

import LoginForm from "@/forms/loginForm";
import SignUpForm from "@/forms/registerForm";
import VerifyEmailForm from "@/forms/verifyEmailForm";
import { usePathname, useRouter } from "next/navigation";

const VerifyEmail = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currPage = pathname?.split("/")?.[2];
  return (
    <div className="w-full">
      <h1 className="mb-3 text-2xl font-semibold tracking-wider text-center capitalize md:text-3xl text-textPrimary">
        Verify Your Email!
      </h1>
      <p className="text-center text-gray-400 text-md">
        We have sent an OTP to your email address:{" "}
        <b className="text-primary">arpesh@gmail.com</b>. Please enter it below
        to verify.
      </p>

      <VerifyEmailForm />
    </div>
  );
};

export default VerifyEmail;
