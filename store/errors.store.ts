import { IErrorStoreState, IErrorsType } from '~/helpers/types/store/error-store.type';

export const state = (): IErrorStoreState => ({
  registerErr: null,
  loginErr: null,
  settingsErr: null,
});

export const getters = {
  registerErr(state): null | IErrorsType[] {
    return state.registerErr;
  },
  loginErr(state): null | IErrorsType[] {
    return state.loginErr;
  },
  settingsErr(state): null | IErrorsType[] {
    return state.registerErr;
  },
};

export const mutations = {
  setRegisterError(state, err): void {
    state.registerErr = err;
  },
  setLoginError(state, err): void {
    state.loginErr = err;
  },
  setSettingsError(state, err): void {
    state.settingsErr = err;
  },
};
