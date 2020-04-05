import SUBJECT_TYPES from '../../constants/subjectTypes';
import calculateAnnualGrades from './annualGradesCalculator';
import calculateSemmiannualGrades from './semiannualGradesCalculator';

export default subjectType => {

  const calculateGrades = grades => {
    switch (subjectType) {
      case SUBJECT_TYPES.annual.slug:
        return calculateAnnualGrades(grades);
      case SUBJECT_TYPES.semiannual.slug:
        return calculateSemmiannualGrades(grades);
      default:
        throw new Error("Tipo de matéria inválido")
    }
  }

  return {
    calculateGrades
  }
}