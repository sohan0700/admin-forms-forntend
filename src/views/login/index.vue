<template>
  <div id="app">
    <app-nav></app-nav>

    <v-container>
      <v-layout align-center justify-center style="height:400px">
        <v-flex xs12 sm6>
          <h3>Email</h3>
          <v-text-field single-line solo type="text"></v-text-field>
          <h3>Password</h3>
          <v-text-field single-line solo type="password"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center style="height:0px">
        <v-btn depressed class="green white--text">login</v-btn>
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
h3{
font-family: sans-serif;
}
</style>

