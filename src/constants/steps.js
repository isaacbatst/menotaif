import React from "react";
import FirstStepContent from "../components/Content/FirstStepContent";
import SecondStepContent from "../components/Content/SecondStepContent";

export default
  [
    {
      id: 0,
      pageTitle: "Escolha o tipo de matéria",
      stepTitle: "Escolha",
      description: "Tipo da matéria",
      content: <FirstStepContent />,
      path: "/",
      exact: true
    },
    {
      id: 1,
      pageTitle: "Preencha as notas",
      stepTitle: "Preencha",
      description: "Quanto você tirou? (ou está pensando em tirar...)",
      content: <SecondStepContent />,
      path: "/preencha-suas-notas/:slug"
    },
  ] 
