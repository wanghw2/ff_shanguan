<template>
<div class="inv-box">
  <div class="content">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane :label="menuArr[0]" class="invitem">
        <div class="block">
          <h2>Write Off预估
            <div class="form-box">
              <upload
                @on-success="updatewriteoffol"
                @updateTimeChange="updatewriteoffol1"
                :sheetsName="'ConNB_Write Off预估'"
                :logTableName="'ConNB_Write_Off_OL'"
                :logObj="'cnbwriteoffol'">
              </upload>
            </div>
          </h2>
          <div class="addgrid">
            <v-table
              :sheetsName="'ConNB_Write Off预估'"
              :tableName="'ConNB_Write_Off_OL'"
              :source="'FF_IDSS_Data_CON'"
              :fileName="'ConNB_Write_Off预估'"
              ref="gridwriteoffol">
            </v-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="menuArr[1]" class="invitem">
        <div class="block">
          <h2>超期报表</h2>
          <template>
            <el-table
              :data="tableData1.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              :row-style="tableRowStyle"
              style="width: 100%">
              <el-table-column prop="fileName" sortable width="500%" label="文件名称" class="column1">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.fileName}}</el-button>
                </template>
              </el-table-column>
              <el-table-column prop="version" sortable label="数据截止时间" class="column1">
              </el-table-column>
              <el-table-column prop="lastUpdateTime" sortable label="文件更新时间" class="column1">
              </el-table-column>
              <el-table-column prop="ROWS" sortable label="订单行数" class="column1">
              </el-table-column>
            </el-table>
          </template>
          <el-pagination
            background
            class="pagein"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="prev, pager, next"
            :total="tableData1.length">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['Write Off预估', '超期报表'],
      currentPage: 1,
      pagesize: 10,
      url: '',
      tableData1: []
    }
  },
  components: {
    Upload,
    VTable
  },
  created () {
    this.getListData1()
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    handleSizeChange (size) {
      this.pagesize = size
    },
    handleClick (row) {
      let vm = this
      vm.url = row.url
      vm.$ajax({
        url: '/isFileExist',
        method: 'get',
        params: {
          url: vm.url
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
        },
        fail (msg) {
          alert('此文件不存在')
        }
      })
    },
    tableRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px'
      }
    },
    getListData1 () {
      let vm = this
      vm.$ajax({
        url: '/reportDownload',
        method: 'get',
        params: {
          'roleName': 'FF_ConNB',
          'showName': '超期报表',
          'time': new Date().getTime()
        },
        done (data) {
          // console.log(data)
          vm.tableData1 = [].concat(data).map((item) => {
            return {
              url: item.url,
              version: item.version,
              ROWS: item.ROWS,
              lastUpdateTime: item.lastUpdateTime,
              fileName: item.fileName
            }
          })
        }
      })
    },
    updatewriteoffol () { // 上传后自动刷新表格数据
      this.$refs.gridwriteoffol.updateTabFun()
    },
    updatewriteoffol1 () { // 上传后自动刷新表格数据
      this.$refs.gridwriteoffol.updateTimeChange()
    },
    updatereport () { // 上传后自动刷新表格数据
      this.$refs.gridreport.updateTabFun()
    },
    updatereport1 () { // 上传后自动刷新表格数据
      this.$refs.gridreport.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.inv-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .invitem
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
  .pagein
    float right
    margin-top 8px
</style>
