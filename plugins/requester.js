export default function ({ $axios, $ua, $config }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
        'X-Api-Key': $config.X_API_KEY,
        'X-Device-User-Agent': $ua['_ua'],
      },
    },
  });
  api.setBaseURL($config.BACK_API);
  inject('requester', api);
}
