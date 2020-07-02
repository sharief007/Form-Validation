import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import Form from './components/Form'

//Bootstrap-Vue css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Bootstrap-Vue
Vue.use(BootstrapVue)
//Bootsrap-Icons
Vue.use(IconsPlugin)

//Vue-Router
Vue.use(VueRouter)

Vue.use(Vuelidate);

const routes = [
  {
    path:"/form",
    component: Form
  }
]


const router = new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  el:"#app",
  router,
  render: h => h(App),
}).$mount('#app')
