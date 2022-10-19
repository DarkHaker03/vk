import style from './styles.module.scss';

interface Props {
    onChange?: () => void;
}

export const Search = ({ onChange }: Props) => (
  <div className={style.search}>
    <input onChange={onChange} type="text" placeholder="Search" className={style.searchInput} />
  </div>
);
