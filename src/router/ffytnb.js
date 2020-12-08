import Home from '@/container/business/ffytnb/home'
// 目标管理
import TarView from '@/container/business/ffytnb/tar/TarView'
import TarYear from '@/container/business/ffytnb/tar/tarYear'
import TarUpload from '@/container/business/ffytnb/tar/tarUpload'
// 订单管理
import SOView from '@/container/business/ffytnb/so/SOView'
import SOData from '@/container/business/ffytnb/so/SOData'
import SODataShow from '@/container/business/ffytnb/so/sODataShow'
import SOVisibility from '@/container/business/ffytnb/so/SOVisibility'
import BLAnalysis from '@/container/business/ffytnb/so/BLAnalysis'
import SOAnalysis from '@/container/business/ffytnb/so/SOAnalysis'
import SNReport from '@/container/business/ffytnb/so/SNReport'
import SOdetail from '@/container/business/ffytnb/so/SOdetail'
// 看板管理
import RawData from '@/container/business/ffytnb/db/RawData'
import DBDaily from '@/container/business/ffytnb/db/DBDaily'
import DBCus from '@/container/business/ffytnb/db/DBCus'
import CATracking from '@/container/business/ffytnb/db/CATracking'
// 机型管理
import MTMCV from '@/container/business/ffytnb/mtm/MTMCV'
import MTMFamily from '@/container/business/ffytnb/mtm/MTMFamily'
import MTMPIPO from '@/container/business/ffytnb/mtm/MTMPIPO'
import MTMSBB from '@/container/business/ffytnb/mtm/MTMSBB'
// 预测管理
import FCSTPara from '@/container/business/ffytnb/fcst/FCSTPara'
import FCSTCommit from '@/container/business/ffytnb/fcst/FCSTCommit'
import FCSTView from '@/container/business/ffytnb/fcst/FCSTView'
import FCSTVary from '@/container/business/ffytnb/fcst/FCSTVary'
import FCSTfullInv from '@/container/business/ffytnb/fcst/FCSTfullInv'
import Magpara from '@/container/business/ffytnb/fcst/Magpara' // 长期预测
// 供应管理
import PSD from '@/container/business/ffytnb/sup/PSD'
import Promo from '@/container/business/ffytnb/sup/Promo'
import SupView from '@/container/business/ffytnb/sup/SupView'
import SupAnalysis from '@/container/business/ffytnb/sup/SupAnalysis'
// 投产管理
import PdtPara from '@/container/business/ffytnb/pdt/PdtPara'
import PdtODM from '@/container/business/ffytnb/pdt/PdtODM'
// 物流协同
import LogPara from '@/container/business/ffytnb/log/LogPara'
// KPI管理
import KPIView from '@/container/business/ffytnb/kpi/KPIView'
import KPISOPSD from '@/container/business/ffytnb/kpi/KPI_SOPSD'
import KPIPOPSD from '@/container/business/ffytnb/kpi/KPI_POPSD'
import KPISPcad from '@/container/business/ffytnb/kpi/KPI_SPcad'
// 分货管理
import AlloDataMO from '@/container/business/ffytnb/allo/AlloDataMO'
import AlloData11 from '@/container/business/ffytnb/allo/AlloData11'
import AlloData31 from '@/container/business/ffytnb/allo/AlloData31'
import AlloData61 from '@/container/business/ffytnb/allo/AlloData61'
import AlloDataFF from '@/container/business/ffytnb/allo/AlloDataFF'
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'log/801', // 物流协同
  component: LogPara
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
  path: 'fcst/201',
  component: FCSTView // 预测总览
}, {
  path: 'fcst/205',
  component: FCSTfullInv // 全链库存
}, {
  path: 'fcst/203',
  component: FCSTVary // 预测变化
}, {
  path: 'fcst/204',
  component: FCSTCommit // 预测Commit
}, {
  path: 'fcst/202', // 预测参数
  component: FCSTPara
}, {
  path: 'fcst/206', // 管理看板
  component: Magpara
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
  path: 'db/901', // 看板管理
  component: RawData
}, {
  path: 'db/902', // 看板管理
  component: DBDaily
}, {
  path: 'db/904', // 看板管理
  component: CATracking
}, {
  path: 'db/903', // 看板管理
  component: DBCus
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
  path: 'sup/401',
  component: SupView
}, {
  path: 'sup/402',
  component: PSD
}, {
  path: 'sup/403',
  component: Promo
}, {
  path: 'sup/405',
  component: SupAnalysis
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
  path: 'allo/805', // 分货参数_61
  component: AlloData61
}, {
  path: 'pdt/301',
  component: PdtPara
}, {
  path: 'pdt/302',
  component: PdtODM
}]
