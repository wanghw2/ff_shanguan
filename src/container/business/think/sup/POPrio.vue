
<template>
  <div class="sup-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <h2>选件总览预警
              <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
            </h2>
            <div class="sn">
              <message-box :alertData="messageArr"></message-box>
            </div>
            <div class="graphwrap">
              <div class="pieGraph" ref="pieGraph1"></div>
              <div class="search-box">
                <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
                  <el-form-item label="Version" prop="version" >
                    <el-select v-model="form.version" size="mini"  filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="(item, index) in versions"
                        :key="index"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="查询工厂" prop="searchFact" >
                    <el-select v-model="form.searchFact" size="mini"  filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="(item, index) in searchFacts"
                        :key="index"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item style="margin-left: 20px">
                    <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                    <el-button @click="resetForm('form')" size="mini" >重置</el-button>
                  </el-form-item>
                  <el-form-item style="margin-left: 20px">
                    <el-button type="primary" size="mini">下载查询工厂</el-button>
                    <el-button type="primary" size="mini" >下载汇总工厂</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <h2>工厂分布
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'think_工厂分布'"
                :tableName='"Think_MFG_POPrio_Summary"'
                :source="'FF_IDSS_Data_think'"
                :fileName="'think_工厂分布'"
                ref="gridfactory">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block">
            <h2>优先级备注
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'think_优先级备注'"
                :tableName='"Think_Proremark _Summary"'
                :source="'FF_IDSS_Data_think'"
                :fileName="'think_优先级备注'"
                ref="gridgab" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="fcstItem">
          <div class="block">
            <div class="graphBox">
              <div class='historytrend' ref='historytrend'></div>
              <div class="search-box">
                <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
                  <el-form-item label="Version" prop="version" >
                    <el-select v-model="form.version" size="mini"  filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="(item, index) in versions"
                        :key="index"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="查询工厂" prop="searchFact" >
                    <el-select v-model="form.searchFact" size="mini"  filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="(item, index) in searchFacts"
                        :key="index"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item style="margin-left: 20px">
                    <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                    <el-button @click="resetForm('form')" size="mini" >重置</el-button>
                  </el-form-item>
                  <el-form-item style="margin-left: 20px">
                    <el-button type="primary" size="mini">下载查询工厂</el-button>
                    <el-button type="primary" size="mini" >下载汇总工厂</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <h2>历史趋势总览
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'think_历史趋势总览'"
                :tableName="'Think_POPrio_history_Summary'"
                :source="'FF_IDSS_Data_think'"
                :fileName="'think_历史趋势总览'"
                ref="gridhistory">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Updata from '@/components/public/updata'
import VTable from '@/components/public/vtable1'
import messageBox from '@/components/public/messageBox'
import echarts from 'echarts'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['工厂分布', '优先级备注', '历史趋势总览'],
      toggle: true,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      form: {
        searchFact: [],
        version: ''
      },
      form1: {
        searchFact: [],
        version: ''
      },
      searchFacts: ['Quanta', 'LCFC', 'LIPC DT', 'LIPC NB', 'WISTRON', 'ALL'],
      versions: ['20180502'],
      messageArr: [
        {type: 'error', message: '请关注：累积-5SLA% ， 40以上优先级将达到 %。'},
        {type: 'info', message: '请关注：累积-5SLA% &Critical， 40以上优先级将达到 %。'},
        {type: 'error', message: '请关注：累积-5SLA% ， 40以上优先级将达到 %。'},
        {type: 'info', message: '请关注：累积-5SLA% &Critical， 40以上优先级将达到 %。'}
      ]
    }
  },
  components: {
    Updata,
    VTable,
    messageBox
  },
  mounted () {
    this.$nextTick(() => {
      this.drawpieChart()
      this.drawHistorytrendChart()
      this.toggleList()
      this.toggleList1()
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
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    updatafactory () {
      this.$refs.gridfactory.updateTabFun()
    },
    updatagab () {
      this.$refs.gridgab.updateTabFun()
    },
    updataCritial () {
      this.$refs.gridCritial.updateTabFun()
    },
    updatahistory () {
      this.$refs.gridhistory.updateTabFun()
    },
    drawpieChart () {
      var option = {
        title: {
          text: '标题1',
          x: '20%',
          textStyle: {
            fontSize: 14
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            },
            restore: {},
            dataView: {
              show: true
            }
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          // orient: 'vertical',
          left: 'center',
          bottom: '3%',
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
      let pieGraph = echarts.init(this.$refs.pieGraph1)
      pieGraph.setOption(option)
    },
    drawHistorytrendChart () {
      let historytrend = echarts.init(this.$refs.historytrend)
      setTimeout(function () {
        var option = {
          legend: {right: '15%', orient: 'vertical'},
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {
                show: true
              },
              restore: {},
              dataView: {
                show: true
              }
            }
          },
          dataset: {
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              [],
              ['坏品', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['BTC', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['A', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['DOA库存', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['显示器', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              name: '120D Reserve',
              data: [41.1, 30.4, 65.1, 53.3, 83.8, 98.7]
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              name: '160D Reserve',
              data: [86.5, 92.1, 85.7, 83.1, 73.4, 55.1]
            },
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['35%', '25%'],
              label: {
                formatter: '{b}: {@2012} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
              }
            }
          ]
        }
        historytrend.on('updateAxisPointer', function (event) {
          var xAxisInfo = event.axesInfo[0]
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1
            historytrend.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            })
          }
        })
        historytrend.setOption(option)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.sup-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .fcstItem
    width 100%
    height 100%
    .el-form-item
      margin-bottom 0 !important
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
      .graphBox
        width 100%
        height auto
        overflow hidden
        margin 10px 0
        .historytrend
          width 800px
          height 400px
          float left
        .search-box
          width 400px
          height auto
          float right
      .graphwrap
        width 100%
        height auto
        overflow hidden
        margin 10px 0
        .pieGraph
          width 55%
          height 300px
          float left
        .search-box
          width 42%
          height auto
          float right
</style>
