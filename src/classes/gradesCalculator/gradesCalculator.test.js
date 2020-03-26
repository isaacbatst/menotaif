import createGradesCalculator from ".";
import SUBJECT_TYPES from "../../constants/subjectTypes";
import GRADES_TYPES from "../../constants/gradesTypes";

describe("tests grades calculator for annual subjects", () => {
  const { calculateGrades } = createGradesCalculator(SUBJECT_TYPES.annual.type)

  it("should calculate correctly your needed fourth grade", () => {
    const { needed } = calculateGrades({
      firstGrade: 60,
      secondGrade:50,
      thirdGrade: 80,
    })
  
    expect(needed.value).toBe(47);
    expect(needed.type).toEqual(GRADES_TYPES.forthGrade);
  })

  it("should calculate correctly your needed final grade", () => {
    const { needed } = calculateGrades({
      firstGrade: 60,
      secondGrade:50,
      thirdGrade: 80,
      forthGrade: 30
    })
  
    expect(needed.value).toBe(47);
    expect(needed.type).toEqual(GRADES_TYPES.finalGrade);
  })
})

describe("tests grades calculator for semmiannual subjects", () => {
  const { calculateGrades } = createGradesCalculator(SUBJECT_TYPES.semiannual.type)

  it("should calculate correctly your needed second grade", () => {
    const { needed } = calculateGrades({
      firstGrade: 50,
    })
  
    expect(needed.value).toBe(67);
    expect(needed.type).toEqual(GRADES_TYPES.secondGrade);
  })

  it("should calculate correctly your needed final grade", () => {
    const { needed } = calculateGrades({
      firstGrade: 50,
      secondGrade:60,
    })
  
    expect(needed.value).toBe(60);
    expect(needed.type).toEqual(GRADES_TYPES.finalGrade);
  })
})
