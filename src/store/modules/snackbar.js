/* Snackbar */
/* eslint-disable */
const SET_SNACKBAR_TIMEOUT = 'SET_SNACKBAR_TIMEOUT';
const SET_SNACKBAR_TEXT = 'SET_SNACKBAR_TEXT';
const SET_SNACKBAR_OPEN = 'SET_SNACKBAR_OPEN';

const state = {
  open: false,
  text: '',
  timeout: 0,
};

export const getters = {
  open: state => state.open,
  text: state => state.text,
  timeout: state => state.timeout,
};

export const actions = {
  setOpen({ commit }, open) {
    commit(SET_SNACKBAR_OPEN, open);
  },
  setText({ commit }, text) {
    commit(SET_SNACKBAR_TEXT, text);
  },
  snackbar({ commit }, { text, open, timeout }) {
    if (timeout !== undefined) {
      commit(SET_SNACKBAR_TIMEOUT, timeout);
    } else {
      commit(SET_SNACKBAR_TIMEOUT, 0);
    }
    if (state.open) {
      commit(SET_SNACKBAR_OPEN, open);
      commit(SET_SNACKBAR_TEXT, text);
    } else {
      commit(SET_SNACKBAR_TEXT, text);
      commit(SET_SNACKBAR_OPEN, open);
    }
  },
};

export const mutations = {
  [SET_SNACKBAR_OPEN](state, open) {
    state.open = open;
  },
  [SET_SNACKBAR_TEXT](state, text) {
    state.text = text;
  },
  [SET_SNACKBAR_TIMEOUT](state, miliseconds) {
    state.timeout = miliseconds;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
