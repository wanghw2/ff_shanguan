<template>
<div class="user">
  <div class="box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
      <el-form-item label="用户名:" prop="name">
        <el-input v-model="ruleForm.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="ITCode:" prop="code">
        <el-input v-model="ruleForm.code" size="small" @blur="validUser"></el-input>
      </el-form-item>
      <!-- <el-form-item label="用户密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item> -->
      <el-form-item label="所有角色:" prop="allRole">
        <el-checkbox-group v-model="ruleForm.allRole">
          <el-checkbox
            border
            v-for="item in roleArr"
            :key="item.id"
            :label="item.id"
            name="allRole">{{item.showName}}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="默认角色:" prop="defaultRole">
        <el-radio-group v-model="ruleForm.defaultRole">
          <el-radio
            border
            v-for="item in roleArr"
            :key="item.id"
            :label="item.id"
            name="defaultRole">{{item.showName}}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button size="small" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '', // 存储输入的用户的名字
        code: '', // 存储输入的用户的itcode
        // password: '',
        allRole: [], // 存储点击的多个角色的id
        defaultRole: '' // 存储点击的默认角色的id
      },
      roleArr: [],
      defaultRoleName: '',
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入IT码', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        // password: [
        //   { required: true, message: '请输入密码', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
        allRole: [
          { type: 'array', required: true, message: '请至少选择一个角色', trigger: 'change' }
        ],
        defaultRole: [
          { required: true, message: '请选择默认角色', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    this.getAllRole()
  },
  methods: {
    validUser () { // 输入itcode（即loignName）后立即验证用户是否已经存在
      let vm = this
      vm.$ajax({
        url: '/getUserByLoginName',
        method: 'get',
        params: {
          'loginName': vm.ruleForm.code
        },
        done (data) {
          if (!data) { // 如果data为null,就什么也不做，否则说明该用户名已经存在
            // alert('目前该用户还不存在')
          } else {
            alert('该用户已经被创建过了！')
          }
          // console.log(vm.ruleForm.code)
        }
      })
    },
    getAllRole () { // 获取所有角色的数据
      let vm = this
      vm.$ajax({
        url: '/getAllRole',
        method: 'get',
        done (data) {
          vm.roleArr = [].concat(data).map((item) => {
            return {
              showName: item.showName,
              id: item.id,
              defaultRoleName: item.roleName
            }
          })
          // console.log(vm.roleArr)
        }
      })
    },
    submitForm (formName) { // 提交表单
      let vm = this
      let newRoleName = []
      newRoleName = vm.roleArr.filter((item, index) => {
        return item.id === vm.ruleForm.defaultRole // 根据点击的默认角色id获取默认角色名，以备给后台传参使用
      })
      vm.$ajax({
        url: '/saveUser',
        data: {
          'id': '',
          'loginName': vm.ruleForm.code,
          'name': vm.ruleForm.name,
          'roleIds': vm.ruleForm.allRole.join(),
          'defaultRoleId': vm.ruleForm.defaultRole,
          'defaultRoleName': newRoleName[0].defaultRoleName
        },
        done (data) {
          vm.$refs[formName].validate((valid) => {
            if (valid) {
              alert('用户添加成功!')
              vm.resetForm('ruleForm')
            } else {
              // console.log('用户添加失败!!')
              alert('用户添加失败!!')
              return false
            }
          })
        }
      })
    },
    resetForm (formName) { // 清空表单
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.user
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .box
    width 900px
    height auto
    border 1px solid #ccc
    margin 0px auto
    padding 10px
    background #fff
.el-checkbox,.el-radio
  margin 0 10px 10px 0
.el-checkbox.is-bordered+.el-checkbox.is-bordered,
.el-radio.is-bordered+.el-radio.is-bordered
  margin-left 0
.el-input
  width 200px
</style>

