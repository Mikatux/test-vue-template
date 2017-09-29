import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import Logout from '@/components/pages/Logout';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
  ],
});
