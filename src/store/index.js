import Vue from 'vue'
import Vuex from 'vuex'

import 'babel-polyfill'

import Firebase from 'Firebase'
import 'Firebase/firestore'
import config from '../config'
import users from './users'
import conversations from './conversations'

Firebase.initializeApp(config)
Vue.use(Vuex)

const state = {
  db: Firebase.firestore()
}
let store = new Vuex.Store({
  state,
  modules: {
    users,
    conversations
  },
  envInfos: {
    login: ''
  },
  actions: {
  },
  mutations: {
    increment (state) {
      state.count++
    },
    envInfos: (state, infos) => {
      state.envInfos = infos
    }
  },
  getters: {
    envInfos: (state, getters) => state.envInfos
  }
})

export default store
