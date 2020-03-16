import React from "react";
import { Steps } from "antd";

export default ({ currentProgress, steps }) => {
  const { Step } = Steps;
  return (
    <Steps current={currentProgress.id}>
      {steps.map(({ stepTitle, description }, index) => (
        <Step key={index} title={stepTitle} description={description} />
      ))}
    </Steps>
  );
};
