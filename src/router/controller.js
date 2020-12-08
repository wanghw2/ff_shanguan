import Home from '@/container/business/controller/home'
import userAdd from '@/container/business/controller/user/userAdd'
import MenuSet from '@/container/business/controller/user/menuSet'
import UserModify from '@/container/business/controller/user/userModify'
import UserModifyshow from '@/container/business/controller/user/userModifyshow'
import Parasetthink from '@/container/business/controller/think/paraset'
import Paradelthink from '@/container/business/controller/think/paradel'
import Parabusithink from '@/container/business/controller/think/parabusi'
import Parasetcon from '@/container/business/controller/cont/paraset'
import Paradelcon from '@/container/business/controller/cont/paradel'
import Parasetrel from '@/container/business/controller/rel/paraset'
import Paradelrel from '@/container/business/controller/rel/paradel'
import Parasetsvr from '@/container/business/controller/svr/paraset'
import Paradelsvr from '@/container/business/controller/svr/paradel'
import Parasettablet from '@/container/business/controller/tablet/paraset'
import Paradeltablet from '@/container/business/controller/tablet/paradel'
import Parasetyt from '@/container/business/controller/yt/paraset'
import Paradelyt from '@/container/business/controller/yt/paradel'
import queryCode from '@/container/business/controller/ff/queryCode'
import Parasetff from '@/container/business/controller/ff/paraset'
import mailset from '@/container/business/controller/ff/mailset'
import downset from '@/container/business/controller/ff/downset'
import downsetr from '@/container/business/controller/ff/downsetr'
import mailchange from '@/container/business/controller/ff/mailchange'
import Parasetraw from '@/container/business/controller/raw/paraset'
import Paradelraw from '@/container/business/controller/raw/paradel'

export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'user/318', // 用户修改用户列表
  component: UserModify
}, {
  path: 'user/userModify', // 用户修改详情
  component: UserModifyshow
}, {
  path: 'user/317', // 用户添加
  component: userAdd
}, {
  path: 'user/319', // 菜单上传
  component: MenuSet
}, {
  path: 'think', // think
  component: Parasetthink
}, {
  path: 'think/422', // think
  component: Parasetthink
}, {
  path: 'think/423', // think
  component: Parabusithink
}, {
  path: 'con/424', // cnb 消笔
  component: Parasetcon
}, {
  path: 'think/398', // cdt 消台
  component: Paradelthink
}, {
  path: 'con/400', // cdt 消台
  component: Paradelcon
}, {
  path: 'ff/934',
  component: queryCode
}, {
  path: 'rel/404',
  component: Parasetrel
}, {
  path: 'rel/403',
  component: Paradelrel
}, {
  path: 'svr/408',
  component: Parasetsvr
}, {
  path: 'svr/407',
  component: Paradelsvr
}, {
  path: 'tablet/406',
  component: Parasettablet
}, {
  path: 'tablet/405',
  component: Paradeltablet
}, {
  path: 'yt/402',
  component: Parasetyt
}, {
  path: 'yt/401',
  component: Paradelyt
}, {
  path: 'ff/935',
  component: Parasetff
}, {
  path: 'ff/936',
  component: downset
}, {
  path: 'ff/939',
  component: downsetr
}, {
  path: 'ff/938',
  component: mailchange
}, {
  path: 'raw/500',
  component: Parasetraw
}, {
  path: 'raw/501',
  component: Paradelraw
}, {
  path: 'ff/937',
  component: mailset
}]
