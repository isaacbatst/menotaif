import POSITIVE_FEEDBACKS from "../constants/positiveFeedbacks";

export default ({ currentAverage }) => {
  if (currentAverage >= 60){
    return POSITIVE_FEEDBACKS[Math.floor(Math.random() * POSITIVE_FEEDBACKS.length)]
  }

  return "";
}