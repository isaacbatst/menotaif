import React from "react";
import { Row, Col } from "antd";
import GradeTypeButton from "../GradeTypeButton";

import { gradeTypeButtons } from "../../constants/elements";

import "./style.css";

export default ({ onClickHandler }) => {
  return (
    <Row gutter={40}>
      {gradeTypeButtons.map(({ label }, index) => (
        <Col key={index} span={12} onClick={onClickHandler}>
          <GradeTypeButton label={label} index={index} />
        </Col>
      ))}
    </Row>
  );
};
