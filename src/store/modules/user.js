// Utilities
import { make } from "vuex-pathify";
import _ from "lodash";

// Globals
import { IN_BROWSER } from "@/util/globals";
import store from "..";

const axios = require("axios").default;

const state = {
  remaining: -1,
  isLogin: false,
  userInfo: {},
  clientIP: "",
  apiTokenInfo: {},
  newAPIToken: {},
  newAPITokenRemain: 0,

  dark: false,
  drawer: {
    image: 0,
    gradient: 0,
    mini: false
  },
  gradients: [
    "rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",
    "rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)",
    "rgba(244, 67, 54, .8), rgba(244, 67, 54, .8)"
  ],
  images: [
    "https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg"
  ],
  notifications: [],
  rtl: false
};

const mutations = make.mutations(state);

const actions = {
  fetch: ({ commit }) => {
    axios
      .get("/api/me")
      .then(function(response) {
        const user = response.data || {};
        if (!_.isNil(user.id) && user.id > 0) {
          commit("isLogin", true);
          commit("userInfo", user);
          axios.get("/api/quota_remaining").then(r => {
            commit("remaining", r.data.remaining);
          });
        }
      })
      .catch(error => commit("isLogin", false));

    if (state.dark === undefined) {
      commit("dark", window.matchMedia("(prefers-color-scheme: dark)"));
    }
  },
  rateLimit: ({ commit }) => {
    axios.get("/api/quota_remaining").then(r => {
      if (!_.isEmpty(r.data)) {
        commit("remaining", r.data.remaining);
      }
    });
  },
  apiTokenInfo: ({ commit }) => {
    if (state.isLogin) {
      axios.get("/api/show_api_token").then(r => {
        if (!_.isEmpty(r.data)) {
          commit("apiTokenInfo", r.data);
        }
      });
    }
  },
  generateAPIToken: ({ commit }) => {
    if (state.isLogin) {
      axios.get("/api/generate_api_token").then(r => {
        commit("newAPIToken", r.data.api_token);
        commit("newAPITokenRemain", 10);
        const timer = setInterval(() => {
          if (state.newAPITokenRemain <= 0) {
            clearInterval(timer);
          } else {
            commit("newAPITokenRemain", state.newAPITokenRemain - 1);
          }
        }, 1000);
        axios.get("/api/show_api_token").then(r2 => {
          if (!_.isEmpty(r2.data)) {
            commit("apiTokenInfo", r2.data);
          }
        });
      });
    }
  }
};

const getters = {
  dark: (state, getters) => {
    return state.dark || getters.gradient.indexOf("255, 255, 255") === -1;
  },
  oauthType: state => {
    return _.isNil(state.userInfo.giteeID) ? "Github" : "Gitee";
  },
  login: (state, getters) => {
    return getters.oauthType == "Github"
      ? state.userInfo.githubLogin
      : state.userInfo.giteeLogin;
  },
  avatarUrl: (state, getters) => {
    return getters.oauthType == "Github"
      ? state.userInfo.githubAvatarUrl
      : state.userInfo.giteeAvatarUrl;
  },
  gradient: state => {
    return state.gradients[state.drawer.gradient];
  },
  image: state => {
    return state.drawer.image === ""
      ? state.drawer.image
      : state.images[state.drawer.image];
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

axios.interceptors.response.use(
  r => {
    const clientIP = r.headers["z-client-ip"];
    if (!_.isEmpty(clientIP)) {
      store.state.clientIP = r.headers["z-client-ip"];
      store.commit("clientIP", clientIP);
    }
    return r;
  },
  r => {
    if (r.status == "301") {
      store.commit("isLogin", false);
    }
    return r;
  }
);
