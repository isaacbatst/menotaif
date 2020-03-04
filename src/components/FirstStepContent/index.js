import React from "react";
import { Row, Col } from "antd";
import GradeTypeButton from "../GradeTypeButton";

import gradeTypes from "../../constants/gradeTypes";

import "./style.scss";

export default ({ dispatchNextStep }) => {
  const handleGradeTypeClick = index => {
    dispatchNextStep({
      currentStep: 1,
      gradeType: index
    });
  }

  return (
    <Row gutter={40}>
      {gradeTypes.map(({ label }, index) => (
        <Col key={index} span={12}>
          <GradeTypeButton label={label} index={index}  onClick={() =>  handleGradeTypeClick(index)}/>
        </Col>
      ))}
    </Row>
  );
};
