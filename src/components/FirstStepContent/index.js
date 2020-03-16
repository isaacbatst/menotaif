import React from "react";
import { Row, Col } from "antd";
import GradeTypeButton from "../GradeTypeButton";

import SUBJECT_TYPES from "../../constants/subjectTypes";

import "./style.scss";

export default ({ dispatchNextStep }) => {
  const handleGradeTypeClick = gradeKey => {
    dispatchNextStep({
      currentStep: 1,
      subject: SUBJECT_TYPES[gradeKey]
    });
  };

  return (
    <Row gutter={40} id="first-step-row" justify="center" type="flex">
      {Object.entries(SUBJECT_TYPES).map(([key, { label }], index) => (
        <Col key={index} xs={12} md={6}>
          <GradeTypeButton
            label={label}
            type={key}
            onClick={() => handleGradeTypeClick(key)}
          />
        </Col>
      ))}
    </Row>
  );
};
