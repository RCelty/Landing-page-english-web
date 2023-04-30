import Vue from "vue";
import Router from "vue-router";

import publicRoute from "./public";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...publicRoute
  ]
});

export default router;
