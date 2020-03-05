import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "antd/lib/typography/Title";
import { pageInit, setNextStep } from "../../store/actions/steps";
import { Steps, Layout } from "antd";

import "./style.scss";

function Content() {
  const dispatch = useDispatch();
  const steps = useSelector(state => state.steps.steps);
  const currentStep = useSelector(state => state.steps.currentStep);
  const { Header, Content: Main } = Layout;
  const { Step } = Steps;
  const currentProgress = steps[currentStep];

  useEffect(() => {
    const dispatchNextStep = payload => dispatch(setNextStep(payload));

    dispatch(pageInit({ dispatchNextStep }));
  }, []);

  return (
    <Layout>
      <Header>
        <Title>Me nota IF!</Title>
      </Header>
      <Main>
        {currentStep !== null && (
          <>
            <Title id="page-progress-title" level={2} >{currentProgress.pageTitle}</Title>
            {currentProgress.content}
            <Steps current={currentProgress.id}>
              {steps.map(({ stepTitle, description }, index) => (
                <Step key={index} title={stepTitle} description={description} />
              ))}
            </Steps>
          </>
        )}
      </Main>
    </Layout>
  );
}

export default Content;
