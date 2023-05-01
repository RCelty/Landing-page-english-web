import Vue from "vue";
import Vuex from "vuex";

import GeneralModule from "./modules/general";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    general: GeneralModule
  }
});
