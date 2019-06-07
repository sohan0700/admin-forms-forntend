<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat tile class="elevation-2">
          <offset-block 
            title-style="pt-2"
            title="APPS" 
            subtitle="App list">
          </offset-block>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters({
      selectedLocationObj: 'location/selected',
    }),
  },
  methods: {
    
    addModal() {
      this.setAdd(true);
    },

     ...mapActions({
      setAdd: 'application/setAdd',
    }),

  }
};
</script>
<style scoped>

</style>
