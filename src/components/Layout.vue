<template>
  <v-app>
   <v-content>
     <LeftNav></LeftNav>
     <TopNav></TopNav>
     <router-view></router-view>
     <RightNav></RightNav>
   </v-content>
 </v-app>
</template>
<script>
export default {
  name: 'HomeWrap',
  data: () => ({

  }),
  props: {
    source: String,
  },
  methods: {

  },
};
</script>
