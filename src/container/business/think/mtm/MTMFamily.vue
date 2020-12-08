<template>
  <div class="mtm-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="mtmItem">
          <div class="block">
            <h2>Family对应关系
              <div class="form-box">
                <upload
                  @on-success="updatefamilyTable"
                  @updateTimeChange="updatefamilyTable1"
                  :sheetsName="'Think_Family对应关系'"
                  :logTableName="'Think_Family_Mapping'"
                  :logObj="'family'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Family对应关系'"
                :tableName="'Think_Family_Mapping'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Family对应关系'"
                ref="thinkfamily">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="mtmItem">
          <div class="block">
            <h2>Family对应关系新增
              <div class="form-box">
                <updata
                  @on-success="updatefamilynew"
                  :menuId="'192'"
                  :menuName="'机型管理_Family参数'"
                  :logTableName="'Think_Family_Mapping_New'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Family对应关系新增'"
                :tableName="'Think_Family_Mapping_New'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Family对应关系新增'"
                ref="thinkfamilynew">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="mtmItem">
          <div class="block">
            <h2 class="h2">Think_MTM_Family
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">下载</a>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_MTM_Family'"
                :tableName="'Think_MTM_Family'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_MTM_Family'"
                :allPages="false"
                ref="thinkmtmfamily" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="mtmItem">
          <div class="block">
            <h2 class="h2">Think_MTM_Family更新
              <div class="form-box">
                <upload
                  @on-success="updatemtmupdate"
                  @updateTimeChange="updatemtmupdate1"
                  :sheetsName="'Think_MTM_Family更新'"
                  :logTableName="'Think_MTM_Family_Update'"
                  :logObj="'thinkmtmupdate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_MTM_Family更新'"
                :tableName="'Think_MTM_Family_Update'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_MTM_Family更新'"
                ref="thinkmtmupdate" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="mtmItem">
          <div class="block">
            <h2 class="h2">Think_MTM_Family新增
              <div class="form-box">
                <updata
                  @on-success="updatemtmnew"
                  :menuId="'192'"
                  :menuName="'机型管理_Family参数'"
                  :logTableName="'Think_MTM_Family_New'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_MTM_Family新增'"
                :tableName="'Think_MTM_Family_New'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_MTM_Family新增'"
                ref="thinkmtmnew" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="mtmItem">
          <div class="block">
            <h2 class="h2">Think_MTM_业务类型
              <div class="form-box">
                <upload
                  @on-success="updatemtmchannel"
                  @updateTimeChange="updatemtmchannel1"
                  :sheetsName="'Think_MTM_业务类型'"
                  :logTableName="'Think_MTM_Channel_Type'"
                  :logObj="'thinkmtmchannel'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_MTM_业务类型'"
                :tableName="'Think_MTM_Channel_Type'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_MTM_业务类型'"
                ref="thinkmtmchannel" >
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
import VTable from '@/components/public/vtablePage'
import Updata from '@/components/public/updata'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['Family对应关系', 'Family对应关系新增', 'MTM_Family', 'MTM_Family更新', 'MTM_Family新增', 'MTM_业务类型']
    }
  },
  components: {
    Upload,
    VTable,
    Updata
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
          DOWNLOAD_BAT_PATH: 'Think_MTM_Family_Download'
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
    updatefamilyTable () { // 调用自动更新新数据的方法
      this.$refs.thinkfamily.updateTabFun()
    },
    updatefamilyTable1 () {
      this.$refs.thinkfamily.updateTimeChange()
    },
    updatefamilynew () {
      this.$refs.thinkfamilynew.updateTabFun()
    },
    updatemtmTable () {
      this.$refs.thinkmtm.updateTabFun()
    },
    updatemtmTable1 () {
      this.$refs.thinkmtm.updateTimeChange()
    },
    updatemtmupdate () {
      this.$refs.thinkmtmupdate.updateTabFun()
    },
    updatemtmupdate1 () {
      this.$refs.thinkmtmupdate.updateTimeChange()
    },
    updatemtmnew () {
      this.$refs.thinkmtmnew.updateTabFun()
    },
    updatemtmchannel () {
      this.$refs.thinkmtmchannel.updateTabFun()
    },
    updatemtmchannel1 () {
      this.$refs.thinkmtmchannel.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-box
  width 100%
  height 100%
  padding 10px
  .mtmItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
      display none
      &:nth-child(1)
        display block
      h2
        width 100%
        height 38px
        line-height 38px
        font-weight normal
        box-shadow: 0 2px 8px #ccc
        font-size 13px
        margin-bottom 5px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 0px
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
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
</style>
