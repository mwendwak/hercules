import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

Vue.use (VueRouter);

import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";

Vue.use(PaperDashboard);

//import "vue-notifyjs/themes/default.css";

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
