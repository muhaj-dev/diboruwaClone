"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useForm from "@/hooks/useForm";
import Button from "./ui/button/Button";
import Input from "./ui/input/Input";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export interface AuthFormProps {
  title?: string;
  fields: AuthField[];
  onSubmit: (formData: { [key: string]: string }) => void;
  onInputChange?: (name: string, value: string) => void;
  submitButtonText?: string;
  loading: boolean;
  isFormValid?: boolean;
}

export interface AuthField {
  name: string;
  label: string;
    type: string;
    placeholder: string;
}

const AuthFormContainer = styled.div`
  /* Add your styling for the container here */
`;

const AuthFormTitle = styled.h2`
  text-transform: capitalize;
  margin-bottom: 30px;
`;

const AuthFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AuthFormFieldWrapper = styled.div``;

const AuthFormAlternateRoute = styled.div``;

const AuthFormSmall = styled.small`
  a {
    color: #555555;
    text-decoration: none;
  }
`;

// Function to check password strength and provide feedback
function getPasswordStrengthError(password: string) {
  // Check if the input is empty
  if (password.length === 0) {
    return ""; // No errors for empty input
  }

  // Define your custom criteria here
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*]/.test(password);

  // Calculate the strength score based on the criteria
  let score = 0;
  if (password.length >= minLength) score++;
  if (hasUppercase) score++;
  if (hasLowercase) score++;
  if (hasDigits) score++;
  if (hasSpecialChars) score++;

  // Use a switch case to provide feedback based on the score
  switch (score) {
    case 0:
      return "Very Weak";
    case 1:
      return "Weak";
    case 2:
      return "Moderate";
    case 3:
      return "Strong";
    case 4:
      return "Excellent";
    default:
      return "Invalid"; // Handle unexpected cases
  }
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  fields,
  onSubmit,
  onInputChange,
  submitButtonText = "Submit",
  loading = false,
  isFormValid,
}) => {
  const initialState = fields.reduce<{ [key: string]: string }>(
    (acc, field) => ({
      ...acc,
      [field.name]: "",
    }),
    {}
  );

  const path = usePathname();

  const [passwordMatchError, setPasswordMatchError] = useState<string>("");
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);

  const { formData, handleChange, handleSubmit, resetForm, errors } = useForm(
    initialState,
    () => {
      onSubmit(formData);
      resetForm();
    }
  );

  // Function to check if password and confirm password match
  useEffect(() => {
    if (path === "/signup" && formData.password !== formData.confirmPassword) {
      setPasswordMatchError("Passwords do not match");
    } else if (path === "/signup") {
      setPasswordMatchError("");
    }
  }, [formData.password, formData.confirmPassword, path]);

  // Function to check if all fields are filled
  useEffect(() => {
    const isFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormFilled(isFilled);
  }, [formData]);

  return (
    <AuthFormContainer>
      <AuthFormTitle>{title}</AuthFormTitle>
      <AuthFormWrapper onSubmit={handleSubmit}>
        {fields.map((field) => (
          <AuthFormFieldWrapper key={field.name}>
            <Input
              label={field.label}
              name={field.name}
              type={field.type}
              id={field.name}
              value={formData[field.name]}
              // onChange={(e) => handleChange(e, field.name)}
              onChange={(e) => {
                handleChange(e, field.name);
                if (onInputChange) {
                  onInputChange(field.name, e.target.value);
                }
              }}
              error={
                path === "/signup" && field.name === "password"
                  ? getPasswordStrengthError(formData[field.name])
                  : errors[field.name]
              }
              showPasswordToggle={true}
            />
          </AuthFormFieldWrapper>
        ))}
        {passwordMatchError && (
          <p style={{ color: "red" }}>{passwordMatchError}</p>
        )}

        {/* <AuthFormAlternateRoute className="alternate__route mb-2 float-right">
          {path === "/signin" ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <AuthFormSmall className="text-[10px]">
                Don&#39;t have an account?{" "}
                <Link href={"/signup"} className=" text-gray-800">
                  Sign Up
                </Link>
              </AuthFormSmall>
              <AuthFormSmall className="text-[10px]">
                <Link href={"/forgot-password"} className=" text-gray-800">
                  Forgot Password?
                </Link>
              </AuthFormSmall>
              <br />
            </div>
          ) : (
            <AuthFormSmall className="text-[12px]">
              Already have an account?{" "}
              <Link href={"/signin"} className="text-primary">
                Sign In
              </Link>
            </AuthFormSmall>
          )}
        </AuthFormAlternateRoute> */}
        <Button
          size="medium"
          color="primary"
          disabled={loading || !isFormFilled || !!passwordMatchError}
        >
          {loading ? <Loader /> : submitButtonText}
        </Button>
      </AuthFormWrapper>
    </AuthFormContainer>
  );
};

export default AuthForm;
