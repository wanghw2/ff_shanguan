<template>
  <div class="allodatachannel">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="family">
          <div class="block">
            <h2>KQ 四六级备货物料
              <div class="form-box">
                <Upload
                  @on-success="updatebtsmtm"
                  @updateTimeChange="updatebtsmtm1"
                  :sheetsName="'KQ_四六级备货物料'"
                  :logTableName="'KQ_BTS_MTM'"
                  :logObj="'kqbtsmtm'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_四六级备货物料'"
                :tableName="'KQ_BTS_MTM'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_四六级备货物料'"
                ref="kqbtsmtm">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="family">
          <div class="block">
            <h2>KQ 四六级勾单目标
              <div class="form-box">
                <Upload
                  @on-success="updatebptarget"
                  @updateTimeChange="updatebptarget1"
                  :sheetsName="'KQ_四六级勾单目标'"
                  :logTableName="'KQ_PN_Para'"
                  :logObj="'kqbptarget'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_四六级勾单目标'"
                :tableName="'KQ_BTS_BP_Target'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_四六级勾单目标'"
                ref="kqbptarget">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="family">
          <div class="block">
            <h2>KQ 快速交付物料
              <div class="form-box">
                <Upload
                  @on-success="updatepnpara"
                  @updateTimeChange="updatepnpara1"
                  :sheetsName="'KQ_快速交付物料'"
                  :logTableName="'KQ_PN_Para'"
                  :logObj="'kqpnpara'">
                </Upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_快速交付物料'"
                :tableName="'KQ_PN_Para'"
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_快速交付物料'"
                ref="kqpnpara">
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
import VTable from '@/components/public/vtablePage251'
export default {
  components: {
    Upload,
    VTable
  },
  data () {
    return {
      menuArr: ['四六级备货物料', '四六级勾单目标', '快速交付物料'],
      tabPosition: 'left'
    }
  },
  methods: {
    updatebptarget () {
      this.$refs.kqbptarget.updateTabFun()
    },
    updatebptarget1 () {
      this.$refs.kqbptarget.updateTimeChange()
    },
    updatebtsmtm () {
      this.$refs.kqbtsmtm.updateTabFun()
    },
    updatebtsmtm1 () {
      this.$refs.kqbtsmtm.updateTimeChange()
    },
    updatepnpara () {
      this.$refs.kqpnpara.updateTabFun()
    },
    updatepnpara1 () {
      this.$refs.kqpnpara.updateTimeChange()
    }
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allodatachannel
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .family
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
