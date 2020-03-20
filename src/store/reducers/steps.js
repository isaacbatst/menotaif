import steps from "../../constants/steps";
import Types from "../types/steps";
import update from "immutability-helper";

const INITIAL_STATE = {
  steps,
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
    default:
      return state;
  }
};
