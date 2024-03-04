import { errorMessages, successMessages } from "@/lib/constants/messages";
import { LoginDataType } from "@/lib/typings/types/onboarding.types";
import toast from "react-hot-toast";
import { api } from "./api";

export const loginAction = async (data: LoginDataType) => {
  try {
    const response = await api.post("/auth/login", data);
    toast.success(successMessages.LOGIN_SUCCESS);
    return response;
  } catch (err: any) {
    toast.error(err?.response?.data?.message ?? errorMessages.UNKNOWN_ERROR);
    return err;
  }
};

export const registerAction = async (data: LoginDataType) => {
  try {
    const response = await api.post("/auth/register", data);
    toast.success(successMessages.REGISTER_SUCCESS);
    return response;
  } catch (err: any) {
    toast.error(err?.response?.data?.message ?? errorMessages.UNKNOWN_ERROR);
    return err;
  }
};
