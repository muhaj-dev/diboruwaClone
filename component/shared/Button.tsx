import React from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}
interface AuthButtonProps {
  text: string;
  icon: IconType;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  onClick,
}) => {
  return (
    <button type="button" className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
export const AuthButton: React.FC<AuthButtonProps> = ({
  text,
  icon: Icon,
  className = "",
  onClick,
}) => {
  return (
    <button type="button" className={`button ${className}`} onClick={onClick}>
      <Icon />
      {text}
    </button>
  );
};
