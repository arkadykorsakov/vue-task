import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './modules/tasks.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: ''
  },
  getters: {
    message: (s) => s.message
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    clearMessage(state) {
      state.message = ''
    }
  },
  actions: {
    clearMessage({ commit }) {
      setTimeout(() => {
        commit('clearMessage')
      }, 5000)
    }
  },
  modules: {
    tasks
  }
})
