import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

import userInfos from './modules/userInfos';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    userInfos,
  },
});
