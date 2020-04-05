import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router-dom'
import * as StepsActions from "../../../store/actions/steps";
import "./style.scss";
import GradesValidator from "../../../classes/gradesValidator";
import feedbackGenerator from "../../../classes/feedbackGenerator";
import FeedbackAlertRow from "./FeedbackAlertRow";
import AverageRow from "./AverageRow";
import GradesRow from "./GradesRow";
import ButtonsRow from "./ButtonsRow";
import GRADES from '../../../constants/grades';

export default () => {
  const dispatch = useDispatch();
  let { slug: subjectType } = useParams();
  let history = useHistory();

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [feedback, setFeedback] = useState(null);
  const [gradesValidator, setGradesValidator] = useState(GradesValidator(subjectType));

  const subject = useSelector(state => state.steps.subject);
  const { grades: gradesObject } = subject;
  const { needed: neededGrade } = subject;
  const { failedMinimum: failedMinimumGrade } = subject;
  const { currentAverage: average } = subject;

  const grades = gradesObject ? Object.entries(gradesObject) : [];

  const dispatchSetSubjectCallback = useCallback(
    () => {
      dispatch(StepsActions.setSubject({ slug: subjectType }));
    },
    [subjectType, dispatch],
  )

  useEffect(() => {
    dispatchSetSubjectCallback()
  }, [dispatchSetSubjectCallback])

  useEffect(() => {
    if (gradesObject) {
      setGradesValidator(GradesValidator(subjectType));
    }
  }, [subjectType, gradesObject])

  useEffect(() => {
    if(gradesObject){
      if (gradesValidator.validate(gradesObject)) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
  }, [gradesObject, gradesValidator]);

  useEffect(() => {
    if (!average) {
      return setFeedback(null);
    }

    if(failedMinimumGrade){
      return setFeedback({
        type: "error",
        message: `Ow, que que tá pegando? Sabe que menos de 20 reprova direto, né?`
      })
    }

    if (average < 60) {
      return setFeedback({
        type: "warning",
        message: `Você precisa tirar ${neededGrade.value} na ${GRADES[neededGrade.type].insideTextLabel}`
      })
    }

    setFeedback({
      type: "success",
      message: feedbackGenerator()
    })
  }, [average, neededGrade, failedMinimumGrade])

  const handleBackButtonClick = () => {
    history.push('/');
  };

  const handleInputChange = type => {
    return value => dispatch(StepsActions.changeInputValue({ value, type }));
  };

  const handleSubmitGrades = () => {
    try {
      dispatch(StepsActions.calculateGrade({ grades: extractGradesValues(grades), subjectType }))
    } catch (error) {
      //todo handle error
      console.warn(error)
    }

    function extractGradesValues(grades){
      return grades.reduce((acc, [key, grade]) => ({
        ...acc,
        [key]: grade.value
      }), {})
    }
  }

  const handleFormSubmit = event => event.preventDefault();

  return (
    <form id="second-step-wrapper" onSubmit={handleFormSubmit}>
      <GradesRow grades={grades} onInputChange={handleInputChange} />
      {average && <AverageRow average={average} />}
      {feedback && <FeedbackAlertRow feedback={feedback} />}
      <ButtonsRow onBackButtonClick={handleBackButtonClick} onSubmitGrades={handleSubmitGrades} buttonDisabled={buttonDisabled} />
    </form>
  );
};
