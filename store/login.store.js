export const state = () => ({
  body: {
    login: '',
    password: '',
  },

  userToken: null,
  userId: null,
  isAuth: false,
});

export const getters = {
  login(state) {
    return state.body.login;
  },
  password(state) {
    return state.body.password;
  },
  userToken(state) {
    return state.userToken;
  },
  userId(state) {
    return state.userId;
  },
  isAuth(state) {
    return state.isAuth;
  },
};

export const mutations = {
  setLogin(state, login) {
    state.body.login = login;
  },
  setPassword(state, password) {
    state.body.password = password;
  },
  setUserToken(state, token) {
    state.userToken = token;
  },
  setUserId(state, id) {
    state.userId = id;
  },
  setIsAuth(state, value) {
    state.isAuth = value;
  },
};

export const actions = {
  async login({ state, commit }) {
    try {
      const { $requester, app } = $nuxt.context;
      const res = await $requester.post('login', state.body);

      if (res.status === 200) {
        commit('setUserToken', res.data.token);
        commit('setUserId', res.data.user.id);
        commit('setIsAuth', true);

        app.$cookies.set('userData', { token: res.data.token, id: res.data.user.id });
        await app.router.push('/settings');
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
