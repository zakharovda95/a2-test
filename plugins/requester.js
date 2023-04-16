export default function ({ $axios, $ua, $config, store }, inject) {
  const isAuth = store.getters['login.store/isAuth'];
  const headers = {
    common: {
      Accept: 'application/json',
      'X-Api-Key': $config.X_API_KEY,
      'X-Device-User-Agent': $ua['_ua'],
    },
  };

  if (isAuth) {
    headers.common['X-User-Token'] = store.getters['login.store/userToken'];
  }

  const api = $axios.create({
    headers,
  });
  api.setBaseURL($config.BACK_API);
  inject('requester', api);
}
