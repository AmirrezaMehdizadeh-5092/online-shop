import Vue from 'vue'
import App from './App.vue';
import VueMeta from 'vue-meta';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import VueSession from "vue-session";
import VueCookies from 'vue-cookies'
import { store } from "../src/store/store";

Vue.use(VueSession);
Vue.use(VueMeta);
Vue.use(axios, VueAxios)
Vue.use(VueRouter)
Vue.use(VueCookies, { expires: '40d'});

const routes = [
  {
    path: '/',
    component: require('./components/HomeComp.vue').default,
  },
  {
    path: '/about',
    component: require('./components/AboutComp.vue').default
  },
  {
    path: '/contact',
    component: require('./components/ContactComp.vue').default
  },
  {
    path: '/favorite',
    component: require('./components/FavoriteComp.vue').default
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  store : store,
}).$mount('#app')
