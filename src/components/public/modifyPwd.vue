<template>
  <div class="pwdBox">
    <div class="pwd">
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="旧密码"
                      prop="oldPass">
          <el-input type="password"
                    v-model="ruleForm.oldPass"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码"
                      prop="newPass">
          <el-input type="password"
                    v-model="ruleForm.newPass"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="ruleForm.checkPass"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="controlbtn">
          <el-button type="primary"
                     size="small"
                     @click="submitForm('ruleForm')">提交</el-button>
          <el-button size="small"
                     @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    var validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        if (!value.match(/^\w|.{6,18}$/)) {
          callback(new Error('请输入6到18位的数字或字母！'))
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        oldPass: '',
        newPass: '',
        checkPass: ''
      },
      rules: {
        oldPass: [
          { validator: validateOldPass, trigger: 'blur' }
        ],
        newPass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.modifyPwd()
          // alert('submit!')
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    modifyPwd () {
      let vm = this
      this.$ajax({
        url: '/updatePassword',
        data: {
          password: vm.$md5(vm.ruleForm.oldPass),
          newPassword: vm.$md5(vm.ruleForm.newPass)
        },
        done (data) {
          alert(data)
          vm.$store.commit('clearLoginInfo')
          vm.$store.commit('clearToken')
          vm.$router.push('/home')
        },
        fail (msg) {
          // callback(new Error('msg'))
          alert(msg)
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pwdBox
  width 100%
  height 7.5rem
  .pwd
    width 5rem
    height 5.5rem
    margin 0.5rem auto
    .controlbtn
      margin-left 0.425rem
      .el-button
        margin-top 0.075rem
        width 1.375rem
</style>
