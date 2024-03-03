import z from "zod";
import { errorMessages } from "../constants/messages";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: errorMessages.EMAIL_REQUIRED })
    .email({ message: errorMessages.INVALID_EMAIL }),
  password: z.string().min(1, { message: errorMessages.PASSWORD_REQUIRED }),
});
