import SUBJECT_TYPES from '../../constants/subjectTypes';
import calculateAnnualGrades from './annualGradesCalculator';
import calculateSemmiannualGrades from './semiannualGradesCalculator';

export default subjectType => {

  const calculateGrades = grades => {
    switch (subjectType) {
      case SUBJECT_TYPES.annual.type:
        return calculateAnnualGrades(grades);
      case SUBJECT_TYPES.semiannual.type:
        return calculateSemmiannualGrades(grades);
      default:
        throw new Error("Tipo de matéria inválido")
    }
  }

  return {
    calculateGrades
  }
}