"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useForm from "@/hooks/useForm";
import Button from "./ui/button/Button";
import Input from "./ui/input/Input";
import Link from "next/link";
import Loader from "./Loader";

export interface AuthFormProps {
  title: string;
  fields: AuthField[];
  onSubmit: (formData: { [key: string]: string }) => void;
  onInputChange?: (name: string, value: string) => void;
  submitButtonText?: string;
  loading: boolean;
  isFormValid?: boolean;
  switchModal?: (type: "signup" | "signin") => void; // added prop for switching modals
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

const AuthFormAlternateRoute = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const AuthFormSmall = styled.small`
  color: #555555;
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

// Function to check password strength and provide feedback
function getPasswordStrengthError(password: string) {
  if (password.length === 0) return ""; // No errors for empty input

  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*]/.test(password);

  let score = 0;
  if (password.length >= minLength) score++;
  if (hasUppercase) score++;
  if (hasLowercase) score++;
  if (hasDigits) score++;
  if (hasSpecialChars) score++;

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
      return "Invalid";
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
  switchModal, // Destructure switchModal to handle modal switching
}) => {
  const initialState = fields.reduce<{ [key: string]: string }>(
    (acc, field) => ({ ...acc, [field.name]: "" }),
    {}
  );

  const [passwordMatchError, setPasswordMatchError] = useState<string>("");
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);

  const { formData, handleChange, handleSubmit, resetForm, errors } = useForm(
    initialState,
    () => {
      onSubmit(formData);
      resetForm();
    }
  );

  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  }, [formData.password, formData.confirmPassword]);

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
              placeHolder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => {
                handleChange(e, field.name);
                if (onInputChange) {
                  onInputChange(field.name, e.target.value);
                }
              }}
              error={
                field.name === "password"
                  ? getPasswordStrengthError(formData[field.name])
                  : errors[field.name]
              }
              showPasswordToggle={true}
            />
          </AuthFormFieldWrapper>
        ))}
        
        <Button
          size="medium"
          color="primary"
          disabled={loading || !isFormFilled || !!passwordMatchError}
        >
          {loading ? <Loader /> : submitButtonText}
        </Button>
        <AuthFormAlternateRoute>
          {title === "Sign In" ? (
            <>
              <AuthFormSmall
                onClick={() => switchModal && switchModal("signup")}
              >
                Don&#39;t have an account? <div>Sign Up</div>
              </AuthFormSmall>
              <AuthFormSmall>
                <Link href="/forgot-password">Forgot Password?</Link>
              </AuthFormSmall>
            </>
          ) : (
            <AuthFormSmall onClick={() => switchModal && switchModal("signin")}>
              Already have an account? <div>Sign In</div>
            </AuthFormSmall>
          )}
        </AuthFormAlternateRoute>
      </AuthFormWrapper>
    </AuthFormContainer>
  );
};

export default AuthForm;
