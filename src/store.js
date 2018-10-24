import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [],
    pageNumber: 0,
    since: null,
    loading: true
  },
  mutations: {
    setSince (state, payload) {
      state.since = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    addPage (state, payload) {
      state.pages.push(payload)
    },
    increasePageNumber (state) {
      state.pageNumber = state.pageNumber + 1
    },
    decreasePageNumber (state) {
      if (state.pageNumber >= 1) {
        state.pageNumber = state.pageNumber - 1
      }
      return
    }
  },
  actions: {
    getUsersGithub ({commit, getters}) {
      commit('setLoading', true)

      let since = ''
      if (getters.since) {
        since = getters.since
      }

      const result = axios.get('http://localhost:3000/users' + since)
      result
        .then(response => {
          commit('increasePageNumber')
          commit('setSince', response.headers.next)
          commit('addPage', response.data)
          commit('setLoading', false)
        })
        .catch(e => console.log(e))
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    since (state) {
      return state.since
    },
    pages (state) {
      return state.pages
    },
    pageNumber (state) {
      return state.pageNumber
    },
    lastPage (state) {
      return state.pages.length
    }
  }
})
