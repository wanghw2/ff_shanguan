<template>
<div class="inv-box">
  <div class="content">
    <div class="block">
      <h2>超期处理进度
        <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
        <a class="small emailBtn" @click="sendemail" href="#">发送邮件</a>
        <a class="small downBtn" @click="download" href="#">下载</a>
        <div class="form-box">
          <updata
            @on-success="updateAgingReport"
            :menuId="'382'"
            :menuName="'超期库存'"
            :logTableName="'ConNB_FGI_Aging_Report'"
            :proIndex="'1'" >
          </updata>
        </div>
      </h2>
      <div class="addgrid">
        <v-table
          :sheetsName="'ConNB_超期处理进度'"
          :tableName="'ConNB_FGI_Aging_Report'"
          :source="'FF_IDSS_Data_CON'"
          :fileName="'ConNB_超期处理进度'"
          ref="gridAgingReport">
        </v-table>
      </div>
      <div class="graphBox">
        <div class="progressBox">
          <ul class="ul-title">
            <li>客户</li>
            <li>初期目标$</li>
            <li>已处理$</li>
            <li>待处理$</li>
            <li>处理进度</li>
          </ul>
          <ul class="ul-data">
            <li>
              <span class="name">传统渠道</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="45"></el-progress>
              </div>
            </li>
            <li>
              <span class="name">线上渠道</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="42.2"></el-progress>
              </div>
            </li>
            <li>
              <span class="name">RKA</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="54"></el-progress>
              </div>
            </li>
            <li>
              <span class="name">直营</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="87.2"></el-progress>
              </div>
            </li>
            <li>
              <span class="name">尾货</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="41.5"></el-progress>
              </div>
            </li>
          </ul>
        </div>
        <div class="progressBox">
          <ul class="ul-title">
            <li>销售类型</li>
            <li>初期目标$</li>
            <li>已处理$</li>
            <li>待处理$</li>
            <li>处理进度</li>
          </ul>
          <ul class="ul-data">
            <li>
              <span class="name">现销</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="45"></el-progress>
              </div>
            </li>
            <li>
              <span class="name">尾货</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="42.2"></el-progress>
              </div>
            </li>
            <li>
              <span class="name">尾货</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="54"></el-progress>
              </div>
            </li>
            <li>
              <span class="name">尾货</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="87.2"></el-progress>
              </div>
            </li>
            <li>
              <span class="name">尾货</span>
              <span>66%</span>
              <span>34%</span>
              <span>20.0%</span>
              <div class="progress">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="41.5"></el-progress>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import updata from '@/components/public/updata'
const $ = window.$
export default {
  data () {
    return {
      toggle: true
    }
  },
  components: {
    updata,
    VTable
  },
  created () {
    // this.getListData1()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
    }, 3000)
  },
  methods: {
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    updateAgingReport () { // 上传后自动刷新表格数据
      this.$refs.gridAgingReport.updateTabFun()
    },
    download () {
      let vm = this
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    sendemail () {
      let vm = this
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1
        },
        done (data) {
          alert(data)
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
.inv-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .content
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      h2
        width 100%
        height 38px
        line-height 38px
        font-weight normal
        box-shadow 0 2px 8px #ccc
        font-size 14px
        padding 0 20px
        margin-bottom 5px
        background #fafafa
        .form-box
          width 322px
          float right
        .fold
          width 60px
          height 24px
          line-height 24px
          margin-top 6px
          margin-left 20px
          border-radius 6px
          text-align center
          float right
          color #fff
          border-radius 6px
          background #ff9933
          font-size 12px
          box-sizing border-box
        .small
          margin-top 6px
          float right
          margin-left 20px
          border-radius 6px
          font-size 12px
          height 24px
          width 60px
          line-height 24px
          text-align center
          border 0
          font-size 12px
          background #6ab7fc
          color #fff
          box-sizing border-box
          &:hover
            background #4691e4
        .emailBtn
          background #e6199e
          &:hover
            background #ca3997
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
      .graphBox
        width 100%
        height auto
        overflow hidden
        .progressBox
          width 48%
          height auto
          margin-right 20px
          float left
          .ul-title
            width 100%
            height 30px
            border-bottom 1px solid #ccc
            margin-bottom 5px
            li
              width 15%
              height 30px
              line-height 30px
              float left
              text-align center
              &:last-child
                width 38%
                float right
          .ul-data
            width 100%
            height auto
            overflow hidden
            li
              width 100%
              height 30px
              padding 0 10px
              float left
              text-align center
              span
                width 15%
                height 30px
                float left
                display inline-block
              .progress
                width 38%
                height 30px
                float right
</style>
