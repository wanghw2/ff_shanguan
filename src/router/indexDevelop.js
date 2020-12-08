import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/container/login/login'
import Offspcdetail from '@/container/business/think/sup/Offspcdetail' // think 供应管理的Offspc管理的订单查询详情
import Business from '@/container/business/business'

import cnbRoutes from './cnb'
import cdtRoutes from './cdt'
import controllerRoutes from './controller'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', // 默认根路径显示登录页
      redirect: '/home'
    },
    {
      path: '/home',
      component: Login
    },
    // {
    //   path: '/think/sup/270',
    //   component: Offspcdetail
    // },
    {
      path: '/cnb',
      component: Business,
      children: [
        ...cnbRoutes
      ]
    },
    // {
    //   path: '/cdt',
    //   component: Business,
    //   children: [
    //     ...cdtRoutes
    //   ]
    // },
    // {
    //   path: '/controller',
    //   component: Business,
    //   children: [
    //     ...controllerRoutes
    //   ]
    // }
  ]
})

// import thinkRoutes from './think'
// import cnbRoutes from './cnb'
// import cdtRoutes from './cdt'
// import publicRoutes from './public'
// import controllerRoutes from './controller'
// import operRoutes from './oper'
// import fftmodelRoutes from './fftmodel'
// import chbconregionRoutes from './chbconregion'
// import chbconsoRoutes from './chbconso'
// import mocdtRoutes from './mocdt'
// import mocnbRoutes from './mocnb'
// import mothinkRoutes from './mothink'
// import ffmiixRoutes from './ffmiix'
// import ffkqRoutes from './ffkq'
// import ffzyRoutes from './ffzy'
// import fftcrRoutes from './fftcr'
// import ffytdtRoutes from './ffytdt'
// import ffytnbRoutes from './ffytnb'
// import fftsRoutes from './ffts'
// import fftprRoutes from './fftpr'
// import ffserverRoutes from './ffserver'
// import fftabletRoutes from './fftablet'
// import chbthinkRoutes from './chbthink'
// import chbconnbRoutes from './chbconnb'
// import chbcondtRoutes from './chbcondt'
// import chbconkeyRoutes from './chbconkey'
// import chbcontraRoutes from './chbcontra'
// import chbconRoutes from './chbcon'
// import conregionRoutes from './conregion'
// // import conRoutes from './con1'
// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   // base: '/ff/',
//   // linkActiveClass: 'active',
//   routes: [
//     {
//       path: '/', // 默认根路径显示登录页
//       component: Login,
//       // redirect:'/home'
//     },
//     {
//       path: '/home',
//       component: Login
//     },
//     {
//       path: '/think/sup/270',
//       component: Offspcdetail
//     },
//     {
//       path: '/public',
//       component: Business,
//       children: [
//         ...publicRoutes
//       ]
//     },
//     {
//       path: '/think',
//       component: Business,
//       children: [
//         ...thinkRoutes
//       ]
//     },
//     // {
//     //   path: '/con',
//     //   component: Business,
//     //   children: [
//     //     ...conRoutes
//     //   ]
//     // },
//     {
//       path: '/conregion',
//       component: Business,
//       children: [
//         ...conregionRoutes
//       ]
//     },
//     {
//       path: '/cnb',
//       component: Business,
//       children: [
//         ...cnbRoutes
//       ]
//     },
//     {
//       path: '/cdt',
//       component: Business,
//       children: [
//         ...cdtRoutes
//       ]
//     },
//     {
//       path: '/oper',
//       component: Business,
//       children: [
//         ...operRoutes
//       ]
//     },
//     {
//       path: '/fftmodel',
//       component: Business,
//       children: [
//         ...fftmodelRoutes
//       ]
//     },
//     {
//       path: '/chbconso',
//       component: Business,
//       children: [
//         ...chbconsoRoutes
//       ]
//     },
//     {
//       path: '/mocdt',
//       component: Business,
//       children: [
//         ...mocdtRoutes
//       ]
//     },
//     {
//       path: '/mocnb',
//       component: Business,
//       children: [
//         ...mocnbRoutes
//       ]
//     },
//     {
//       path: '/mothink',
//       component: Business,
//       children: [
//         ...mothinkRoutes
//       ]
//     },
//     {
//       path: '/chbconregion',
//       component: Business,
//       children: [
//         ...chbconregionRoutes
//       ]
//     },
//     {
//       path: '/miix',
//       component: Business,
//       children: [
//         ...ffmiixRoutes
//       ]
//     },
//     {
//       path: '/ts',
//       component: Business,
//       children: [
//         ...fftsRoutes
//       ]
//     },
//     {
//       path: '/tablet',
//       component: Business,
//       children: [
//         ...fftabletRoutes
//       ]
//     },
//     {
//       path: '/tpr',
//       component: Business,
//       children: [
//         ...fftprRoutes
//       ]
//     },
//     {
//       path: '/ytnb',
//       component: Business,
//       children: [
//         ...ffytnbRoutes
//       ]
//     },
//     {
//       path: '/ytdt',
//       component: Business,
//       children: [
//         ...ffytdtRoutes
//       ]
//     },
//     {
//       path: '/kq',
//       component: Business,
//       children: [
//         ...ffkqRoutes
//       ]
//     },
//     {
//       path: '/zy',
//       component: Business,
//       children: [
//         ...ffzyRoutes
//       ]
//     },
//     {
//       path: '/tcr',
//       component: Business,
//       children: [
//         ...fftcrRoutes
//       ]
//     },
//     {
//       path: '/svr',
//       component: Business,
//       children: [
//         ...ffserverRoutes
//       ]
//     },
//     {
//       path: '/chbthink',
//       component: Business,
//       children: [
//         ...chbthinkRoutes
//       ]
//     },
//     {
//       path: '/chbcnb',
//       component: Business,
//       children: [
//         ...chbconnbRoutes
//       ]
//     },
//     {
//       path: '/chbcdt',
//       component: Business,
//       children: [
//         ...chbcondtRoutes
//       ]
//     },
//     {
//       path: '/chbconkey',
//       component: Business,
//       children: [
//         ...chbconkeyRoutes
//       ]
//     },
//     {
//       path: '/chbcontra',
//       component: Business,
//       children: [
//         ...chbcontraRoutes
//       ]
//     },
//     {
//       path: '/chbcon',
//       component: Business,
//       children: [
//         ...chbconRoutes
//       ]
//     },
//     {
//       path: '/controller',
//       component: Business,
//       children: [
//         ...controllerRoutes
//       ]
//     }
//   ]
// })
