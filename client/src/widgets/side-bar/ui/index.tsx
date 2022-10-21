import { Link } from 'shared/ui/link';

// icons - fix
import { BiMessageRounded } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaUserFriends } from 'react-icons/fa';
import { TbNewSection } from 'react-icons/tb';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineInsertPhoto } from 'react-icons/md';

import style from './style.module.scss';

const links = [
  {
    id: 1,
    title: 'Моя страница',
    url: '/profile',
    icon: <CgProfile size={25} />,
  },
  {
    id: 2,
    title: 'Новости',
    url: '/news',
    icon: <TbNewSection size={25} />,
  },
  {
    id: 3,
    title: 'Мессенджер',
    url: '/messages',
    icon: <BiMessageRounded size={25} />,
  },
  {
    id: 4,
    title: 'Друзья',
    url: '/friends',
    icon: <FaUserFriends size={25} />,
  },
  {
    id: 5,
    title: 'Сообщества',
    url: '/groups',
    icon: <HiOutlineUserGroup size={25} />,
  },
  {
    id: 6,
    title: 'Фотографии',
    url: '/photos',
    icon: <MdOutlineInsertPhoto size={25} />,
  },
];

const SideBar = () => (
  <aside className={style.aside}>
    <ol className={style.asideLinks}>
      {links.map((link) => (
        <li className={style.asideLinksItem}>
          <Link url={link.url} className={style.asideLinksItemContent} key={link.id}>
            {link.icon}
            <span className={style.asideLinksItemContentTitle}>
              {link.title}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  </aside>
);

export default SideBar;
