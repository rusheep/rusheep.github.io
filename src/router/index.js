import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Aboutme from '@/components/pages/About'
import Home from '@/components/pages/Home'
import Skills from '@/components/pages/Skills'
import Protfolio from '@/components/pages/Protfolio'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*' , 
      redirect: '/home',
    },

    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard, 

      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },

        {
          path: 'about',
          name: 'About',
          component: Aboutme,
        },

        {
          path: 'skills',
          name: 'Skills',
          component: Skills,
        },

        {
          path: 'protfolio',
          name: 'Protfolio',
          component: Protfolio,
        },
      ],
    },

    // {
    //   path:'/about',
    //   name: 'About',
    //   component: Aboutme,
    // }
  ]
})
