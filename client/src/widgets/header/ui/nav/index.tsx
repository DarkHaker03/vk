import { BsGrid3X3Gap } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';

import { Icon } from 'shared/ui/icon';
import { Avatar } from 'shared/ui/avatar';
import style from './styles.module.scss';

export const Nav = () => (
  <nav className={style.nav}>
    <Icon>
      <BsGrid3X3Gap fill="gray" size={24} />
    </Icon>
    <div className={style.navAvatarBlock}>
      <Avatar width="32" />
      <RiArrowDropDownLine size={24} fill="gray" />
    </div>
  </nav>
);
