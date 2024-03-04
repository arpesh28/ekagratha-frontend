import z from "zod";
import {
  errorMessages,
  fieldRequiredErrorMessage,
} from "../constants/messages";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: fieldRequiredErrorMessage("Email") })
    .email({ message: errorMessages.INVALID_EMAIL }),
  password: z
    .string()
    .min(1, { message: fieldRequiredErrorMessage("Password") }),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, { message: fieldRequiredErrorMessage("Name") })
    .max(50),
  email: z
    .string()
    .min(1, { message: fieldRequiredErrorMessage("Email") })
    .email({ message: errorMessages.INVALID_EMAIL }),
  password: z
    .string()
    .min(1, { message: fieldRequiredErrorMessage("Password") })
    .min(8, { message: errorMessages.PASSWORD_INVALID })
    .max(16)
    .refine((value) => /[a-zA-Z]/.test(value), {
      message: errorMessages.PASSWORD_INVALID,
    })
    .refine((value) => /\d/.test(value), {
      message: errorMessages.PASSWORD_INVALID,
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: errorMessages.PASSWORD_INVALID,
    }),
});
