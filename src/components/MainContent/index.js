import React, { useState } from "react";
import { Row, Steps, Layout } from "antd";

import "./style.css";
import Title from "antd/lib/typography/Title";
import FirstStepContent from "../FirstStepContent";
import SecondStepContent from "../SecondStepContent";

function MainContent() {
  const { Header, Content } = Layout;
  const { Step } = Steps;
  const progresses = [
    {
      pageTitle: "Escolha o tipo de matéria",
      stepTitle: "Escolha",
      id: 0,
      description: "Tipo da matéria",
      content: (
        <FirstStepContent
          onClickHandler={() => setCurrentProgress(progresses[1])}
        />
      )
    },
    {
      pageTitle: "Preencha com suas notas já existentes",
      stepTitle: "Preencha",
      id: 1,
      description: "Quanto você tirou?",
      content: <SecondStepContent />
    },
    {
      pageTitle: "DON'T PANIC",
      stepTitle: "Reflita",
      description: "Estamos no caminho certo?",
      id: 2,
      content: <Title level={2}>60</Title>
    }
  ];
  const [currentProgress, setCurrentProgress] = useState(progresses[0]);

  return (
    <Layout>
      <Header>Me Nota IF!</Header>
      <Content>
        <Row>
          <Title id="page-progress-title" level={2}>{currentProgress.pageTitle}</Title>
        </Row>
        {currentProgress.content}
        <Steps current={currentProgress.id}>
          {progresses.map(({ stepTitle, description }, index) => (
            <Step key={index} title={stepTitle} description={description} />
          ))}
        </Steps>
      </Content>
    </Layout>
  );
}

export default MainContent;
