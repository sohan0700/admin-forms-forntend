<template>
  <v-card color="primary" class="elevation-0 text-xs-left">
    <v-card-title class="px-4 py-2">
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6>
          <h2 v-if="title" :class="customTitleStyle" v-text="title"></h2>
          <p v-if="subtitle" class="white--text mb-0" v-text="subtitle"></p>
        </v-flex>
        <v-flex xs12 md6 lg6  class="text-md-right text-xs-left">
          <slot name="action"></slot>
        </v-flex>      
      </v-layout>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
  computed: {
    customTitleStyle: function() {
      if(this.subtitle){
        return 'pt-2 font-weight-regular primary text-uppercase white--text';
      } else {
        return 'font-weight-regular primary text-uppercase white--text';
      }
    },
  }
}
</script>