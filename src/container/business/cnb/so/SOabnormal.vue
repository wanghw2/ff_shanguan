<template>
  <div class="mtm-uploadTarget">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>PSD当日异常
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail1" href="#">发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_PSD当日_异常监控'"
                :tableName="'ConNB_DF_PSD_Today_Tracking'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_PSD当日_异常监控'"
                ref="cnbDFpsdtoday">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>改单分析
              <div class="form-box">
                <upload
                  @on-success="cnbCAweekRatio"
                  @updateTimeChange="cnbCAweekRatio1"
                  :sheetsName="'ConNB_5S节奏'"
                  :logTableName="'ConNB_CA_WeekRatio'"
                  :logObj="'cnbweekRatio'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_5S节奏'"
                :tableName="'ConNB_CA_WeekRatio'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_5S节奏'"
                ref="cnbweekRatio">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <div class="drawBar" ref="drawbar1"></div>
            <div class="drawBar" ref="drawbar2"></div>
          </div>
        </el-tab-pane>  
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
import echarts from 'echarts'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['PSD当日异常', '改单分析', '撤单分析']
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.drawbar1()
      this.drawbar2()
    }, 3000)
  },
  methods: {
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'CON_PSD当日_异常监控_Download'
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
          vm.disableddownload = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    sendemail1 () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1,
          SENDMAIL_BAT_PATH: 'CON_PSD当日_异常监控'
        },
        done (data) {
          alert(data)
          vm.disabledemail = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    drawbar1 () {
      let drawbar = echarts.init(this.$refs.drawbar1)
      var option = {
        title: {
          text: '阶梯瀑布图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            start: 0,
            end: 100
          }
        ],
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告']
        },
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['MTM1', 'MTM2', 'MTM3', 'MTM4', 'MTM5', 'MTM6', 'MTM7']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      drawbar.setOption(option)
    },
    drawbar2 () {
      let drawbar = echarts.init(this.$refs.drawbar2)
      var option = {
        title: {
          text: '阶梯瀑布图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            start: 0,
            end: 100
          }
        ],
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告']
        },
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['MTM1', 'MTM2', 'MTM3', 'MTM4', 'MTM5', 'MTM6', 'MTM7']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      drawbar.setOption(option)
    }
    // cnbTogoso () { // 上传后自动刷新表格数据
    //   this.$refs.cnbTogoso.updateTabFun()
    // },
    // cnbTogoso1 () { // 上传后自动刷新表格数据
    //   this.$refs.cnbTogoso.updateTimeChange()
    // },
    // cnbDFpsdtoday () { // 上传后自动刷新表格数据
    //   this.$refs.cnbDFpsdtoday.updateTabFun()
    // },
    // cnbDFpsdtoday1 () { // 上传后自动刷新表格数据
    //   this.$refs.cnbDFpsdtoday.updateTimeChange()
    // }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-uploadTarget
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .tarItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      display none
      &:nth-child(1)
        display block
      h2
        width 100%
        height 38px
        line-height 38px
        font-weight normal
        box-shadow: 0 2px 8px #ccc
        font-size 14px
        padding 0 20px
        margin-bottom 5px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
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
        .disabled
          background #ccc
          cursor not-allowed
          &:hover
            background #ccc
            cursor not-allowed
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
  .drawBar
    width 1100px
    height 400px
</style>
