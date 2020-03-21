import SUBJECT_TYPES from '../constants/subjectTypes';
import GRADES_TYPES from "../constants/gradesTypes";

export default subjectType => {

  const calculateAverage = ({ firstGrade, secondGrade, thirdGrade, forthGrade }) => {
    switch(subjectType){
      case SUBJECT_TYPES.annual.type:
        return Math.round((((firstGrade ?? 0) * 20) + ((secondGrade ?? 0) * 20) + ((thirdGrade ?? 0) * 30) + ((forthGrade ?? 0) * 30)) / 100);
      case SUBJECT_TYPES.semiannual.type:
        return Math.round((((firstGrade ?? 0) * 20) + ((secondGrade ?? 0) * 30)) / 50)
      default:
        throw new Error('Tipo de matéria inválido')
    }
  }

  const calculateAnnualGrades = grades => {
    const currentAverage = calculateAverage(grades);
    if (currentAverage >= 60) {
      return {
        needed: null,
        currentAverage
      }
    }

    if ((grades.thirdGrade || grades.thirdGrade === 0) && (grades.forthGrade !== 0 && !grades.forthGrade)) {
      return {
        needed: {
          type: GRADES_TYPES.forthGrade,
          value: calculateNeededForthGrade(grades)
        },
        currentAverage
      }
    }

    if ((grades.thirdGrade || grades.thirdGrade === 0) && (grades.forthGrade || grades.forthGrade === 0)) {
      return {
        needed: {
          type: GRADES_TYPES.finalGrade,
          value: calculateNeededFinalGrade(grades)
        },
        currentAverage
      }
    }

    throw new Error("Notas inválidas");

    function calculateNeededForthGrade({ firstGrade, secondGrade, thirdGrade }) {
      return Math.round(((firstGrade * 20) + (secondGrade * 20) + (thirdGrade * 30) - 6000) / - 30)
    }
  };

  const calculateSemiannualGrades = grades => { 
    const currentAverage = calculateAverage(grades);
    if (currentAverage >= 60) {
      return {
        needed: null,
        currentAverage
      }
    }

    if((grades.firstGrade || grades.firstGrade === 0) && (grades.secondGrade !== 0 & !grades.secondGrade)){
      return {
        needed: {
          type: GRADES_TYPES.secondGrade,
          value: calculateNeededSecondGrade(grades)
        }
      }
    }

    if((grades.firstGrade || grades.firstGrade === 0) && (grades.secondGrade || grades.secondGrade === 0)){
      return {
        needed: {
          type: GRADES_TYPES.finalGrade,
          value: calculateNeededFinalGrade(grades)
        },
        currentAverage
      }
    }
    
    throw new Error("Notas inválidas");

    function calculateNeededSecondGrade(grades){
      return Math.round((20 * grades.firstGrade - 3000) / -30);
    }
  };

  function calculateNeededFinalGrade(grades) {
    const finalGradeNeededOptions = calculateNeededGradesOptions(grades);
    const finalGradeNeededOptionsEntries = Object.entries(finalGradeNeededOptions);
    const finalGradeNeededOptionsOrdered = orderFinalGradeNeededOptions(finalGradeNeededOptionsEntries);
    
    return finalGradeNeededOptionsOrdered[0][1];

    function calculateNeededGradesOptions({ firstGrade, secondGrade, thirdGrade, forthGrade }) {
      switch(subjectType){
        case SUBJECT_TYPES.annual.type:
          return {
            firstGradeOption: Math.round(((secondGrade * 20) + (thirdGrade * 30) + (forthGrade * 30) - 6000) / - 20),
            secondGradeOption: Math.round(((firstGrade * 20) + (thirdGrade * 30) + (forthGrade * 30) - 6000) / - 20),
            thirdGradeOption: Math.round(((firstGrade * 20) + (secondGrade * 20) + (forthGrade * 30) - 6000) / - 30),
            forthGradeOption: Math.round(((firstGrade * 20) + (secondGrade * 20) + (thirdGrade * 30) - 6000) / - 30),
            averageOption: 60
          }
        case SUBJECT_TYPES.semiannual.type:
          return {
            firstGradeOption: Math.round(((secondGrade * 20) - 3000) / - 20),
            secondGradeOption: Math.round(((firstGrade * 20) - 3000) / - 30),
            averageOption: 60
          }
        default:
          throw new Error("Tipo de matéria inválido")
      }
      
    }

    function orderFinalGradeNeededOptions(finalGradeNeededOptionsEntries) {
      return finalGradeNeededOptionsEntries.sort((optionA, optionB) => {
        if (optionA[1] < optionB[1])
          return -1
        if (optionA[1] > optionB[1])
          return 1
        return 0;
      })
    }
  }

  const calculateGrades = grades => {
    switch (subjectType) {
      case SUBJECT_TYPES.annual.type:
        return calculateAnnualGrades(grades);
      case SUBJECT_TYPES.semiannual.type:
        return calculateSemiannualGrades(grades);
      default:
        throw new Error("Tipo de matéria inválido")
    }
  }

  return {
    calculateGrades
  }
}