<template>
  <div class="po-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="poItem">
          <div class="block">
            <h2>RSD 上限
              <div class="form-box">
                <upload
                  @on-success="updateRsd"
                  @updateTimeChange="updateRsd1"
                  :sheetsName="'Think_RSD上限'"
                  :logTableName="'Think_RSD_Maximum'"
                  :logObj="'rsd'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_RSD上限'"
                :tableName="'Think_RSD_Maximum'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_RSD上限_'"
                ref="thinkRsd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="poItem">
          <div class="block">
            <h2>PO 上限
              <div class="form-box">
                <upload
                  @on-success="updatePo"
                  @updateTimeChange="updatePo1"
                  :sheetsName="'Think_PO上限 '"
                  :logTableName="'Think_PO_Maximum'"
                  :logObj="'thinkPo'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_PO上限 '"
                :tableName="'Think_PO_Maximum'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_PO上限'"
                ref="thinkPo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="poItem">
          <div class="block">
            <h2>优先级规则
              <div class="form-box">
                <upload
                  @on-success="updatePriority"
                  @updateTimeChange="updatePriority1"
                  :sheetsName="'Think_优先级规则'"
                  :logTableName="'Think_PO_Priority'"
                  :logObj="'priority'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_优先级规则'"
                :tableName="'Think_PO_Priority'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_优先级规则'"
                ref="thinkPriority">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="poItem">
          <div class="block">
            <h2>Think PendingPO Owner信息
              <div class="form-box">
                <upload
                  ref="pom"
                  @on-success="updateTpgPendingPOMail"
                  @updateTimeChange="updateTpgPendingPOMail1"
                  :sheetsName="'Think_PendingPO_Owner信息'"
                  :logTableName='"Think_PendingPO_Mail"'
                  :logObj="'pom'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_PendingPO_Owner信息'"
                :tableName='"Think_PendingPO_Mail"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_PendingPO_Owner信息'"
                ref="gridpom" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="poItem">
          <div class="block">
            <h2>Think LTS 上限
              <div class="form-box">
                <upload
                  ref="pom"
                  @on-success="updateTpgPendingPOMail"
                  @updateTimeChange="updateTpgPendingPOMail1"
                  :sheetsName="'Think_PendingPO_Owner信息'"
                  :logTableName='"Think_PendingPO_Mail"'
                  :logObj="'pom'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_PendingPO_Owner信息'"
                :tableName='"Think_PendingPO_Mail"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_PendingPO_Owner信息'"
                ref="gridpom" >
              </v-table>
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
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['RSD 上限', 'PO 上限', '优先级规则', 'PendingPO Owner信息', 'LTS 上限']
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    updateRsd () { // 上传后自动刷新表格数据
      this.$refs.thinkRsd.updateTabFun()
    },
    updateRsd1 () { // 上传后自动刷新表格数据
      this.$refs.thinkRsd.updateTimeChange()
    },
    updatePo () { // 上传后自动刷新表格数据
      this.$refs.thinkPo.updateTabFun()
    },
    updatePo1 () { // 上传后自动刷新表格数据
      this.$refs.thinkPo.updateTimeChange()
    },
    updatePriority () { // 上传后自动刷新表格数据
      this.$refs.thinkPriority.updateTabFun()
    },
    updatePriority1 () { // 上传后自动刷新表格数据
      this.$refs.thinkPriority.updateTimeChange()
    },
    updateTpgPendingPOMail () {
      this.$refs.gridpom.updateTabFun()
    },
    updateTpgPendingPOMail1 () {
      this.$refs.gridpom.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.po-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .poItem
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
