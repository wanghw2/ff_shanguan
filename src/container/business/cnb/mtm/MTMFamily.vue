<template>
  <div class="mtm-family">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="family">
          <div class="block">
            <h2>ConNB Family</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Family'"
                :tableName='"ConNB_MTM_Family"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Family'"
                ref="gridmtmfamily">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="family">
          <div class="block">
            <h2>ConNB Family对应关系
              <div class="form-box">
                <upload
                  @on-success="cnbFamilyFun"
                  @updateTimeChange="cnbFamilyFun1"
                  :sheetsName="'ConNB_Family对应关系'"
                  :logTableName="'ConNB_Family'"
                  :logObj="'cnbfamily'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Family对应关系'"
                :tableName="'ConNB_Family'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Family对应关系'"
                ref="cnbfamily">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="family">
          <div class="block">
            <h2>ConNB Family更新
              <div class="form-box">
                <upload
                  @on-success="cnbMtmFun"
                  @updateTimeChange="cnbMtmFun1"
                  :sheetsName="'ConNB_Family更新'"
                  :logTableName="'ConNB_Family_Update'"
                  :logObj="'cnbmtm'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_Family更新'"
                :tableName="'ConNB_Family_Update'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_Family更新'"
                ref="cnbmtm">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="family">
          <div class="block">
            <h2>ConNB Family Tree
            </h2>
            <div class="familyGraph">
              <ve-tree :data="chartData" :settings="chartSettings" :loading="loading"></ve-tree>
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
import 'v-charts/lib/style.css'
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
export default {
  data () {
    return {
      chartData: {},
      chartSettings: {},
      loading: true,
      tabPosition: 'left',
      menuArr: ['Family', 'Family对应关系', 'Family更新', 'Family Tree']
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
    getFamilyChart () {
      let vm = this
      vm.$ajax({
        url: '/nbMtmFamilyChart',
        method: 'get',
        done (data) {
          echarts.util.each(data.data.children, function (datum, index) {
            index > 2 && (datum.collapsed = true)
          })
          vm.loading = false
          vm.chartData = {
            columns: ['name', 'value'],
            rows: [
              {
                name: 'ConNB',
                value: [data.data]
              }
            ]
          }
          vm.chartSettings = {
            seriesMap: {
              ConNB: {
                top: '3%',
                left: '6%',
                bottom: '3%',
                symbolSize: 6,
                nodePadding: 10,
                initialTreeDepth: 3, // 默认打开的层次
                tooltip: {
                  trigger: 'item',
                  triggerOn: 'mousemove'
                },
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
    },
    cnbFamilyFun () {
      this.$refs.cnbfamily.updateTabFun()
      this.$refs.gridmtmfamily.updateTabFun()
    },
    cnbFamilyFun1 () {
      this.$refs.cnbfamily.updateTimeChange()
    },
    cnbMtmFun () {
      this.$refs.cnbmtm.updateTabFun()
      this.$refs.gridmtmfamily.updateTabFun()
    },
    cnbMtmFun1 () {
      this.$refs.cnbmtm.updateTimeChange()
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
        box-shadow 0 2px 8px #ccc
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
        // height 400px
        height auto
        overflow hidden
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
