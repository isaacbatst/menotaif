import Types from "../types/steps";

export const pageInit = payload => ({
  type: Types.PAGE_INIT,
  payload
});

export const setNextStep = payload => ({
  type: Types.SET_NEXT_STEP,
  payload
})