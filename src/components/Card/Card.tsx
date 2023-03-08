import { FC, ReactNode } from "react";

import s from "./card.module.scss";

import cn from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={cn(s.container, className)}>{children}</div>;
};

export default Card;
