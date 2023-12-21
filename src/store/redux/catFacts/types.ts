export interface CatFactsState {
  data: CatFact[];
  isLoading: boolean;
  error: any;
}

export interface CatFact {
  id: string;
  fact: string;
}

export interface CatFactsPayload {
  fact: string;
  length: number;
}
