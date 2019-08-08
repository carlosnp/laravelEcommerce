import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {i18n} from './plugins/locale.js'
import store from "./store";
import vuetify from "./plugins/vuetify";
import VeeValidate, { Validator } from 'vee-validate';

Vue.config.productionTip = false;

Vue.use(VeeValidate);

new Vue({
    router,
    store,
    i18n,
    vuetify,
    render: h => h(App)
}).$mount("#app");
