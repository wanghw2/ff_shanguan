<template>
  <div class="mtm-family">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="mtmItem">
          <div class="block">
            <h2>ConDT Family</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_Family'"
                :tableName='"ConDT_MTM_Family"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_Family'"
                ref="gridmtmfamily" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="mtmItem">
          <div class="block">
            <h2>ConDT Family对应关系
              <div class="form-box">
                <upload
                  ref="corres"
                  @on-success="updateLabelMem"
                  @updateTimeChange="updateLabelMem1"
                  :sheetsName="'ConDT_Family对应关系'"
                  :logTableName='"ConDT_Family"'
                  :logObj="'corres'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_Family对应关系'"
                :tableName='"ConDT_Family"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_Family对应关系'"
                ref="gridcorres" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="mtmItem">
          <div class="block">
            <h2>ConDT Family更新
              <div class="form-box">
                <upload
                  @on-success="cdtFamilyupd"
                  @updateTimeChange="cdtFamilyupd1"
                  :sheetsName="'ConDT_Family更新'"
                  :logTableName="'ConDT_Family_Update'"
                  :logObj="'Familyupd'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_Family更新'"
                :tableName="'ConDT_Family_Update'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_Family更新'"
                ref="Familyupd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="mtmItem">
          <div class="block">
            <h2>ConDT Family Tree
            </h2>
            <div class="familyGraph">
              <ve-tree :data="chartData" :settings="chartSettings"></ve-tree>
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
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
// const $ = window.$
export default {
  data () {
    return {
      chartData: {},
      chartSettings: {},
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
    cdtFamilyupd () { // 上传后自动刷新表格数据
      this.$refs.Familyupd.updateTabFun()
      this.$refs.gridmtmfamily.updateTabFun()
    },
    updateLabelMem () {
      this.$refs.gridcorres.updateTabFun()
      this.$refs.gridmtmfamily.updateTabFun()
    },
    cdtFamilyupd1 () { // 上传后自动刷新表格数据
      this.$refs.Familyupd.updateTimeChange()
    },
    updateLabelMem1 () {
      this.$refs.gridcorres.updateTimeChange()
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
                name: 'ConDT',
                value: [data.data]
              }
            ]
          }
          vm.chartSettings = {
            seriesMap: {
              ConDT: {
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
  .mtmItem
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
