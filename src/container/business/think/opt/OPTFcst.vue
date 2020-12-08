<template>
  <div class="optFcst">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="mtmItem">
          <div class="block">
            <h2>Think 硬捆绑选件预测FA
              <div class="form-box">
                <a href="javascript:" class="fold" @click="toggleList" v-text="toggle ? '预警折叠' : '预警展开'"></a>
              </div>
              <div class="form-box">
                <updata
                  @on-success="updataOptFcst1"
                  :menuId="'74'"
                  :logTableName="'Think_OPT_Bundle_Fcst_FA'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <div class="sn">
                <message-box></message-box>
              </div>
              <el-form :inline="true" :model="form" ref="form" label-width="70px" class="demo-form-inline">
                <el-form-item label="FCST" prop="cussegment">
                  <el-select v-model="form.cussegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in cussegments"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                </el-form-item>
              </el-form>
              <div class="stack" ref="stack"></div>
              <v-table2
                :sheetsName="'Think硬捆绑选件预测FA'"
                :tableName='"Think_OPT_Bundle_Fcst_FA"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think硬捆绑选件预测FA'"
                ref="gridOptFcst1">
              </v-table2>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="mtmItem">
          <div class="block">
            <h2>Think 硬捆绑选件预测
              <div class="form-box">
                <upload
                  @on-success="thinkthinkMktTarget"
                  :sheetsName="'Think硬捆绑选件预测'"
                  :tableName='"Think_OPT_Bundle_Fcst"'
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'uploadExceOPTFCST'"
                  @updateTimeChange="thinkthinkMktTarget1"
                  :logTableName="'Think_OPT_Bundle_Fcst'"
                  :logObj="'thinkOPTINV'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think硬捆绑选件预测'"
                :tableName="'Think_OPT_Bundle_Fcst'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think硬捆绑选件预测'"
                ref="thinkOPTINV">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="mtmItem">
          <div class="block">
            <h2>Think 零售选件预测FA
              <div class="form-box">
                <a href="javascript:" class="fold" @click="toggleList1" v-text="toggle1 ? '预警折叠' : '预警展开'"></a>
              </div>
              <div class="form-box">
                <updata
                  @on-success="updataOptFcst2"
                  :menuId="'74'"
                  :logTableName="'Think_OPT_Standalone_Fcst_FA'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <div class="sn1">
                <message-box></message-box>
              </div>
              <el-form :inline="true" :model="form" ref="form" label-width="70px" class="demo-form-inline">
                <el-form-item label="FCST" prop="cussegment">
                  <el-select v-model="form.cussegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in cussegments"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                </el-form-item>
              </el-form>
              <div class="stack" ref="stack1"></div>
              <v-table2
                :sheetsName="'Think零售选件预测FA'"
                :tableName='"Think_OPT_Standalone_Fcst_FA"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think零售选件预测FA'"
                ref="gridOptFcst2">
              </v-table2>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="mtmItem">
          <div class="block">
            <h2>Think 零售选件预测
              <div class="form-box">
                <upload
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'uploadExceOPTFCST'"
                  :tableName='"Think_OPT_Standalone_Fcst"'
                  @on-success="updataCAOutlook"
                  :sheetsName="'Think零售选件预测'"
                  @updateTimeChange="updataCAOutlook1"
                  :logTableName="'Think_OPT_Standalone_Fcst'"
                  :logObj="'thinkOutlook'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think零售选件预测'"
                :tableName="'Think_OPT_Standalone_Fcst'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think零售选件预测'"
                ref="thinkOutlook">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="mtmItem">
          <div class="block">
            <h2>Think 显示器预测FA
              <div class="form-box">
                <a href="javascript:" class="fold" @click="toggleList2" v-text="toggle2 ? '预警折叠' : '预警展开'"></a>
              </div>
              <div class="form-box">
                <updata
                  @on-success="updataOptFcst3"
                  :menuId="'74'"
                  :logTableName="'Think_Visual_Fcst_FA'"
                  :proIndex="'3'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <div class="sn2">
                <message-box></message-box>
              </div>
              <el-form :inline="true" :model="form" ref="form" label-width="70px" class="demo-form-inline">
                <el-form-item label="FCST" prop="cussegment">
                  <el-select v-model="form.cussegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in cussegments"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                </el-form-item>
              </el-form>
              <div class="stack" ref="stack2"></div>
              <v-table2
                :sheetsName="'Think显示器预测FA'"
                :tableName='"Think_Visual_Fcst_FA"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think显示器预测FA'"
                ref="gridOptFcst3" >
              </v-table2>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="mtmItem">
          <div class="block">
            <h2>Think 显示器预测
              <div class="form-box">
                <upload
                  ref="thinkDTBPMktTarget"
                  :sheetsName="'Think显示器预测'"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'uploadExceOPTFCST'"
                  :tableName='"Think_Visual_Fcst"'
                  @on-success="updateDTBPMktTarget"
                  @updateTimeChange="updateDTBPMktTarget1"
                  :logTableName='"Think_Visual_Fcst"'
                  :logObj="'thinkDTBPMktTarget'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think显示器预测'"
                :tableName='"Think_Visual_Fcst"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think显示器预测'"
                ref="gridthinkDTBPMktTarget">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable2 from '@/components/public/vtable2'
