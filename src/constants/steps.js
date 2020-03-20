import React from "react";
import FirstStepContent from "../components/FirstStepContent";
import SecondStepContent from "../components/SecondStepContent";
import Title from "antd/lib/typography/Title";

export default
  [
    {
      id: 0,
      pageTitle: "Escolha o tipo de matéria",
      stepTitle: "Escolha",
      description: "Tipo da matéria",
      content: <FirstStepContent />
    },
    {
      id: 1,
      pageTitle: "Preencha as notas",
      stepTitle: "Preencha",
      description: "Quanto você tirou? (ou está pensando em tirar...)",
      content: <SecondStepContent />
    },
    {
      id: 2,
      pageTitle: "DON'T PANIC",
      stepTitle: "Reflita",
      description: "Estamos no caminho certo?",
      content: <Title level={2}>60</Title>
    }
  ] 
