<template>
  <v-container id="dashboard-nologin" fluid tag="section">
    <v-row>
      <v-col cols="12" md="12">
        <material-card color="orange" full-header>
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                Nologin status
              </div>
              <div class="text-caption">
                You will shared the IP's quota
              </div>
            </div>
          </template>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="indigo">
                    mdi-map-marker
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>202.12.7.1</v-list-item-title>
                  <v-list-item-subtitle>IP address</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>1000 Per Day</v-list-item-title>
                  <v-list-item-subtitle>Role: Nologin</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>999 <v-btn class="ml-1" color="primary" icon small>
                      <v-icon>mdi-cloud-refresh</v-icon>
                    </v-btn>
                  </v-list-item-title>
                  <v-list-item-subtitle>Quota remaining</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div>
              <h1 class="text-h3 text--primary">If you want to get more and seperated quota, you could login:</h1>
              <div class="text-center my-6">
                <v-btn depressed color="primary" width="40%" :href="auth_urls.github">Continue with Github<v-icon right dark>
                    mdi-github
                  </v-icon>
                </v-btn>
              </div>
              <div class="text-center my-6">
                <v-btn depressed color="primary" width="40%" :href="auth_urls.gitee">Continue with Gitee<v-icon right dark>
                    mdi-alpha-g-circle-outline
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </material-card>
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
// Utilities

const axios = require('axios').default;


export default {
  name: 'DashboardNologin',

  data: () => ({
    auth_urls: {}

  }),

  mounted () {
    axios
      .get('/api/auth_urls')
      .then(r => {
          console.log(r);
          this.auth_urls = r.data;
          
      })
  }
}
</script>
