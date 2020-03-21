import React from 'react'
import Title from "antd/lib/typography/Title";
import StepsCounter from "./StepsCounter";
import { Row, Col } from 'antd';

export default ({ currentProgress, currentStep, steps }) =>
  (currentStep || currentStep === 0) && (
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
        <Row type="flex" justify='center'>
          <Col xs={24} md={20} lg={16} xl={12}>
            <StepsCounter currentProgress={currentProgress} steps={steps} />
          </Col>
        </Row>
      </div>
    </>
  )