import Home from '@/container/business/ffytdt/home'
// 订单管理
import SOView from '@/container/business/ffytdt/so/SOView'
import SOData from '@/container/business/ffytdt/so/SOData'
import SODataShow from '@/container/business/ffytdt/so/sODataShow'
import SOVisibility from '@/container/business/ffytdt/so/SOVisibility'
import BLAnalysis from '@/container/business/ffytdt/so/BLAnalysis'
import SOAnalysis from '@/container/business/ffytdt/so/SOAnalysis'
import SNReport from '@/container/business/ffytdt/so/SNReport'
import SOdetail from '@/container/business/ffytdt/so/SOdetail'
// 目标管理
import TarView from '@/container/business/ffytdt/tar/TarView'
import TarYear from '@/container/business/ffytdt/tar/tarYear'
import TarUpload from '@/container/business/ffytdt/tar/tarUpload'

// 机型管理
import MTMCV from '@/container/business/ffytdt/mtm/MTMCV'
import MTMFamily from '@/container/business/ffytdt/mtm/MTMFamily'
import MTMPIPO from '@/container/business/ffytdt/mtm/MTMPIPO'
import MTMSBB from '@/container/business/ffytdt/mtm/MTMSBB'
// 投产管理
import PdtView from '@/container/business/ffytdt/pdt/PdtView'
import PdtParaFF from '@/container/business/ffytdt/pdt/PdtPara_FF'
import PdtParaMO from '@/container/business/ffytdt/pdt/PdtPara_MO'
import PdtTrack from '@/container/business/ffytdt/pdt/PdtTrack'
import PdtAI from '@/container/business/ffytdt/pdt/PdtAI'
import POPlan from '@/container/business/ffytdt/pdt/POPlan'
import NPI from '@/container/business/ffytdt/pdt/NPI'
import EOL from '@/container/business/ffytdt/pdt/EOL'
// 预测管理
import FCSTPara from '@/container/business/ffytdt/fcst/FCSTPara'
import FCSTCommit from '@/container/business/ffytdt/fcst/FCSTCommit'
import FCSTView from '@/container/business/ffytdt/fcst/FCSTView'
import FCSTVary from '@/container/business/ffytdt/fcst/FCSTVary'
import FCSTWaterfall from '@/container/business/ffytdt/fcst/FCSTWaterfall'
import SalesAnalysis from '@/container/business/ffytdt/fcst/SalesAnalysis'
// 供应管理
import PSD from '@/container/business/ffytdt/sup/PSD'
import SupView from '@/container/business/ffytdt/sup/SupView'
import Promo from '@/container/business/ffytdt/sup/Promo'
import ONS from '@/container/business/ffytdt/sup/ONS'
import SupAnalysis from '@/container/business/ffytdt/sup/SupAnalysis'
// 库存管理
import InvView from '@/container/business/ffytdt/inv/InvView'
import DOI from '@/container/business/ffytdt/inv/DOI'
import PIAging from '@/container/business/ffytdt/inv/PIAging'
// 物流协同
import LogPara from '@/container/business/ffytdt/log/LogPara'
// 看板管理
import RawData from '@/container/business/ffytdt/db/RawData'
import DBDaily from '@/container/business/ffytdt/db/DBDaily'
import DBCus from '@/container/business/ffytdt/db/DBCus'
import CATracking from '@/container/business/ffytdt/db/CATracking'
// KPI管理
import KPIView from '@/container/business/ffytdt/kpi/KPIView'
import KPISOPSD from '@/container/business/ffytdt/kpi/KPI_SOPSD'
import KPIPOPSD from '@/container/business/ffytdt/kpi/KPI_POPSD'
import KPISPcad from '@/container/business/ffytdt/kpi/KPI_SPcad'
// 分货管理
import AlloDataMO from '@/container/business/ffytdt/allo/AlloDataMO'
import AlloData11 from '@/container/business/ffytdt/allo/AlloData11'
import AlloData31 from '@/container/business/ffytdt/allo/AlloData31'
import AlloDataFF from '@/container/business/ffytdt/allo/AlloDataFF'
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
  path: 'tar/101', // 目标总览
  component: TarView
}, {
  path: 'tar/102', // 目标上传
  component: TarUpload
}, {
  path: 'tar/104', // 年度
  component: TarYear
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
  path: 'pdt/304',
  component: PdtView
}, {
  path: 'pdt/305',
  component: PdtParaMO
}, {
  path: 'pdt/302',
  component: PdtParaFF
}, {
  path: 'pdt/308',
  component: PdtTrack // 备货进度
}, {
  path: 'pdt/306',
  component: PdtAI
}, {
  path: 'pdt/307',
  component: POPlan
}, {
  path: 'pdt/309', // NPI
  component: NPI
}, {
  path: 'pdt/311', // EOL
  component: EOL
}, {
  path: 'fcst/201',
  component: FCSTView // 预测总览
}, {
  path: 'fcst/203',
  component: FCSTWaterfall // 预测概览
}, {
  path: 'fcst/206',
  component: SalesAnalysis // 销量分析
}, {
  path: 'fcst/204',
  component: FCSTVary // 预测变化
}, {
  path: 'fcst/205',
  component: FCSTCommit // 预测Commit
}, {
  path: 'fcst/202', // 预测参数
  component: FCSTPara
}, {
  path: 'sup/401',
  component: SupView
}, {
  path: 'sup/402',
  component: PSD
}, {
  path: 'sup/403',
  component: Promo
}, {
  path: 'sup/404',
  component: ONS
}, {
  path: 'sup/405',
  component: SupAnalysis
}, {
  path: 'log/801', // 物流协同
  component: LogPara
}, {
  path: 'db/291', // 看板管理 基础参数
  component: RawData
}, {
  path: 'db/292', // 每日看板
  component: DBDaily
}, {
  path: 'db/293', // 看板管理
  component: DBCus
}, {
  path: 'db/294', // 看板管理 CATracking
  component: CATracking
}, {
  path: 'kpi/191', // KPI管理
  component: KPIView
}, {
  path: 'kpi/194', // KPI管理
  component: KPISOPSD
}, {
  path: 'kpi/192', // KPI管理
  component: KPISPcad
}, {
  path: 'kpi/193', // KPI管理
  component: KPIPOPSD
}, {
  path: 'allo/801', // // 分货参数_FF
  component: AlloDataFF
}, {
  path: 'allo/802', // 分货参数_MO
  component: AlloDataMO
}, {
  path: 'allo/803', // 分货参数_11
  component: AlloData11
}, {
  path: 'allo/804', // // 分货参数_31
  component: AlloData31
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
