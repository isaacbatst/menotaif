import POSITIVE_FEEDBACKS from "../constants/positiveFeedbacks";

export default () => {
  return POSITIVE_FEEDBACKS[Math.floor(Math.random() * POSITIVE_FEEDBACKS.length)]
}