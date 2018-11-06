import Vue from 'vue'
import Router from 'vue-router'

import Gratitude from './views/Gratitude.vue'

import SleepNew from './views/SleepNew.vue'
import MovementNew from './views/MovementNew.vue'
import NutritionNew from './views/NutritionNew.vue'
import StressNew from './views/StressNew.vue'

// import ReportNew from './views/ReportNew.vue'

import Signup from './views/Signup.vue'
import Login from "./views/Login.vue"
import Logout from "./views/Logout.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "login", component: Login },
    { path: "/gratitude", name: "gratitude", component: Gratitude },

    { path: "/sleep", name: "sleep", component: SleepNew },
    { path: "/movement", name: "movement", component: MovementNew },
    { path: "/nutrition", name: "nutrition", component: NutritionNew },
    { path: "/stress", name: "stress", component: StressNew },

    // { path: "/report", name: "report", component: ReportNew },

    { path: "/signup", name: "signup", component: Signup },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
