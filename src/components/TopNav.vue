<template>
<v-toolbar class="" app color="white">
     <v-toolbar-side-icon @click.prevent="toggleLeftBar()"></v-toolbar-side-icon>
      <v-toolbar-title
      class="text-xs-right"
      >
        {{  }}
      </v-toolbar-title>
     <v-spacer></v-spacer>
     <v-menu
      :close-on-content-click="true"
      :nudge-bottom="50"
      :nudge-left="50"
      :nudge-width="100"
      attach
      >
       <v-btn outline color="primary" slot="activator">
       <i class="fas fa-user-circle"></i> &nbsp; {{  }}
       </v-btn>
       <v-card>
        <v-list>
          <v-list-tile @click="logout()">
            <v-list-tile-action>
              <v-icon light>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
    <v-btn icon @click.stop="toggleRightBar()">
      <v-icon>more_vert</v-icon>
    </v-btn>
   </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      rightBarStatus: 'navigation/rightNavStatus',
      leftBarStatus: 'navigation/leftNavStatus',
    }),
  },
  mounted() {

  },
  methods: {

    /**
     * Open / close left siderbar menu
     */
    toggleLeftBar() {
      this.leftBar(!this.leftBarStatus);
    },
    /**
     * Open close right bar
     */
    toggleRightBar() {
      /**
       * This ection is to get locations
       */
      const self = this;
      this.rightBar(true);
    },
    /**
     * Clear user storage and throw back to login screen
     */
    logout() {
      /**
       * Clear storage
       */
      this.$router.push({ name: 'Login' });
    },
    ...mapActions({
      setAppList: 'application/setList',
      leftBar: 'navigation/leftNavStatus',
      rightBar: 'navigation/rightNavStatus',
      snackbar: 'snackbar/snackbar',
      spinner: 'spinner/spinnerStatus',
      setLocation: 'location/setList',
    }),
  },
};
</script>
