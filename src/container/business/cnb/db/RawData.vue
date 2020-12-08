<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>ConNB 未清PO</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_未清PO'"
                :tableName='"ConNB_Open_PO"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_未清PO'"
                ref="gridcnbOpenPO">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>ConNB 库存明细
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_库存明细'"
                :tableName='"ConNB_DF_Inventory"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_库存明细'"
                ref="gridcnbInventory">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>ConNB 欠单明细
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_欠单明细'"
                :tableName='"ConNB_Unconfirmed"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_欠单明细'"
                ref="gridcnbUnconfirmed">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="dbItem">
          <div class="block">
            <h2>ConNB DF Alloc
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updatecnbdfalloc"
                  text="Alloc读入"
                  :menuId="'427'"
                  :menuName="'看板管理_基础数据'"
                  :logTableName="'ConNB_DF_Alloc'"
                  :proIndex="'1'" >
                </updata>
              </div>         
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_DF_Alloc'"
                :tableName="'ConNB_DF_Alloc'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_DF_Alloc'"
                ref="gridcnbdfalloc">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="dbItem">
          <div class="block">
            <h2>ConNB DF PSD
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>            
              <div class="form-box">
                <updata
                  @on-success="updatecnbdfpsd"
                  text="PSD读入"
                  :menuId="'427'"
                  :menuName="'看板管理_基础数据'"
                  :logTableName="'ConNB_DF_PSD'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_DF_PSD'"
                :tableName="'ConNB_DF_PSD'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_DF_PSD'"
                ref="gridcnbdfpsd">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import Upload from '@/components/public/upload1'
import updata from '@/components/public/updata'
import VTable from '@/components/public/vtable1'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['未清PO', '库存明细', '欠单明细', 'DF Alloc', 'DF PSD']
    }
  },
  components: {
    Upload,
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConNB_DF_Alloc_Download'
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
          vm.disableddownload = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    download2 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'ConNB_DF_PSD_Download'
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
          vm.disableddownload = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    updatecnbdfalloc () {
      this.$refs.gridcnbdfalloc.updateTabFun()
    },
    updatecnbdfpsd () {
      this.$refs.gridcnbdfpsd.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .dbItem
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
        .disabled
          background #ccc
          cursor not-allowed
          &:hover
            background #ccc
            cursor not-allowed
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
