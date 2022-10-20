import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

const Button = ({ children, className }: Props) => {
  return (
    <button className={clsx(styles.btn, styles[className])}>{children}</button>
  );
};

export default Button;
