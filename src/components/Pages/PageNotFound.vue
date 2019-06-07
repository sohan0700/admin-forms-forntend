<template>
  <v-container grid-list-xl fluid>
    <v-layout align-center justify-center row fill-height class="vertically-center">
      <v-flex xs12>
        <v-card-title class="py-3 px-4">
          <v-layout row wrap>
            <v-flex sm12 md12 lg12 left>
              <h1> 404:Error.</h1>
              <p>Page cannot be found.</p>
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
.vertically-center{
  position: absolute;
  left: 0;
  right: 0;
  margin: 0px auto;
  top: 50%;
  transform: translateY(-50%);
 }
 </style>
