import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//  Components
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { loginSchema } from "@/lib/zodSchema/login";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type FormData = z.infer<typeof loginSchema>;

const SignUpForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) =>
      setTimeout(() => {
        res("asdf");
      }, 5000)
    );
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8">
        <div className="pb-2">
          <Input
            type="email"
            {...register("email")}
            id="email"
            placeholder="Enter Your Email"
            className={cn(
              "mt-1 bg-input shadow-sm border-0",
              errors.email && "!ring-red-500"
            )}
          />
          {errors?.email && (
            <div className="text-red-500 mt-1 font-normal text-sm">
              {errors.email.message}
            </div>
          )}
        </div>
        <div>
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter Your Password"
            className={cn(
              "mt-1 bg-input shadow-sm border-0 ",
              errors.password && "!ring-red-500"
            )}
          />
          {errors?.password && (
            <div className="text-red-500 mt-1 font-normal text-sm">
              {errors.password.message}
            </div>
          )}
        </div>
      </div>
      <Button
        className="w-full bg-primary uppercase"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin" />
        ) : (
          pathname?.split("/")?.[2]
        )}
      </Button>
    </form>
  );
};

export default SignUpForm;
