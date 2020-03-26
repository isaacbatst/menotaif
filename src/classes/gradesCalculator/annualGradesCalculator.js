import GRADES_TYPES from "../../constants/gradesTypes";

export default grades => {

  const currentAverage = calculateAverage(grades);

  if (currentAverage >= 60) {
    return {
      currentAverage,
      needed: null,
    }
  }

  if ((grades.thirdGrade || grades.thirdGrade === 0) && (grades.forthGrade !== 0 && !grades.forthGrade)) {
    return {
      currentAverage,
      needed: {
        type: GRADES_TYPES.forthGrade,
        value: calculateNeededForthGrade(grades)
      },
    }
  }

  if ((grades.thirdGrade || grades.thirdGrade === 0) && (grades.forthGrade || grades.forthGrade === 0)) {
    return {
      currentAverage,
      needed: {
        type: GRADES_TYPES.finalGrade,
        value: calculateNeededFinalGrade(grades)
      },
    }
  }

  throw new Error("Notas inválidas");

  function calculateAverage({ firstGrade, secondGrade, thirdGrade, forthGrade }) {
    return Math.round((((firstGrade ?? 0) * 20) + ((secondGrade ?? 0) * 20) + ((thirdGrade ?? 0) * 30) + ((forthGrade ?? 0) * 30)) / 100);
  }

  function calculateNeededForthGrade({ firstGrade, secondGrade, thirdGrade }) {
    return Math.round(((firstGrade * 20) + (secondGrade * 20) + (thirdGrade * 30) - 6000) / - 30)
  }

  function calculateNeededFinalGrade(grades) {
    const finalGradeNeededOptions = calculateNeededGradesOptions(grades);
    const finalGradeNeededOptionsEntries = Object.entries(finalGradeNeededOptions);
    const finalGradeNeededOptionsOrdered = orderFinalGradeNeededOptions(finalGradeNeededOptionsEntries);

    return finalGradeNeededOptionsOrdered[0][1];

    function calculateNeededGradesOptions({ firstGrade, secondGrade, thirdGrade, forthGrade }) {
      return {
        firstGradeOption: Math.round(((secondGrade * 20) + (thirdGrade * 30) + (forthGrade * 30) - 6000) / - 20),
        secondGradeOption: Math.round(((firstGrade * 20) + (thirdGrade * 30) + (forthGrade * 30) - 6000) / - 20),
        thirdGradeOption: Math.round(((firstGrade * 20) + (secondGrade * 20) + (forthGrade * 30) - 6000) / - 30),
        forthGradeOption: Math.round(((firstGrade * 20) + (secondGrade * 20) + (thirdGrade * 30) - 6000) / - 30),
        averageOption: 60
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
}