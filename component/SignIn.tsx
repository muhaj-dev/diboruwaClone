"use client";
import useAuth from "@/hooks/useAuth";
import AuthForm, { AuthField } from "./AuthForm";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import NotificationModal from "./NotificationModal";

interface SignInPageProps {
  isModal?: boolean;
}

const signInFields: AuthField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: 'Enter your Email'
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password"
  },
];

const SignIn: React.FC<SignInPageProps> = ({ isModal = false }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { signin, loading,  showModal,
    modalMessage,
    modalErrorType,
    closeModal, } = useAuth();
  const handleSignIn = async (formData: { [key: string]: string }) => {
    await signin(formData);
    // router.back();
  };

   useEffect(() => {
    if (session && session.user) {
      isModal = false
      router.push("/dashboard");
    }
  }, [session, router, isModal]);


  return (
    <div className="">
      <Modal open={isModal} onClose={() => router.back()}>
        <AuthForm
          title='Sign In'
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
  );
};

export default SignIn;
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Modal from "./Modal";
import AuthForm, { AuthField } from "./AuthForm";
import NotificationModal from "./NotificationModal";
import useAuth from "@/hooks/useAuth";

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

const SignIn: React.FC<{ isModal?: boolean }> = ({ isModal = false }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    signin,
    loading,
    showModal,
    modalMessage,
    modalErrorType,
    openModal, // Get openModal from useAuth
    closeModal,
  } = useAuth();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensuring the component has mounted before rendering
  }, []);

  useEffect(() => {
    if (session && session.user) {
      router.push("/dashboard"); // Redirect if user is already logged in
    }
  }, [session, router]);

  const handleSignIn = async (formData: { [key: string]: string }) => {
    try {
      await signin(formData); // Call sign-in logic from useAuth
      router.push("/dashboard"); // Redirect on successful sign-in
    } catch (error: any) {
      console.error("Sign-in error:", error);
      // Using openModal to show error message
      openModal("error", "Error signing in, please try again"); // Show modal with error message
    }
  };

  if (!isMounted) return null; // Only render after the component mounts

  return (
    <div>
      <Modal open={isModal} onClose={() => router.push("/")}>
        <AuthForm
          title="Sign In"
          fields={signInFields}
          onSubmit={handleSignIn}
          submitButtonText="Sign In"
          loading={loading}
        />
      </Modal>
      {/* Display Notification Modal */}
      {modalMessage && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default SignIn;
