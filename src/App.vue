<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>

import '@/styles/overrides.sass'

export default {
  name: 'App',
  metaInfo: {
    title: 'Limiter',
    titleTemplate: '%s | Material Dashboard Free',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  created() {
      this.$store.dispatch('app/fetch');
      this.$store.dispatch('user/rateLimit');
    },
}
</script>
