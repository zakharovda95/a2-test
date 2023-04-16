export interface LoginStoreState {
  body: {
    login: string;
    password: string;
    fromuser?: number;
  };

  userToken: null | string;
  userId: null | string;
  isAuth: boolean;
}
