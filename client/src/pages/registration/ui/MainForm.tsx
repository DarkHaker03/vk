import React from 'react';
import vkIcon from 'shared/assets/img/vk.png';
import Button from 'shared/ui/button';
import Input from 'shared/ui/input';
import styles from './styles.module.scss';

interface Props {
  title: string;
  subTitle: string;
  palceholder: string;
  warningText?: React.ReactNode;
  fc?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainForm = ({ title, subTitle, warningText, palceholder, fc }: Props) => (
  <div className={styles.registration}>
    <div className={styles.registrationBlock}>
      <img className={styles.vkIcon} src={vkIcon} alt="vk icon" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
      <form className={styles.form}>
        <Input className="formInput" type="email" placeholder={palceholder} />
        <Button className="mainBtn">продолжить</Button>
      </form>
      {warningText && <div className={styles.warningText}>{warningText}</div>}
    </div>
  </div>
);

export default MainForm;
