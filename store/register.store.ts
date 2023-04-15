import { RegisterSoreState } from '~/helpers/types/store/register-store.type';

export const state = (): RegisterSoreState => ({
  body: {
    phone: '',
  },
});

export const getters = {
  phone(state): string {
    return state.body.phone;
  },
};

export const mutations = {
  setPhone(state, phone): void {
    state.body.phone = phone;
  },
};

export const actions = {
  async register({ state, commit }): void {
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
