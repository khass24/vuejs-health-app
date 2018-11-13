import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

import Gratitude from './views/Gratitude.vue'
import GratitudeIndex from './views/GratitudeIndex.vue'

import SleepNew from './views/SleepNew.vue'
import MovementNew from './views/MovementNew.vue'
import NutritionNew from './views/NutritionNew.vue'
import StressNew from './views/StressNew.vue'

import SleepStats from './views/SleepStats.vue'
import NutritionStats from './views/NutritionStats.vue'
import MovementStats from './views/MovementStats.vue'
import StressStats from './views/StressStats.vue'

import ReportShow from './views/ReportShow.vue'

import Signup from './views/Signup.vue'
import Login from "./views/Login.vue"
import Logout from "./views/Logout.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },

    { path: "/gratitude", name: "gratitude", component: Gratitude },
    { path: "/gratitude_index", name: "gratitude_index", component: GratitudeIndex },

    { path: "/sleep", name: "sleep", component: SleepNew },
    { path: "/movement", name: "movement", component: MovementNew },
    { path: "/nutrition", name: "nutrition", component: NutritionNew },
    { path: "/stress", name: "stress", component: StressNew },

    { path: "/report", name: "report", component: ReportShow },

    { path: "/sleep_stats", name: "sleep_stats", component: SleepStats },
    { path: "/nutrition_stats", name: "nutrition_stats", component: NutritionStats },
    { path: "/movement_stats", name: "movement_stats", component: MovementStats },
    { path: "/stress_stats", name: "stress_stats", component: StressStats },

    { path: "/login", name: "login", component: Login },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
