import GRADES_TYPES from "../../constants/gradesTypes";

export default grades => {
  const currentAverage = calculateAverage(grades);

  if (currentAverage >= 60) {
    return {
      currentAverage,
      needed: null,
    }
  }

  if ((grades.firstGrade || grades.firstGrade === 0) && (grades.secondGrade || grades.secondGrade === 0)) {
    return {
      currentAverage,
      needed: {
        type: GRADES_TYPES.finalGrade,
        value: calculateNeededFinalGrade(grades)
      },
    }
  }


  if ((grades.firstGrade || grades.firstGrade === 0)) {
    return {
      currentAverage,
      needed: {
        type: GRADES_TYPES.secondGrade,
        value: calculateNeededSecondGrade(grades)
      },
    }
  }

  throw new Error("Notas inválidas");

  function calculateNeededSecondGrade(grades) {
    return Math.round((20 * grades.firstGrade - 3000) / -30);
  }

  function calculateAverage({ firstGrade, secondGrade }) {
    return Math.round((((firstGrade ?? 0) * 20) + ((secondGrade ?? 0) * 30)) / 50)
  }

  function calculateNeededFinalGrade(grades) {
    const finalGradeNeededOptions = calculateNeededGradesOptions(grades);
    const finalGradeNeededOptionsEntries = Object.entries(finalGradeNeededOptions);
    const finalGradeNeededOptionsOrdered = orderFinalGradeNeededOptions(finalGradeNeededOptionsEntries);

    return finalGradeNeededOptionsOrdered[0][1];

    function calculateNeededGradesOptions({ firstGrade, secondGrade }) {
      return {
        firstGradeOption: Math.round(((secondGrade * 20) - 3000) / - 20),
        secondGradeOption: Math.round(((firstGrade * 20) - 3000) / - 30),
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