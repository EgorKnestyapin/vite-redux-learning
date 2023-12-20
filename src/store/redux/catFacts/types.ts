export interface CatFactsState {
  data: CatFact[];
  isLoading: boolean;
}

export interface CatFact {
  fact: string;
}

export interface CatFactsPayload {
  fact: string;
  length: string;
}
