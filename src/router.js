import Vue from 'vue';
import Router from 'vue-router';

/**
 * Components
 */
import LeftNav from '@/components/LeftNav.vue';
import RightNav from '@/components/RightNav.vue';
import TopNav from '@/components/TopNav.vue';

/**
 * Helper components assign globally
 */
import Spinner from '@/components/Helpers/Spinner.vue';
import Snackbar from '@/components/Helpers/Snackbar.vue';

/**
 * Pages
 */
import Login from '@/components/Pages/Login.vue';
import ForgotPassword from '@/components/Pages/ForgotPassword.vue';
import PageNotFound from '@/components/Pages/PageNotFound.vue';
/**
 * Logged in pages
 */
import Layout from '@/components/Layout.vue';
import Applications from '@/components/Pages/Applications.vue';


/**
 * Image
 */
import ImageContainer from '@/plugins/attachment/ImageContainer.vue';
import AttachmentPopup from '@/plugins/attachment/AttachmentPopup.vue';


/**
 * Custom components
 */
import OffsetHeading from './components/custom-components/OffsetHeading.vue';
import OffsetBlock from './components/custom-components/OffsetBlock.vue';
import PopupHeading from './components/custom-components/PopupHeading.vue';

Vue.component('offset-block', OffsetBlock);
Vue.component('offset-heading', OffsetHeading);
Vue.component('popup-heading', PopupHeading);

Vue.component('image-container', ImageContainer);
Vue.component('attachment-popup', AttachmentPopup);

/**
 * Register component
 */
Vue.component('Spinner', Spinner);
Vue.component('Snackbar', Snackbar);
Vue.component('LeftNav', LeftNav);
Vue.component('RightNav', RightNav);
Vue.component('TopNav', TopNav);

Vue.use(Router);
export default new Router({
  routes: [
    /**
     * Normal routes
     */
    {
      path: '/',
      component: Login,
      name: 'Login',
      addtoNav: false,
      navText: 'Login'
    },
    {
      path: '/forgot-password',
      component: ForgotPassword,
      name: 'ForgotPassword',
      addtoNav: false,
      navText: 'Forgot Password',
    },

    /**
     * Logged in routes
     */
    {
      path: '/home',
      component: Layout,
      name: 'Layout',
      addtoNav: false,
      navText: 'Home',
      checkAccess: false,
      meta: {
        pageTitle: 'Home',
        //middleware: Auth,
      },
      children: [
        {
          path: '/applications',
          component: Applications,
          name: 'Applications',
          addtoNav: true,
          navText: 'Applications',
          checkAccess: '',
          icon: 'apps',
          meta: {
            pageTitle: 'Applications',
            //middleware: [Auth, ValidateToken],
          },
        },
      ],
    },
    {
      path: '*',
      addtoNav: false,
      name: '404',
      component: PageNotFound,
    },
  ],

});
