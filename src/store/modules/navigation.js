export default {
  namespaced: true,
  state: {
    leftNav: true,
    rightNav: false,
  },
  getters: {
    leftNavStatus: state => state.leftNav,
    rightNavStatus: state => state.rightNav,
  },
  mutations: {
    updateLeftNavState(state, data) {
      state.leftNav = data;
    },
    updateRightNavState(state, data) {
      state.rightNav = data;
    },
  },
  actions: {
    leftNavStatus(context, data) {
      context.commit('updateLeftNavState', data);
    },
    rightNavStatus(context, data) {
      context.commit('updateRightNavState', data);
    },
  },
};
