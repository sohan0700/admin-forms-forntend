<template>
 <v-layout row justify-center>
    <v-dialog :value="active" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>SELECT ATTACHMENT</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="closeModal()">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
       
        <v-divider></v-divider>
        <v-card-text class="text-xs-left vh90">
          <attachment-resources></attachment-resources>
        </v-card-text>
        

        <v-divider class="mt-4"></v-divider>
        <v-card-actions class="py-4">
          <v-spacer></v-spacer>
          <v-btn color="primary"  @click.prevent="insert()">SELECT</v-btn>
          <v-btn color="primary"  @click="closeModal()">CANCEL</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {

    ...mapGetters('attachment', [
      'active',
      'data',
    ]),
  },

  methods: {
    /**
     * Insert image to the target field 
     */
    insert() {
      /**
       * none of image selected 
       */
      if(!this.data.obj.id){
        this.snackbar({
          text: 'Please select image.',
          timeout: 3000,
          open: true,
        });
        return false;
      }
      this.setData({
        action: 'insert',
      });
      this.setActive(false);
    },

    closeModal() {
      this.setActive(false);
      this.setData({
        target: '',
        action: '',
        obj: {},
      });

    },
    ...mapActions({
      setActive: 'attachment/setActive',
      setData: 'attachment/setData',
      snackbar: 'snackbar/snackbar',
    }),
  },
};
</script>
<style>
.vh90{
  max-height: 78VH;
  overflow-y: scroll;
}
</style>
