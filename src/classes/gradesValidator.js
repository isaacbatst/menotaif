import SUBJECT_TYPES from '../constants/subjectTypes';

export default ({ selectedGradeType }) => {

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
      switch(selectedGradeType){
        case SUBJECT_TYPES.annual.type:
          return validateAnnualGrade(grades);
        case SUBJECT_TYPES.semiannual.type:
          return validateSemiannualGrade(grades);
        default:
          throw new Error("Tipo de matéria inválido");
      }
    }
  }
}