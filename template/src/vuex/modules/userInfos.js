import Vue from 'vue';

let state = {
  account: '',
  apikey: '',
  isLogged: false,
  language: 'FR-fr',
};
const storageLoginInfos = localStorage.getItem('userInfos');

if (storageLoginInfos) {
  state = JSON.parse(storageLoginInfos);
  if (state.apikey) state.isLogged = true;
}

setTimeout(() => {
  if (state.userInfos) Vue.config.lang = state.userInfos.language;
}, 100);

export default { state };
