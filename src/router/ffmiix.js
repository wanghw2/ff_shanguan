import Home from '@/container/business/ffmiix/home'
// 订单管理
import SOData from '@/container/business/ffmiix/so/SOData'
import SODataShow from '@/container/business/ffmiix/so/sODataShow'
import SOdetail from '@/container/business/ffmiix/so/SOdetail'
// 目标管理
import TarUpload from '@/container/business/ffmiix/tar/tarUpload'
// 机型管理
import MTMCV from '@/container/business/ffmiix/mtm/MTMCV'
import MTMFamily from '@/container/business/ffmiix/mtm/MTMFamily'
import MTMPIPO from '@/container/business/ffmiix/mtm/MTMPIPO'
import MTMSBB from '@/container/business/ffmiix/mtm/MTMSBB'
// 投产管理
import PdtParaFF from '@/container/business/ffmiix/pdt/PdtPara_FF'
import PdtTrack from '@/container/business/ffmiix/pdt/PdtTrack'
// 预测管理
import FCSTPara from '@/container/business/ffmiix/fcst/FCSTPara'
// 供应管理
import PSD from '@/container/business/ffmiix/sup/PSD'

// 库存管理
import InvView from '@/container/business/ffmiix/inv/InvView'
import DOI from '@/container/business/ffmiix/inv/DOI'
import PIAging from '@/container/business/ffmiix/inv/PIAging'
// 物流协同
import LogPara from '@/container/business/ffmiix/log/LogPara'
// 看板管理
import RawData from '@/container/business/ffmiix/db/RawData'
import DBDaily from '@/container/business/ffmiix/db/DBDaily'
import CATracking from '@/container/business/ffmiix/db/CATracking'
// KPI管理
import KPIView from '@/container/business/ffmiix/kpi/KPIView'
import KPISOPSD from '@/container/business/ffmiix/kpi/KPI_SOPSD'
import KPIPOPSD from '@/container/business/ffmiix/kpi/KPI_POPSD'
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'so/503',
  component: SOData
}, {
  path: 'so/soDataShow',
  component: SODataShow
}, {
  path: 'so/502',
  component: SOdetail
}, {
  path: 'tar/102', // 目标上传
  component: TarUpload
}, {
  path: 'mtm/702',
  component: MTMCV
}, {
  path: 'mtm/703',
  component: MTMFamily
}, {
  path: 'mtm/704',
  component: MTMPIPO
}, {
  path: 'mtm/706',
  component: MTMSBB
}, {
  path: 'pdt/302',
  component: PdtParaFF
}, {
  path: 'pdt/303',
  component: PdtTrack // 备货进度
}, {
  path: 'fcst/202', // 预测参数
  component: FCSTPara
}, {
  path: 'sup/402',
  component: PSD
}, {
  path: 'log/801', // 物流协同
  component: LogPara
}, {
  path: 'db/901', // 看板管理
  component: RawData
}, {
  path: 'db/902', // 看板管理
  component: DBDaily
}, {
  path: 'db/904', // 看板管理 CATracking
  component: CATracking
}, {
  path: 'kpi/191', // KPI管理
  component: KPIView
}, {
  path: 'kpi/194', // KPI管理
  component: KPISOPSD
}, {
  path: 'kpi/193', // KPI管理
  component: KPIPOPSD
}, {
  path: 'inv/601', // 库存管理
  component: InvView
}, {
  path: 'inv/602', // 库存管理
  component: DOI
}, {
  path: 'inv/603', // 库存管理
  component: PIAging
}]
