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
  add: (g: Grades) => void;
}

export interface Subject {
  subjectCode: string;
  description: string;
  shortDescription: string;
}

export interface Instructor {
  ID: number;
  Name: string;
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

export class Grade implements Grades {
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

  constructor() {
    this.A = 0;
    this.AB = 0;
    this.B = 0;
    this.BC = 0;
    this.C = 0;
    this.Cr = 0;
    this.D = 0;
    this.Nw = 0;
    this.I = 0;
    this.Other = 0;
    this.S = 0;
    this.N = 0;
    this.Nr = 0;
    this.U = 0;
    this.F = 0;
    this.P = 0;
  }

  public add(other: Grade) {
    if (other) {
      for (const g in other) {
        this[g] += other[g];
      }
    }
  }
}
