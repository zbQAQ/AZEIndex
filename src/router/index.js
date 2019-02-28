import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import News from '@/components/news'
import NewsChild from '@/components/newsChild'

import AboutMe from '@/components/aboutMe'
// children route
import Introduce from '@/components/aboutMe/introduce'
import Culture from '@/components/aboutMe/culture'
import devHistory from '@/components/aboutMe/devHistory'
import honor from '@/components/aboutMe/honor'
import cooperation from '@/components/aboutMe/cooperation'

import Resolve from '@/components/resolve'
import ResoDetail from '@/components/resoDetail'
import Cuscase from '@/components/cuscase'
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
      path:'/newsChild',
      name:'NewsChild',
      component: NewsChild
    },
    {
      path:'/aboutme',
      name:'AboutMe',
      component: AboutMe,
      children: [
        {
          path: '/',
          redirect: 'introduce'
        },
        { //公司介绍
          path: 'introduce',
          name: 'introduce',
          component: Introduce
        },
        { //企业文化
          path: 'culture',
          name: 'corporate culture',
          component: Culture
        },
        { //发展历程
          path: 'devHistory',
          name: 'development history ',
          component: devHistory
        },
        { //荣誉资质
          path: 'honor',
          name: 'honor',
          component: honor
        },
        { //产学研合作
          path: 'cooperation',
          name: 'cooperation',
          component: cooperation
        },
      ]
    },
    {
      path:'/resolve',
      name:'Resolve',
      component: Resolve,
    },
    {
      path: '/resoDetail',
      name:'ResoDetail',
      component: ResoDetail,
    },
    {
      path:'/cuscase',
      name:'Cuscase',
      component: Cuscase
    },
    {
      path:'/contact',
      name:'Contact',
      component: Contact
    },
  ]
})
