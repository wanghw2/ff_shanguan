import Home from '@/container/business/oper/home'
// 目标管理
import TarView from '@/container/business/oper/tar/TarView'
import TarUpload from '@/container/business/oper/tar/tarUpload'
// 日历管理
import FinCalendar from '@/container/business/oper/calendar/FinCalendar'
import CARatio from '@/container/business/oper/calendar/CARatio'
// 库存管理
import lnvPara from '@/container/business/oper/lnv/lnvPara'
import DOI from '@/container/business/oper/lnv/DOI'
import Aging from '@/container/business/oper/lnv/Aging'
import FGIAging from '@/container/business/oper/lnv/FGIAging'
import PIAging from '@/container/business/oper/lnv/PIAging'
// PSD管理
import PSDPara from '@/container/business/oper/psd/PSDPara'
import PSDAcc from '@/container/business/oper/psd/PSDACC'
// 看板管理
import DBDaily from '@/container/business/oper/db/DBDaily'
import CATracking from '@/container/business/oper/db/CATracking'
import RawData from '@/container/business/oper/db/RawData'
// 产能协同
import capPara from '@/container/business/oper/cap/capPara'
import capManage from '@/container/business/oper/cap/capManage'
// 物流协同
import DelTrack from '@/container/business/oper/log/DelTrack'
// 机型管理
import MTMSBB from '@/container/business/oper/mtm/MTMSBB'
// KPI管理
import KPISPcad from '@/container/business/oper/kpi/KPI_SPcad'
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'log/1',
  component: DelTrack
}, {
  path: 'cap/1',
  component: capPara
}, {
  path: 'cap/2',
  component: capManage
}, {
  path: 'tar/445', // 目标总览
  component: TarView
}, {
  path: 'tar/446', // 目标上传
  component: TarUpload
}, {
  path: 'calendar/447',
  component: FinCalendar
}, {
  path: 'calendar/448',
  component: CARatio
}, {
  path: 'lnv/449', // 库存管理
  component: lnvPara
}, {
  path: 'lnv/450', // 库存管理
  component: Aging
}, {
  path: 'lnv/451', // 库存管理
  component: DOI
}, {
  path: 'lnv/452', // 库存管理
  component: FGIAging
}, {
  path: 'lnv/453', // 库存管理
  component: PIAging
}, {
  path: 'psd/454',
  component: PSDPara
}, {
  path: 'psd/455',
  component: PSDAcc
}, {
  path: 'kpi/460',
  component: KPISPcad
}, {
  path: 'mtm/461',
  component: MTMSBB
}, {
  path: 'db/458', // 看板管理
  component: DBDaily
}, {
  path: 'db/459', // 看板管理
  component: CATracking
}, {
  path: 'db/457', // 看板管理
  component: RawData
}]
