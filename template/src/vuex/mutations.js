import * as types from './mutation-types';

export default {
  [types.SET_APIKEY](state, apikey) {
    if (apikey.access_token) {
      state.userInfos.isLogged = true;
    } else {
      state.userInfos.isLogged = false;
    }

    state.userInfos.apikey = apikey.access_token;
    localStorage.setItem('userInfos', JSON.stringify(state.userInfos));
  },

  [types.LOG_OUT](state) {
    localStorage.removeItem('userInfos');

    state.userInfos.account = {};
    state.userInfos.apikey = '';
    state.userInfos.isLogged = false;
  },
};
