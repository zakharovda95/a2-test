export const state = () => ({
  body: {
    phone: '',
  },
});

export const getters = {
  phone(state) {
    return state.body.phone;
  },
};

export const mutations = {
  setPhone(state, phone) {
    state.body.phone = phone;
  },
};

export const actions = {
  async register({ state, commit }) {
    try {
      const { $requester, app } = $nuxt.context;
      const res = await $requester.post('register', { login: state.body.phone });
      if (res.status === 200) {
        app.router.push('/auth/login');
      }
    } catch (err) {
      commit('errors.store/setRegisterError', err.response.data.errors, { root: true });
    }
  },
};
