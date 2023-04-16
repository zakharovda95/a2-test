export default function ({ app, redirect, store, route }): void {
  const res = app.$cookies.get('userData');

  if (res?.token && res?.id) {
    store.commit('login.store/setUserId', res.userId);
    store.commit('login.store/setUserToken', res.userToken);
    store.commit('login.store/setIsAuth', true);

    if (route.name === 'auth-login' || route.name === 'auth-register') {
      redirect('/');
    }
  } else {
    if (route.name === 'settings') {
      redirect('/');
    }
  }
}
