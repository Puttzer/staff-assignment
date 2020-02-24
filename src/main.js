import Vue from 'vue'
import App from './App.vue'
import router from './router'
import json from './assets/StaffDB.json'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
    employees: json.employees
  }),
  render: h => h(App)
}).$mount('#app')
