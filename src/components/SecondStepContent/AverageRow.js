import React from 'react';
import { Row, Col, Alert } from 'antd';

export default ({ average }) => (
  <Row id="message-row" type="flex" justify="center">
    <Col xs={24} sm={16} lg={10} xl={8}>
      <Alert message={`Média atual: ${average}`} type={average < 20 ? "error" : average < 60 ? "warning" : "success"} />
    </Col>
  </Row>
)