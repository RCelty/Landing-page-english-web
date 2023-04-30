import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/vuetify";
import router from "@/router";

import "@/assets/vendor.scss";

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
