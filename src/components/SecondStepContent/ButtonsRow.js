import React from 'react';
import { Row, Col, Button } from 'antd'

export default ({buttonDisabled, onSubmitGrades: handleSubmitGrades, onBackButtonClick: handleBackButtonClick}) => (
  <Row
        className="buttons-row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col xs={24} sm={12} lg={10} className="text-align-center">
          <Button
            size="large"
            disabled={buttonDisabled}
            onClick={handleSubmitGrades}
            id="calc-button"
            block
            type="primary"
          >
            Calcular
          </Button>
          <Button type="danger" block onClick={handleBackButtonClick}>
            Voltar
          </Button>
        </Col>
      </Row>
)