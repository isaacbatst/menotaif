import SUBJECT_TYPES from '../constants/subjectTypes';

export default subjectType => {

  const validateAnnualGrade = grades => {
    if(!grades.firstGrade || !grades.firstGrade.value){
      return false
    }

    if(!grades.secondGrade || !grades.secondGrade.value){
      return false;
    }

    if(!grades.thirdGrade || !grades.thirdGrade.value){
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
    validate: grades => {
      switch(subjectType){
        case SUBJECT_TYPES.annual.slug:
          return validateAnnualGrade(grades);
        case SUBJECT_TYPES.semiannual.slug:
          return validateSemiannualGrade(grades);
        default:
          throw new Error("Tipo de matéria inválido");
      }
    }
  }
}