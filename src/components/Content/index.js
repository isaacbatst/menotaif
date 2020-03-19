import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageInit, setNextStep } from "../../store/actions/steps";
import StepsCounter from "./StepsCounter";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";

import "./style.scss";

function Content() {
  const dispatch = useDispatch();
  const steps = useSelector(state => state.steps.steps);
  const currentStep = useSelector(state => state.steps.currentStep);
  const { Header, Content: Main } = Layout;
  const currentProgress = steps[currentStep];

  const dispatchNextStepCallback = useCallback(() => {
    const dispatchNextStep = payload => dispatch(setNextStep(payload));
    dispatch(pageInit({ dispatchNextStep }));
  }, [dispatch]);

  useEffect(() => {
    dispatchNextStepCallback();
  }, [dispatchNextStepCallback]);

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Title>Me nota IF!</Title>
      </Header>
      <Main className="site-layout" style={{ marginTop: 64 }}>
        {currentStep !== null && (
          <>
            <div className="container banner">
              <Title id="page-progress-title" level={2}>
                {currentProgress.pageTitle}
              </Title>
            </div>
            <div className="container main">
              {currentProgress.content}
            </div>
            <div className="container steps">
            <StepsCounter currentProgress={currentProgress} steps={steps} />
            </div>
          </>
        )}
      </Main>
    </Layout>
  );
}

export default Content;
