import Home from '@/container/business/ffzy/home'
// 订单管理
import SOView from '@/container/business/ffzy/so/SOView'
import SOData from '@/container/business/ffzy/so/SOData'
import SODataShow from '@/container/business/ffzy/so/sODataShow'
import SOVisibility from '@/container/business/ffzy/so/SOVisibility'
import BLAnalysis from '@/container/business/ffzy/so/BLAnalysis'
import SOAnalysis from '@/container/business/ffzy/so/SOAnalysis'
import SNReport from '@/container/business/ffzy/so/SNReport'
import SOdetail from '@/container/business/ffzy/so/SOdetail'
// 目标管理
import TarView from '@/container/business/ffzy/tar/TarView'
import TarYear from '@/container/business/ffzy/tar/tarYear'
import TarUpload from '@/container/business/ffzy/tar/tarUpload'

// 机型管理
import MTMView from '@/container/business/ffzy/mtm/MTMView'
import MTMCV from '@/container/business/ffzy/mtm/MTMCV'
import MTMFamily from '@/container/business/ffzy/mtm/MTMFamily'
import MTMPIPO from '@/container/business/ffzy/mtm/MTMPIPO'
import MTMSBB from '@/container/business/ffzy/mtm/MTMSBB'
// 投产管理
import PdtView from '@/container/business/ffzy/pdt/PdtView'
import PdtPara from '@/container/business/ffzy/pdt/PdtPara'
import PdtTrack from '@/container/business/ffzy/pdt/PdtTrack'
// 预测管理
import FCSTPara from '@/container/business/ffzy/fcst/FCSTPara'
import FCSTCommit from '@/container/business/ffzy/fcst/FCSTCommit'
import FCSTView from '@/container/business/ffzy/fcst/FCSTView'
import FCSTVary from '@/container/business/ffzy/fcst/FCSTVary'
import FCSTWaterfall from '@/container/business/ffzy/fcst/FCSTWaterfall'
import SalesAnalysis from '@/container/business/ffzy/fcst/SalesAnalysis'
// 供应管理
import PSD from '@/container/business/ffzy/sup/PSD'
import SupView from '@/container/business/ffzy/sup/SupView'
import Promo from '@/container/business/ffzy/sup/Promo'
import ONS from '@/container/business/ffzy/sup/ONS'

// 库存管理
import InvView from '@/container/business/ffzy/inv/InvView'
import DOI from '@/container/business/ffzy/inv/DOI'
import FGAgingGood from '@/container/business/ffzy/inv/FGAgingGood'
import PIAging from '@/container/business/ffzy/inv/PIAging'
import FullChainInv from '@/container/business/ffzy/inv/FullChainInv'
// 物流协同
import LogPara from '@/container/business/ffzy/log/LogPara'
// 看板管理
import RawData from '@/container/business/ffzy/db/RawData'
import DBDaily from '@/container/business/ffzy/db/DBDaily'
import DBCus from '@/container/business/ffzy/db/DBCus'
import CATracking from '@/container/business/ffzy/db/CATracking'
// KPI管理
import KPIView from '@/container/business/ffzy/kpi/KPIView'
import KPISOPSD from '@/container/business/ffzy/kpi/KPI_SOPSD'
import KPIPOPSD from '@/container/business/ffzy/kpi/KPI_POPSD'
import KPIFcst from '@/container/business/ffzy/kpi/KPI_Fcst'
import CapFcst from '@/container/business/ffzy/kpi/CapFcst'
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
  path: 'so/503',
  component: SOData
}, {
  path: 'so/soDataShow',
  component: SODataShow
}, {
  path: 'so/504',
  component: SOVisibility
}, {
  path: 'so/505',
  component: BLAnalysis
}, {
  path: 'so/506',
  component: SOAnalysis
}, {
  path: 'so/507',
  component: SNReport
}, {
  path: 'so/502',
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
  path: 'mtm/701',
  component: MTMView
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
  path: 'pdt/301',
  component: PdtView // 投产总览
}, {
  path: 'pdt/302',
  component: PdtPara
}, {
  path: 'pdt/303',
  component: PdtTrack // 备货进度
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
  component: SupView // 供应总览
}, {
  path: 'sup/402',
  component: PSD // psd管理
}, {
  path: 'sup/368',
  component: Promo
}, {
  path: 'sup/369',
  component: ONS
}, {
  path: 'log/801', // 物流参数
  component: LogPara
}, {
  path: 'db/191', // 基础数据
  component: RawData
}, {
  path: 'db/192', // 每日看板
  component: DBDaily
}, {
  path: 'db/193', // 客户看板
  component: DBCus
}, {
  path: 'db/194', // 客户看板 CATracking
  component: CATracking
}, {
  path: 'kpi/901', // KPI管理
  component: KPIView
}, {
  path: 'kpi/905', // KPI管理
  component: KPISOPSD
}, {
  path: 'kpi/903', // KPI管理
  component: CapFcst
}, {
  path: 'kpi/904', // KPI管理
  component: KPIPOPSD
}, {
  path: 'kpi/902', // KPI管理
  component: KPIFcst
}, {
  path: 'inv/601', // 库存总览
  component: InvView
}, {
  path: 'inv/602', // 库存管理
  component: DOI
}, {
  path: 'inv/603', // 超期库存
  component: FGAgingGood
}, {
  path: 'inv/604', // PI Write Off
  component: PIAging
}, {
  path: 'inv/605', // 全链库存
  component: FullChainInv
}]
