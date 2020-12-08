import Home from '@/container/business/cnb/home'
import Home1 from '@/container/business/cnb/home1'
import Home3 from '@/components/public/homePage'
import Home2 from '@/container/business/cnb/home'
// import Home2 from '@/components/public/default2'
// 目标管理
import TarView from '@/container/business/cnb/tar/TarView'
import TarMonth from '@/container/business/cnb/tar/tarMonth'
import TarYear from '@/container/business/cnb/tar/tarYear'
import TarUpload from '@/container/business/cnb/tar/tarUpload'
// 分货管理
import AlloDataMO from '@/container/business/cnb/allo/AlloDataMO'
import AlloDataKEY from '@/container/business/cnb/allo/AlloDataKEY'
import AlloDataTRA from '@/container/business/cnb/allo/AlloDataTRA'
import AlloDataFF from '@/container/business/cnb/allo/AlloDataFF'
import AlloDataMAX from '@/container/business/cnb/allo/AlloDataMAX'
import AlloDetail from '@/container/business/cnb/allo/AlloDetail'
import AllocView from '@/container/business/cnb/allo/AllocView'
// 全链库存
import Analysis3s from '@/container/business/cnb/fullinv/3sAnalysis'
import Trendanalysis from '@/container/business/cnb/fullinv/trendanalysis'
import Degreeanalysis from '@/container/business/cnb/fullinv/degreeanalysis'
import ProductReturn from '@/container/business/cnb/fullinv/productReturn'
import geoSo from '@/container/business/cnb/fullinv/geoSo'
import geoInv from '@/container/business/cnb/fullinv/geoInv'
import SalesAnalysis from '@/container/business/cnb/fullinv/SalesAnalysis' // 销量分析
import Pushout from '@/container/business/cnb/fullinv/pushOut' // so率分析
import pushOutDoi from '@/container/business/cnb/fullinv/pushOutDoi' // so率分析
import proTrendAny from '@/container/business/cnb/fullinv/proTrendAny' // 产品趋势分布
// 机型管理
import MTMView from '@/container/business/cnb/mtm/MTMView'
import MTMCV from '@/container/business/cnb/mtm/MTMCV'
import MTMFamily from '@/container/business/cnb/mtm/MTMFamily'
import MTMPIPO from '@/container/business/cnb/mtm/MTMPIPO'
import MTMAnalysis from '@/container/business/cnb/mtm/MTMAnalysis'
import MTMSBB from '@/container/business/cnb/mtm/MTMSBB'
import MTMMap from '@/container/business/cnb/mtm/MTMMap'
import MTMcomplexity from '@/container/business/cnb/mtm/MTMcomplexity'
// 投产管理
import PdtView from '@/container/business/cnb/pdt/PdtView'
import Factorslimit from '@/container/business/cnb/pdt/Factorslimit'
import PdtParaFF from '@/container/business/cnb/pdt/PdtPara_FF'
import PdtParaMO from '@/container/business/cnb/pdt/PdtPara_MO'
import PdtTrack from '@/container/business/cnb/pdt/PdtTrack'
import PdtODM from '@/container/business/cnb/pdt/PdtODM'
import POPlan from '@/container/business/cnb/pdt/POPlan'
import NPI from '@/container/business/cnb/pdt/NPI'
import LTS_EOL from '@/container/business/cnb/pdt/LTS_EOL'
import pdtModel from '@/container/business/cnb/pdt/pdtModel'
// 预测管理
import FCSTPara from '@/container/business/cnb/fcst/FCSTPara' // 预测参数
import FCSTCommit from '@/container/business/cnb/fcst/FCSTCommit' // 预测commit
import FCSTView from '@/container/business/cnb/fcst/FCSTView' // 预测总览
import FCSTVary from '@/container/business/cnb/fcst/FCSTVary' // 预测变化
import CommitView from '@/container/business/cnb/fcst/CommitView' // Commit总览
import Waterfall from '@/container/business/cnb/fcst/Waterfall' // 预测Waterfall
import FCSTall from '@/container/business/cnb/fcst/FCSTall' // 预测全景
import Magpara from '@/container/business/cnb/fcst/Magpara' // 长期预测
// 供应管理
import PSD from '@/container/business/cnb/sup/PSD'
import Supdetail from '@/container/business/cnb/sup/supdetail'
import SupView from '@/container/business/cnb/sup/SupView'
import Promo from '@/container/business/cnb/sup/Promo'
import ONS from '@/container/business/cnb/sup/ONS'
import SupTracking from '@/container/business/cnb/sup/SupTracking' // Commit监控
import SupAnalysis from '@/container/business/cnb/sup/SupAnalysis'
// 履约管理
import RegPara from '@/container/business/cnb/reg/RegPara'
import RegTrack from '@/container/business/cnb/reg/RegTrack'
import RegDemand from '@/container/business/cnb/reg/RegDemand'
import BPPara from '@/container/business/cnb/reg/BPPara'
import BPGuide from '@/container/business/cnb/reg/BPGuide'
import RegCredit from '@/container/business/cnb/reg/RegCredit'
// 订单管理
import SOView from '@/container/business/cnb/so/SOView'
import SOData from '@/container/business/cnb/so/SOData'
import SOCA from '@/container/business/cnb/so/SOCA'
import SOdetailDG from '@/container/business/cnb/so/SOdetailDG'
import SOabnormal from '@/container/business/cnb/so/SOabnormal'
import SOkpi from '@/container/business/cnb/so/SOkpi'
import SOAnalysis from '@/container/business/cnb/so/SOAnalysis'
import Keypn from '@/container/business/cnb/so/Keypn'
import SOdetail from '@/container/business/cnb/so/SOdetail'
// 库存管理
import InvView from '@/container/business/cnb/inv/InvView'
import DOI from '@/container/business/cnb/inv/DOI'
import FGAgingGood from '@/container/business/cnb/inv/FGAgingGood'
import FGAgingDefect from '@/container/business/cnb/inv/FGAgingDefect'
import PIAging from '@/container/business/cnb/inv/PIAging'
import FullChainInv from '@/container/business/cnb/inv/FullChainInv'
// 物流协同
import DelTrack from '@/container/business/cnb/log/DelTrack'
// 看板管理
import RawData from '@/container/business/cnb/db/RawData'
import DBDaily from '@/container/business/cnb/db/DBDaily'
import DBMag from '@/container/business/cnb/db/DBMag'
import SellIn from '@/container/business/cnb/db/sellIn'
import SellOut from '@/container/business/cnb/db/sellOut'
// KPI管理
import KPIView from '@/container/business/cnb/kpi/KPIView'
import KPIPOPlan from '@/container/business/cnb/kpi/KPI_POPlan'
import KPISOPSD from '@/container/business/cnb/kpi/KPI_SOPSD'
import KPIPOPSD from '@/container/business/cnb/kpi/KPI_POPSD'
import KPISPcad from '@/container/business/cnb/kpi/KPI_SPcad'
import KPISOPSDROL from '@/container/business/cnb/kpi/KPI_SOPSD_ROL'
// 客户管理
import CusPlan from '@/container/business/cnb/cusplan/CusPlan'
// 客户分析
import CusAnalysis from '@/container/business/cnb/cus/customerAnalysis'
// chbconso角色
import Areacus from '@/container/business/chbconso/nbpushout/areacus'
import Productcus from '@/container/business/chbconso/nbpushout/productcus' // nbpushout
import Productcv from '@/container/business/chbconso/nbpushout/productcv'
import QdsoAnalysis from '@/container/business/chbconso/nbpushout/qdsoAnalysis'
import Loadfactor from '@/container/business/chbconso/nbpushout/Loadfactor'
import TradichanSo from '@/container/business/chbconso/nbpushout/TradichanSo'
import OnlinechanSo from '@/container/business/chbconso/nbpushout/OnlinechanSo'
import KRASO from '@/container/business/chbconso/nbpushout/KRASO'
import CitySO from '@/container/business/chbconso/nbpushout/CitySO'
import CitylevelSO from '@/container/business/chbconso/nbpushout/CitylevelSO'
export default [{
    path: '',
    redirect: ''
}, {
    path: 'home', // 首页
    component: Home
}, {
    path: 'home/01', // 首页
    component: Home1
},{
    path: 'home/03', 
    component: Home3
},{
  path: 'home/04', 
  component: Home2
}, {
    path: 'out/1', // chbconso/Nbpushout/areacus
    component: Areacus
}, {
    path: 'out/2', // chbconso/Nbpushout/areacus
    component: Productcus
}, {
    path: 'out/3', // chbconso/Nbpushout/areacus
    component: Productcv
}, {
    path: 'out/4', // chbconso/Nbpushout/areacus
    component: QdsoAnalysis
}, {
    path: 'out/5', // chbconso/Nbpushout/areacus
    component: Loadfactor
}, {
    path: 'out/6', // chbconso/Nbpushout/areacus
    component: TradichanSo
}, {
    path: 'out/7', // chbconso/Nbpushout/areacus
    component: OnlinechanSo
}, {
    path: 'out/8', // chbconso/Nbpushout/areacus
    component: KRASO
}, {
    path: 'out/9', // chbconso/Nbpushout/areacus
    component: CitySO
}, {
    path: 'out/10', // chbconso/Nbpushout/areacus
    component: CitylevelSO
}, {
    path: 'tar/349', // 目标总览
    component: TarView
}, {
    path: 'tar/350', // 目标上传
    component: TarUpload
}, {
    path: 'tar/351', // 月度
    component: TarMonth
}, {
    path: 'tar/352', // 年度
    component: TarYear
}, {
    path: 'fc/3', // 3s分析
    component: Analysis3s
}, {
    path: 'fc/4', // 补货趋势分析
    component: Trendanalysis
}, {
    path: 'fc/5', // 补货匹配度分析
    component: Degreeanalysis
}, {
    path: 'fc/1', // so率分析
    component: Pushout
}, {
    path: 'fc/7', // pushOutDoi
    component: pushOutDoi
}, {
    path: 'fc/2', // 产品回归率分析
    component: ProductReturn
}, {
    path: 'fc/6', // 全国so分布
    component: geoSo
}, {
    path: 'fc/7', // 全国库存分布
    component: geoInv
}, {
    path: 'fc/10',
    component: SalesAnalysis // 销量分析
}, {
    path: 'fc/9', // 产品趋势分布
    component: proTrendAny
}, {
    path: 'allo/233', // 分货参数_MO
    component: AlloDataMO
}, {
    path: 'allo/234', // 分货参数_客户
    component: AlloDataKEY
}, {
    path: 'allo/235', // // 分货参数_FF
    component: AlloDataFF
}, {
    path: 'allo/232', // // 分货参数_传统
    component: AlloDataTRA
}, {
    path: 'allo/231', // 分货参数_max
    component: AlloDataMAX
}, {
    path: 'allo/236',
    component: AlloDetail
}, {
    path: 'allo/379',
    component: AllocView
}, {
    path: 'reg/601',
    component: RegPara
}, {
    path: 'reg/602',
    component: RegTrack
}, {
    path: 'reg/603',
    component: RegDemand
}, {
    path: 'reg/604',
    component: RegCredit
}, {
    path: 'reg/605',
    component: BPPara
}, {
    path: 'reg/606',
    component: BPGuide
}, {
    path: 'mtm/386',
    component: MTMView
}, {
    path: 'mtm/209',
    component: MTMCV
}, {
    path: 'mtm/206',
    component: MTMSBB
}, {
    path: 'mtm/210',
    component: MTMFamily
}, {
    path: 'mtm/211',
    component: MTMPIPO
}, {
    path: 'mtm/213',
    component: MTMAnalysis
}, {
    path: 'mtm/214',
    component: MTMMap
}, {
    path: 'mtm/215',
    component: MTMcomplexity
}, {
    path: 'pdt/359',
    component: PdtView
}, {
    path: 'pdt/360',
    component: PdtParaMO
}, {
    path: 'pdt/415',
    component: PdtParaFF
}, {
    path: 'pdt/361',
    component: PdtTrack // 备货进度
}, {
    path: 'pdt/362',
    component: PdtODM
}, {
    path: 'pdt/363',
    component: POPlan
}, {
    path: 'pdt/364',
    component: NPI
}, {
    path: 'pdt/366',
    component: Factorslimit
}, {
    path: 'pdt/365',
    component: LTS_EOL
}, {
    path: 'pdt/367',
    component: pdtModel
}, {
    path: 'fcst/353',
    component: FCSTView // 预测总览
}, {
    path: 'fcst/355',
    component: CommitView // Commit总览
}, {
    path: 'fcst/356',
    component: FCSTVary // 预测变化
}, {
    path: 'fcst/357',
    component: FCSTCommit // 预测Commit
}, {
    path: 'fcst/354', // 预测参数
    component: FCSTPara
}, {
    path: 'fcst/359', // 预测waterfall
    component: Waterfall
}, {
    path: 'fcst/360', // 预测全景
    component: FCSTall
}, {
    path: 'fcst/361', // 长期预测
    component: Magpara
}, {
    path: 'sup/366',
    component: SupView
}, {
    path: 'sup/374',
    component: Supdetail
}, {
    path: 'sup/367',
    component: PSD
}, {
    path: 'sup/368',
    component: Promo
}, {
    path: 'sup/369',
    component: ONS
}, {
    path: 'sup/370',
    component: SupTracking
}, {
    path: 'sup/371',
    component: SupAnalysis
}, {
    path: 'cus/601', // 客户分析
    component: CusAnalysis
}, {
    path: 'log/387', // 物流协同
    component: DelTrack
}, {
    path: 'db/427', // 看板管理-基础参数
    component: RawData
}, {
    path: 'db/390', // 看板管理-每日看板
    component: DBDaily
}, {
    path: 'db/391', // 看板管理-客户看板
    component: DBMag
}, {
    path: 'db/392', // 看板管理-SellIn查询
    component: SellIn
}, {
    path: 'db/393', // 看板管理-SellOut查询
    component: SellOut
}, {
    path: 'kpi/392', // KPI管理
    component: KPIView
}, {
    path: 'kpi/429', // KPI管理
    component: KPISOPSD
}, {
    path: 'kpi/341', // KPI管理
    component: KPISOPSDROL
}, {
    path: 'kpi/394', // KPI管理
    component: KPIPOPlan
}, {
    path: 'kpi/395', // KPI管理
    component: KPIPOPSD
}, {
    path: 'kpi/393', // KPI管理
    component: KPISPcad
}, {
    path: 'inv/380', // 库存管理
    component: InvView
}, {
    path: 'inv/381', // 库存管理
    component: DOI
}, {
    path: 'inv/382', // 库存管理良品
    component: FGAgingGood
}, {
    path: 'inv/383', // 库存管理不良品
    component: FGAgingDefect
}, {
    path: 'inv/384', // 库存管理
    component: PIAging
}, {
    path: 'inv/385', // 库存管理
    component: FullChainInv
}, {
    path: 'so/370',
    component: SOView
}, {
    path: 'so/371',
    component: SOData
}, {
    path: 'so/372',
    component: SOCA
}, {
    path: 'so/375',
    component: SOdetailDG
}, {
    path: 'so/374',
    component: SOabnormal
}, {
    path: 'so/377',
    component: SOkpi
}, {
    path: 'so/373',
    component: SOAnalysis
}, {
    path: 'so/378',
    component: Keypn
}, {
    path: 'so/379',
    component: SOdetail
}, {
    path: 'cusplan/441',
    component: CusPlan
}]