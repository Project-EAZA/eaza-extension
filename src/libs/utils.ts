import { Grade, Instructor, Teaching } from "./models";

export const findAllInstructors = (teachings: Array<Teaching>) => {
  const instructors: Map<number, Instructor> = new Map();
  for (const teaching of teachings) {
    for (const section of teaching.Sections) {
      for (const instructor of section.Instructors) {
        instructors.set(instructor.ID, instructor);
      }
    }
  }
  return Array.from(instructors.values());
};

export const totalGrades = (teachings: Array<Teaching>) => {
  const grade = new Grade();
  for (const teaching of teachings) {
    for (const section of teaching.Sections) {
      grade.add(section.Grades);
    }
  }
  return grade;
};

export const findAllTerms = (teachings: Array<Teaching>) =>
  teachings.map((t) => t.TermCode);

export const getTerm = (term: number) => {
  const season = term % 10;
  if (season === 4) {
    const year = Math.floor(term / 10) - 100 + 2000;
    return `Spring ${year}`;
  }

  if (season === 2) {
    const year = Math.floor(term / 10) - 101 + 2000;
    return `Fall ${year}`;
  }

  throw "Unable to parse term";
};
