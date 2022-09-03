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

export interface Subject {
  subjectCode: string;
  description: string;
  shortDescription: string;
}

export interface Professor {
  id: number;
  name: string;
}

export interface Breadth {
  description: string;
  code: string;
}

export interface Level {
  description: string;
  code: string;
}

export interface GeneralEd {
  description: string;
  code: string;
}

export interface EthnicStudies {
  description: string;
  code: string;
}
