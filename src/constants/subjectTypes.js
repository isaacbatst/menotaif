import GRADES_TYPES from './gradesTypes';

export default {
  annual: {
    id: 0,
    label: "Anual",
    type: "annual",
    grades: {
      [GRADES_TYPES.firstGrade]: {},
      [GRADES_TYPES.secondGrade]: {},
      [GRADES_TYPES.thirdGrade]: {},
      [GRADES_TYPES.forthGrade]: {},
      [GRADES_TYPES.finalGrade]: {},
    }
  },
  semiannual: {
    id: 1,
    label: "Semestral",
    type: "semiannual",
    grades: {
      [GRADES_TYPES.firstGrade]: {},
      [GRADES_TYPES.secondGrade]: {},
      [GRADES_TYPES.finalGrade]: {},
    }
  }
};
