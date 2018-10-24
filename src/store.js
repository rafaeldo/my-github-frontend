import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [],
    next: null,
    loading: true
  },
  mutations: {
    setNext (state, payload) {
      state.next = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    addPage (state, payload) {
      state.pages.push(payload)
    }
  },
  actions: {
    getUsersGithub ({commit}, payload) {
      commit('setLoading', true)

      let since = ''
      if (payload) {
        since = payload
      }

      const result = axios.get('http://localhost:3000/users' + since)
      result
        .then(response => {
          commit('setLoading', false)
          commit('setNext', response.headers.next)
          commit('addPage', response.data)
        })
        .catch(e => console.log(e))
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    pages (state) {
      return state.pages
    },
    lastPage (state) {
      const length = state.pages.length
      return state.pages[length-1]
    }
  }
})
