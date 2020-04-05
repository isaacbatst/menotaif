import SUBJECT_TYPES from "../constants/subjectTypes";
import createGradesValidator from "./gradesValidator";

describe("tests grades validator for annual grades", () => {
  const gradesValidator = createGradesValidator(SUBJECT_TYPES.annual.slug);

  it("should return false when first grade is undefined", () => {
    const gradesWithFirstGradeMissing = {
      secondGrade: { value: 50 },
      thirdGrade: { value: 40 }
    };
    expect(gradesValidator.validate(gradesWithFirstGradeMissing)).toBe(false);
  });

  it("should return false when second grade is undefined", () => {
    const gradesWithSecondGradeMissing = {
      firstGrade: { value: 10 },
      thirdGrade: { value: 20 }
    };
    expect(gradesValidator.validate(gradesWithSecondGradeMissing)).toBe(false);
  });

  it("should return true when first and second grades are defined", () => {
    const gradesWithFirstAndSecondGradesDefined = {
      firstGrade: { value: 10 },
      secondGrade: { value: 20 },
      thirdGrade: { value: 30 }
    };
    expect(
      gradesValidator.validate(gradesWithFirstAndSecondGradesDefined)
    ).toBe(true);
  });
});
