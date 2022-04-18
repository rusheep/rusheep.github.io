import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import Home from '@/components/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*' , 
      redirect: '/home',
    },
    {
      path: '/',
      name: "Home",
      component: Home,
    }
    // {
    //   path: '/',
    //   name: 'Dashboard',
    //   component: Dashboard,
    //   children: [
    //     {
    //       path: 'home',
    //       name: 'Home',
    //       component: Home,
    //     },
    //   ],
    // },
  ]
})
