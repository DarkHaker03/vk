// icons
// eslint-disable-next-line import/no-extraneous-dependencies
import { CiMusicNote1 } from 'react-icons/ci';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoMdNotificationsOutline } from 'react-icons/io';

import style from './styles.module.scss';

// ui
import { Logo } from './logo';
import { Search } from './search';
import { Icon } from '../../../shared/icon';
import { Nav } from './nav';

interface Props {
    showSearch?: boolean;
    showLoginVersion?: boolean;
}

export const Header = ({ showSearch = true, showLoginVersion = false }: Props) => (
  <header className={style.header}>
    <div className={style.headerWrapper}>
      <div className={style.headerContent}>
        <Logo />
        {showSearch && <Search />}
        {!showLoginVersion && (
          <>
            <Icon className={style.headerNotify}>
              <IoMdNotificationsOutline size={24} fill="gray" />
            </Icon>
            <div className={style.headerMusicWrapper}>
              <Icon className={style.headerMusicContent}>
                <CiMusicNote1 size={24} fill="gray" />
              </Icon>
            </div>
          </>
        )}
        { !showLoginVersion && <Nav /> }
      </div>
    </div>
  </header>
);
