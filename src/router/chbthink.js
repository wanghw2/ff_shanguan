import Home from '@/container/business/chbthink/home'
// 分货管理
import AlloData from '@/container/business/chbthink/allo/AlloData'
import AlloDetail from '@/container/business/chbthink/allo/AlloDetail'

export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
}, {
  path: 'allo/216', // 分货参数
  component: AlloData
}, {
  path: 'allo/219', // 分货详情
  component: AlloDetail
}]
