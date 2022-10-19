import { Link } from 'shared/link';

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
    icon: <CgProfile />,
  },
  {
    id: 2,
    title: 'Новости',
    url: '/news',
    icon: <TbNewSection />,
  },
  {
    id: 3,
    title: 'Мессенджер',
    url: '/messages',
    icon: <BiMessageRounded />,
  },
  {
    id: 4,
    title: 'Друзья',
    url: '/friends',
    icon: <FaUserFriends />,
  },
  {
    id: 5,
    title: 'Сообщества',
    url: '/groups',
    icon: <HiOutlineUserGroup />,
  },
  {
    id: 6,
    title: 'Photos',
    url: '/photos',
    icon: <MdOutlineInsertPhoto />,
  },
];

const SideBar = () => (
  <aside className={style.aside}>
    <ol className={style.asideLinks}>
      {links.map((link) => (
        <li className={style.asideLinksItem}>
          <Link url={link.url} className={style.asideLinksItemContent} key={link.id}>
            {link.icon}
            {link.title}
          </Link>
        </li>
      ))}
    </ol>
  </aside>
);

export default SideBar;
