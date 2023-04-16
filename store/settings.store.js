export const state = () => ({
  body: {
    login: '',
    email: '',
    telegramChat: '',
    phone: '',
    lname: '',
    fname: '',
    timezonestring: '',
    notifytype: '', // уведомления (то же)
    companyname: '',
    calltype: '', //sip
    locklentaupdate: false, //автоматически переходить к новым объявлениям
    colorlenta: false,
    redirecttarget: 0, // переход в карточку
  },
});

export const getters = {
  settings(state) {
    return state.body;
  },
};

export const mutations = {
  setCompany(state, company) {
    state.body.companyname = company;
  },
  setLogin(state, login) {
    state.body.login = login;
  },
  setPhone(state, phone) {
    state.body.phone = phone;
  },
  setFirstName(state, name) {
    state.body.fname = name;
  },
  setSecondName(state, name) {
    state.body.lname = name;
  },
  setNotificationType(state, type) {
    state.body.notifitype = type;
  },
  setEmail(state, email) {
    state.body.email = email;
  },
  setTelegram(state, telegram) {
    state.body.telegramChat = telegram;
  },
  setTimezone(state, timezone) {
    state.body.timezonestring = timezone;
  },
  setAnnouncements(state, value) {
    state.body.locklentaupdate = value;
  },
  setEnableColors(state, value) {
    state.body.colorlenta = value;
  },
  setTransitionType(state, type) {
    state.body.redirecttarget = type;
  },
  setUseSip(state, value) {
    state.body.calltype = value;
  },
  setBody(state, value) {
    state.body = value;
  },
};

export const actions = {
  async getUserData({ state, commit, rootGetters }) {
    try {
      const { $requester } = $nuxt.context;

      const res = await $requester.get(`user/${rootGetters['login.store/userId']}`, {
        headers: { 'X-User-Token': rootGetters['login.store/userToken'] },
      });

      if (res.status === 200) {
        commit('setBody', res.data);
      }
    } catch (err) {
      commit('errors.store/setSettingsError', err.response?.data.errors, { root: true });
    }
  },

  async putSettings({ state, commit, rootGetters }) {
    try {
      const { $requester } = $nuxt.context;

      const res = await $requester.put(
        `user/${rootGetters['login.store/userId']}`,
        { email: state.body.email },
        {
          headers: { 'X-User-Token': rootGetters['login.store/userToken'] },
        },
      );

      if (res.status === 200) {
        return true;
      }
    } catch (err) {
      commit('errors.store/setSettingsError', err.response?.data.errors, { root: true });
    }
  },
};
