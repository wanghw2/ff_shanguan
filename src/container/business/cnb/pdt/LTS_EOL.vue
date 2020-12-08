<template>
  <div class="eollts-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="eol">
          <div class="block">
            <h2>ConNB LTS
              <div class="form-box">
                <upload
                  @on-success="updataLTS"
                  @updateTimeChange="updataLTS1"
                  :sheetsName="'ConNB_LTS'"
                  :logTableName="'ConNB_LTS_List'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_LTS'"
                :tableName="'ConNB_LTS_List'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_LTS'"
                ref="cnblis">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="eol">
          <div class="block">
            <h2>ConNB LTS查询</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_LTS查询'"
                :tableName="'ConNB_LTS_List_TTL'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_LTS查询'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="eol">
          <div class="block">
            <h2>ConNB LTS分析
              <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConNB_LTS分析'"
                :tableName="'ConNB_LTS_Analysis'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_LTS分析'">
              </v-table>
            </div>
            <div class="addgrid3">
              <div class="drawBar1" ref="drawBar1"></div>
              <div class="drawBar1" ref="drawBar2"></div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
import echarts from 'echarts'
export default {
  data () {
    return {
      quarter: 1,
      toggle: true,
      tabPosition: 'left',
      menuArr: ['LTS上传', 'LTS查询', 'LTS分析']
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.drawBar1()
      this.drawBar2()
    }, 3000)
  },
  methods: {
    drawBar1 () {
      let vm = this
      this.$ajax({
        url: '/getLTSAnalysis',
        data: {'style': 1},
        done (data) {
          let option1 = {
            title: {
              text: '下单预警',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
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
            grid: {
              left: '2%',
              right: '10%',
              bottom: '8%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                axisLabel: {
                  interval: 0,
                  rotate: 40,
                  show: true
                },
                data: data.yAxis
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                type: 'bar',
                barWidth: 30,
                data: data.series,
                itemStyle: {
                  normal: {
                    color: function (params) {
                      let colorList = data.legend
                      return colorList[params.dataIndex]
                    },
                    label: {
                      show: true,
                      position: 'top',
                      formatter: '{c}'
                    }
                  }
                }
              }
            ]
          }
          let drawBar1 = echarts.init(vm.$refs.drawBar1)
          drawBar1.setOption(option1)
        },
        fail (data) {
          alert(data)
        }
      })
    },
    drawBar2 () {
      let vm = this
      this.$ajax({
        url: '/getLTSAnalysis',
        data: {'style': 2},
        done (data) {
          let option1 = {
            title: {
              text: '供应预警',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: 'red',
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
            grid: {
              left: '2%',
              right: '10%',
              bottom: '8%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                axisLabel: {
                  interval: 0,
                  rotate: 40,
                  show: true
                },
                data: data.yAxis
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                type: 'bar',
                barWidth: 30,
                data: data.series,
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      position: 'top',
                      formatter: '{c}'
                    }
                  }
                }
              }
            ]
          }
          let drawBar2 = echarts.init(vm.$refs.drawBar2)
          drawBar2.setOption(option1)
        },
        fail (data) {
          alert(data)
        }
      })
    },
    updataLTS () {
      this.$refs.cnblis.updateTabFun()
    },
    updataLTS1 () {
      this.$refs.cnblis.updateTimeChange()
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.eollts-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .eol
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
        margin-bottom 10px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 0px
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
      .addgrid, .addgrid3
        min-height 10px
        width 100%
        overflow hidden
        margin-top 10px
        margin-bottom 10px
      .drawBar1
        float left
        width 500px
        height 400px
        margin-bottom 20px
</style>
