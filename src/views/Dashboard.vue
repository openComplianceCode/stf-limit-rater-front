<template>
  <dashboard-nologin></dashboard-nologin>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'
  import Vue from 'vue'
  import DashboardNologin from './subviews/DashboardNologin.vue'
  import DashboardLogin from './subviews/DashboardLogin.vue'

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
    }
  }
</script>
