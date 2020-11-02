import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nameFirst: '',
    nameLast: '',
    floor: '',
    checkedIn: ''
  },
  mutations: {
    SET_NAME_FIRST(state, payload) {
      state.nameFirst = payload;
    },
    SET_NAME_LAST(state, payload) {
      state.nameLast = payload;
    },
    SET_FLOOR(state, payload) {
      state.floor = payload;
    },
    SET_CHECKED_IN(state, payload) {
      state.checkedIn = payload;
    }
  },
  actions: {

  },
  modules: {
  }
});
