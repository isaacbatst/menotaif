import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as StepsActions from "../../store/actions/steps";
import "./style.scss";
import GradesValidator from "../../classes/gradesValidator";
import FeedbackAlertRow from "./FeedbackAlertRow";
import AverageRow from "./AverageRow";
import GradesRow from "./GradesRow";
import ButtonsRow from "./ButtonsRow";
import GRADES from '../../constants/grades';

export default () => {
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const gradesObject = useSelector(state => state.steps.subject.grades);
  const selectedGradeType = useSelector(state => state.steps.subject.type);
  const neededGrade = useSelector(state => state.steps.subject.needed);
  const average = useSelector(state => state.steps.subject.currentAverage);
  const positiveFeedback = useSelector(state => state.steps.subject.feedback);
  const [feedback, setFeedback] = useState(null);

  const [gradesValidator, setGradesValidator] = useState(
    GradesValidator({ selectedGradeType })
  );
  const grades = Object.entries(gradesObject);

  useEffect(() => {
    setGradesValidator(GradesValidator({ selectedGradeType }));
  }, [selectedGradeType]);

  useEffect(() => {
    if (gradesValidator.validate(gradesObject)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [grades, gradesValidator, gradesObject, selectedGradeType]);

  useEffect(() => {
    if(!average){
      return
    }

    if(average < 60){
      return setFeedback({
        type: "warning",
        message: `Você precisa tirar ${neededGrade.value} na ${GRADES[neededGrade.type].insideTextLabel}` 
      })
    }

    setFeedback({
      type: "success",
      message: positiveFeedback
    })
  }, [average, neededGrade, positiveFeedback])

  const handleBackButtonClick = () => {
    dispatch(StepsActions.setNextStep({ currentStep: 0, subjectType: null }));
  };

  const handleInputChange = type => {
    return value => dispatch(StepsActions.changeInputValue({ value, type }));
  };

  const handleSubmitGrades = () => {
    try{
      dispatch(StepsActions.calculateGrade({ grades: extractGradesValues(grades) }))
    } catch(error){
      //todo handle error
      console.warn(error)
    }
  }
  
  const extractGradesValues = grades => grades.reduce((acc, [key, grade]) => ({
    ...acc,
    [key]: grade.value
  }), {})


  return (
    <div id="second-step-wrapper">
      <GradesRow grades={grades} onInputChange={handleInputChange} />
      {average && <AverageRow average={average} />}
      {feedback && <FeedbackAlertRow feedback={feedback}/>}
      <ButtonsRow onBackButtonClick={handleBackButtonClick} onSubmitGrades={handleSubmitGrades} buttonDisabled={buttonDisabled} />
    </div>
  );
};
