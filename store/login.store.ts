import { LoginStoreState } from '~/helpers/types/store/login-store.type';

export const state = (): LoginStoreState => ({
  body: {
    login: '',
    password: '',
  },

  userToken: null,
  userId: null,
  isAuth: false,
});

export const getters = {
  login(state): string {
    return state.body.login;
  },
  password(state): string {
    return state.body.password;
  },
  userToken(state): string | null {
    return state.userToken;
  },
  userId(state): string | null {
    return state.userId;
  },
  isAuth(state): boolean {
    return state.isAuth;
  },
};

export const mutations = {
  setLogin(state, login): void {
    state.body.login = login;
  },
  setPassword(state, password): void {
    state.body.password = password;
  },
  setUserToken(state, token): void {
    state.userToken = token;
  },
  setUserId(state, id): void {
    state.userId = id;
  },
  setIsAuth(state, value): void {
    state.isAuth = value;
  },
};

export const actions = {
  async login({ state, commit }): Promise<void> {
    try {
      const { $requester, app } = $nuxt.context;
      const res = await $requester.post('login', state.body);

      if (res.status === 200) {
        commit('setUserToken', res.data.token);
        commit('setUserId', res.data.user.id);
        commit('setIsAuth', true);

        app.$cookies.set('userData', { token: res.data.token, id: res.data.user.id });
        app.router.push('/settings');
      }
    } catch (err) {
      commit('errors.store/setLoginError', err.response?.data.errors, { root: true });
    }
  },

  logout({ commit }) {
    const { app, redirect } = $nuxt.context;

    commit('setUserToken', null);
    commit('setUserId', null);
    commit('setIsAuth', false);

    app.$cookies.remove('userData');

    redirect('/');
  },
};
