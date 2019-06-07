import Vue from 'vue';
import Vuex from 'vuex';
import snackbar from '@/store/modules/snackbar';
import spinner from '@/store/modules/spinner';
import navigation from '@/store/modules/navigation';
import application from '@/store/modules/application';


Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    snackbar,
    spinner,
    navigation,
    application,
  },
});
