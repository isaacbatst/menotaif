import React, { useState } from "react";
import { Row, Col, Steps, Layout } from "antd";
import GradeTypeButton from "../GradeTypeButton/";

import { gradeTypeButtons } from "../../constants/elements";

import "./style.css";

function MainContent() {
  const { Header, Content } = Layout;
  const { Step } = Steps;
  const progresses = [
    {
      pageTitle: "Escolha o tipo de matéria",
      stepTitle: "Escolha",
      id: 0,
      description: "Tipo da matéria"
    },
    {
      pageTitle: "Preencha com suas notas já existentes",
      stepTitle: "Preencha",
      id: 1,
      description: "Quanto você tirou?"
    },
    { pageTitle: "DON'T PANIC", stepTitle: "Reflita", description: "Estamos no caminho certo?", id: 2 }
  ];
  const [currentProgress, setProgress] = useState(progresses[0]);

  return (
    <Layout>
      <Header>{currentProgress.pageTitle}</Header>
      <Content>
        <Row gutter={40}>
          {gradeTypeButtons.map(({ label }, index) => (
            <Col key={index} span={12} onClick={() => setProgress(progresses[currentProgress.id+1])}>
              <GradeTypeButton label={label} index={index} />
            </Col>
          ))}
        </Row>
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
