<template>
  <div class="allo-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="alloItem">
          <div class="block">
            <h2>ConDT 分货结果
              <a class="small emailBtn" @click="sendemail" href="#">发送邮件</a>
              <a class="small downBtn" @click="download" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateAllo1"
                  :menuId="'227'"
                  :menuName="''"
                  :logTableName="'ConDT_Alloc_Analysis'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_分货结果'"
                :tableName="'ConDT_Alloc_Analysis'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_分货结果'"
                ref="gridAllo1" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="alloItem">
          <div class="block">
            <h2>ConDT 分货欠单明细
              <a class="small emailBtn" @click="sendemail" href="#">发送邮件</a>
              <a class="small downBtn" @click="download" href="#">下载</a>
              <div class="form-box">
                <updata
                  @on-success="updateAllo2"
                  :menuId="'227'"
                  :menuName="''"
                  :logTableName="'ConDT_Alloc_Openbacklog'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConDT_分货欠单明细'"
                :tableName="'ConDT_Alloc_Openbacklog'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_分货欠单明细'"
                ref="gridAllo2">
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
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
import updata from '@/components/public/updata'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['分货结果', '分货欠单明细']
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
    updateAllo1 () {
      this.$refs.gridAllo1.updateTabFun()
    },
    updateAllo2 () {
      this.$refs.gridAllo2.updateTabFun()
    },
    download () {
      let vm = this
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    sendemail () {
      let vm = this
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1
        },
        done (data) {
          alert(data)
        },
        fail (msg) {
          alert(msg)
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allo-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .alloItem
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
