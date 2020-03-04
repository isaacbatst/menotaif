import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Button } from "antd";
import GradeInput from "./GradeInput";
import gradeTypes from "../../constants/gradeTypes";
import "./style.scss";

export default ({ dispatchNextStep }) => {
  const gradeType = useSelector(state => state.steps.gradeType);
  const currentGradeType = gradeTypes[gradeType];

  return (
    <>
      <Row className="second-step-row" type="flex" justify="center" gutter={{ lg: 50, md: 30, sm: 20, xs: 10 }}>
        {currentGradeType.grades.map(({ label }, index) => (
          <Col xs={12} xl={6} key={index}>
            <span className="grade-label">{label}</span>
            <GradeInput />
          </Col>
        ))}
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col xs={12} md={6}>
          <Button size="large" id="calc-button" block type="primary">
            Calcular
          </Button>
        </Col>
      </Row>
    </>
  );
};
