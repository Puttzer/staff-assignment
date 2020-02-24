import Vue from 'vue'
import VueRouter from 'vue-router'
import Staff from '../views/Staff.vue'
import StaffInfo from '../components/StaffInfo.vue'
import StaffEdit from '../components/StaffEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/staff',
    name: 'Staff',
    component: Staff,
    children: [
      { path: ':id', component: StaffInfo },
      { path: ':id/edit', component: StaffEdit }
    ]
  },




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
