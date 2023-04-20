<template>
  <v-container id="user-profile-view" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="12">
        <material-card color="primary" icon="mdi-account-outline">

          <template #title>
            Edit Profile — <small class="text-body-1">Complete your profile</small>
          </template>

          <v-form>
            <v-container class="py-0">
              <div style="position:absolute;width:100%;height:100%; margin: 0px -12px; background-color: rgba(0,0,0,0.2);" v-if="loading">
                <v-icon  color="#999" size="20em"
                  style="position: absolute; margin: auto;top:0;bottom:0;left:0;right:0">mdi-loading mdi-spin</v-icon>
              </div>
              <material-alert v-if="success" color="success" dismissible icon="mdi-check-circle">
                Successfully updated !
              </material-alert>
              <material-alert v-if="error" color="error" dismissible icon="mdi-alert-circle">
                There are errors: <br />
                <list>
                  <li v-for="e of errors">{{ e }}</li>
                </list>
              </material-alert>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field color="purple" label="First Name" v-model="userInfo.firstName" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field color="purple" label="Last Name" v-model="userInfo.lastName" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field color="purple" label="Email Address" v-model="userInfo.emailAddress" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Company (Optional)" v-model="userInfo.company" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field color="purple" label="City" v-model="userInfo.city" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field color="purple" label="Country" v-model="userInfo.country" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field color="purple" label="Postal Code" v-model="userInfo.postalCode" />
                </v-col>

                <v-col cols="12">
                  <v-text-field color="purple" label="Address" v-model="userInfo.address" />
                </v-col>

                <v-col cols="12">
                  <v-textarea color="purple" label="About Me (Optional)" v-model="userInfo.aboutMe" />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="primary" min-width="150" @click="sumbitUserDetail">
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { get } from 'vuex-pathify'


export default {
  name: 'UserProfileView',

  data: () => ({
    loading: false,
    success: false,
    error: false,
    errors: [],
  }),
  methods: {
    sumbitUserDetail(e) {
      this.success = false;
      this.error = false;
      this.errors = [];
      this.loading = true;

      this.$store.dispatch("user/updateUserDetail", this.userInfo).then(r => {
        console.log(r);
        this.loading = false;
        this.success = true;
      }, r => {
        this.loading = false;
        this.error = true;
        console.log(r); 
      });
    },
  },

  computed: {
    userInfo: get('user/userInfo'),
  },

  mounted() {
    //this.$store.('user/fetch');
  }
}



</script>
