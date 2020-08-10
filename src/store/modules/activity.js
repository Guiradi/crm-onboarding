export default {
  namespaced: true,

  state: {
    activity: {
      title: "Título da atividade"
    }
  },

  getters: {
    activity: state => state.activity
  },

  actions: {
    setActivity({ commit }, payload) {
      commit("MAIN_SET_ACTIVITY", payload);
    }
  },

  mutations: {
    MAIN_SET_ACTIVITY(state, payload) {
      state.activity = payload;
    }
  }
};
