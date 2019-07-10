<template>
  <div id="app">
    <app-nav></app-nav>

    <v-container>
      <v-layout align-center justify-center depressed>
        <v-flex xs12 sm10>
          <h3>Email</h3>

          <v-text-field single-line solo></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout align-center justify-center>
        <v-flex xs12 sm10>
          <h3>Password</h3>

          <v-text-field single-line solo></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center>
        <v-btn depressed class="green white--text" justify-center>login</v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
export default {
  components: {
    "app-nav": navbar
  }
};
</script>

<style>
</style>

