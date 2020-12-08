import Home from '@/container/business/mocondt/home'
// 分货管理
// import PSD from '@/container/business/mocondt/psd/psd'
// import AlloDataMO from '@/container/business/mocondt/psd/AlloDataMO'
// import AlloDataChannel from '@/container/business/mocondt/psd/AlloDataChannel'
// import AlloDataFF from '@/container/business/mocondt/psd/AlloDataFF'
// import AlloDetail from '@/container/business/mocondt/psd/AlloDetail'
// import CusFeedbackBP from '@/container/business/mocondt/psd/CusFeedbackBP'
// import CusFeedbackFA from '@/container/business/mocondt/psd/CusFeedbackFA'
// import CusFeedbackBTB from '@/container/business/mocondt/psd/CusFeedbackBTB'
// import CusFeedbackBTC from '@/container/business/mocondt/psd/CusFeedbackBTC'
// import UrgentRequirement from '@/container/business/mocondt/psd/UrgentRequirement'
// 机型管理
// import MTM from '@/container/business/mocondt/mtm/MTM'
import MTMSBBUpload from '@/container/business/mocondt/mtm/MTMSBBUpload'
import MTMFamilyUpload from '@/container/business/mocondt/mtm/MTMFamilyUpload'
// import PLCData from '@/container/business/mocondt/mtm/PLCData'
// import MTMAnalysis from '@/container/business/mocondt/mtm/MTMAnalysis'
// import MTMData from '@/container/business/mocondt/mtm/MTMData'
// import MTMMap from '@/container/business/mocondt/mtm/MTMMap'
export default [{
  path: '',
  redirect: 'home'
}, {
  path: 'home', // 首页
  component: Home
// },
// {
//   path: 'psd', // 分货管理
//   component: PSD
// }, {
//   path: 'psd/233', // 分货参数_MO
//   component: AlloDataMO
// }, {
//   path: 'psd/234', // 分货参数_通路
//   component: AlloDataChannel
// }, {
//   path: 'psd/235', // // 分货参数_FF
//   component: AlloDataFF
// }, {
//   path: 'psd/236', // 分货详情
//   component: AlloDetail
// }, {
//   path: 'mtm/386', // 选件管理
//   component: MTM
}, {
  path: 'mtm/203',
  component: MTMSBBUpload
}, {
  path: 'mtm/204',
  component: MTMFamilyUpload
// }, {
//   path: 'mtm/211',
//   component: PLCData
// }, {
//   path: 'mtm/213',
//   component: MTMAnalysis
// }, {
//   path: 'mtm/212',
//   component: MTMData
// }, {
//   path: 'mtm/214',
//   component: MTMMap
// }, {
//   path: 'psd/CusFeedbackBP', // 客户反馈_BP
//   component: CusFeedbackBP
// }, {
//   path: 'psd/CusFeedbackFA', // 客户反馈_FA
//   component: CusFeedbackFA
// }, {
//   path: 'psd/CusFeedbackBTB', // 客户反馈_BTB
//   component: CusFeedbackBTB
// }, {
//   path: 'psd/CusFeedbackBTC', // 客户反馈_BTC
//   component: CusFeedbackBTC
// }, {
//   path: 'psd/UrgentRequirement', // 订单加急
//   component: UrgentRequirement
}]
