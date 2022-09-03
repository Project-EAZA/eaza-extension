export interface APIResponse<V> {
  msg: string;
  code: number;
  success: boolean;
  data: V;
}

export interface Course {
  courseId: string;
  title: string;
  catalogNumber: string;
  subject: Subject;
  breadths: Array<Breadth>;
  generalEd: GeneralEd;
  level: Level;
  ethnicStudies: EthnicStudies;
  repeatable: string;
  GPA: number;
}

export interface Teaching {
  TermCode: number;
  Sections: Section[];
}

export interface Section {
  TermCode: number;
  CourseNumber: number;
  SectionNumber: number;
  Instructors: Instructor[];
  Grades: Grades;
}

export interface Grades {
  A: number;
  AB: number;
  B: number;
  BC: number;
  C: number;
  Cr: number;
  D: number;
  Nw: number;
  I: number;
  Other: number;
  S: number;
  N: number;
  Nr: number;
  U: number;
  F: number;
  P: number;
}

export interface Subject {
  subjectCode: string;
  description: string;
  shortDescription: string;
}

export interface Instructor {
  id: number;
  name: string;
}

export interface Breadth {
  Description: string;
  Code: string;
}

export interface Level {
  Description: string;
  Code: string;
}

export interface GeneralEd {
  Description: string;
  Code: string;
}

export interface EthnicStudies {
  Description: string;
  Code: string;
}
