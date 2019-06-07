<template>
  <div id="app" class="box-wrapper">
    <router-view/>
    <Spinner></Spinner>
    <Snackbar></Snackbar>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>

<style lang="scss">
@import '@/material-package/styles/index.scss';
// VARIABLES ARE THE SAME AS THE THEME COLORS IN VUETIFY.JS:
// $primary: #EE44AA;
$primary: #F03C0C;
$secondary: #FAFAFA;
$accent: #14B9D6;
$error: #D0021B;
$warning: #FFC200;
$info: #666666;
$success: #5CB85C;
$black: #000000;
$bloodred: #af371f;
$lightGrey: #D8D8D8;
$darkGrey: #4B4B4B;
// ADDED THIS COLOR FOR BACKGROUND:
$primaryLight: lighten( $primary, 35% );

.box-wrapper {
  display: table;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(155deg, #f3f6f8 0%, #fff 100%);
}
.box-wrapper::before {
  content: "";
  position: fixed;
  left: -55%;
  top: 60%;
  right: 0;
  width: 155%;
  height: 100%;
  // background: linear-gradient(155deg, #fff 0%, #f3f6f8 100%);
  background: linear-gradient(155deg, $primaryLight 0%, #fff 100%);
  transform: rotate(15deg);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-dialog{
    // border: 1px solid yellow;
    box-shadow: none;
}
.pointer{
  cursor: pointer;
}
.v-expansion-panel__header__icon{
  padding: 10px;
  background-color: $primaryLight;
  border-radius: 50%;
  -webkit-transition: 0.6s ease-out;
  -moz-transition:  0.6s ease-out;
  transition:  0.6s ease-out;
}

.v-expansion-panel__header__icon:hover{
  -webkit-transform: rotateZ(360deg);
  -moz-transform: rotateZ(360deg);
  transform: rotateZ(360deg);
}
.normal-link{
  text-decoration: none;
}
</style>
