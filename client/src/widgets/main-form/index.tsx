import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import vkIcon from 'shared/assets/img/vk.png';
import Button from 'shared/ui/button';
import Input from 'shared/ui/input';
import styles from './styles.module.scss';

type InputType = 'text' | 'email' | 'password' | 'tel' | 'number';

interface Props {
  title: string;
  subTitle: string;
  palceholder: string;
  warningText?: React.ReactNode;
  gotToBack?: boolean;
  inpType: InputType;
  prev?: () => void;
  handleNextStep?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainForm = ({
  title,
  subTitle,
  warningText,
  palceholder,
  gotToBack,
  prev,
  handleNextStep,
  inpType,
}: Props) => (
  <div className={styles.registration}>
    <div className={styles.registrationBlock}>
      {gotToBack ? (
        <button type="button" onClick={prev} className={styles.goToBack}>
          <BiLeftArrowAlt />
        </button>
      ) : (
        ''
      )}
      <img className={styles.vkIcon} src={vkIcon} alt="vk icon" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
      <form className={styles.form}>
        <Input className="formInput" type={inpType} placeholder={palceholder} />
        <Button onClick={handleNextStep} className="mainBtn">
          продолжить
        </Button>
      </form>
      {warningText && <div className={styles.warningText}>{warningText}</div>}
    </div>
  </div>
);

export default MainForm;
