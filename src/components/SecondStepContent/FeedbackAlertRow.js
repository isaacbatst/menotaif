import React from 'react';
import { Row, Col, Alert } from 'antd';

export default () => (
  <Row id="message-row" type="flex" justify="center">
    <Col xs={24} sm={16} lg={10} xl={8}>
      <Alert message="Você precisa tirar 84 na prova final" type="warning" />
    </Col>
  </Row>
)