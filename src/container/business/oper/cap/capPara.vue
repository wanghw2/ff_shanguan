<template>
  <div class="pdtpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="pdtItem">
          <div class="block">
            <h2>YTDT 产能预测
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateytfacfcst"
                  @updateTimeChange="updateytfacfcst1"
                  :logTableName="'YTDT_Capcity_FCST'"
                  :sheetsName="'YTDT_产能预测'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid5">
              <v-table-251
                :sheetsName="'YTDT_产能预测'"
                :tableName="'YTDT_Capcity_FCST'"
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_产能预测'"
                ref="gridytfacfcst">
              </v-table-251>
            </div>
            <h2>ConDT 产能预测
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateconfacfcst"
                  @updateTimeChange="updateconfacfcst1"
                  :logTableName="'ConDT_Capcity_FCST'"
                  :sheetsName="'ConDT_产能预测'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'ConDT_产能预测'"
                :tableName="'ConDT_Capcity_FCST'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_产能预测'"
                ref="gridconfacfcst">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="pdtItem">
          <div class="block">
            <h2>惠阳Togo产能
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatepdtpara1"
                  @updateTimeChange="updatepdtpara1s"
                  :logTableName="'FF_Inhouse_Capacity_Togo_HY'"
                  :sheetsName="'惠阳Togo产能'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'惠阳Togo产能'"
                :tableName="'FF_Inhouse_Capacity_Togo_HY'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'惠阳Togo产能'"
                ref="gridpdtpara1">
              </v-table>
            </div>
            <h2>成都Togo产能
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatepdtpara2"
                  @updateTimeChange="updatepdtpara2s"
                  :logTableName="'FF_Inhouse_Capacity_Togo_CD'"
                  :sheetsName="'成都Togo产能'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'成都Togo产能'"
                :tableName="'FF_Inhouse_Capacity_Togo_CD'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'成都Togo产能'"
                ref="gridpdtpara2">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="pdtItem">
          <div class="block">
            <h2>惠阳产能Commit
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatepdtpara3"
                  @updateTimeChange="updatepdtpara3s"
                  :logTableName="'FF_Inhouse_Capacity_Commit_HY'"
                  :sheetsName="'惠阳产能Commit'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'惠阳产能Commit'"
                :tableName="'FF_Inhouse_Capacity_Commit_HY'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'惠阳产能Commit'"
                ref="gridpdtpara3">
              </v-table>
            </div>
            <h2>成都产能Commit
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatepdtpara4"
                  @updateTimeChange="updatepdtpara4s"
                  :logTableName="'FF_Inhouse_Capacity_Commit_CD'"
                  :sheetsName="'成都产能Commit'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'成都产能Commit'"
                :tableName="'FF_Inhouse_Capacity_Commit_CD'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'成都产能Commit'"
                ref="gridpdtpara4">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="pdtItem">
          <div class="block">
            <h2>产出需求
              <div class="form-box">
                <upload
                  @on-success="updatepdtpara5"
                  @updateTimeChange="updatepdtpara5s"
                  :logTableName="'FF_Inhouse_Capacity_FCST'"
                  :sheetsName="'产出需求'"
                  :logObj="'lis'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'产出需求'"
                :tableName="'FF_Inhouse_Capacity_FCST'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'产出需求'"
                ref="gridpdtpara5">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
import VTable251 from '@/components/public/vtablePage251'
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      tabPosition: 'left',
      menuArr: ['产能预测', 'Togo产能', '产能Commit', '产出需求']
    }
  },
  components: {
    Upload,
    VTable,
    VTable251
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
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
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle6 = !this.toggle6
    },
    updatepdtpara1 () {
      this.$refs.gridpdtpara1.updateTabFun()
    },
    updatepdtpara1s () {
      this.$refs.gridpdtpara1.updateTimeChange()
    },
    updatepdtpara2 () {
      this.$refs.gridpdtpara2.updateTabFun()
    },
    updatepdtpara2s () {
      this.$refs.gridpdtpara2.updateTimeChange()
    },
    updatepdtpara3 () {
      this.$refs.gridpdtpara3.updateTabFun()
    },
    updatepdtpara3s () {
      this.$refs.gridpdtpara3.updateTimeChange()
    },
    updatepdtpara4 () {
      this.$refs.gridpdtpara4.updateTabFun()
    },
    updatepdtpara4s () {
      this.$refs.gridpdtpara4.updateTimeChange()
    },
    updatepdtpara5 () {
      this.$refs.gridpdtpara5.updateTabFun()
    },
    updatepdtpara5s () {
      this.$refs.gridpdtpara5.updateTimeChange()
    },
    updateytfacfcst () {
      this.$refs.gridytfacfcst.updateTabFun()
    },
    updateytfacfcst1 () {
      this.$refs.gridytfacfcst.updateTimeChange()
    },
    updateconfacfcst () {
      this.$refs.gridconfacfcst.updateTabFun()
    },
    updateconfacfcst1 () {
      this.$refs.gridconfacfcst.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pdtpara
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .pdtItem
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
        margin-bottom 5px
        padding 0 20px
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>




