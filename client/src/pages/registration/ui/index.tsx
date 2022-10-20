import React from "react";
import styles from "./styles.module.scss";
import vkIcon from "../../../shared/icon/ui/vk.png";
import Button from "shared/ui/button";
import Input from "shared/ui/input";

const Registration = () => (
  <div className={styles.registration}>
    <div className={styles.registrationBlock}>
      <img className={styles.vkIcon} src={vkIcon} alt="vk icon" />
      <h1 className={styles.title}>Введите почту</h1>
      <p className={styles.subTitle}>
        Ваша почта будет использоваться для входа в аккаунт
      </p>
      <form className={styles.form}>
        <Input className="formInput" type="email" placeholder="Введите ваш Email" />
        <Button className="mainBtn">продолжить</Button>
      </form>
      <p className={styles.warningText}>
        <span>Нажимая "Продолжить" вы принимаете</span> пользовательское
        соглашение и политику конфедициальности
      </p>
    </div>
  </div>
);

export { Registration };
