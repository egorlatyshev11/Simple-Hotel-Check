import { FC } from "react";

import cn from "classnames";

import s from "./input.module.scss";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  label,
  className,
  type = "text",
}) => {
  return (
    <div>
      {label ? <span className={s.label}>{label}</span> : null}
      <input
        onChange={(e) => onChange(e.target.value)}
        type={type}
        className={cn(s.input, className)}
        value={value}
      />
    </div>
  );
};

export default Input;
