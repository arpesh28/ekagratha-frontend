import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RegisterDataType as FormData } from "@/lib/typings/types/onboarding.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

//  Components
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { registerSchema } from "@/lib/zod/auth";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { registerAction } from "@/actions/auth";
import { AppRoutes } from "@/lib/constants/appRoutes";
import { errorMessages, successMessages } from "@/lib/constants/messages";

const RegisterForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: FormData) => {
    const response: any = await registerAction(data);
    if (response?.status === 200) {
      toast.success(successMessages.REGISTER_SUCCESS);
      router.replace(AppRoutes.dashboard);
    } else {
      toast.error(
        response?.response?.data?.message ?? errorMessages.UNKNOWN_ERROR
      );
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8">
        <div className="pb-2">
          <Input
            type="name"
            {...register("name")}
            id="name"
            placeholder="Enter Your Name"
            className={cn(
              "mt-1 bg-input shadow-sm border-0",
              errors.name && "!ring-red-500"
            )}
          />
          {errors?.name && (
            <div className="mt-1 text-sm font-normal text-red-500">
              {errors.name.message}
            </div>
          )}
        </div>
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
            <div className="mt-1 text-sm font-normal text-red-500">
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
            <div className="mt-1 text-sm font-normal text-red-500">
              {errors.password.message}
            </div>
          )}
        </div>
      </div>
      <Button
        className="w-full uppercase bg-primary"
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

export default RegisterForm;
