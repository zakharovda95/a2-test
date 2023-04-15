import {
  SettingsStoreState,
  SettingsStoreStateFields,
} from '~/helpers/types/store/settings-store.type';

export const state = (): SettingsStoreState => ({
  body: {
    company: '',
    login: '',
    phoneNumber: '',
    firstName: '',
    secondName: '',
    notificationType: '',
    email: '',
    telegram: '',
    timezone: '',
    newAnnouncements: false,
    enableColors: false,
    transitionType: '',
    useSip: false,
  },
});

export const getters = {
  settings(state): SettingsStoreStateFields {
    return state.body;
  },
};

export const mutations = {
  setCompany(state, company): void {
    state.body.company = company;
  },
  setPhoneNumber(state, phone): void {
    state.body.phoneNumber = phone;
  },
  setLogin(state, login): void {
    state.body.login = login;
  },
  setFirstName(state, name): void {
    state.body.firstName = name;
  },
  setSecondName(state, name): void {
    state.body.secondName = name;
  },
  setNotificationType(state, type): void {
    state.body.notificationType = type;
  },
  setEmail(state, email): void {
    state.body.email = email;
  },
  setTelegram(state, telegram): void {
    state.body.email = telegram;
  },
  setTimezone(state, email): void {
    state.body.email = email;
  },
  setAnnouncements(state, value): void {
    state.body.newAnnouncements = value;
  },
  setEnableColors(state, value): void {
    state.body.enableColors = value;
  },
  setTransitionType(state, type): void {
    state.body.transitionType = type;
  },
  setUseSip(state): void {
    state.body.useSip = !state.body.useSip;
  },
};

export const actions = {
  async getUSerData({ state, commit }, userId: string, userToken: string): void {
    try {
      const { $requester, app } = $nuxt.context;
      const res = await $requester.get(
        `user/${userId}`,
        { email: state.body.email },
        { 'X-User-Token': userToken },
      );
      if (res.status === 200) {
        console.log(res);
      }
    } catch (err) {
      commit('errors.store/setSettingsError', err.response.data.errors, { root: true });
    }
  },
  async putSettings({ state, commit }, userId: string, userToken: string): void {
    try {
      const { $requester, app } = $nuxt.context;
      const res = await $requester.put(
        `user/${userId}`,
        { email: state.body.email },
        { 'X-User-Token': userToken },
      );
      if (res.status === 200) {
        console.log(res);
      }
    } catch (err) {
      commit('errors.store/setSettingsError', err.response.data.errors, { root: true });
    }
  },
};
