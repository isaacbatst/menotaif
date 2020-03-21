import update from "immutability-helper";
import createGradesCalculator from "../../classes/gradesCalculator";
import STEPS from "../../constants/steps";
import POSITIVE_FEEDBACKS from "../../constants/positiveFeedbacks";
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
      const gradesCalculator = createGradesCalculator(state.subject.type);
      const calculated = gradesCalculator.calculateGrades(action.payload.grades);

      if (calculated.currentAverage >= 60) {
        calculated.feedback = POSITIVE_FEEDBACKS[Math.floor(Math.random() * POSITIVE_FEEDBACKS.length)]
      }

      return update(state, {
        subject: {
          $merge: calculated
        }
      })
    default:
      return state;
  }
};
