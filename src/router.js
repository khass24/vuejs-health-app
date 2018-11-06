import Vue from 'vue'
import Router from 'vue-router'

import Gratitude from './views/Gratitude.vue'

// import DailyReport from './views/DailyReport.vue'

import Signup from './views/Signup.vue'
import Login from "./views/Login.vue"
import Logout from "./views/Logout.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "login", component: Login },
    { path: "/gratitude", name: "gratitude", component: Gratitude },

    // { path: "/report", name: "report", component: DailyReport },

    { path: "/signup", name: "signup", component: Signup },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
