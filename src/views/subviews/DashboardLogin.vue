<template>
  <v-container id="dashboard-login" fluid tag="section">
    <v-row>
      <v-col cols="12" md="12">
        <material-card color="green" full-header>
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                Hi, {{login}}
              </div>
              <div class="text-caption">
                Nice to see your again
              </div>
            </div>
          </template>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-avatar size="48px">
                    <img :src="avatarUrl" />

                  </v-avatar>

                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>alec-z<v-icon color="indigo" right>
                      {{ oauthType == "Github" ? "mdi-github" : ""}}
                    </v-icon>
                  </v-list-item-title>
                  <v-list-item-subtitle>{{ oauthType }}'s login</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>{{quota[userInfo.role]}} Per Day</v-list-item-title>
                  <v-list-item-subtitle>Role: {{userInfo.role}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>
                    <span style="display:inline-block; width:7ex">
                      <span v-show="!rateLoading">{{remaining}} </span>
                      <v-icon v-show="rateLoading" color="primary">mdi-loading mdi-spin</v-icon>
                    </span>
                    <v-btn class="ml-1" color="primary" icon small @click="refresh">
                      <v-icon :disabled="rateLoading">mdi-cloud-refresh</v-icon>
                    </v-btn>
                  </v-list-item-title>
                  <v-list-item-subtitle>Quota remaining</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div>
              <h1 class="text-h3 text--primary">If you want to get more quota, you could fullfil your information and
                become our fans:</h1>
              <div class="text-center my-6">
                <v-btn depressed color="primary" width="20%" to="/components/profile/">Edit Profile
                  <v-icon right>
                    mdi-account-edit-outline
                  </v-icon>
                </v-btn>
              </div>

            </div>
          </v-card-text>


        </material-card>
      </v-col>

      <v-col cols="12" md="6">
        <material-card color="blue" full-header>
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                User profile
              </div>
              <div class="text-caption">
                Below is your user profile
              </div>
            </div>
          </template>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Alec Zheng</v-list-item-title>
                  <v-list-item-subtitle>Name</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>aleczheng05@gmail.com</v-list-item-title>
                  <v-list-item-subtitle>Contact Email</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Company info</v-list-item-title>
                  <v-list-item-subtitle>Company</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>Shenzhen, China</v-list-item-title>
                  <v-list-item-subtitle>City</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>


              <v-list-item>


                <v-list-item-content>
                  <v-list-item-title>xxxx,xxx,Shenzhen, China</v-list-item-title>
                  <v-list-item-subtitle>Address</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>


              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Company info</v-list-item-title>
                  <v-list-item-subtitle>About me</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>


            </v-list>
            <div>
              <div class="text-center my-6">
                <v-btn depressed color="primary" width="40%">Update <v-icon right>
                    mdi-account-edit-outline
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </material-card>
      </v-col>


      <v-col cols="12" md="6">
        <material-card color="blue" full-header>
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                Safety Configuration
              </div>
              <div class="text-caption">
                Below is your API access key usage:
              </div>
            </div>
          </template>
          <v-card-text>
            <v-list>
              <v-template v-if="apiTokenInfo.api_token_generate_time">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> {{apiTokenInfo.api_token_generate_time}}</v-list-item-title>
                    <v-list-item-subtitle>Generate Time</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-content>
                    <v-list-item-title>{{apiTokenInfo.access_time ? apiTokenInfo.access_time : 'Never'}}</v-list-item-title>
                    <v-list-item-subtitle>Last Use Time</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-content>
                    <v-list-item-title>{{apiTokenInfo.ip ? apiTokenInfo.ip : 'Never'}}</v-list-item-title>
                    <v-list-item-subtitle>Last Use IP</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-template>
              <v-template v-else>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>No API Token</v-list-item-title>
                    <v-list-item-subtitle>Your havenot gengerated API Token</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-template>
            </v-list>
            <div>
              <h1 class="text-h5 text--primary">
                <span v-if="newAPITokenRemain <= 0">The token won't expired until you generate new one, put it into HTTP Header Authorization</span>
                <v-template v-else>
                  <span color="primary">You have {{newAPITokenRemain}} seconds to save the Token: <br />
                  {{newAPIToken}} </span>

                </v-template>
                
              </h1>
              <div class="text-center my-6">
                <v-btn depressed color="primary" width="40%" :disabled="apiTokenGenerateLoading"
                  @click="generateAPIToken">generate new API token
                  <v-icon right v-show="!apiTokenGenerateLoading">mdi-key-plus</v-icon>
                  <v-icon right v-show="apiTokenGenerateLoading" color="primary">mdi-loading mdi-spin</v-icon>
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
import { get } from 'vuex-pathify'
import Vue from 'vue'

const lineSmooth = Vue.chartist.Interpolation.cardinal({
  tension: 0,
})

export default {
  name: 'DashboardLogin',

  data: () => ({
    rateLoading: false,
    apiTokenGenerateLoading: false
  }),
  methods: {
    refresh(e) {
      this.rateLoading = true;
      this.$store.dispatch("user/rateLimit").then(r => this.rateLoading = false);
    },
    generateAPIToken() {
      this.apiTokenGenerateLoading = true;
      this.$store.dispatch("user/generateAPIToken").then(r => this.apiTokenGenerateLoading = false);
    }
  },

  computed: {
    userInfo: get('user/userInfo'),
    login: get('user/login'),
    oauthType: get('user/oauthType'),
    avatarUrl: get('user/avatarUrl'),
    quota: get('app/quota'),
    remaining: get('user/remaining'),
    apiTokenInfo: get('user/apiTokenInfo'),
    newAPIToken: get('user/newAPIToken'),
    newAPITokenRemain: get('user/newAPITokenRemain'),
  },

  mounted() {
    this.$store.dispatch("user/apiTokenInfo");
  }
}
</script>
