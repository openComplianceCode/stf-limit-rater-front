// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: 'User Profile',
      icon: 'mdi-account',
      to: '/components/profile/',
    },
    
  ],
  quota: {},
  authURL: {},
}

const mutations = make.mutations(state)
const axios = require("axios").default
import _ from "lodash"

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
  fetch: ({commit}) => {
    axios.get("/api/consts").then(r => {
      const consts = r.data || {};
      if (!_.isEmpty(consts.authURL)) {
        commit('authURL', consts.authURL);
      }
      if (!_.isEmpty(consts.quota)) {
        console.log(consts.quota);
        commit('quota', consts.quota);
      }
    }).catch((error) => {
      commit("authURL", {});
      commit("quota", {});
    });
  },
  
}

const getters = {}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
