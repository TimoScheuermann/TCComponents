import Vue from 'vue';
import { Route } from 'vue-router';
import App from './App.vue';
import './registerServiceWorker';
import router, { prefix } from './router';
import store from './store';
import Vuement, { vmAccordion, vmButton } from './vuement/index.esm';

Vue.config.productionTip = false;

router.afterEach((to: Route) => {
  document.getElementsByTagName('title')[0].innerHTML = prefix + to.meta.title;
});

Vue.use(vmButton);
Vue.use(vmAccordion);
Vue.use(Vuement, { theme: 'light', components: [] });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#vuement');
