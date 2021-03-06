import React from "react";
import FirstStepContent from "../components/Content/FirstStepContent";
import SecondStepContent from "../components/Content/SecondStepContent";

export default {
  first: {
    id: 0,
    title: "Escolha o tipo de matéria",
    stepTitle: "Escolha",
    description: ["Escolha com sabedoria, jovem."],
    content: <FirstStepContent />,
    path: "/",
    exact: true,
  },
  second: {
    id: 1,
    title: "Preencha as notas",
    stepTitle: "Preencha",
    description: ["Don't Panic! 6*7 ", "Não entre em pânico!"],
    content: <SecondStepContent />,
    path: "/preencha-suas-notas/:slug",
  },
}
