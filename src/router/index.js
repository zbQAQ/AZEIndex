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
import aboutMeContact from '@/components/aboutMe/contact'

// products children
import proAir from '@/components/products/proAir'
import proWater from '@/components/products/proWater'
import proDetail from '@/components/products/proDetail'

import Resolve from '@/components/resolve'
import ResoDetail from '@/components/resoDetail'
import Cuscase from '@/components/cuscase'
import Contact from '@/components/contact'
import products from '@/components/products'

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
        { //联系我们
          path: 'contact',
          name: 'aboutMeContact',
          component: aboutMeContact
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
    {
      path:'/products',
      name:'products',
      component: products,
      children: [
        {
          path: '/',
          redirect: 'proAir'
        },
        {
          path: 'proAir',
          name: 'proAir',
          component: proAir
        },
        {
          path: 'proWater',
          name: 'proWater',
          component: proWater
        },
        {
          path: 'proDetail',
          name: 'proDetail',
          component: proDetail
        }
      ]
    },
  ]
})
