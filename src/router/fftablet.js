import Home from '@/container/business/fftablet/home'
// 订单管理
import SOData from '@/container/business/fftablet/so/SOData'
import SODataShow from '@/container/business/fftablet/so/sODataShow'
import SOAnalysis from '@/container/business/fftablet/so/SOAnalysis'
import SOdetail from '@/container/business/fftablet/so/SOdetail'
// 目标管理
import TarUpload from '@/container/business/fftablet/tar/tarUpload'

// 机型管理
import MTMCV from '@/container/business/fftablet/mtm/MTMCV'
import MTMFamily from '@/container/business/fftablet/mtm/MTMFamily'
import MTMPIPO from '@/container/business/fftablet/mtm/MTMPIPO'
// 投产管理
import PdtView from '@/container/business/fftablet/pdt/PdtView'
import PdtParaFF from '@/container/business/fftablet/pdt/PdtPara_FF'
import PdtTrack from '@/container/business/fftablet/pdt/PdtTrack'
// 预测管理
import FCSTPara from '@/container/business/fftablet/fcst/FCSTPara'
// 供应管理
import PSD from '@/container/business/fftablet/sup/PSD'

// 库存管理
import InvView from '@/container/business/fftablet/inv/InvView'
import DOI from '@/container/business/fftablet/inv/DOI'
import PIAging from '@/container/business/fftablet/inv/PIAging'
// 物流协同
import LogPara from '@/container/business/fftablet/log/LogPara'
// 看板管理
import RawData from '@/container/business/fftablet/db/RawData'
import DBDaily from '@/container/business/fftablet/db/DBDaily'
import CATracking from '@/container/business/fftablet/db/CATracking'
// KPI管理
import KPIView from '@/container/business/fftablet/kpi/KPIView'
import KPISOPSD from '@/container/business/fftablet/kpi/KPI_SOPSD'
import KPIPOPSD from '@/container/business/fftablet/kpi/KPI_POPSD'
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
  path: 'so/505',
  component: SOAnalysis
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
  path: 'pdt/301',
  component: PdtView
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
  path: 'db/904', // 看板管理
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
