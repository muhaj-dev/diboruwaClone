// AuthModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { SignUpModal } from "./signUp-modal/SignUpModal";
import { SignInModal } from "./signIn-modal/SignInModal";

type AuthModalProps = {
  type: "signup" | "signin";
  closeModal: () => void;
  switchModal: (type: "signup" | "signin") => void;
};

const Backdrop = styled(motion.div as any)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div as any)`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  height: 100%;
  overflow-y: scroll;
`;

export const AuthModal: React.FC<AuthModalProps> = ({
  type,
  closeModal,
  switchModal,
}) => {
  return (
    <AnimatePresence>
      <Backdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <ModalContent
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e: any) => e.stopPropagation()}
        >
          {type === "signup" ? (
            <>
              <SignUpModal
                type="signup"
                AuthCloseModal={closeModal}
                switchModal={switchModal}
              />
            </>
          ) : (
            <>
              <SignInModal
                type="signup"
                AuthCloseModal={closeModal}
                switchModal={switchModal}
              />
            </>
          )}
        </ModalContent>
      </Backdrop>
    </AnimatePresence>
  );
};
