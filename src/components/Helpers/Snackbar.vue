<template>
  <v-snackbar
      v-model="snackbarOpen"
      bottom
      :timeout="snackbarTimeout"
    >
      {{ text }}
      <v-btn
        color="pink"
        flat
        @click="setOpen(false)"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Snackbar',
  computed: {
    snackbarOpen: {
      set(open) {
        return this.setOpen(open);
      },
      get() {
        return this.open;
      },
    },
    snackbarTimeout: {
      set(miliseconds) {
        return this.setTimeout(miliseconds);
      },
      get() {
        return this.timeout;
      },
    },
    ...mapGetters('snackbar', [
      'open',
      'text',
      'timeout',
    ]),
  },
  methods: {
    ...mapActions('snackbar', [
      'setOpen',
      'setTimeout',
    ]),
  },
};
</script>
