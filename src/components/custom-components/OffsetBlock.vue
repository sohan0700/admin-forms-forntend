<template>
  <v-card flat tile class="elevation-2 heading-offset-wrapper">
    <div class="bg-white">
      <v-card color="primary mx-5" class="elevation-8 offset-heading rounded heading-offset-20">
        <v-card-title class="px-5">
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6>
              <h2 v-if="title" :class="customTitleStyle" v-text="title"></h2>
              <p v-if="subtitle" class="font-weight-regular" v-text="subtitle"></p>
            </v-flex>
            <v-flex xs12 md6 lg6  class="text-md-right text-xs-left">
             <slot name="action"></slot>
            </v-flex>      
          </v-layout>
        </v-card-title>
      </v-card>
      <slot name="list"></slot>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'title-style'],
  computed: {
    customTitleStyle: function() {
      if(this.titleStyle){
        return this.titleStyle + ' headline font-weight-medium';
      } else {
        return 'headline font-weight-medium';
      }
    },
  }
}
</script>