import VTable from '@/components/public/vtable1'
import updata from '@/components/public/updata'
import Upload from '@/components/public/upload5'
import echarts from 'echarts'
import messageBox from '@/components/public/messageBox'
// const $ = window.$
export default {
  data () {
    return {
      toggle: false,
      toggle1: false,
      toggle2: false,
      form: {
        cussegment: '',
        materialcode: ''
      },
      cussegments: [{value: '第三方', label: '第三方'}],
      disabled: false,
      tabPosition: 'left',
      menuArr: ['硬捆绑选件预测FA', '硬捆绑选件预测', '零售选件预测FA', '零售选件预测', '显示器预测FA', '显示器预测']
    }
  },
  components: {
    VTable,
    messageBox,
    Upload,
    VTable2,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.drawStack()
      this.drawStack1()
      this.drawStack2()
    }, 3000)
  },
  methods: {
    toggleList () {
      let sn = document.getElementsByClassName('sn')[0]
      if (this.toggle) {
        sn.style.display = 'none'
      } else {
        sn.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let sn1 = document.getElementsByClassName('sn1')[0]
      if (this.toggle1) {
        sn1.style.display = 'none'
      } else {
        sn1.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let sn2 = document.getElementsByClassName('sn2')[0]
      if (this.toggle2) {
        sn2.style.display = 'none'
      } else {
        sn2.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    drawStack () {
      var option = {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['全月可分', '累计来单', '有效订单', '日供应', '累计确认'],
          right: 0,
          orient: 'vertical',
          top: '40%'
        },
        grid: {
          left: '5%',
          right: '18%',
          top: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false,
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: {type: 'value'},
        series: [
          {
            name: '全月可分',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '累计来单',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '日供应',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '累计确认',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '有效订单',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.stack)
      stackChart.setOption(option)
    },
    drawStack1 () {
      var option = {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['全月可分', '累计来单', '有效订单', '日供应', '累计确认'],
          right: 0,
          orient: 'vertical',
          top: '40%'
        },
        grid: {
          left: '5%',
          right: '18%',
          top: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false,
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: {type: 'value'},
        series: [
          {
            name: '全月可分',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '累计来单',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '日供应',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '累计确认',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '有效订单',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.stack1)
      stackChart.setOption(option)
    },
    drawStack2 () {
      var option = {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['全月可分', '累计来单', '有效订单', '日供应', '累计确认'],
          right: 0,
          orient: 'vertical',
          top: '40%'
        },
        grid: {
          left: '5%',
          right: '18%',
          top: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false,
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: {type: 'value'},
        series: [
          {
            name: '全月可分',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '累计来单',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '日供应',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '累计确认',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '有效订单',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.stack2)
      stackChart.setOption(option)
    },
    updataOptFcst1 () {
      this.$refs.gridOptFcst1.updateTabFun()
    },
    updataOptFcst2 () {
      this.$refs.gridOptFcst2.updateTabFun()
    },
    updataOptFcst3 () {
      this.$refs.gridOptFcst3.updateTabFun()
    },
    thinkthinkMktTarget () { // 上传后自动刷新表格数据
      this.$refs.thinkOPTINV.updateTabFun()
    },
    updataCAOutlook () { // 上传后自动刷新表格数据
      this.$refs.thinkOutlook.updateTabFun()
    },
    updateDTBPMktTarget () {
      this.$refs.gridthinkDTBPMktTarget.updateTabFun()
    },
    thinkthinkMktTarget1 () { // 上传后自动刷新表格数据
      this.$refs.thinkOPTINV.updateTimeChange()
    },
    updataCAOutlook1 () { // 上传后自动刷新表格数据
      this.$refs.thinkOutlook.updateTimeChange()
    },
    updateDTBPMktTarget1 () {
      this.$refs.gridthinkDTBPMktTarget.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.optFcst
  width 100%
  height 100%
  padding 10px
  .mtmItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
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
          background #fdbc40
          font-size 12px
          box-sizing border-box
          &:hover
            background #ff9933
      .addgrid
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
        .stack
          width 1100px
          height 350px
      .sn, .sn1, .sn2
        width 100%
        padding 5px
        min-height 40px
        height auto
        display none
        overflow hidden
        background #fff
</style>
