import Vue from 'vue'

// general
import Login from './pages/Login.vue'
import Header from './components/partials/Header'
import Sidebar from './components/partials/Sidebar'

// default
import DashboardDefault from './pages/default/Dashboard'
import SkillDefault from './pages/default/Skill'
import GuruDefault from './pages/default/Guru'
import QuestDefault from './pages/default/Quest'

// teamlead
import DashboardTeamlead from './pages/teamlead/Dashboard'
import GraphicTeamlead from './pages/teamlead/Graphic'
import UsersTeamlead from './pages/teamlead/Users'
import EditorTeamlead from './pages/teamlead/Editor'

// general
Vue.component('login-page', Login)
Vue.component('app-header', Header)
Vue.component('app-sidebar', Sidebar)

// default
Vue.component('dashboard-default-page', DashboardDefault)
Vue.component('skill-default-page', SkillDefault)
Vue.component('guru-default-page', GuruDefault)
Vue.component('quest-default-page', QuestDefault)

// teamlead
Vue.component('dashboard-teamlead-page', DashboardTeamlead)
Vue.component('graphic-teamlead-page', GraphicTeamlead)
Vue.component('users-teamlead-page', UsersTeamlead)
Vue.component('editor-teamlead-page', EditorTeamlead)

export default Vue
