import Vue from 'vue'
import Login from './pages/Login.vue'
import DashboardDefault from './pages/default/Dashboard'
import DashboardManager from './pages/manager/Dashboard'
import DashboardPublic from './pages/public/Dashboard'

Vue.component('login-page', Login);
Vue.component('dashboard-default-page', DashboardDefault);
Vue.component('dashboard-manager-page', DashboardManager);
Vue.component('dashboard-public-page', DashboardPublic);

export default Vue