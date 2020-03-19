import React from 'react';
import { Row, Col } from 'antd';
import GradeInput from "./GradeInput";

export default ({ grades, onInputChange: handleInputChange }) => (
  <Row
    className="grades-row"
    type="flex"
    justify="center"
    gutter={{ lg: 50, md: 30, sm: 20, xs: 10 }}
  >
    {grades.map(([key, { label }], index) => (
      <Col xs={12} lg={6} xl={4} key={index} className="grade-col">
        <span className="grade-label">{label}</span>
        <GradeInput onInputChange={handleInputChange(key)} />
      </Col>
    ))}
  </Row>
)