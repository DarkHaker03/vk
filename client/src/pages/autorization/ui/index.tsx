import { FC } from 'react';
import { Header } from 'widgets/header';
import SideBar from 'widgets/side-bar/ui';
// Раскомменте как только соберётесь использовать стили
// import style from './styles.module.scss';

const Autorization: FC = () => (
  <div>
    <Header />
    <SideBar />
  </div>
);

export { Autorization };
