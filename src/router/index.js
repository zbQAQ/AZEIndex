import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import News from '@/components/News'
import AboutMe from '@/components/AboutMe'
import Resolve from '@/components/resolve'
import Contact from '@/components/contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/news',
      name:'News',
      component: News
    },
    {
      path:'/aboutme',
      name:'AboutMe',
      component: AboutMe
    },
    {
      path:'/resolve',
      name:'Resolve',
      component: Resolve
    },
    {
      path:'/contact',
      name:'Contact',
      component: Contact
    },
  ]
})
