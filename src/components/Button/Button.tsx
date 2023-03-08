import { FC } from "react";

import cn from "classnames";

import s from "./button.module.scss";

interface ButtonProps {
  onClick: () => void;
  title: string;
  className?: string;
  type?: "submit" | "reset" | "button";
}

const Button: FC<ButtonProps> = ({
  title,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={cn(s.button, className)}
      onClick={() => onClick()}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
