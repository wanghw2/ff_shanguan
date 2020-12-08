// 修改密码
import ModifyPwd from '@/components/public/modifyPwd'
import ChangePhoto from '@/components/public/changePhoto'

export default [{
  path: '/modifyPwd', // 密码修改
  component: ModifyPwd,
  meta: {
    hideCrumnb: true
  }
}, {
  path: '/changePhoto', // 头像修改
  component: ChangePhoto,
  meta: {
    hideCrumnb: true // 不想有面包屑的地方设置这个属性就好了
  }
}]
