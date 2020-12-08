import Home from '@/container/business/chbconnb/home'
// 目标管理
import TarUpload from '@/container/business/chbconnb/tar/tarUpload'
import TarUpload1 from '@/container/business/chbconnb/tar/tarUpload1'
// 看板管理
import DBDaily2 from '@/container/business/chbconnb/db/DBDaily2' // cdt每日看板
import DBDaily1 from '@/container/business/chbconnb/db/DBDaily1' // cnb每日看板
// 订单管理
import SOdetail1 from '@/container/business/chbconnb/so/SOdetail1'
import SOdetail2 from '@/container/business/chbconnb/so/SOdetail2'
import Query3sTra from '@/container/business/chbconnb/so/3sQueryTra'
import Query3sKey from '@/container/business/chbconnb/so/3sQueryKey'
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'tar/101', // 目标上传 cnb
  component: TarUpload
}, {
  path: 'tar/103', // 目标上传 chbconkey
  component: TarUpload1
}, {
  path: 'db/402',
  component: DBDaily2 // 每日看板
}, {
  path: 'db/405',
  component: DBDaily1 // 每日看板
}, {
  path: 'so/301',
  component: SOdetail1 // NBkey订单明细
}, {
  path: 'so/303',
  component: SOdetail2 // NBtra订单明细
}, {
  path: 'so/302',
  component: Query3sTra // 3S查询
}, {
  path: 'so/304',
  component: Query3sKey // 3S查询
}]
