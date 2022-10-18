<template>
  <dashboard-nologin v-if="!isLogin"></dashboard-nologin>
  <dashboard-login v-else></dashboard-login>
</template>

<script>
  // Utilities
  import { set } from 'vuex-pathify'
  import Vue from 'vue'
  import DashboardNologin from './subviews/DashboardNologin.vue'
  import DashboardLogin from './subviews/DashboardLogin.vue'
  import { mapState } from 'vuex'

  const lineSmooth = Vue.chartist.Interpolation.cardinal({
    tension: 0,
  })

  export default {
    name: 'DashboardView',

    data: () => ({
      
    }),
    components: {
      DashboardNologin,
      DashboardLogin
    },
    computed: {
      ...mapState("user", {
        isLogin: state => state.isLogin,
        userInfo: state => state.userInfo
      })
    },
    mounted() {
      this.$store.dispatch('user/fetch');
    },
    
  }
</script>
