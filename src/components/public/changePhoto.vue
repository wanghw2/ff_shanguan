<template>
  <div class="changePhoto">
    <div class="photo-box">
      <el-upload class="avatar-uploader"
                 ref="upload"
                 name="pic"
                 :action="uploadUrl"
                 :http-request="uploadHandler"
                 :before-upload="beforeAvatarUpload"
                 :show-file-list="false"
                 :auto-upload="false"
                 :on-change="inputChange">
        <img v-if="imageUrl"
             :src="imageUrl"
             class="avatar">
        <i v-else
           class="el-icon-plus avatar-uploader-icon text">请选择头像</i>
      </el-upload>
      <el-button size="small"
                 type="success"
                 @click="submitUpload">上传我的头像</el-button>
      <el-button size="small"
                 type="primary"
                 @click="systemPhoto">系统默认头像</el-button>
    </div>
  </div>
</template>
<script>
import { domainUrl } from '@/config/config.js'
export default {
  inject: ['getAvatar'],
  data () {
    return {
      uploadUrl: domainUrl + '/uploadIcon',
      imageUrl: '',
      file: null
    }
  },
  methods: {
    systemPhoto () { // 系统默认头像
      let vm = this
      this.$ajax({
        url: '/setDefaultIcon?time=' + new Date().getTime(),
        method: 'get',
        done (data) {
          // alert(data)
          vm.$store.commit('setToken', { icon: domainUrl + '/getIcon?time=' + new Date().getTime() })
          vm.getAvatar()
        }
      })
    },
    submitUpload () { // 上传我的头像
      this.$refs.upload.submit()
    },
    beforeAvatarUpload (file) { // 判断上传的文件是否是图片，大小是否小于1M
      const isImage = /^(image\/)/.test(file.type)
      const isLt1M = file.size / 1024 / 1024 < 1
      if (!isImage) {
        this.$message.error('上传的文件格式不正确!')
      }
      if (!isLt1M) {
        this.$message.error('上传文件大小不能超过1M!')
      }
      return isImage && isLt1M
    },
    uploadHandler () {
      let data = new FormData()
      data.append('pic', this.file.raw)
      let vm = this
      this.$ajax({
        url: '/uploadIcon',
        headers: {
          'Content-type': 'multipart/form-data'
        },
        data: data,
        done (data) {
          vm.file = null
          vm.imageUrl = ''
          vm.$store.commit('setToken', { icon: domainUrl + '/getIcon?time=' + new Date().getTime() })
          vm.getAvatar()
        }
      })
    },
    inputChange (file) {
      this.file = file
      this.imageUrl = file.url
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../less/changePhoto.less");
</style>

