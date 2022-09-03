import type { Instructor, Teaching } from './models';

export const findAllInstructors = (teachings: Array<Teaching>) => {
  const instructors: Set<Instructor> = new Set();
  for (const teaching of teachings) {
    for (const section of teaching.Sections) {
      for (const instructor of section.Instructors) {
        instructors.add(instructor);
      }
    }
  }
  return Array.from(instructors.values());
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

  throw 'Unable to parse term';
};
