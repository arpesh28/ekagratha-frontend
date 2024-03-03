import { LoginDataType } from "@/lib/typings/types/onboarding.types";
import api from "./api";
import { AppRoutes } from "@/lib/constants/appRoutes";
import { AxiosError } from "axios";

export const loginAction = async (data: LoginDataType) => {
  try {
    const response = await api.post("/auth/login", data);
    return response;
  } catch (err) {
    console.error("error:", err);
    return err;
  }
};
