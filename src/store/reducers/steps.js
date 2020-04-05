import update from "immutability-helper";
import createGradesCalculator from "../../classes/gradesCalculator/";
import slugToSubjectTransposer from "../../classes/slugToSubjectTransposer";
import STEPS from "../../constants/steps";
import Types from "../types/steps";

const INITIAL_STATE = {
  steps: STEPS,
  subject: {},
  typed: [
    false,
    false
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
      const { calculateGrades } = createGradesCalculator(action.payload.subjectType);
      const calculatedGrades = calculateGrades(action.payload.grades);

      return update(state, {
        subject: {
          $merge: {
            ...calculatedGrades
          }
        }
      })
    case Types.SET_SUBJECT:
      return update(state, {
        subject: { $set: slugToSubjectTransposer(action.payload.slug) }
      })
    case Types.SET_TYPED:
      return update(state, {
        typed: {
          [action.payload.currentStep]: {
            $set: true
          }
        }
      })
    default:
      return state;
  }
};
