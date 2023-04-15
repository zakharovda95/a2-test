export interface IErrorsType {
  id: number;
  title: string;
  code: number;
}

export interface IErrorStoreState {
  registerErr: null | IErrorsType[];
  loginErr: null | IErrorsType[];
  settingsErr: null | IErrorsType[];
}
