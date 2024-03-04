export const errorMessages = {
  INVALID_EMAIL: "Email is invalid.",
  EMAIL_REQUIRED: "Email is required.",
  PASSWORD_REQUIRED: "Password is required.",
  PASSWORD_INVALID:
    "Password must be at least 8 characters long & must contain at least one letter, one number & one special character.",
  UNKNOWN_ERROR: "Something Went wrong",
};

export const fieldRequiredErrorMessage = (name: string) => {
  return `${name} is required.`;
};

export const successMessages = {
  LOGIN_SUCCESS: "Logged in successfully.",
  REGISTER_SUCCESS: "Your account has been registered.",
};
