<template>
  <v-navigation-drawer
    :value="rightBarStatus"
    fixed
    right
    app
    hide-overlay
    disable-resize-watcher
    dark
    class="pt-0"
  >
    <v-list class="pt-0">
      <v-list-tile class="px-2 py-1 item-right">
        <div class="text-sm-right ">
            <v-icon v-on:click.prevent="closeRightBar()">cancel</v-icon>
        </div>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
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
      locationList: 'location/list',
      getSelectedLocation: 'location/selected',
    }),
  },
  created() {
    //this.fetchLocations();
  },
  methods: {

    closeRightBar() {
      this.rightBar(false);
    },

    ...mapActions({
      rightBar: 'navigation/rightNavStatus',
      setLocationList: 'location/setList',
      selectLocation: 'location/selectAction',
      selectLocationApps: 'location/appsAction',
      snackbar: 'snackbar/snackbar',
      spinner: 'spinner/spinnerStatus',
    }),

  },
};
</script>

<style>
.location-list.current {
    background: #e06148;
}
.item-right .v-list__tile{
   flex-direction: row;
   justify-content: flex-end;
}
</style>

