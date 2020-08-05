import Vue from 'vue'
import Login from './pages/Login.vue'

// default
import DashboardDefault from './pages/default/Dashboard'
import GuruDefault from './pages/default/Guru'
import RecommendedDefault from './pages/default/Recommended'

// teamlead
import DashboardTeamlead from './pages/teamlead/Dashboard'
import GraphicTeamlead from './pages/teamlead/Graphic'
import UsersTeamlead from './pages/teamlead/Users'
import EditorTeamlead from './pages/teamlead/Editor'

// neutral
Vue.component('login-page', Login);

// default
Vue.component('dashboard-default-page', DashboardDefault);
Vue.component('guru-default-page', GuruDefault);
Vue.component('recommended-default-page', RecommendedDefault);

// teamlead
Vue.component('dashboard-teamlead-page', DashboardTeamlead);
Vue.component('graphic-teamlead-page', GraphicTeamlead);
Vue.component('users-teamlead-page', UsersTeamlead);
Vue.component('editor-teamlead-page', EditorTeamlead);

export default Vue