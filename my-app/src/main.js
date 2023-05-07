import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/vuetify";
import router from "@/router";
import store from "@/store";

import "@/assets/vendor.scss";
import "@/assets/_global.scss";

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
