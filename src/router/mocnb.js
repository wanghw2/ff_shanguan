import Home from '@/container/business/moconnb/home'
// 分货管理
// import PSD from '@/container/business/moconnb/psd/psd'
// import AlloDataMO from '@/container/business/moconnb/psd/AlloDataMO'
// import AlloDataChannel from '@/container/business/moconnb/psd/AlloDataChannel'
// import AlloDataFF from '@/container/business/moconnb/psd/AlloDataFF'
// import AlloDetail from '@/container/business/moconnb/psd/AlloDetail'
// import CusFeedbackBP from '@/container/business/moconnb/psd/CusFeedbackBP'
// import CusFeedbackFA from '@/container/business/moconnb/psd/CusFeedbackFA'
// import CusFeedbackBTB from '@/container/business/moconnb/psd/CusFeedbackBTB'
// import CusFeedbackBTC from '@/container/business/moconnb/psd/CusFeedbackBTC'
// import UrgentRequirement from '@/container/business/moconnb/psd/UrgentRequirement'
// 机型管理
// import MTM from '@/container/business/moconnb/mtm/MTM'
import MTMSBBUpload from '@/container/business/moconnb/mtm/MTMSBBUpload'
import MTMFamilyUpload from '@/container/business/moconnb/mtm/MTMFamilyUpload'
// import PLCData from '@/container/business/moconnb/mtm/PLCData'
// import MTMAnalysis from '@/container/business/moconnb/mtm/MTMAnalysis'
// import MTMData from '@/container/business/moconnb/mtm/MTMData'
// import MTMMap from '@/container/business/moconnb/mtm/MTMMap'
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
  path: 'mtm/209',
  component: MTMSBBUpload
}, {
  path: 'mtm/210',
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
