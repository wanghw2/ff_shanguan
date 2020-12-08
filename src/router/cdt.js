import Home from '@/container/business/cdt/home'
import Home1 from '@/components/public/default'
import Home3 from '@/components/public/default'
// 目标管理
import TarView from '@/container/business/cdt/tar/TarView'
import TarMonth from '@/container/business/cdt/tar/tarMonth'
import TarYear from '@/container/business/cdt/tar/tarYear'
import TarUpload from '@/container/business/cdt/tar/tarUpload'
// 投产管理
import PdtView from '@/container/business/cdt/pdt/PdtView'
import PdtPara from '@/container/business/cdt/pdt/PdtPara'
import PdtInh from '@/container/business/cdt/pdt/PdtInh'
import PdtTrack from '@/container/business/cdt/pdt/PdtTrack'
import PdtODM from '@/container/business/cdt/pdt/PdtODM'
import Factorslimit from '@/container/business/cdt/pdt/Factorslimit'
import NPI from '@/container/business/cdt/pdt/NPI'
import EOL from '@/container/business/cdt/pdt/EOL'
import pdtModel from '@/container/business/cdt/pdt/pdtModel'
// 全链库存
import Analysis3s from '@/container/business/cdt/fullinv/3sAnalysis'
import Trendanalysis from '@/container/business/cdt/fullinv/trendanalysis'
import Degreeanalysis from '@/container/business/cdt/fullinv/degreeanalysis'
import ProductReturn from '@/container/business/cdt/fullinv/productReturn'
import AllCity from '@/container/business/cdt/fullinv/allCity'
import Pushout from '@/container/business/cdt/fullinv/pushOut'
import pushOutDoi from '@/container/business/cdt/fullinv/pushOutDoi'
// 供应管理
import PSD from '@/container/business/cdt/sup/PSD'
import SupView from '@/container/business/cdt/sup/SupView'
import Promo from '@/container/business/cdt/sup/Promo'
import ONS from '@/container/business/cdt/sup/ONS'
import Displaypara from '@/container/business/cdt/sup/displaypara'
import Displaydb from '@/container/business/cdt/sup/displaydb'
import SupAnalysis from '@/container/business/cdt/sup/SupAnalysis'
// 机型管理
import MTMView from '@/container/business/cdt/mtm/MTMView'
import MTMCV from '@/container/business/cdt/mtm/MTMCV'
import MTMFamily from '@/container/business/cdt/mtm/MTMFamily'
import MTMPIPO from '@/container/business/cdt/mtm/MTMPIPO'
import MTMAnalysis from '@/container/business/cdt/mtm/MTMAnalysis'
import MTMSBB from '@/container/business/cdt/mtm/MTMSBB'
import MTMMap from '@/container/business/cdt/mtm/MTMMap'
import MTMcomplexity from '@/container/business/cdt/mtm/MTMcomplexity'
// 预测管理
import FCSTPara from '@/container/business/cdt/fcst/FCSTPara'
import FCSTCommit from '@/container/business/cdt/fcst/FCSTCommit'
import CommitView from '@/container/business/cdt/fcst/CommitView'
import FCSTView from '@/container/business/cdt/fcst/FCSTView'
import FCSTVary from '@/container/business/cdt/fcst/FCSTVary'
import Waterfall from '@/container/business/cdt/fcst/Waterfall'
import FCSTall from '@/container/business/cdt/fcst/FCSTall'
// 订单管理
import SOView from '@/container/business/cdt/so/SOView'
import SOData from '@/container/business/cdt/so/SOData'
import SOCA from '@/container/business/cdt/so/SOCA'
import BLAnalysis from '@/container/business/cdt/so/BLAnalysis'
import SOabnormal from '@/container/business/cdt/so/SOabnormal'
import SOAnalysis from '@/container/business/cdt/so/SOAnalysis'
import Keypn from '@/container/business/cdt/so/Keypn'
import SOdetail from '@/container/business/cdt/so/SOdetail'
// 分货管理
import AlloDataMO from '@/container/business/cdt/allo/AlloDataMO'
import AlloDataKEY from '@/container/business/cdt/allo/AlloDataKEY'
import AlloDataFF from '@/container/business/cdt/allo/AlloDataFF'
import AlloDataTRA from '@/container/business/cdt/allo/AlloDataTRA'
import AlloDataMAX from '@/container/business/cdt/allo/AlloDataMAX'
import AlloDetail from '@/container/business/cdt/allo/AlloDetail'
import AllocView from '@/container/business/cdt/allo/AllocView'
// 库存管理
import InvView from '@/container/business/cdt/inv/InvView'
import DOI from '@/container/business/cdt/inv/DOI'
import FGAgingGood from '@/container/business/cdt/inv/FGAgingGood'
import FGAgingDefect from '@/container/business/cdt/inv/FGAgingDefect'
import PIAging from '@/container/business/cdt/inv/PIAging'
import FullChainInv from '@/container/business/cdt/inv/FullChainInv'
// 物流协同
import LogPara from '@/container/business/cdt/log/LogPara'
// 产能协同
import CapPara from '@/container/business/cdt/cap/CapPara'
import CapPlan from '@/container/business/cdt/cap/CapPlan'
import InputTrack from '@/container/business/cdt/cap/InputTrack'
import DBPlant from '@/container/business/cdt/cap/DBPlant'
// 看板管理
import RawData from '@/container/business/cdt/db/RawData'
import DBDaily from '@/container/business/cdt/db/DBDaily'
import DBMag from '@/container/business/cdt/db/DBMag'
import CATracking from '@/container/business/cdt/db/CATracking'
// KPI管理
import KPIView from '@/container/business/cdt/kpi/KPIView'
import KPIPOPlan from '@/container/business/cdt/kpi/KPI_POPlan'
import KPISOPSD from '@/container/business/cdt/kpi/KPI_SOPSD'
import KPIPOPSD from '@/container/business/cdt/kpi/KPI_POPSD'
import KPISPcad from '@/container/business/cdt/kpi/KPI_SPcad'
import CapFcst from '@/container/business/cdt/kpi/CapFcst'
// 客户管理
import CusPlan from '@/container/business/cdt/cusplan/CusPlan'
// chbconso角色
import Productcus from '@/container/business/chbconso/dtpushout/productcus' // dtpushout
import Areacus from '@/container/business/chbconso/dtpushout/areacus'
import Productcv from '@/container/business/chbconso/dtpushout/productcv'
import QdsoAnalysis from '@/container/business/chbconso/dtpushout/qdsoAnalysis'
import Loadfactor from '@/container/business/chbconso/dtpushout/Loadfactor'
import TradichanSo from '@/container/business/chbconso/dtpushout/TradichanSo'
import OnlinechanSo from '@/container/business/chbconso/dtpushout/OnlinechanSo'
import KRASO from '@/container/business/chbconso/dtpushout/KRASO'
import CitySO from '@/container/business/chbconso/dtpushout/CitySO'
import CitylevelSO from '@/container/business/chbconso/dtpushout/CitylevelSO'

