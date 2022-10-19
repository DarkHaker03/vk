import clsx from 'clsx';
import { ReactNode } from 'react';
import style from './styles.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Icon = ({ children, className, onClick }: Props) => (
  <button type="button" onClick={onClick} className={clsx(style.icon, className)}>
    {children}
  </button>
);
