<template>
  <div class="mtm-family">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="family">
          <div class="block">
            <h2>YTNB Family</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_Family'"
                :tableName="'YTNB_MTM_Family'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_Family'">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="family">
          <div class="block">
            <h2>YTNB Family对应关系
              <div class="form-box">
                <upload
                  @on-success="updateFamilymap"
                  @updateTimeChange="updateFamilymap1"
                  :sheetsName="'YTNB_Family对应关系'"
                  :logTableName="'YTNB_Family'"
                  :logObj="'gridFamilymap'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_Family对应关系'"
                :tableName="'YTNB_Family'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_Family对应关系'"
                ref="gridFamilymap">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="family">
          <div class="block">
            <h2>YTNB Family更新
              <div class="form-box">
                <upload
                  @on-success="updatefamilyup"
                  @updateTimeChange="updatefamilyup1"
                  :sheetsName="'YTNB_Family更新'"
                  :logTableName="'YTNB_Family_Update'"
                  :logObj="'gridfamilyup'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'YTNB_Family更新'"
                :tableName="'YTNB_Family_Update'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTNB_Family更新'"
                ref="gridfamilyup">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import VeTree from 'v-charts/lib/tree'
import VTable from '@/components/public/vtablePage251'
import Upload from '@/components/public/upload1'
// const $ = window.$
export default {
  data () {
    return {
      chartData: {},
      chartSettings: {},
      tabPosition: 'left',
      menuArr: ['Family', 'Family对应关系', 'Family更新']
    }
  },
  components: {
    Upload,
    VTable,
    VeTree
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  created () {
    this.getFamilyChart()
  },
  methods: {
    updateFamilymap () { // 上传后自动刷新表格数据
      this.$refs.gridFamilymap.updateTabFun()
    },
    updatefamilyup () {
      this.$refs.gridfamilyup.updateTabFun()
    },
    updateFamilymap1 () { // 上传后自动刷新表格数据
      this.$refs.gridFamilymap.updateTimeChange()
    },
    updatefamilyup1 () {
      this.$refs.gridfamilyup.updateTimeChange()
    },
    getFamilyChart () {
      let vm = this
      vm.$ajax({
        url: '/nbMtmFamilyChart',
        method: 'get',
        done (data) {
          echarts.util.each(data.data.children, function (datum, index) {
            index % 2 === 0 && (datum.collapsed = true)
          })
          vm.chartData = {
            columns: ['name', 'value'],
            rows: [
              {
                name: 'YTNB',
                value: [data.data]
              }
            ]
          }
          vm.chartSettings = {
            seriesMap: {
              YTNB: {
                top: '3%',
                left: '6%',
                bottom: '3%',
                symbolSize: 4,
                nodePadding: 10,
                initialTreeDepth: 3, // 默认打开的层次
                tooltip: {
                  trigger: 'item',
                  triggerOn: 'mousemove'
                },
                // dataView : {show: true},
                label: {
                  normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12
                  }
                },
                leaves: {
                  label: {
                    normal: {
                      position: 'right',
                      verticalAlign: 'middle',
                      align: 'left'
                    }
                  }
                },
                expandAndCollapse: true,
                animationDuration: 550
              }
            }
          }
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-family
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .family
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
      .familyGraph
        width 100%
        height 400px
        overflow hidden
</style>
