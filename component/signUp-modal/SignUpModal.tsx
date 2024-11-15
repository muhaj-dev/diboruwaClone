"use client";
import Modal from "../Modal";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import AuthForm, { AuthField } from "../AuthForm";
import React, { useEffect, useState } from "react";
import NotificationModal from "../NotificationModal";
import { AuthButton } from "../shared/Button";
import { useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import styles from "./signUpModal.module.css";

type AuthModalProps = {
  type: "signup" | "signin";
  AuthCloseModal: () => void;
  switchModal: (type: "signup" | "signin") => void;
  isModal?: boolean;
};

const signUpFields: AuthField[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter a password",
  },
];

export const SignUpModal: React.FC<AuthModalProps> = ({
  type,
  AuthCloseModal,
  switchModal,
  isModal = false,
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    signup,
    loading,
    showModal,
    modalMessage,
    modalErrorType,
    closeModal,
  } = useAuth();
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (session && session.user) {
      isModal = false;
      router.push("/dashboard");
    }
  }, [session, router, isModal]);

  const handleSignUp = async (formData: { [key: string]: string }) => {
    await signup(formData);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const isFormValid = () => {
    const values = Object.values(formData);
    const hasEmptyFields = values.some((value) => value.trim() === "");
    return !hasEmptyFields;
  };

  return (
    <div className={styles.SignUp_container}>
      <h2 className={styles.SignUp_Title}>Sign Up</h2>
      <form>
        <div className={styles.AuthButtons}>
          <AuthButton
            className={styles.Auth_Button}
            icon={FcGoogle}
            text="Sign Up with Google"
          />
          <AuthButton
            className={styles.Auth_Button}
            icon={FaFacebook}
            text="Sign Up with Facebook"
          />
        </div>
        <div>
          <Modal open={isModal} onClose={() => router.back()}>
            <AuthForm
              title="Sign Up"
              fields={signUpFields}
              onSubmit={handleSignUp}
              onInputChange={handleInputChange}
              submitButtonText="Sign Up"
              loading={loading}
              isFormValid={isFormValid()}
            />
          </Modal>
          {showModal && (
            <NotificationModal
              message={modalMessage}
              errorType={modalErrorType}
              onClose={closeModal}
            />
          )}
        </div>
      </form>
    </div>
  );
};
