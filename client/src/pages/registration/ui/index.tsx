import React from 'react';
import MainForm from './MainForm';

const warningText = (
  <p>
    <span>Нажимая &quot;Продолжить&quot; вы принимаете</span> пользовательское
    соглашение и политику конфедициальности
  </p>
);

const Registration = () => {
  const [nextStep] = React.useState<boolean>(false);

  return nextStep ? (
    <MainForm
      title="Введите пароль"
      palceholder="Введите пароль"
      subTitle="Введите ваш текущий пароль привязанный к email"
    />
  ) : (
    <MainForm
      title="Введите почту"
      palceholder="Введите email"
      subTitle="Ваша почта будет использоваться для входа в аккаунт"
      warningText={warningText}
    />
  );
};

export { Registration };
