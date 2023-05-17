
export interface ITeam {
  id?: string;
  name: string;
  members: IUser[];
}

export interface CreateAccountDto {
  name: string;
  clientName: string;
  operationManagerName: string;
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  englishLevel?: string;
  technicalSkills?: string;
  cvLink?: string;
  role: 'admin' | 'normal';
}

