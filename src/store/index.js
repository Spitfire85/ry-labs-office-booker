import Vue from 'vue';
import Vuex from 'vuex';
import types from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ui: {
      viewport: types.MOBILE,
    },
  },
  mutations: {

  },
  actions: {

  },
  modules: {
  },
});
