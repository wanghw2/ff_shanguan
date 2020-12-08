import Home from '@/container/business/fftcr/home'
// 订单管理
import SOView from '@/container/business/fftcr/so/SOView'
import SOData from '@/container/business/fftcr/so/SOData'
import SODataShow from '@/container/business/fftcr/so/sODataShow'
import SOVisibility from '@/container/business/fftcr/so/SOVisibility'
import BLAnalysis from '@/container/business/fftcr/so/BLAnalysis'
import SOAnalysis from '@/container/business/fftcr/so/SOAnalysis'
import SNReport from '@/container/business/fftcr/so/SNReport'
import SOdetail from '@/container/business/fftcr/so/SOdetail'
// 看板管理
import RawData from '@/container/business/fftcr/db/RawData'
import DBDaily from '@/container/business/fftcr/db/DBDaily'
import DBCus from '@/container/business/fftcr/db/DBCus'
import CATracking from '@/container/business/fftcr/db/CATracking'
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'so/501',
  component: SOView
}, {
  path: 'so/502',
  component: SOData
}, {
  path: 'so/soDataShow',
  component: SODataShow
}, {
  path: 'so/503',
  component: SOVisibility
}, {
  path: 'so/504',
  component: BLAnalysis
}, {
  path: 'so/505',
  component: SOAnalysis
}, {
  path: 'so/506',
  component: SNReport
}, {
  path: 'so/507',
  component: SOdetail
}, {
  path: 'db/901', // 基础数据
  component: RawData
}, {
  path: 'db/902', // 每日看板
  component: DBDaily
}, {
  path: 'db/903', // 客户看板
  component: DBCus
}, {
  path: 'db/904', // 客户看板 CATracking
  component: CATracking
}]
