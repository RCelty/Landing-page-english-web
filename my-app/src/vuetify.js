import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#ec2229"
      }
    }
  }
};

export default new Vuetify(opts);