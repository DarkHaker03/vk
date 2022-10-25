import React from 'react';
import MainForm from 'widgets/main-form';

const warningText = (
  <p>
    <span>Нажимая &quot;Продолжить&quot; вы принимаете</span> пользовательское
    соглашение и политику конфедициальности
  </p>
);

const Registration = () => {
  const [nextStep, setNextStep] = React.useState<boolean>(false);

  const prev = () => {
    setNextStep(false);
  };

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNextStep(true);
  };

  return nextStep ? (
    <MainForm
      title="Введите пароль"
      palceholder="Введите пароль"
      subTitle="Введите ваш текущий пароль привязанный к email"
      gotToBack={nextStep}
      prev={prev}
      inpType="password"
    />
  ) : (
    <MainForm
      title="Введите почту"
      palceholder="Введите email"
      subTitle="Ваша почта будет использоваться для входа в аккаунт"
      warningText={warningText}
      handleNextStep={handleNextStep}
      inpType="email"
    />
  );
};

export { Registration };
