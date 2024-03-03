import { loginSchema } from "@/lib/zod/login";
import { z } from "zod";

export type LoginDataType = z.infer<typeof loginSchema>;
