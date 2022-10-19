import style from './styles.module.scss';

interface Props {
    width: string;
}

export const Avatar = ({ width }: Props) => (
  <img
    style={{ width: `${width}px` }}
    className={style.avatarImage}
    src="https://sun9-11.userapi.com/s/v1/if1/jpTPGOaOA_7cbvwsmtD5MehAonjTzGSosXEwv8-EGuaw6iNxlfWc4XLEVCjevS8VCHH7aQ.jpg?size=50x50&quality=96&crop=12,0,1017,1017&ava=1"
    alt="_blank"
  />
);
