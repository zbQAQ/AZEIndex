import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import News from '@/components/news'

import AboutMe from '@/components/aboutMe'
// children route
import Introduce from '@/components/aboutMe/introduce'
import Culture from '@/components/aboutMe/culture'
import devHistory from '@/components/aboutMe/devHistory'
import honor from '@/components/aboutMe/honor'
import cooperation from '@/components/aboutMe/cooperation'

import Resolve from '@/components/resolve'
import Contact from '@/components/contact'
import NewsChild from '@/components/news-child/news-child'

import Goverment from '@/components/resolveChild/goverment'
import Public   from '@/components/resolveChild/public'
import Enterprise   from '@/components/resolveChild/enterprise'

//企业下的页面详情
import Page1 from '@/components/Enterprise/page1'
import Page2 from '@/components/Enterprise/page2'
import Page3 from '@/components/Enterprise/page3'
import Page4 from '@/components/Enterprise/page4'
import Page5 from '@/components/Enterprise/page5'
import Page6 from '@/components/Enterprise/page6'
import Page7 from '@/components/Enterprise/page7'
import Page8 from '@/components/Enterprise/page8'

//公众服务详情


//公众的子页面
import Goverment1 from '@/components/Goverment/goverment1'

// import ResolveChild from '@/components/resolve-child/resolve-child'
// import MyMusic from '@/components/MyMusic'
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
      //配置子路由
     // redirect:{name:'goverment'},
      children:[
        {
          path: '/',
          redirect: 'goverment'
        },
        {
          path:'goverment',
          name:'Goverment',
          component:Goverment
        },
        {
          path:'public',
          name:'Public',
          component:Public,
          // children:[
          //   {
          //     path: '/',
          //     redirect: 'goverment1'   
          //   },
          //   {
          //     path:'goverment1',
          //     name:'goverment1',
          //     component:Goverment1
          //   }
          // ] 
        },
        {
          path:'enterprise',
          name:'Enterprise',
          component:Enterprise
          // children:[
          //   {
          //     path:'/',
          //   }
          // ]
        },
      ]
    },
    {
      path:'/contact',
      name:'Contact',
      component: Contact
    },
    {
      path:'/NewsChild',
      name:'NewsChild',
      component:NewsChild
    },
    {
      path:'/page1',
      name:'page1',
      component:Page1
    },
    {
      path:'/page2',
      name:'page2',
      component:Page2
    },
    {
      path:'/page3',
      name:'page3',
      component:Page3
    },
    {
      path:'/page4',
      name:'page4',
      component:Page4
    },
    {
      path:'/page5',
      name:'page5',
      component:Page5
    },
    {
      path:'/page6',
      name:'page6',
      component:Page6
    },
    {
      path:'/page7',
      name:'page7',
      component:Page7
    },
    {
      path:'/page8',
      name:'page8',
      component:Page8
    },
  ]
})
