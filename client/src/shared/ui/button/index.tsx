import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: Props) => (
  <button
    onClick={onClick}
    className={clsx(styles.btn, styles[className])}
    type="button"
  >
    {children}
  </button>
);

export default Button;
