import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import News from '@/components/News'
import AboutMe from '@/components/AboutMe'
import Resolve from '@/components/resolve'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/News',
      name:'News',
      component:News
    },
    {
      path:'/AboutMe',
      name:'AboutMe',
      component:AboutMe
    },
    {
      path:'/Resolve',
      name:'Resolve',
      component:Resolve
    }
  ]
})
