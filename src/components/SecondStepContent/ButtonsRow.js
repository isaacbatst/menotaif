import React from 'react';
import { Row, Col, Button } from 'antd'

export default ({buttonDisabled, onClick: handleClick}) => (
  <Row
        className="buttons-row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col xs={12} md={6} className="text-align-center">
          <Button
            size="large"
            disabled={buttonDisabled}
            id="calc-button"
            block
            type="primary"
          >
            Calcular
          </Button>
          <Button type="danger" block onClick={handleClick}>
            Voltar
          </Button>
        </Col>
      </Row>
)