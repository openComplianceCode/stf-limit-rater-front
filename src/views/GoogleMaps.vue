<template>
  <v-container id="google-maps-view" fluid tag="section">
    <v-row>
      <v-col cols="12" md="12">
        <material-card color="green" full-header>
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                Hi, alec-z
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
                  <v-icon color="indigo">
                    mdi-github
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>alec-z</v-list-item-title>
                  <v-list-item-subtitle>Github's login</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>4000 Per Day</v-list-item-title>
                  <v-list-item-subtitle>Role: Logining user</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>3999 <v-btn class="ml-1" color="primary" icon small>
                      <v-icon>mdi-cloud-refresh</v-icon>
                    </v-btn>
                  </v-list-item-title>
                  <v-list-item-subtitle>Quota remaining</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div>
              <h1 class="text-h3 text--primary">If you want to get more and seperated quota, your can login:</h1>
              <div class="text-center my-6">
                <v-btn depressed color="primary" width="40%">Continue with Github<v-icon right dark>
                    mdi-github
                  </v-icon>
                </v-btn>
              </div>
              <div class="text-center my-6">
                <v-btn depressed color="primary" width="40%">Continue with Gitee<v-icon right dark>
                    mdi-alpha-g-circle-outline
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
                <v-btn depressed color="primary" width="40%">Edit
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
              <v-list-item>

                <v-list-item-content>
                  <v-list-item-title> 400,00k</v-list-item-title>
                  <v-list-item-subtitle>Total quota consume</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>2 days ago</v-list-item-title>
                  <v-list-item-subtitle>Last access time</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>1000 Per Day {{}}</v-list-item-title>
                  <v-list-item-subtitle>Last Access IP</v-list-item-subtitle>
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
              <h1 class="text-h4 text--primary">If you generate new API access key, you last key will expired</h1>
              <div class="text-center my-6">
                <v-btn depressed color="primary" width="30%">Continue with Github<v-icon right dark>
                    mdi-github
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
import { get } from 'vuex-pathify'
import Vue from 'vue'

const lineSmooth = Vue.chartist.Interpolation.cardinal({
  tension: 0,
})

export default {
  name: 'GoogleMapsView',

  data: () => ({


  }),

  computed: {
    sales: get('sales/sales'),
    totalSales() {
      return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
    },
  },
}
</script>
