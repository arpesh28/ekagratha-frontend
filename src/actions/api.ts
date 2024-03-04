import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor to add common headers
api.interceptors.request.use(
  (config) => {
    const token = "123"; // TODO: replace with cookie token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface IErrorBase<T> {
  error: Error | AxiosError<T>;
  type: "axios-error" | "stock-error";
}

interface IAxiosError<T> extends IErrorBase<T> {
  error: AxiosError<T>;
  type: "axios-error";
}
interface IStockError<T> extends IErrorBase<T> {
  error: Error;
  type: "stock-error";
}

const axiosErrorHandler = <T>(
  callback: (err: IAxiosError<T> | IStockError<T>) => void
) => {
  return (error: Error | AxiosError<T>) => {
    if (axios.isAxiosError(error)) {
      callback({
        error: error,
        type: "axios-error",
      });
    } else {
      callback({
        error: error,
        type: "stock-error",
      });
    }
  };
};

export { api, axiosErrorHandler };
