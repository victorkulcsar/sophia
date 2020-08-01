import Vue from 'vue'
import Login from './pages/Login.vue'
import DashboardDefault from './pages/default/Dashboard'
import DashboardManager from './pages/manager/Dashboard'
import DashboardPublic from './pages/public/Dashboard'
import Graphic from './pages/manager/Graphic'
import Users from './pages/manager/Users'
import Editor from './pages/manager/Editor'
import Guru from './pages/default/Guru'
import Recommended from './pages/default/Recommended'

Vue.component('login-page', Login);
Vue.component('dashboard-default-page', DashboardDefault);
Vue.component('dashboard-manager-page', DashboardManager);
Vue.component('dashboard-public-page', DashboardPublic);
Vue.component('graphic-manager-page', Graphic);
Vue.component('users-manager-page', Users);
Vue.component('editor-manager-page', Editor);
Vue.component('guru-manager-page', Guru);
Vue.component('recommended-manager-page', Recommended);

export default Vue