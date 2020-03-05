import steps from "../../constants/steps";
import Types from "../types/steps";
import update from "immutability-helper";

const INITIAL_STATE = {
  steps: [],
  currentStep: null,
  subjectType: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.PAGE_INIT:
      return {
        ...state,
        currentStep: 0,
        steps: steps(action.payload)
      };
    case Types.SET_NEXT_STEP:
      return {
        ...state,
        ...action.payload
      };
    case Types.CHANGE_INPUT_VALUE:
      return update(state, {
        subjectType: {
          grades: {
            [action.payload.type]: {
              value: { $set: action.payload.value }
            }
          }
        }
      });
    default:
      return state;
  }
};
