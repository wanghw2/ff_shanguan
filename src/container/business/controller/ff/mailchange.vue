<template>
<div class="mail">
  <div class="box">
    <el-form :model="Form" ref="Form" label-width="95px" class="demo-Form">
      <div class="line">
        <el-form-item label="Tablename:" prop="tablename" class="box-item">
          <el-input v-model="Form.tablename" @blur="getQueryDate" size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="邮件主题:" prop="subject" class="box-item">
          <el-input v-model="Form.subject" size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="附件名:" prop="attach" class="box-item">
          <el-input v-model="Form.attach" size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="收件人:" prop="rept">
        <el-input v-model="Form.rept" size="small" type="textarea" autosize placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="抄送人:" prop="ccrept">
        <el-input v-model="Form.ccrept" size="small" type="textarea" autosize placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="密送人:" prop="bccrept">
        <el-input v-model="Form.bccrept" size="small" type="textarea" autosize placeholder="请输入内容"></el-input>
      </el-form-item>
      <div class="line">
        <el-form-item label="版本号:" prop="version" class="box-item">
          <el-input v-model="Form.version" size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="默认路径:" prop="path" class="box-item">
          <el-input v-model="Form.path" size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="邮件主题版本:" prop="subversion" label-width="110px" class="box-item">
          <el-input v-model="Form.subversion" size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
      </div>
      <div class="line">
        <el-form-item label="FullFileName:" prop=filename class="box-item">
          <el-input v-model="Form.filename" size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="测试人:" prop=test class="box-item">
          <el-input v-model="Form.test" size="small" placeholder="请输入内容"></el-input>
        </el-form-item>
      </div>
      <el-form-item style="float: right">
        <el-button size="small" type="primary" @click="addData()">新增</el-button>
        <el-button size="small" type="success" @click="updata()">修改</el-button>
        <el-button size="small" type="danger" @click="deleteData()">删除</el-button>
        <el-button size="small" type="info" @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      Form: {
        tablename: '',
        subject: '', // 邮件主题
        attach: '', // 附件名
        rept: '', // 收件人
        ccrept: '', // 抄送人
        bccrept: '', // 密送人
        version: '',
        path: '',
        subversion: '', // 邮件主题版本
        filename: '',
        test: ''
      }
    }
  },
  created () {
  },
  methods: {
    valieForm () {
      let params = {}
      if (this.Form.tablename !== '' && this.Form.tablename !== undefined) {
        params['tablename'] = ('' + this.Form.tablename).replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.Form.subject !== '' && this.Form.subject !== undefined) {
        params['subject'] = ('' + this.Form.subject).replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.Form.attach !== '' && this.Form.attach !== undefined) {
        params['attach'] = ('' + this.Form.attach).replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.Form.version !== '' && this.Form.version !== undefined) {
        params['version'] = ('' + this.Form.version).replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.Form.path !== '' && this.Form.path !== undefined) {
        params['path'] = ('' + this.Form.path).replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.Form.subversion !== '' && this.Form.subversion !== undefined) {
        params['subversion'] = ('' + this.Form.subversion).replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.Form.filename !== '' && this.Form.filename !== undefined) {
        params['filename'] = ('' + this.Form.filename).replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.Form.test !== '' && this.Form.test !== undefined) {
        params['test'] = ('' + this.Form.test).replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.Form.rept !== '' && this.Form.rept !== undefined) {
        params['rept'] = ('' + this.Form.rept).replace(/\s/g, '').replace(/；/g, ';')
      }
      if (this.Form.ccrept !== '' && this.Form.ccrept !== undefined) {
        params['ccrept'] = ('' + this.Form.ccrept).replace(/\s/g, '').replace(/；/g, ';')
      }
      if (this.Form.bccrept !== '' && this.Form.bccrept !== undefined) {
        params['bccrept'] = ('' + this.Form.bccrept).replace(/\s/g, '').replace(/；/g, ';')
      }
      return params
    },
    getQueryDate () {
      let vm = this
      vm.$ajax({
        url: '/getMailloopByTablename',
        method: 'get',
        params: {
          'tablename': ('' + vm.Form.tablename).replace(/(^\s*)|(\s*$)/g, '')
        },
        done (data) {
          vm.Form.subject = data[0].邮件主题
          vm.Form.attach = data[0].附件名
          vm.Form.rept = data[0].收件人
          vm.Form.ccrept = data[0].抄送人
          vm.Form.bccrept = data[0].密送人
          vm.Form.version = data[0].版本号
          vm.Form.path = data[0].默认路径
          vm.Form.subversion = data[0].邮件主题版本
          vm.Form.filename = data[0].FullFileName
          vm.Form.test = data[0].测试人
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    addData () {
      if (this.Form.tablename.replace(/\s/g, '') !== '') {
        let vm = this
        let params = this.valieForm()
        vm.$ajax({
          url: '/saveMailloop',
          data: params,
          done (data) {
            alert(data)
            vm.$refs['Form'].resetFields()
          },
          fail (msg) {
            alert(msg)
          }
        })
      } else {
        alert('Tablename不能为空')
      }
    },
    updata () {
      if (this.Form.tablename.replace(/\s/g, '') !== '') {
        let vm = this
        let params = this.valieForm()
        vm.$ajax({
          url: '/updateMailloopByTablename',
          data: params,
          done (data) {
            alert('修改成功')
            vm.$refs['Form'].resetFields()
          },
          fail (msg) {
            alert(msg)
          }
        })
      } else {
        alert('Tablename不能为空')
      }
    },
    deleteData () {
      if (this.Form.tablename.replace(/\s/g, '') !== '') {
        let vm = this
        let params = this.valieForm()
        vm.$ajax({
          url: '/deleteMailloopByTablename',
          data: params,
          done (data) {
            alert('删除成功')
            vm.$refs['Form'].resetFields()
          },
          fail (msg) {
            alert(msg)
          }
        })
      } else {
        alert('Tablename不能为空')
      }
    },
    resetForm (form) { // 清空表单
      this.$refs['Form'].resetFields()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mail
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 5px !important
  .box
    width 80%
    height auto
    border 1px solid #ccc
    margin 30px auto
    padding 10px
    background #fff
    .line
      width 100%
      height auto
      overflow hidden
      .box-item
        float left
.el-input
  width 230px
</style>