export default [{
  path: '',
  redirect: ''
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'home/01', // 首页
  component: Home1
}, {
  path: 'home/03',
  component: Home3
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
  path: 'fc/2', // 产品回归率分析
  component: ProductReturn
}, {
  path: 'fc/6', // 全国so分布pushOutDoi
  component: AllCity
}, {
  path: 'fc/7', // 全国so分布pushOutDoi
  component: pushOutDoi
}, {
  path: 'out/1', // chbconso角色
  component: Areacus
}, {
  path: 'out/2',
  component: Productcus
}, {
  path: 'out/3',
  component: Productcv
}, {
  path: 'out/4',
  component: QdsoAnalysis
}, {
  path: 'out/5',
  component: Loadfactor
}, {
  path: 'out/6',
  component: TradichanSo
}, {
  path: 'out/7',
  component: OnlinechanSo
}, {
  path: 'out/8',
  component: KRASO
}, {
  path: 'out/9',
  component: CitySO
}, {
  path: 'out/10',
  component: CitylevelSO
}, {
  path: 'tar/290', // 目标总览
  component: TarView
}, {
  path: 'tar/291', // 目标上传
  component: TarUpload
}, {
  path: 'tar/292', // 月度
  component: TarMonth
}, {
  path: 'tar/293', // 年度
  component: TarYear
}, {
  path: 'fcst/294',
  component: FCSTView // 预测总览
}, {
  path: 'fcst/296',
  component: CommitView // Commit总览
}, {
  path: 'fcst/300',
  component: Waterfall // 预测概览
}, {
  path: 'fcst/360',
  component: FCSTall // 销量分析
}, {
  path: 'fcst/297',
  component: FCSTVary // 预测变化
}, {
  path: 'fcst/298',
  component: FCSTCommit // 预测Commit
}, {
  path: 'fcst/295', // 预测参数
  component: FCSTPara
}, {
  path: 'inv/323',
  component: InvView
}, {
  path: 'inv/324',
  component: DOI
}, {
  path: 'inv/325',
  component: FGAgingGood
}, {
  path: 'inv/326',
  component: FGAgingDefect
}, {
  path: 'inv/327',
  component: PIAging
}, {
  path: 'inv/328',
  component: FullChainInv
}, {
  path: 'sup/309',
  component: SupView
}, {
  path: 'sup/310',
  component: PSD
}, {
  path: 'sup/311',
  component: Displaydb
}, {
  path: 'sup/312',
  component: ONS
}, {
  path: 'sup/313',
  component: Displaypara
}, {
  path: 'sup/314',
  component: SupAnalysis
}, {
  path: 'sup/315',
  component: Promo
}, {
  path: 'log/330', // 物流协同
  component: LogPara
}, {
  path: 'allo/224', // 分货参数_MO
  component: AlloDataMO
}, {
  path: 'allo/225', // 分货参数_客户
  component: AlloDataKEY
}, {
  path: 'allo/226', // // 分货参数_FF
  component: AlloDataFF
}, {
  path: 'allo/223', // 分货参数_传统
  component: AlloDataTRA
}, {
  path: 'allo/222', // 分货参数_传统
  component: AlloDataMAX
}, {
  path: 'allo/227', // 分货详情
  component: AlloDetail
}, {
  path: 'allo/322',
  component: AllocView
}, {
  path: 'mtm/329', // 选件管理
  component: MTMView
}, {
  path: 'mtm/203',
  component: MTMCV
}, {
  path: 'mtm/204',
  component: MTMFamily
}, {
  path: 'mtm/205',
  component: MTMPIPO
}, {
  path: 'mtm/207',
  component: MTMAnalysis
}, {
  path: 'mtm/206',
  component: MTMSBB
}, {
  path: 'mtm/208',
  component: MTMMap
}, {
  path: 'mtm/209',
  component: MTMcomplexity
}, {
  path: 'pdt/300',
  component: PdtView
}, {
  path: 'pdt/301',
  component: PdtPara
}, {
  path: 'pdt/307',
  component: PdtInh
}, {
  path: 'pdt/302',
  component: PdtTrack
}, {
  path: 'pdt/303',
  component: PdtODM
}, {
  path: 'pdt/304',
  component: Factorslimit
}, {
  path: 'pdt/305',
  component: NPI
}, {
  path: 'pdt/306',
  component: EOL
}, {
  path: 'pdt/308',
  component: pdtModel
}, {
  path: 'db/426',
  component: RawData
}, {
  path: 'db/337',
  component: DBDaily
}, {
  path: 'db/338',
  component: DBMag
}, {
  path: 'db/339', // 看板管理
  component: CATracking
}, {
  path: 'so/313',
  component: SOView
}, {
  path: 'so/314',
  component: SOData
}, {
  path: 'so/315',
  component: SOCA
}, {
  path: 'so/316',
  component: BLAnalysis
}, {
  path: 'so/317',
  component: SOabnormal
}, {
  path: 'so/320',
  component: SOAnalysis
}, {
  path: 'so/321',
  component: Keypn
}, {
  path: 'cap/333',
  component: CapPara
}, {
  path: 'cap/334',
  component: CapPlan
}, {
  path: 'cap/335',
  component: InputTrack
}, {
  path: 'cap/336',
  component: DBPlant
}, {
  path: 'kpi/339', // KPI管理
  component: KPIView
}, {
  path: 'kpi/344', // KPI管理
  component: KPISOPSD
}, {
  path: 'kpi/341', // KPI管理
  component: CapFcst
}, {
  path: 'kpi/342', // KPI管理
  component: KPIPOPlan
}, {
  path: 'kpi/343', // KPI管理
  component: KPIPOPSD
}, {
  path: 'kpi/340', // KPI管理
  component: KPISPcad
}, {
  path: 'so/322',
  component: SOdetail
}, {
  path: 'cusplan/440',
  component: CusPlan
}]
