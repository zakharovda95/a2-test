export const state = () => ({
  registerErr: null,
  loginErr: null,
  settingsErr: null,
});

export const getters = {
  registerErr(state) {
    return state.registerErr;
  },
  loginErr(state) {
    return state.loginErr;
  },
  settingsErr(state) {
    return state.registerErr;
  },
};

export const mutations = {
  setRegisterError(state, err) {
    state.registerErr = err;
  },
  setLoginError(state, err) {
    state.loginErr = err;
  },
  setSettingsError(state, err) {
    state.settingsErr = err;
  },
};
