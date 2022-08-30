export interface APIResponse<V> {
  msg: string;
  code: number;
  data: V;
}

export interface Course {
  name: string;
  number: number;
}

export interface Professor {
  name: string;
  rate: number;
}
