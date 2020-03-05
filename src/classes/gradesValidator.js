import SUBJECT_TYPES from '../constants/subjectTypes';

export default ({ selectedGradeType }) => {

  const validateAnnualGrade = grades => {
    if(!grades.firstGrade || !grades.firstGrade.value){
      return false
    }

    if(!grades.secondGrade || !grades.secondGrade.value){
      return false;
    }

    return true;
  };

  const validateSemiannualGrade = grades => {
    if(!grades.firstGrade || !grades.firstGrade.value){
      return false;
    }

    return true;
  }

  return {
    validate: inputs => {
      switch(selectedGradeType){
        case SUBJECT_TYPES.annual.type:
          return validateAnnualGrade(inputs);
        case SUBJECT_TYPES.semiannual.type:
          return validateSemiannualGrade(inputs);
        default:
          break;
      }
    }
  }
}