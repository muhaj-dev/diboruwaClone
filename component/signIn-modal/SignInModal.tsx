"use client";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthButton } from "../shared/Button";

import styles from "./signInModal.module.css"

import useAuth from "@/hooks/useAuth";
import AuthForm, { AuthField } from "../AuthForm";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import NotificationModal from "../NotificationModal";

type AuthModalProps = {
  type: "signup" | "signin";
  AuthCloseModal: () => void;
  switchModal: (type: "signup" | "signin") => void;
  isModal?: boolean;
};

const signInFields: AuthField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your Email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const SignInModal: React.FC<AuthModalProps> = ({
  type,
  AuthCloseModal,
  switchModal,
  isModal = false,
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    signin,
    loading,
    showModal,
    modalMessage,
    modalErrorType,
    closeModal,
  } = useAuth();
  const handleSignIn = async (formData: { [key: string]: string }) => {
    await signin(formData);
    // router.back();
  };

  useEffect(() => {
    if (session && session.user) {
      isModal = false;
      router.push("/dashboard");
    }
  }, [session, router, isModal]);

  return (
    <div className={styles.SignUp_container}>
      <h2 className={styles.SignUp_Title}>Sign In</h2>
      <form>
        <div className={styles.AuthButtons}>
          <AuthButton
            className={styles.Auth_Button}
            icon={FcGoogle}
            text="Continue with Google"
          />
          <AuthButton
            className={styles.Auth_Button}
            icon={FaFacebook}
            text="Continue with Facebook"
          />
        </div>

        <div className="">
          <Modal open={isModal} onClose={() => router.back()}>
            <AuthForm
              title="Sign In"
              fields={signInFields}
              onSubmit={handleSignIn}
              submitButtonText="Sign In"
              loading={loading}
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
