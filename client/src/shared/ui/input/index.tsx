import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type InputType = "text" | "email" | "password" | "tel" | "number";

interface Props extends React.HTMLProps<HTMLInputElement> {
  className: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: InputType;
  placeholder: string;
}

const Input = ({ className, type, onChange, placeholder }: Props) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      className={clsx(styles[className])}
    />
  );
};

export default Input;
