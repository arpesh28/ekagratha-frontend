import { loginSchema, registerSchema } from "@/lib/zod/auth";
import { z } from "zod";

export type LoginDataType = z.infer<typeof loginSchema>;
export type RegisterDataType = z.infer<typeof registerSchema>;
