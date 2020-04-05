import React from 'react';
import { Row, Col, Alert } from 'antd';

export default ({ feedback }) => (
  <Row id="message-row" type="flex" justify="center">
    <Col xs={24} sm={16} lg={10} xl={8}>
      <Alert message={feedback.message} type={feedback.type} />
    </Col>
  </Row>
)