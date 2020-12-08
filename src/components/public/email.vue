<template>
  <div class="emailbig">
    <div class="email-box">
      <div class="email-content">
        <div class="title">邮件内容</div>
        <el-form size="small" label-position="right" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="收件人" class="shoujian" prop="sendTos">
            <el-input v-model="ruleForm.sendTos"></el-input>
          </el-form-item>
          <el-form-item label="抄送人"  class="chaosong"  prop="ccAddress">
            <el-input v-model="ruleForm.ccAddress"></el-input>
          </el-form-item>
          <el-form-item label="密送人"  class="misong"  prop="mailInfo">
            <el-input v-model="ruleForm.mailInfo"></el-input>
          </el-form-item>
          <el-form-item label="主题" class="zhuti" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="添加附件" class="fujian" prop="attachment">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary" class="fujianbutton">附件上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="邮件内容" class="content" prop="content">
            <el-input type="textarea" v-model="ruleForm.content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即发送</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="email-history">
        <div class="title">历史邮件</div>
        <div class="email-history-list">
          <div class="list-item" v-for="item in 12" :key="item">
            <div class="item-title">
              <span class="send">发件人：</span><span class="send-name">{{'赵彩云'}}</span><span class="time">
                时间：</span><span class="send-time">{{'2017年12月12日'}}</span>
            </div>
            <div class="item-body">
              <p>感谢您使用滴滴出行并选择开票业务，查看发票对应的行程单请单击附件。您可以在APP-我的钱包-开票-开票历史中查看最新的开票进度。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      fileList: [],
      action: '',
      ruleForm: {
        sendTos: '',
        ccAddress: '',
        mailInfo: '',
        title: '',
        content: ''
      },
      rules: {
        sendTos: [
          { required: true, message: '请填写收件人地址', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请填写邮件标题', trigger: 'change' }
        ]
      },
      serviceLinevalue: '',
      timevalue: ''
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除${file.name}？`)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.emailbig
  width 100%
  height 100%
  background #fff
  .email-box
    width 100%
    height auto
    // padding 20px 10px 10px 90px
    // background  #fff
    .email-content, .email-history
      padding: 10px
      border 1px solid #e6ebf5
      margin-bottom 20px
    .title
      line-height 24px
      font-size 14px
      font-weight bold
    .shoujian,.chaosong
      width 33%
      display inline-block
    .email-history-list
      height 120px
      overflow-y scroll
      .list-item
        padding 5px 10px
        line-height 26px
      .item-title
        color #5a5e66
      .send-time
        margin-left 20px
      .item-body p
        width 300px
        height 26px
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
    // .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item
    //   margin-bottom 14px
</style>
