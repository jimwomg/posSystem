import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Store from '@/components/page/Store'
import Goods from '@/components/page/Goods'
import Vip from '@/components/page/Vip'
import PanicBuying from '@/components/page/PanicBuying'
import Statistics from '@/components/page/Statistics'
import Error from '@/components/page/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/Pos'
    },
    {
      path: '/Pos',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/panicBuying',
      name: 'PanicBuying',
      component: PanicBuying
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path:'*',
      component:Error
    }
  ]
})
