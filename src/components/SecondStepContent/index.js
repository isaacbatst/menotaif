import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "antd";
import * as StepsActions from "../../store/actions/steps";
import "./style.scss";
import GradesValidator from "../../classes/gradesValidator";
import FeedbackAlertRow from "./FeedbackAlertRow";
import GradesRow from "./GradesRow";
import ButtonsRow from "./ButtonsRow";

export default ({ dispatchNextStep }) => {
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const gradesObject = useSelector(state => state.steps.subject.grades);
  const selectedGradeType = useSelector(state => state.steps.subject.type);
  const [gradesValidator, setGradesValidator] = useState(
    GradesValidator({ selectedGradeType })
  );
  const grades = Object.entries(gradesObject);

  useEffect(() => {
    setGradesValidator(GradesValidator({ selectedGradeType }));
  }, [selectedGradeType]);

  const handleBackButtonClick = () => {
    dispatchNextStep({ currentStep: 0, subjectType: null });
  };

  const handleInputChange = type => {
    return value => dispatch(StepsActions.changeInputValue({ value, type }));
  };

  useEffect(() => {
    if (gradesValidator.validate(gradesObject)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [grades, gradesValidator, gradesObject, selectedGradeType]);

  return (
    <div id="second-step-wrapper">
      <GradesRow grades={grades} onInputChange={handleInputChange} />
      <FeedbackAlertRow />
      <ButtonsRow onClick={handleBackButtonClick} buttonDisabled={buttonDisabled} />
    </div>
  );
};
