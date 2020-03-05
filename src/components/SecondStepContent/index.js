import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "antd";
import GradeInput from "./GradeInput";
import * as StepsActions from "../../store/actions/steps";
import "./style.scss";
import GradesValidator from "../../classes/gradesValidator";

export default ({ dispatchNextStep }) => {
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const gradesObject = useSelector(state => state.steps.subjectType.grades);
  const selectedGradeType = useSelector(state => state.steps.subjectType.type);
  const grades = Object.entries(gradesObject);

  const handleBackButton = () => {
    dispatchNextStep({ currentStep: 0, subjectType: null });
  };

  const handleInputChange = type => {
    return value => dispatch(StepsActions.changeInputValue({ value, type }));
  };

  useEffect(() => {
    const gradesValidator = GradesValidator({ selectedGradeType });
    
    if(gradesValidator.validate(gradesObject)){
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true)
    }
  }, [grades]);

  return (
    <>
      <Row
        className="second-step-row"
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
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col xs={12} md={6} className="text-align-center">
          <Button size="large" disabled={buttonDisabled} id="calc-button" block type="primary">
            Calcular
          </Button>
          <Button type="ghost" block onClick={handleBackButton}>
            Voltar
          </Button>
        </Col>
      </Row>
    </>
  );
};
