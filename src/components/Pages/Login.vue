<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <img src="../../assets/images/unoapp.png" class="form-head-logo mb-2"/>
            <v-card class="elevation-12">
            <offset-heading title="LOGIN"></offset-heading>
              <v-card-text class="px-5">
                <v-form ref="form-1" lazy-validation>
                  <v-text-field
                    v-model="user.email"
                    :rules="emailRules"
                    prepend-icon="fas fa-user-circle"
                    name="login"
                    label="Login"
                    required
                    validate-on-blur
                    @keyup.enter="login()"
                    type="text">
                  </v-text-field>
                  <v-text-field
                    v-model="user.password"
                    :rules="passwordRules"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    validate-on-blur
                    :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                    @keyup.enter="login()"
                  >
                  </v-text-field>
                </v-form>

                <div class="px-5">
                   <v-card-text role="button">
                    <router-link class="normal-link" :to="{ name: 'ForgotPassword'}"> Forgot your password?</router-link>
                  </v-card-text>
                  <v-btn
                      color="primary"
                      d-inline-flex
                      fab
                      medium
                      @click="login()"
                    >
                      <v-icon dark>fas fa-long-arrow-alt-right</v-icon>
                    </v-btn>
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
  name: 'Login',
  data() {
    return {
      showPassword: false,
      user: {
        email: '',
        password: '',
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^.+@.+\..+$/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      passwordCheckRules: [
        v => !!v || 'Password is required',
        v => v === this.newPassword || 'Passwords must match',
      ],
    };
  },
  props: {
    source: String,
  },
  created() {
    // Check if user token exist
    this.spinner(false);
  },
  mounted() {

  },
  methods: {
  
    /**
    * To prompt the backend call that logs the user in.
    * @function
    * @param {object} event - The click event that prompted this function.
    * @returns {object} A promise that will either return an error message
    * or display the success screen
    */
    login() {
      // debugger
      this.snackbar({
        text: 'Successfully logged in.',
        timeout: 4000,
        open: true,
      });
      this.$router.push({name:'Applications'});
    },
    ...mapActions({
      spinner: 'spinner/spinnerStatus',
      snackbar: 'snackbar/snackbar',
    }),

  },
};
</script>
<style scoped>
.heading-offset-wrapper{
    margin-top: 50px !important;
}
</style>
