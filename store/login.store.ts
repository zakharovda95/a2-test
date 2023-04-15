import { LoginStoreState } from '~/helpers/types/store/login-store.type';

export const state = (): LoginStoreState => ({
  body: {
    login: '',
    password: '',
    fromuser: 0,
  },
});

export const getters = {
  login(state): string {
    return state.body.login;
  },
  password(state): string {
    return state.body.password;
  },
};

export const mutations = {
  setLogin(state, login): void {
    state.body.login = login;
  },
  setPassword(state, password): void {
    state.body.password = password;
  },
};

export const actions = {
  async login({ state, commit }): Promise<void> {
    try {
      const { $requester, app } = $nuxt.context;
      const res = await $requester.post('login', state.body);
      console.log(res);
      if (res.status === 200) {
        app.router.push('/settings');
      }
    } catch (err) {
      commit('errors.store/setLoginError', err.response.data.errors, { root: true });
    }
  },
};
