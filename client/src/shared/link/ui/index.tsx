import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import style from './styles.module.scss';

interface Props {
    url: string;
    children: ReactNode;
    className?: string;
}

export const Link = ({ url, children, className }: Props) => (
  <NavLink className={clsx(style.link, className)} to={url}>
    {children}
  </NavLink>
);
