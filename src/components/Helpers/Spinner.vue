<template>
  <div class="spinner-wrapper" v-if="spinner">
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Spinner',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      spinner: 'spinner/status',
    }),
  },
};
</script>

<style scoped>
.spinner {
    width: 90px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
}
.spinner > div {
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  margin:0 5px;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}
.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}
@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
.spinner-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.70);
    height: 100%;
    z-index: 999;
}
</style>
