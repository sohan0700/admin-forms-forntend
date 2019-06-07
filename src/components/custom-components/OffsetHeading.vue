<template>
  <v-card flat tile class="heading-offset-wrapper">
    <div class="bg-white">
      <v-card color="primary mx-5" :class="innerStyle">
        <v-card-title class="px-3">
          <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12 >
              <h2 v-if="title" class="headline font-weight-medium" v-text="title"></h2>
              <p v-if="subtitle" class="font-weight-regular" v-text="subtitle"></p>
            </v-flex>     
          </v-layout>
        </v-card-title>
      </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
  computed: {
    innerStyle() {
      if(this.subtitle){
        return 'elevation-8 offset-heading rounded heading-offset-40';
      } else {
        return 'elevation-8 offset-heading rounded heading-offset-30';
      }
    },
  }
}
</script>
<style scoped>
.heading-offset-wrapper{
    position: relative;
    margin-top: 60px;
}
.heading-offset-30{
    position: relative;
    top: -31px;
}
.heading-offset-40{
    position: relative;
    top: -42px;
}

</style>