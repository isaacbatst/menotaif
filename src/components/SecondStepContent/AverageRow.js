import React from 'react';
import { Row, Col } from 'antd';

export default ({ average }) => (
  <Row id="average-row" type="flex" justify="center">
    <Col xs={24} sm={16} lg={10} xl={8}>
      <p>Sua média atual: <span>{average}</span></p>
    </Col>
  </Row>
)