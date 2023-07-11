import { createStore } from 'vuex'
import chartsData from '../chartsData.json';

export default createStore({
  state: function () {
    return {
      activeFile: 0,
      chartsData: chartsData
    }
  },
  getters: {
  },
  mutations: {
    setActiveFile(state, activeFile) {
      state.activeFile = activeFile;
    },
  },
  actions: {
  },
  modules: {
  }
})
