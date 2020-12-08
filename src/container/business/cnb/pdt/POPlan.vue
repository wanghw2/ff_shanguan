
<template>
  <div class="pdt-box">
    <div class="content">
      <div class="wood">
        <div class="wooditem">
          <ul>
            <li>
              <h4>NO MFG</h4>
              <i></i>
              <span>1201</span>
            </li>
            <li>
              <h4>No Contract</h4>
              <i></i>
              <span>1201</span>
            </li>
            <li>
              <h4>Cost issue</h4>
              <i>+20</i>
              <span>1201</span>
            </li>
            <li>
              <h4>销售状态</h4>
              <i>+20</i>
              <span>121</span>
            </li>
            <li>
              <h4>Info record</h4>
              <i>+20</i>
              <span>67</span>
            </li>
            <li>
              <h4>Sourcing list</h4>
              <i>+20</i>
              <span>67</span>
            </li>
          </ul>
        </div>
      </div>
      <h2>MTM Orderable Status
        <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
        <div class="form-box">
          <upload
            @on-success="updateStatus"
            @updateTimeChange="updateStatus1"
            :sheetsName="'MTM_Orderable_Status'"
            :logTableName="'ConNB_MTM_Orderable_Status'"
            :logObj="'Status'">
          </upload>
        </div>
      </h2>
      <div class="addgrid addgrid1">
        <v-table
          :sheetsName="'MTM_Orderable_Status'"
          :tableName="'ConNB_MTM_Orderable_Status'"
          :source="'FF_IDSS_Data_CON'"
          :fileName="'MTM_Orderable_Status'"
          ref="gridStatus">
        </v-table>
      </div>
      <h2>PO Error list
        <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
        <div class="form-box">
          <upload
            @on-success="updatePOErrorList"
            @updateTimeChange="updatePOErrorList1"
            :sheetsName="'PO_Error_list'"
            :logTableName="'ConNB_PO_Error_List'"
            :logObj="'list'">
          </upload>
        </div>
      </h2>
      <div class="addgrid addgrid2">
        <v-table
          :sheetsName="'PO_Error_list'"
          :tableName="'ConNB_PO_Error_List'"
          :source="'FF_IDSS_Data_CON'"
          :fileName="'PO_Error_list'"
          ref="gridPOErrorList">
        </v-table>
      </div>
      <h2>备货进度表
        <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
        <a class="small emailBtn" @click="sendemail" href="#">发送邮件</a>
        <a class="small downBtn" @click="download" href="#">下载</a>
        <div class="form-box">
          <updata
            @on-success="updateReport"
            :menuId="'363'"
            :menuName="'智能投产_备货进度表'"
            :logTableName="'ConNB_Replenishment_Overview'"
            :proIndex="'1'" >
          </updata>
        </div>
      </h2>
      <div class="addgrid addgrid3">
        <v-table
          :sheetsName="'ConNB_备货进度表'"
          :tableName="'ConNB_Replenishment_Overview'"
          :source="'FF_IDSS_Data_CON'"
          :fileName="'ConNB_备货进度表'"
          ref="gridReport">
        </v-table>
      </div>
      <h2>PO Plan上传
        <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
        <div class="form-box">
          <upload
            @on-success="updatePlan"
            @updateTimeChange="updatePlan1"
            :sheetsName="'ConNB_PO_Plan上传'"
            :logTableName="'ConNB_PO_Plan'"
            :logObj="'Plan'">
          </upload>
        </div>
      </h2>
      <div class="addgrid addgrid4">
        <v-table
          :sheetsName="'ConNB_PO_Plan上传'"
          :tableName="'ConNB_PO_Plan'"
          :source="'FF_IDSS_Data_CON'"
          :fileName="'ConNB_PO_Plan上传'"
          ref="gridPlan">
        </v-table>
      </div>
      <h2>PO Plan分析
        <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
        <div class="form-box">
          <upload
            @on-success="updateAnalysis"
            @updateTimeChange="updateAnalysis1"
            :sheetsName="'ConNB_PO_Plan分析'"
            :logTableName="'ConNB_PO_Plan_Analysis'"
            :logObj="'Plan'">
          </upload>
        </div>
      </h2>
      <div class="addgrid addgrid5">
        <v-table
          :sheetsName="'ConNB_PO_Plan分析'"
          :tableName="'ConNB_PO_Plan_Analysis'"
          :source="'FF_IDSS_Data_CON'"
          :fileName="'ConNB_PO_Plan分析'"
          ref="gridAnalysis">
        </v-table>
      </div>
      <el-form :inline="true" :model="form1" ref="form1" label-width="80px" class="demo-form-inline">
          <el-form-item label="时间维度" prop="time" >
            <el-select v-model="form1.time" size="mini" filterable collapse-tags placeholder="请选择">
              <el-option
                v-for="(item, index) in times"
                :key="index"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin-left:30px">
            <el-button type="primary" size="mini" @click="onSubmit(form1)">查询</el-button>
            <el-button @click="resetForm('form1')" size="mini" >重置</el-button>
          </el-form-item>
        </el-form>
      <div class="poPlanchart" ref="poPlanchart"></div>
    </div>
  </div>
