import Vue from "vue";
import VueApollo from "vue-apollo";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { apolloProvider } from "./services/graphql";

Vue.config.productionTip = false;

Vue.use(VueApollo);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
