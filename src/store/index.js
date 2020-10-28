import Vue from 'vue';
import Vuex from 'vuex';
import types from './types'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ui: {
      viewport: types.MOBILE
    }
  },
  mutations: {
    SET_VIEWPORT(state, width) {
      state.ui.viewport = types.MOBILE;

      // DEVNOTE: please reference src/scss/main.scss for breakpoint mappings
      if (width >= 768) state.ui.viewport = types.TABLET;
      if (width >= 1200) state.ui.viewport = types.DESKTOP;
    }
  },
  actions: {
    setViewport({ commit }) {
      commit('SET_VIEWPORT', (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth));
    }
  },
  modules: {
  }
});
