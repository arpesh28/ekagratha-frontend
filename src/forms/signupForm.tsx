import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

//  Components
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const SignUpForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => router.replace("/dashboard/personal")}
    >
      <div className="mb-8">
        <div className="pb-2">
          <Input
            type="email"
            {...register("email")}
            placeholder="Enter Your Email"
            className="mt-1 bg-input shadow-sm border-0"
          />
        </div>
        <div>
          <Input
            {...register("password")}
            type="password"
            placeholder="Enter Your Password"
            className="mt-1 bg-input shadow-sm border-0"
          />
        </div>
      </div>
      <Button className="w-full bg-primary uppercase" type="submit">
        {pathname?.split("/")?.[2]}
      </Button>
    </form>
  );
};

export default SignUpForm;
