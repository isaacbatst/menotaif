import update from "immutability-helper";
import createGradesCalculator from "../../classes/gradesCalculator/";
import generateFeedback from "../../classes/feedbackGenerator";
import STEPS from "../../constants/steps";
import Types from "../types/steps";

const INITIAL_STATE = {
  steps: STEPS,
  currentStep: 0,
  subject: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_NEXT_STEP:
      return update(state, {
        $merge: action.payload
      });
    case Types.CHANGE_INPUT_VALUE:
      return update(state, {
        subject: {
          grades: {
            [action.payload.type]: {
              value: { $set: action.payload.value }
            }
          }
        }
      });
    case Types.CALCULATE_GRADE:
      const { calculateGrades } = createGradesCalculator(state.subject.type);
      const calculatedGrades = calculateGrades(action.payload.grades);
      
      return update(state, {
        subject: {
          $merge: {
            ...calculatedGrades,
            feedback: generateFeedback(calculatedGrades)
          }
        }
      })
    default:
      return state;
  }
};
