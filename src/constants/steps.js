import React from "react";
import FirstStepContent from "../components/FirstStepContent";
import SecondStepContent from "../components/SecondStepContent";
import Title from "antd/lib/typography/Title";

export default ({ dispatchNextStep }) => {
  return [
    {
      id: 0,
      pageTitle: "Escolha o tipo de matéria",
      stepTitle: "Escolha",
      description: "Tipo da matéria",
      content: <FirstStepContent dispatchNextStep={dispatchNextStep} />
    },
    {
      id: 1,
      pageTitle: "Preencha suas notas",
      stepTitle: "Preencha",
      description: "Quanto você tirou?",
      content: <SecondStepContent dispatchNextStep={dispatchNextStep} />
    },
    {
      id: 2,
      pageTitle: "DON'T PANIC",
      stepTitle: "Reflita",
      description: "Estamos no caminho certo?",
      content: <Title level={2}>60</Title>
    }
  ];
};
