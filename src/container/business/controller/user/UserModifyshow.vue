<template>
<div class="user">
  <div class="box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
      <el-form-item label="用户名:" prop="name">
        <el-input v-model="ruleForm.name" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="ITCode:" prop="code">
        <el-input v-model="ruleForm.code" size="mini"></el-input>
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
        <el-button size="mini" type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button size="mini" @click="resetForm('ruleForm')">重置</el-button>
        <el-button size="mini" @click="resetPwd">密码重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      userId: '',
      ruleForm: {
        name: '',
        code: '',
        // password: '',
        allRole: [],
        defaultRole: ''
      },
      roleArr: [],
      userRole: [],
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
    this.userId = this.$route.query.id
    // console.log(this.userId)
    this.ruleForm.name = this.$route.query.name
    this.ruleForm.code = this.$route.query.code
    if (!this.userId && !this.ruleForm.code && !this.ruleForm.code) {
      this.$router.go(-1)
    }
    // console.log(this.ruleForm.code)
    this.getAllRole()
    this.getUserRole()
    this.validUser()
  },
  methods: {
    openCenter () {
      this.$message({
        message: '居中的文字',
        center: true
      })
    },
    validUser () {
      let vm = this
      vm.$ajax({
        url: '/getUserByLoginName',
        method: 'get',
        params: {
          'loginName': vm.ruleForm.code,
          'id': vm.userId
        },
        done (data) {
          vm.ruleForm.defaultRole = data.deRoleId
        }
      })
    },
    getUserRole () {
      let vm = this
      vm.$ajax({
        url: '/getUserRoleByUserId',
        method: 'get',
        params: {
          id: vm.userId
        },
        done (data) {
          vm.ruleForm.allRole = [].concat(data).map((item) => {
            return item.id
          })
          // console.log(vm.ruleForm.allRole)
        }
      })
    },
    getAllRole () {
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
    submitForm (formName) {
      let vm = this
      let newRoleName = []
      newRoleName = vm.roleArr.filter((item, index) => {
        return item.id === vm.ruleForm.defaultRole
      })
      vm.$ajax({
        url: '/saveUser',
        data: {
          'id': vm.userId,
          'loginName': vm.ruleForm.code,
          'name': vm.ruleForm.name,
          'roleIds': vm.ruleForm.allRole.join(),
          'defaultRoleId': vm.ruleForm.defaultRole,
          'defaultRoleName': newRoleName[0].defaultRoleName
        },
        done (data) {
          vm.$refs[formName].validate((valid) => {
            if (valid) {
              alert('修改成功!')
            } else {
              console.log('修改出错!!')
              return false
            }
          })
          // console.log(vm.userId)
          vm.$router.push('/controller/user/318')
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    resetPwd () {
      let vm = this
      vm.$ajax({
        url: '/updateUserPasswordById',
        data: {
          userId: vm.userId
        },
        done (data) {
          // console.log(vm.roleArr)
        },
        fail (msg) {
          alert(msg)
        }
      })
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

