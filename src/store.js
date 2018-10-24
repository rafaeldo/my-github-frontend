import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [],
    pageNumber: 0,
    since: null,
    loadingApp: true,
    loadingUserProfile: true
  },
  mutations: {
    setSince (state, payload) {
      state.since = payload
    },
    setLoadingApp (state, payload) {
      state.loadingApp = payload
    },
    setLoadingUserProfile (state, payload) {
      state.loadingUserProfile = payload
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
      commit('setLoadingApp', true)

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
          commit('setLoadingApp', false)
        })
        .catch(e => console.log(e))
    }
  },
  getters: {
    loadingApp (state) {
      return state.loadingApp
    },
    loadingUserProfile (state) {
      return state.loadingUserProfile
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
