import Home from '@/container/business/conregion/home'
// 区域履约
import regPara from '@/container/business/conregion/reg/regPara'      // 区域参数
import regPro from '@/container/business/conregion/reg/regPro'        // 区域进度
import regDemand from '@/container/business/conregion/reg/regDemand'  // 区域供需
import creTra from '@/container/business/conregion/reg/creTra'        // 信用管理
import regTra from '@/container/business/conregion/reg/regTra'        // 区域目标
import regDB from '@/container/business/conregion/reg/regDB'          // 通路报表

export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'reg/601', // 区域参数
  component: regPara
}, {
  path: 'reg/602', // 区域进度
  component: regPro
}, {
  path: 'reg/604', // 信用管理
  component: creTra
}, {
  path: 'reg/605',   // 区域目标
  component: regTra
}, {
  path: 'reg/603', // 区域供需
  component: regDemand
}, {
  path: 'reg/606', // 通路报表
  component: regDB
}]
