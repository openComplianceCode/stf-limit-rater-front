// Vue
import Vue from 'vue'
import Vuex from 'vuex'
import pathify from '@/plugins/vuex-pathify'

// Modules
import * as modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  plugins: [
    pathify.plugin,
  ],
})

store.subscribe(mutation => {
  if (!mutation.type.startsWith('user/')) return

})

store.dispatch('app/init')

export default store

export const ROOT_DISPATCH = Object.freeze({ root: true })


const axios = require("axios").default;
axios.interceptors.response.use(
  r => {
    const clientIP = r.headers["z-client-ip"];
    if (!_.isEmpty(clientIP)) {
      store.commit("user/clientIP", clientIP);
    }
    return r;
  },
  r => {
    if (r.status == "301") {
      store.commit("user/isLogin", false);
    }
    return r;
  }
);