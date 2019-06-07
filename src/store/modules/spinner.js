export default {
  namespaced: true,
  state: {
    active: false,
  },
  getters: {
    status: state => state.active,
  },
  mutations: {
    updateSpinnerState(state, data) {
      state.active = data;
    },
  },
  actions: {
    spinnerStatus(context, data) {
      context.commit('updateSpinnerState', data);
    },
  },
};
