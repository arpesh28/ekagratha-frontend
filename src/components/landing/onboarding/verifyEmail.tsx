"use client";

import VerifyEmailForm from "@/forms/verifyEmailForm";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const encodedEmail = searchParams.get("email");
  if (!encodedEmail) {
    router.replace("/auth/register");
    return <></>;
  }
  const email = decodeURIComponent(encodedEmail);
  return (
    <div className="w-full">
      <h1 className="mb-3 text-2xl font-semibold tracking-wider text-center capitalize md:text-3xl text-textPrimary">
        Verify Your Email!
      </h1>
      <p className="text-center text-gray-400 text-md">
        We have sent an OTP to your email address:{" "}
        <b className="text-primary">{email}</b>. Please enter it below to
        verify.
      </p>

      <VerifyEmailForm email={email} />
    </div>
  );
};

export default VerifyEmail;
