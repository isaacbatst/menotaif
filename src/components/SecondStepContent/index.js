import React from "react";
import { Row, Col, InputNumber, Button } from "antd";

import "./style.css";

export default ({ gradeType }) => {
  return (
    <>
      <Row id="second-step-row" gutter={40}>
        <Col xs={10} md={4}>
          <InputNumber className="grade-input" min={0} max={100} size="large" step={1} />
        </Col>
        <Col xs={10} md={4}>
          <InputNumber className="grade-input" min={0} max={100} size="large" step={1} />
        </Col>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col span={12}>
          <Button size="large" id="calc-button" block type="primary">
            Calcular
          </Button>
        </Col>
      </Row>
    </>
  );
};
