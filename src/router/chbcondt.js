import Home from '@/container/business/chbcondt/home'
// 目标管理
import TarUpload from '@/container/business/chbcondt/tar/tarUpload'
import TarUpload1 from '@/container/business/chbcondt/tar/tarUpload1'
import TarUpload2 from '@/container/business/chbcondt/tar/tarUpload2'
// 分货管理
import AlloDataPara from '@/container/business/chbcondt/allo/AlloDatapara'
import AlloDetail from '@/container/business/chbcondt/allo/AlloDetail'
// 看板管理
import BasicPara from '@/container/business/chbcondt/db/BasicPara' // 看板参数
import DBDaily from '@/container/business/chbcondt/db/DBDaily' // 每日看板
import DBDaily1 from '@/container/business/chbcondt/db/DBDaily1' // DT每日看板 chbconkey
import DBDaily2 from '@/container/business/chbcondt/db/DBDaily2' // DT每日看板 chbcontra
// 订单管理
import UrgentSo from '@/container/business/chbcondt/so/UrgentSo'
import SOdetail from '@/container/business/chbcondt/so/SOdetail'
import SOdetail1 from '@/container/business/chbcondt/so/SOdetail1' // DT订单明细 chbcnbkey
import SOdetail2 from '@/container/business/chbcondt/so/SOdetail2' // DT订单明细 chbcnbtra
import Query3sTra from '@/container/business/chbcondt/so/3sQueryTra'
import Query3sKey from '@/container/business/chbcondt/so/3sQueryKey'
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'tar/101', // 目标上传
  component: TarUpload
}, {
  path: 'tar/102', // 目标上传 chbcontra
  component: TarUpload1
}, {
  path: 'tar/104', // 目标上传 chbconkey
  component: TarUpload2
}, {
  path: 'allo/226', // // 分货参数
  component: AlloDataPara
}, {
  path: 'allo/227', // 分货详情
  component: AlloDetail
}, {
  path: 'db/301', // 基础参数
  component: BasicPara
}, {
  path: 'db/406', // Dt每日看板
  component: DBDaily1
}, {
  path: 'db/403', // Dt每日看板
  component: DBDaily2
}, {
  path: 'db/302',
  component: DBDaily // 每日看板
}, {
  path: 'so/318',
  component: UrgentSo // 急单管理
}, {
  path: 'so/319',
  component: SOdetail // 订单明细
}, {
  path: 'so/304',
  component: SOdetail1 // chbcnbkeyDT订单明细
}, {
  path: 'so/302',
  component: SOdetail2 // chbcnbtra DT订单明细
}, {
  path: 'so/303',
  component: Query3sTra // 3S查询
}, {
  path: 'so/305',
  component: Query3sKey // 3S查询
}]
