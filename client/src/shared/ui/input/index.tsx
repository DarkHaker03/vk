import React from 'react';
import clsx from 'clsx';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './styles.module.scss';

type InputType = 'text' | 'email' | 'password' | 'tel' | 'number';

interface Props extends React.HTMLProps<HTMLInputElement> {
  className: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: InputType;
  placeholder: string;
}

const Input = ({ className, type, onChange, placeholder }: Props) => (
  <label className={styles.inputLabel} htmlFor="id1">
    <input
      id="id1"
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      className={clsx(styles[className])}
    />
    {type === 'password' ? (
      <span className={styles.passwordEye}>
        <AiOutlineEyeInvisible />
      </span>
    ) : null}
  </label>
);

export default Input;
