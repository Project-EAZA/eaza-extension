export type RequestMessage =
  | FetchCourseMessage
  | FetchProfMessage
  | FetchGradesMessage;
type MessageType = "fetch_course" | "fetch_prof";

interface Message {
  type: MessageType;
}

export interface FetchCourseMessage extends Message {
  type: "fetch_course";
  number: number;
  subject: string;
}

export interface FetchProfMessage {
  type: "fetch_prof";
  name: string;
}

export interface FetchGradesMessage {
  type: "fetch_grades";
  subject: string;
  number: number;
}
