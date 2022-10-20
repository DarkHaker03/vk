// icons
import { CiMusicNote1 } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';

// ui
import { Icon } from 'shared/icon';
import { Logo } from './logo';
import { Search } from './search';
import { Nav } from './nav';

// styles
import style from './styles.module.scss';

interface Props {
    showLoginVersion?: boolean;
}

export const Header = ({ showLoginVersion = false }: Props) => (
  <header className={style.header}>
    <div className={style.headerWrapper}>
      <div className={style.headerContent}>
        <Logo />
        <Search />
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
            <Nav />
          </>
        )}
      </div>
    </div>
  </header>
);
