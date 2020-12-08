import Home from '@/container/business/ffkq/home'
// 订单管理
import SOData from '@/container/business/ffkq/so/SOData'
import SODataShow from '@/container/business/ffkq/so/sODataShow'
import SOdetail from '@/container/business/ffkq/so/SOdetail'
// 目标管理
import TarUpload from '@/container/business/ffkq/tar/tarUpload'
// 分货管理
import AlloDataFF from '@/container/business/ffkq/allo/AlloDataFF'
import Checklist from '@/container/business/ffkq/allo/checklist'
import AlloDetail from '@/container/business/ffkq/allo/AlloDetail'
// 机型管理
import MTMCV from '@/container/business/ffkq/mtm/MTMCV'
import MTMFamily from '@/container/business/ffkq/mtm/MTMFamily'
import MTMPIPO from '@/container/business/ffkq/mtm/MTMPIPO'
import MTMSBB from '@/container/business/ffkq/mtm/MTMSBB'
// 投产管理
import PdtPara from '@/container/business/ffkq/pdt/PdtPara'
// 预测管理
import FCSTPara from '@/container/business/ffkq/fcst/FCSTPara'
import FCSTCommit from '@/container/business/ffkq/fcst/FCSTCommit'
import FCSTView from '@/container/business/ffkq/fcst/FCSTView'
import FCSTVary from '@/container/business/ffkq/fcst/FCSTVary'
import FCSTfullInv from '@/container/business/ffkq/fcst/FCSTfullInv'
// 供应管理
import PSD from '@/container/business/ffkq/sup/PSD'
// 库存管理
import InvView from '@/container/business/ffkq/inv/InvView'
import DOI from '@/container/business/ffkq/inv/DOI'
import PIAging from '@/container/business/ffkq/inv/PIAging'
// 物流协同
import LogPara from '@/container/business/ffkq/log/LogPara'
// 看板管理
import RawData from '@/container/business/ffkq/db/RawData'
import DBDaily from '@/container/business/ffkq/db/DBDaily'
import CATracking from '@/container/business/ffkq/db/CATracking'
// KPI管理
import KPISOPSD from '@/container/business/ffkq/kpi/KPI_SOPSD'
import KPIPOPSD from '@/container/business/ffkq/kpi/KPI_POPSD'
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
  path: 'allo/702', // // 分货参数_FF
  component: AlloDataFF
}, {
  path: 'allo/704', // // 渠道勾单
  component: Checklist
}, {
  path: 'allo/703',
  component: AlloDetail
}, {
  path: 'mtm/902',
  component: MTMCV
}, {
  path: 'mtm/903',
  component: MTMFamily
}, {
  path: 'mtm/904',
  component: MTMPIPO
}, {
  path: 'mtm/906',
  component: MTMSBB
}, {
  path: 'pdt/302',
  component: PdtPara
}, {
  path: 'fcst/201',
  component: FCSTView // 预测总览
}, {
  path: 'fcst/203',
  component: FCSTfullInv // 全链库存
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
  path: 'sup/402',
  component: PSD
}, {
  path: 'log/191', // 物流协同
  component: LogPara
}, {
  path: 'db/491', // 看板管理基础数据
  component: RawData
}, {
  path: 'db/492', // 每日看板管理
  component: DBDaily
}, {
  path: 'db/494', // 看板管理 CATracking
  component: CATracking
}, {
  path: 'kpi/395', // KPI管理
  component: KPISOPSD
}, {
  path: 'kpi/394', // KPI管理
  component: KPIPOPSD
}, {
  path: 'inv/801', // 库存管理
  component: InvView
}, {
  path: 'inv/802', // 库存管理
  component: DOI
}, {
  path: 'inv/803', // 库存管理
  component: PIAging
}]
