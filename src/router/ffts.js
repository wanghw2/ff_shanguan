import Home from '@/container/business/ffts/home'
// 订单管理
import SOView from '@/container/business/ffts/so/SOView'
import SOData from '@/container/business/ffts/so/SOData'
import SODataShow from '@/container/business/ffts/so/sODataShow'
import SOVisibility from '@/container/business/ffts/so/SOVisibility'
import BLAnalysis from '@/container/business/ffts/so/BLAnalysis'
import SOAnalysis from '@/container/business/ffts/so/SOAnalysis'
import SNReport from '@/container/business/ffts/so/SNReport'
import SOdetail from '@/container/business/ffts/so/SOdetail'
// 看板管理
import RawPara from '@/container/business/ffts/db/RawPara'
import RawData from '@/container/business/ffts/db/RawData'
import DBDaily from '@/container/business/ffts/db/DBDaily'
import DBCus from '@/container/business/ffts/db/DBCus'
import CATracking from '@/container/business/ffts/db/CATracking'
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
  path: 'db/900', // 目标总览
  component: RawPara
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
