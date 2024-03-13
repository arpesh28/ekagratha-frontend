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

export const verifySchema = z.object({
  email: z
    .string()
    .min(1, { message: fieldRequiredErrorMessage("Email") })
    .email({ message: errorMessages.INVALID_EMAIL }),
  otp: z
    .string()
    .min(4, { message: fieldRequiredErrorMessage("OTP") })
    .length(4, { message: fieldRequiredErrorMessage("OTP") }),
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
