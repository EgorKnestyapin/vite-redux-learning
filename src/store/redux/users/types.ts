export interface User {
  id: string;
  firstLastName: string;
  age: string;
  jobTitle: string;
}

export interface AddUserPayload {
  firstLastName: string;
  age: string;
  jobTitle: string;
}

export interface UsersState {
  users: User[];
}
