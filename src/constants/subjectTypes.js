import GRADES_TYPES from './gradesTypes';

export default {
  annual: {
    id: 0,
    label: "Anual",
    type: "annual",
    slug: "anual",
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
    slug: "semestral",
    grades: {
      [GRADES_TYPES.firstGrade]: {},
      [GRADES_TYPES.secondGrade]: {},
      [GRADES_TYPES.finalGrade]: {},
    }
  }
};
