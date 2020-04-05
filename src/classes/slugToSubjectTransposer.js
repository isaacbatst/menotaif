import SUBJECT_TYPES from '../constants/subjectTypes';

export default subjectType => {
  switch(subjectType){
    case "anual": 
      return SUBJECT_TYPES.annual;
    case "semestral":
      return SUBJECT_TYPES.semiannual;
    default:
      throw new Error("Tipo de matéria inválido")
  }
}