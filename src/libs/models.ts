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
