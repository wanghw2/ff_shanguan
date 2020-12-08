import Home from '@/container/business/ffserver/home'
// 订单管理
import SOdetail from '@/container/business/ffserver/so/SOdetail'
// 看板管理
import RawData from '@/container/business/ffserver/db/RawData'
import DBDaily from '@/container/business/ffserver/db/DBDaily'
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'so/502',
  component: SOdetail
}, {
  path: 'db/901', // 基础数据
  component: RawData
}, {
  path: 'db/902', // 每日看板
  component: DBDaily
}]
