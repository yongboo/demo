import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/coins',
    name: 'home',
    hidden: true
  },

  {
    path: '/coins', // 货币列表页 - 首页
    component: Layout,
    children: [
      {
        path: '',
        name: 'Coins',
        component: _import('coins/index'),
        meta: { title: '行情' }
      }
    ]
  },

  {
    path: '/coin/:coinName', // 货币详情页面
    component: Layout,
    hidden: true,
    children: [
      {
        path: '',
        name: 'Coin',
        component: _import('coins/detail')
      }
    ]
  },

  {
    path: '/exchanges', // 交易所列表页
    component: Layout,
    children: [
      {
        path: '',
        name: 'Exchanges',
        component: _import('exchanges/index'),
        meta: { title: '交易所' }
      }
    ]
  },

  {
    path: '/exchange/:exchangeName', // 交易所详情页面
    component: Layout,
    hidden: true,
    children: [
      {
        path: '',
        name: 'Exchange',
        component: _import('exchanges/detail')
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Form',
        component: _import('form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: _import('table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: _import('tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

