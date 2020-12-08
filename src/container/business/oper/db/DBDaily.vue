<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>CON 数据字典
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'CON_数据字典'"
                  @on-success="updatecondic"
                  @updateTimeChange="updatecondic1"
                  :logTableName='"CON_Dictionary"'
                  :logObj="'gridconnbpotar'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'CON_数据字典'"
                :tableName='"CON_Dictionary"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CON_数据字典'"
                ref="gridcondic" >
              </v-table>
            </div>
            <h2>YT 数据字典
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'YT_数据字典'"
                  @on-success="updateytdic"
                  @updateTimeChange="updateytdic1"
                  :logTableName='"YT_Dictionary"'
                  :logObj="'gridytdic'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table251
                :sheetsName="'YT_数据字典'"
                :tableName='"YT_Dictionary"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YT_数据字典'"
                ref="gridytdic" >
              </v-table251>
            </div>
            <h2>Think 数据字典
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  :sheetsName="'Think_数据字典'"
                  @on-success="updatethinkdic"
                  @updateTimeChange="updatethinkdic1"
                  :logTableName='"Think_Dictionary"'
                  :logObj="'gridthinkdic'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'Think_数据字典'"
                :tableName='"Think_Dictionary"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_数据字典'"
                ref="gridthinkdic" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <h2>PRC ROL Dashboard
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download3" href="#">财务 ROL</a> 
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download1" href="#">PRC ROL</a>            
              <div class="form-box">
                <updata
                  @on-success="updateffrol"
                  :menuId="'458'"
                  :menuName="'每日看板_ROL看板'"
                  :logTableName="'FF_Dashboard_ROL'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_Dashboard_ROL'"
                :tableName='"FF_Dashboard_ROL"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Dashboard_ROL'"
                ref="gridffrol">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <h2>PO Dashboard
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download2" href="#">下载</a>             
              <div class="form-box">
                <updata
                  @on-success="updateffpo"
                  :menuId="'458'"
                  :menuName="'每日看板_PO看板'"
                  :logTableName="'FF_Dashboard_PO'"
                  :proIndex="'2'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'FF_Dashboard_PO'"
                :tableName='"FF_Dashboard_PO"'
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Dashboard_PO'"
                ref="gridffpo">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <!-- <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <ul class="desc">
              <li>Date: <span>2018-04-20</span></li>
              <li>Unit：<span>K</span></li>
              <li>
                <el-button type="primary" size="mini">下载</el-button>
              </li>
            </ul>
            <table class="tableReserve" border="0">
              <tr align="center">
                <th rowspan="2" class="black">Segment</th>
                <th rowspan="2" class="black">Product</th>
                <th rowspan="2" class="black">当前库存</th>
                <th rowspan="2" class="blue">BOH</th>
                <th colspan="3" class="blue">本月PO</th>
                <th rowspan="2" class="blue">本月总供应</th>
                <th rowspan="2" class="black">下月PO</th>
                <th rowspan="2" class="red">本月MX目标</th>
                <th rowspan="2" class="red">本月总供应Rate</th>
                <th rowspan="2" class="black">MTD CA</th>
              </tr>
              <tr align="center" class="blue">
                <th>已入库</th>
                <th>WIP</th>
                <th>Open PO</th>
              </tr>
              <tr align="center">
                <td rowspan="6">REL</td>
                <td>TCM&QT</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>Zhaoyang</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>ThinkCentre-R</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>ThinkStation</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>ThinkPad-R</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center" class="grayTotal">
                <td>REL TTL</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
              </tr>
              <tr align="center">
                <td rowspan="3">YT</td>
                <td>Yangtian DT</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>Yangtian NB</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center" class="grayTotal">
                <td>YT TTL</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr align="center">
                <td rowspan="4">Think-T</td>
                <td>ThinkCentre-T</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>TP Premium</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr align="center">
                <td>TP Edge</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr align="center" class="grayTotal">
                <td>Think-T TTL</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr align="center">
                <td rowspan="3">CON</td>
                <td>IdeaCentre</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>IdeaPad</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center" class="grayTotal">
                <td>CON TTL</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center" class="grayTotal">
                <td>PC</td>
                <td>PC TTL</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td rowspan="4">Android Tablet</td>
                <td>Android Tablet-R</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>Android Tablet-T</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>AR/VR</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr align="center" class="Total">
                <td>Android Tablet TTL</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
              </tr>
              <tr align="center">
                <td rowspan="5">Windows Tablet</td>
                <td>Windows Tablet-Think-R</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>Windows Tablet-Think-T</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>Windows Tablet-Miix-IdeaPad</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center">
                <td>Windows Tablet-Miix-ZY</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center" class="grayTotal">
                <td>Windows Tablet TTL</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr align="center" class="grayTotal" >
                <td>PCSD</td>
                <td>PCSD TTL</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
              </tr>
            </table>
          </div>
        </el-tab-pane> -->
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import Upload from '@/components/public/upload1'
import updata from '@/components/public/updata'
import VTable from '@/components/public/vtablePage'
import VTable251 from '@/components/public/vtablePage251'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      tabPosition: 'left',
      menuArr: ['数据字典', 'ROL看板', 'PO Dashboard']
    }
  },
  components: {
    Upload,
    VTable,
    VTable251,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
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
    download1 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'PRC_ROL_Dashboard_Download'
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
          DOWNLOAD_BAT_PATH: 'FF_PO_Dashboard_Download'
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
    download3 () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0,
          DOWNLOAD_BAT_PATH: 'PRC_ROL_Fin_Dashboard_Download'
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
    updateffrol () {
      this.$refs.gridffrol.updateTabFun()
    },
    updateffpo () {
      this.$refs.gridffpo.updateTabFun()
    },
    updatecondic () { // 调用自动更新新数据的方法
      this.$refs.gridcondic.updateTabFun()
    },
    updatecondic1 () {
      this.$refs.gridcondic.updateTimeChange()
    },
    updateytdic () { // 调用自动更新新数据的方法
      this.$refs.gridytdic.updateTabFun()
    },
    updateytdic1 () {
      this.$refs.gridytdic.updateTimeChange()
    },
    updatethinkdic () { // 调用自动更新新数据的方法
      this.$refs.gridthinkdic.updateTabFun()
    },
    updatethinkdic1 () {
      this.$refs.gridthinkdic.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  .dbItem
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
        font-size 14px
        margin-bottom 5px
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
          background #ff9933
          font-size 12px
          box-sizing border-box
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
      .desc
        width 95%
        height 30px
        margin 0 auto 10px
        li
          height 30px
          line-height 30px
          padding 0 10px
          float left
          font-size 14px
          font-weight bold
          margin-right 10px
          span
            display inline-block
            float right
            font-weight normal
            min-width 100px
            height 30px
            padding 0 15px
      .tableReserve
        width 98%
        height 100%
        margin 0 auto 10px
        border-collapse collapse
        tr,td,th
          border 1px solid #ccc
          &.black
            background #404040
          &.red
            background #632523
          &.blue
            background #16365C
        th
          height 35px
          padding 0 10px
          color #fff
        td
          height 28px
        .grayTotal
          background #eee
        .Total
          background #eee
</style>
