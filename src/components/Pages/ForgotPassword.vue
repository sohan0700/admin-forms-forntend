<template>
 <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
             <img src="../../assets/images/unoapp.png" class="form-head-logo mb-2"/>
            <v-card class="elevation-12">
              <offset-heading title="FORGOT PASSWORD" subtitle="Enter your email address and  we'll send you details"></offset-heading>
              <v-card-text class="nmt-20">
                <v-form v-if="!emailSent" ref="forgot-password">
                  <v-text-field
                  v-model="user.email"
                  :rules="emailRules"
                  prepend-icon="fas fa-user-circle"
                  required
                  validate-on-blur
                  name="E-mail"
                  label="E-mail"
                  type="text">
                  </v-text-field>
                </v-form>
                <p
                v-if="emailSent"
                class="subtitle is-6 mb-4">
                We will send further instructions to the email you provided,
                if it is linked to an account.</p>

                <div class="px-5">
                  <v-card-text
                    v-if="!emailSent"
                    role="button">
                    <router-link class="normal-link" :to="{ name: 'Login'}">Go back to login? </router-link>
                  </v-card-text>
                  <v-btn
                    v-if="!emailSent"
                    color="primary"
                    fab
                    medium
                    @click="forgot($event)"
                  >
                    <v-icon dark>fas fa-long-arrow-alt-right</v-icon>
                  </v-btn>
                  <router-link :to="{ name: 'Login'}">
                    <v-btn
                      v-if="emailSent"
                      color="primary" >
                      Okay
                    </v-btn>
                  </router-link>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginForgot',
  // data: () => ({
  data() {
    return {
      emailSent: false,
      user: {
        email: '',
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^.+@.+\..+$/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  props: {
    source: String,
  },
  created() {
  },
  mounted() {

  },
  methods: {
    /**
     * Handles the forgot password email submisstion
     */
    forgot() {
    },
    ...mapActions({
      snackbar: 'snackbar/snackbar',
      spinner: 'spinner/spinnerStatus',
    }),
  },
};
</script>
<style scoped>
.heading-offset-wrapper{
    margin-top: 70px !important;
}
</style>
