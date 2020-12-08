import Home from '@/container/business/fftpr/home'
// 订单管理
import SOData from '@/container/business/fftpr/so/SOData'
import SODataShow from '@/container/business/fftpr/so/sODataShow'
import SOAnalysis from '@/container/business/fftpr/so/SOAnalysis'
import SOdetail from '@/container/business/fftpr/so/SOdetail'
// 看板管理
import RawData from '@/container/business/fftpr/db/RawData'
import RawPara from '@/container/business/fftpr/db/RawPara'
import DBDaily from '@/container/business/fftpr/db/DBDaily'
import CATracking from '@/container/business/fftpr/db/CATracking'
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'so/502',
  component: SOData
}, {
  path: 'so/soDataShow',
  component: SODataShow
}, {
  path: 'so/505',
  component: SOAnalysis
}, {
  path: 'so/507',
  component: SOdetail
}, {
  path: 'db/900', // 基础参数
  component: RawPara
}, {
  path: 'db/901', // 基础数据
  component: RawData
}, {
  path: 'db/902', // 每日看板
  component: DBDaily
}, {
  path: 'db/904', // 客户看板 CATracking
  component: CATracking
}]