</template>
<script>
import Updata from '@/components/public/updata'
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
import echarts from 'echarts'
const $ = window.$
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      form1: {
        time: []
      },
      times: []
    }
  },
  components: {
    Updata,
    VTable,
    Upload
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.poPlanchart()
    }, 3000)
  },
  methods: {
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('addgrid2')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
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
    },
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    updateStatus () {
      this.$refs.gridStatus.updateTabFun()
    },
    updateStatus1 () {
      this.$refs.gridStatus.updateTimeChange()
    },
    updatePOErrorList () {
      this.$refs.gridPOErrorList.updateTabFun()
    },
    updatePOErrorList1 () {
      this.$refs.gridPOErrorList.updateTimeChange()
    },
    updateReport () {
      this.$refs.gridReport.updateTabFun()
    },
    updatePlan () {
      this.$refs.gridPlan.updateTabFun()
    },
    updatePlan1 () {
      this.$refs.gridPlan.updateTimeChange()
    },
    updateAnalysis () {
      this.$refs.gridAnalysis.updateTabFun()
    },
    updateAnalysis1 () {
      this.$refs.gridAnalysis.updateTimeChange()
    },
    poPlanchart () {
      let poPlanchart = echarts.init(this.$refs.poPlanchart)
      var option = {
        title: {
          text: 'PO Plan VS PO Actua',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        legend: {
          data: ['Backlog', '新增']
        },
        color: ['#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#66bdaa', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
        xAxis: {
          type: 'category',
          data: ['family1', 'family2', 'family3', 'family4', 'family5', 'family6', 'family7'],
          axisLabel: {
            interval: 0,
            rotate: 15,
            margin: 2
          }
        },
        grid: {
          bottom: '15%'
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
        toolbox: {
          show: true,
          feature: {
            // dataZoom: {
            //   yAxisIndex: 'none'
            // },
            dataView: {readOnly: false},
            // magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: 'Backlog',
          data: [120, 200, 150, 80, 90, 66, 155],
          type: 'bar',
          barWidth: '35px'
        }, {
          name: '新增',
          data: [30, 210, 50, 90, 89, 123, 231],
          type: 'bar'
        }, {
          name: '趋势',
          data: [180, 440, 230, 200, 199, 219, 416],
          type: 'line'
        }]
      }
      poPlanchart.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdt-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .content
    width 100%
    height 100%
    .el-form-item
      margin-bottom 0 !important
    h2
      width 100%
      height 38px
      line-height 38px
      font-weight normal
      box-shadow: 0 2px 8px #ccc
      font-size 14px
      padding 0 20px
      margin 10px auto
      background #fafafa
      .form-box
        min-width 80px
        height auto
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
    .wood
      width 800px
      height auto
      margin 10px
      overflow hidden
      .wooditem
        width 100%
        margin-bottom 10px
        height auto
        overflow hidden
        text-align center
        ul
          width auto
          height 80px
          border-left 1px solid #71893F
          li
            width 100px
            height 80px
            float left
            text-align center
            border 1px solid #71893F
            border-left 0
            &:nth-child(1)
              background #DCE6F2
            &:nth-child(2)
              background #9CDCF0
            &:nth-child(3)
              background #9BBB59
            &:nth-child(4)
              background #F79646
            &:nth-child(5)
              background #00ffff
            h4
              width 100%
              height 30px
              line-height 30px
              font-size 12px
            i
              text-align right
              width 100%
              height 25px
              line-height 25px
              padding-right 5px
              display block
              font-style normal
              font-size 10px
            span
              width 100%
              height 25px
              line-height 25px
              color #fff
              display block
              font-weight bold
              font-size 12px
    .addgrid
      width 100%
      min-height 10px
      overflow hidden
      margin-bottom 10px
    .poPlanchart
      width 100%
      height 400px
</style>
