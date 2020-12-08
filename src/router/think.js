import Home from '@/container/business/think/home'
// 目标管理
import Tarview from '@/container/business/think/tar/tarView'
import TarMonth from '@/container/business/think/tar/tarMonth'
import TarYear from '@/container/business/think/tar/tarYear'
import TarUpload from '@/container/business/think/tar/tarUpload'
// 订单管理
import SOView from '@/container/business/think/so/SOView'
import SOData from '@/container/business/think/so/SOData'
import SOVisibility from '@/container/business/think/so/SOVisibility'
import BLAnalysis from '@/container/business/think/so/BLAnalysis'
import SOAnalysis from '@/container/business/think/so/SOAnalysis'
import SOPrioMO from '@/container/business/think/so/SOPrio_MO'
import SOPrioCUS from '@/container/business/think/so/SOPrio_CUS'
import SOPrioFF from '@/container/business/think/so/SOPrio_FF'
import SNReport from '@/container/business/think/so/SNReport'
import SOdetail from '@/container/business/think/so/SOdetail'
// 机型管理
import MTMView from '@/container/business/think/mtm/mtmView'
import MTMCV from '@/container/business/think/mtm/MTMCV'
import MTMFamily from '@/container/business/think/mtm/MTMFamily'
import MTMSBB from '@/container/business/think/mtm/MTMSBB'
import MTMPIPO from '@/container/business/think/mtm/MTMPIPO'
import MTMMap from '@/container/business/think/mtm/MTMMap'
import MTMcomplexity from '@/container/business/think/mtm/MTMcomplexity'
// 排产管理
import BSBacklog from '@/container/business/think/po/BSBacklog'
import NPI from '@/container/business/think/po/NPI'
import BSAdd from '@/container/business/think/po/BSAdd'
import BSCvSBB from '@/container/business/think/po/BSCvSBB'
import BSParams from '@/container/business/think/po/BSParams'
import BuildSignal from '@/container/business/think/po/buildSignal'
import BSModifyPO from '@/container/business/think/po/BSModifyPO'
import PendingPO from '@/container/business/think/po/PendingPO'
import BSView from '@/container/business/think/po/BSView'
import EOL from '@/container/business/think/po/EOL'
// 供应管理
import FinalPSD from '@/container/business/think/sup/FinalPSD'
import Offspec from '@/container/business/think/sup/Offspec'
import ONS from '@/container/business/think/sup/ONS'
import POPrio from '@/container/business/think/sup/POPrio'
import POVisual from '@/container/business/think/sup/POVisual'
import Promo from '@/container/business/think/sup/Promo'
import SupView from '@/container/business/think/sup/SupView'
import PSD from '@/container/business/think/sup/PSD'
import Suppara from '@/container/business/think/sup/suppara'
// 选件管理
import OPTView from '@/container/business/think/opt/OPTView'
import OPTBuildSignal from '@/container/business/think/opt/OPTBuildSignal'
import OPTINV from '@/container/business/think/opt/OPTINV'
import OPTHardbundle from '@/container/business/think/opt/OPTHardbundle'
import OPTPSD from '@/container/business/think/opt/OPTPSD'
import OPTFcst from '@/container/business/think/opt/OPTFcst'
import OPTPara from '@/container/business/think/opt/OPTPara'
// 库存管理
import InvView from '@/container/business/think/inv/InvView'
import DOI from '@/container/business/think/inv/DOI'
import FGAging from '@/container/business/think/inv/FGAging'
import PIAging from '@/container/business/think/inv/PIAging'
import Invpara from '@/container/business/think/inv/invpara'
// 分货管理
import AlloView from '@/container/business/think/allo/AlloView'
import AlloDataMO from '@/container/business/think/allo/AlloDataMO'
import AlloDataFF from '@/container/business/think/allo/AlloDataFF'
import AlloDataCus from '@/container/business/think/allo/AlloDataCus'
import AlloDetail from '@/container/business/think/allo/AlloDetail'
// 预测管理
import FCSTParanb from '@/container/business/think/fcst/FCSTParanb'
import FCSTParadt from '@/container/business/think/fcst/FCSTParadt'
import FCSTParatb from '@/container/business/think/fcst/FCSTParatb'
import FCSTCommit from '@/container/business/think/fcst/FCSTCommit'
import FCSTView from '@/container/business/think/fcst/FCSTView'
import FCSTVary from '@/container/business/think/fcst/FCSTVary'
import Fullinv from '@/container/business/think/fcst/fullinv'
import Waterfall from '@/container/business/think/fcst/Waterfall'
import SalesAnalysis from '@/container/business/think/fcst/SalesAnalysis'
import SoldAnalysis from '@/container/business/think/fcst/SoldAnalysis'
import Magpara from '@/container/business/think/fcst/Magpara'
// 物流协同
import LogPara from '@/container/business/think/log/LogPara'
// 看板管理
import RawData from '@/container/business/think/db/RawData'
import DBDaily from '@/container/business/think/db/DBDaily'
import DBCus from '@/container/business/think/db/DBCus'
import CATracking from '@/container/business/think/db/CATracking'
// KPI管理
import KPIView from '@/container/business/think/kpi/KPIView' // KPI总览
import PrioRate from '@/container/business/think/kpi/PrioRate' // 客户急单
import KPIPOPSD from '@/container/business/think/kpi/KPI_POPSD' // POPSD
import KPISPcad from '@/container/business/think/kpi/KPI_SPcad' // 营销预测
// 履约管理
import operaAnal from '@/container/business/think/cus/operaAnal' // KPI总览
import SupAnal from '@/container/business/think/cus/SupAnal' // KPI总览
import CreditAnal from '@/container/business/think/cus/CreditAnal' // KPI总览
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'cus/601', // 目标总览
  component: operaAnal
}, {
  path: 'cus/602', // 月度
  component: SupAnal
}, {
  path: 'cus/603', // 年度
  component: CreditAnal
}, {
  path: 'tar/56', // 目标总览
  component: Tarview
}, {
  path: 'tar/60', // 月度
  component: TarMonth
}, {
  path: 'tar/63', // 年度
  component: TarYear
}, {
  path: 'tar/57', // 目标上传
  component: TarUpload
}, {
  path: 'log/277', // 物流协同
  component: LogPara
}, {
  path: 'opt/270', // 选件管理
  component: OPTView
}, {
  path: 'opt/73',
  component: OPTBuildSignal
}, {
  path: 'opt/74',
  component: OPTFcst
}, {
  path: 'opt/75',
  component: OPTHardbundle
}, {
  path: 'opt/76',
  component: OPTPSD
}, {
  path: 'opt/419',
  component: OPTPara
}, {
  path: 'opt/77', // 选件库存
  component: OPTINV
}, {
  path: 'fcst/246',
  component: FCSTView // 预测总览
}, {
  path: 'fcst/248',
  component: Fullinv // 全链库存
}, {
  path: 'fcst/251',
  component: SalesAnalysis // 销量分析
}, {
  path: 'fcst/252',
  component: SoldAnalysis // 销售分析
}, {
  path: 'fcst/249',
  component: FCSTVary // 预测变化
}, {
  path: 'fcst/253',
  component: Waterfall // Waterfall
}, {
  path: 'fcst/250',
  component: FCSTCommit // 预测Commit
}, {
  path: 'fcst/247', // 预测参数
  component: FCSTParanb
}, {
  path: 'fcst/254', // 预测参数
  component: FCSTParadt
}, {
  path: 'fcst/255', // 预测参数
  component: FCSTParatb
}, {
  path: 'fcst/256', // 预测参数
  component: Magpara
}, {
  path: 'po/66',
  component: BuildSignal
}, {
  path: 'po/71',
  component: BSBacklog
}, {
  path: 'po/70',
  component: BSParams
}, {
  path: 'po/67',
  component: BSAdd
}, {
  path: 'po/72',
  component: BSCvSBB
}, {
  path: 'po/68',
  component: BSModifyPO
}, {
  path: 'po/69',
  component: PendingPO
}, {
  path: 'po/256',
  component: NPI
}, {
  path: 'po/255',
  component: BSView
}, {
  path: 'po/257',
  component: EOL
}, {
  path: 'sup/259',
  component: PSD
}, {
  path: 'sup/260',
  component: Offspec
}, {
  path: 'sup/261',
  component: Suppara
}, {
  path: 'sup/262',
  component: POPrio
}, {
  path: 'sup/263',
  component: Promo
}, {
  path: 'sup/264',
  component: ONS
}, {
  path: 'sup/265',
  component: POVisual
}, {
  path: 'sup/430',
  component: FinalPSD
}, {
  path: 'sup/258',
  component: SupView
}, {
  path: 'mtm/276',
  component: MTMView
}, {
  path: 'mtm/191',
  component: MTMCV
}, {
  path: 'mtm/193',
  component: MTMPIPO
}, {
  path: 'mtm/192',
  component: MTMFamily
}, {
  path: 'mtm/196',
  component: MTMSBB
}, {
  path: 'mtm/198',
  component: MTMMap
}, {
  path: 'mtm/197',
  component: MTMcomplexity
}, {
  path: 'allo/269', // 分货总览
  component: AlloView
}, {
  path: 'allo/215', // 分货参数_MO
  component: AlloDataMO
}, {
  path: 'allo/217', // 分货参数_FF
  component: AlloDataFF
}, {
  path: 'allo/218', // 分货详情
  component: AlloDetail
}, {
  path: 'allo/216', // 分货参数_客户 （勾单界面）
  component: AlloDataCus
}, {
  path: 'so/266', // 订单总览
  component: SOView
}, {
  path: 'so/143', // 订单查询
  component: SOData
}, {
  path: 'so/144', // 订单履约
  component: SOVisibility
}, {
  path: 'so/145', // 订单分析
  component: BLAnalysis
}, {
  path: 'so/146',
  component: SOPrioMO
}, {
  path: 'so/267',
  component: SOPrioCUS
}, {
  path: 'so/268',
  component: SOPrioFF // 急单管理
}, {
  path: 'so/148', // SN查询
  component: SNReport
}, {
  path: 'so/147', // 订单分析
  component: SOAnalysis
}, {
  path: 'so/269', // 订单明细
  component: SOdetail
}, {
  path: 'inv/271', // 库存管理
  component: InvView
}, {
  path: 'inv/272', // 库存管理
  component: DOI
}, {
  path: 'inv/273', // 库存管理
  component: FGAging
}, {
  path: 'inv/274', // 库存管理
  component: PIAging
}, {
  path: 'inv/275', // 库存管理
  component: Invpara
}, {
  path: 'db/425', // 看板管理
  component: RawData
}, {
  path: 'db/280', // 看板管理
  component: DBDaily
}, {
  path: 'db/283', // 看板管理
  component: CATracking
}, {
  path: 'db/281', // 看板管理
  component: DBCus
}, {
  path: 'kpi/283', // KPI管理
  component: KPISPcad
}, {
  path: 'kpi/285', // KPI管理
  component: KPIPOPSD
}, {
  path: 'kpi/282', // KPI管理
  component: KPIView
}, {
  path: 'kpi/284', // KPI管理
  component: PrioRate
}]
