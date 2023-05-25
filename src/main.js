import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Vue from 'vu
// import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const vuetifyOptions = {
  theme: {
    dark: false,
  },
};

new Vue({
  router,
  vuetify: new Vuetify(vuetifyOptions),
  render: (h) => h(App),
}).$mount('#app');
