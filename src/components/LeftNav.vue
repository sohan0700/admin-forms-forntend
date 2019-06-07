<template>
  <v-navigation-drawer
  id="app-drawer"
  :value="leftBar"
  app
  dark
  floating
  persistent
  mobile-break-point="991"
  width="260"
>

    <v-layout class="fill-height" tag="v-list" column>

      <v-list-tile class="mt-2 py-2">
        <v-list-tile-title class="title text-xs-center">
          <img
            src="../assets/images/uno-logo.png"
            style="width:80%"
            contain
          > 
        </v-list-tile-title>
      </v-list-tile>

      <v-divider class="mt-2"/>

      
      <template>
            
            <!-- User can manage system -->
                <v-list-tile v-on:click="getClick">
                  <v-list-tile-action class="text-center">
                  <v-icon class="ml-3 md-icon">apps</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Applications</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

            <!-- User can manage system -->
                <v-list-tile v-on:click="getClick">
                  <v-list-tile-action class="text-center">
                  <v-icon class="ml-3 md-icon">business</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Business</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
         
              <v-list-tile v-on:click="getClick">
                <v-list-tile-action class="text-center">
                <v-icon class="ml-3 md-icon">location_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Locations</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile v-on:click="getClick">
                <v-list-tile-action class="text-center">
                <v-icon class="ml-3 md-icon">fas fa-user-circle</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Users</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile v-on:click="getClick">
                <v-list-tile-action class="text-center">
                <v-icon class="ml-3 md-icon">people</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Roles</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
      </template>
  </v-layout>
</v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      navigation: [
      ],
    };
  },

  computed: {
    ...mapGetters({
      leftBar: 'navigation/leftNavStatus',
    }),
  },
  created() {
    
  },
  methods: {
    getClick(){
      alert("You Clicked");
    }
  },
};
</script>
