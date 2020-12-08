import Home from '@/container/business/fftmodel/home'
// 管理看板
import DBMag from '@/container/business/fftmodel/db/DBMag'
// 预测管理
import FCSTPara from '@/container/business/fftmodel/fcst/FCSTPara' // 预测参数
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'fcst/101', // 预测参数
  component: FCSTPara
}, {
  path: 'db/201', // 管理看板
  component: DBMag
}]
