import React from "react";
import MainForm from "./MainForm";

const warningText = (
  <p>
    <span>Нажимая "Продолжить" вы принимаете</span> пользовательское соглашение
    и политику конфедициальности
  </p>
);

const Registration = () => {
  const [nextStep, setNextStep] = React.useState<boolean>(false);

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(13);
  };

  return (
    <>
      {nextStep ? (
        <MainForm
          title="Введите пароль"
          palceholder="Введите пароль"
          subTitle="Введите ваш текущий пароль привязанный к email"
        />
      ) : (
        <MainForm
          fc={handleNextStep}
          title="Введите почту"
          palceholder="Введите email"
          subTitle="Ваша почта будет использоваться для входа в аккаунт"
          warningText={warningText}
        />
      )}
    </>
  );
};

export { Registration };
