<template>
  <div class="inv-box">
    <div class="ConNBtent">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="invitem">
          <div class="block">
            <h2>索赔在途
              <a class="small emailBtn" @click="sendemail" href="#">发送邮件</a>
              <a class="small downBtn" @click="download" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_索赔在途'"
                :tableName="'ConNB_DOA_Transit_Overview'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_索赔在途'">
              </v-table>
            </div>
            <div class="pieChart" ref="pieChart" style="width:1100px;height: 400px;margin:10px auto;"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="invitem">
          <div class="block">
            <h2>其他不良品
              <a class="small emailBtn" @click="sendemail" href="#">发送邮件</a>
              <a class="small downBtn" @click="download" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_其他不良品'"
                :tableName="'ConNB_Defect_FG_Overview'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_其他不良品'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import VTable from '@/components/public/vtable1'
import echarts from 'echarts'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['索赔在途', '其他不良品']
    }
  },
  components: {
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.pieChart()
    }, 3000)
  },
  methods: {
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
    },
    pieChart () {
      let pieChart = echarts.init(this.$refs.pieChart)
      var option = {
        title: {
          text: '索赔在途',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: '70%',
          top: '3%',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            center: ['45%', '45%'],
            radius: [0, '30%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直达', selected: true},
              {value: 679, name: '营销广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['35%', '48%'],
            center: ['45%', '45%'],
            data: [
              {value: 335, name: '直达'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1048, name: '百度'},
              {value: 251, name: '谷歌'},
              {value: 147, name: '必应'},
              {value: 102, name: '其他'}
            ]
          }
        ]
      }
      pieChart.setOption(option)
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
  .invitem
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
