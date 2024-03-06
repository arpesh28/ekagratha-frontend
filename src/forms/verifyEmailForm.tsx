import { VerifyEmailDataType as FormData } from "@/lib/typings/types/onboarding.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { OTPInput, SlotProps } from "input-otp";

//  Components
//  Components
import { verifyEmailOTPAction } from "@/actions/auth";
import { AppRoutes } from "@/lib/constants/appRoutes";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/lib/zod/auth";
import { Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const VerifyEmailForm = () => {
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
    const response: any = await verifyEmailOTPAction(data);
    if (response?.status === 200) {
      router.replace(AppRoutes.dashboard);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="my-10">
        <OTPInput
          maxLength={6}
          containerClassName="group flex items-center has-[:disabled]:opacity-30 w-full"
          render={({ slots }) => (
            <>
              <div className="flex w-full">
                {slots.slice(0, 4).map((slot, idx) => (
                  <>
                    <Slot key={idx} {...slot} />
                    {idx < 3 && <FakeDash />}
                  </>
                ))}
              </div>
            </>
          )}
        />
      </div>

      <Button
        className="w-full uppercase bg-primary"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loader2 className="animate-spin" /> : <>Submit</>}
      </Button>
    </form>
  );
};

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative w-1/4 h-12 rounded-md text-sm shadow-sm px-3 py-1 !bg-transparent",
        "flex items-center justify-center",
        "transition-all duration-300",
        "ring-border ring-2",
        { "!ring-ring": props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

// You can emulate a fake textbox caret!
function FakeCaret() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-caret-blink">
      <div className="w-px h-4 duration-1000 bg-white animate-pulse" />
    </div>
  );
}

// Inspired by Stripe's MFA input.
function FakeDash() {
  return (
    <div className="flex items-center justify-center w-10">
      <div className="w-3 h-1 rounded-full bg-border" />
    </div>
  );
}

// tailwind.config.ts for the blinking caret animation.
const config = {
  theme: {
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
    },
  },
};

export default VerifyEmailForm;
