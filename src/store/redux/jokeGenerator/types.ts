export interface JokeGeneratorState {
  data: JokeData | null;
  error: any;
  isLoading: boolean;
}

export interface JokeData {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}
