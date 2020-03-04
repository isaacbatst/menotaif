import steps from '../../constants/steps';
import Types from "../types/steps";

const INITIAL_STATE = {
  steps: [],
  currentStep: null,
  gradeType: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.PAGE_INIT: 
      return {
        ...state,
        currentStep: 0,
        steps: steps(action.payload)
      }
    case Types.SET_NEXT_STEP:
      return {
        ...state,
        ...action.payload
      }
    default: 
      return state;
  }
}