<template>
  <v-toolbar color="#FAFAFA">
    <v-reponsive>
      <v-img
        :src="require('@/assets/logo.png')"
        contain
        height="100px"
        width="100px"
        position="left"
      />
    </v-reponsive>
    <v-toolbar-title>Survey Admin</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-icon>person</v-icon>
      <v-btn flat>login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
</style>