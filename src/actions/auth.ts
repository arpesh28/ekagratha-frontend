import { LoginDataType } from "@/lib/typings/types/onboarding.types";
import api from "./api";

export const loginAction = async (data: LoginDataType) => {
  try {
    const response = await api.post("/auth/login", data);
    return response;
  } catch (err) {
    console.error("error:", err);
    return err;
  }
};

export const registerAction = async (data: LoginDataType) => {
  try {
    const response = await api.post("/auth/register", data);
    return response;
  } catch (err) {
    console.error("error:", err);
    return err;
  }
};
