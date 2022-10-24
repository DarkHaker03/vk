import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  header?: ReactNode;
  sideBar?: ReactNode;
  main?: ReactNode;
};

const Layout: FC<Props> = ({ header, main, sideBar }) => (
  <>
    {header}
    <div className={styles.layout}>
      <div className={styles.container}>
        {sideBar}
        {main}
      </div>
    </div>
  </>
);

export { Layout };
