import { loginSchema, registerSchema, verifySchema } from "@/lib/zod/auth";
import { z } from "zod";

export type LoginDataType = z.infer<typeof loginSchema>;
export type RegisterDataType = z.infer<typeof registerSchema>;
export type VerifyEmailDataType = z.infer<typeof verifySchema>;
