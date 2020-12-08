<template>
  <div class="db-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;" @tab-click="tabClick">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <h2>主机_MTM</h2>
            <template>
              <el-table
                :data="tableData1.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                :row-style="tableRowStyle"
                style="width: 100%">
                <el-table-column prop="fileName" width="500%" label="文件名称" class="column1">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.fileName}}</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="version" label="数据截止时间" class="column1">
                </el-table-column>
                <el-table-column prop="lastUpdateTime" label="文件更新时间" class="column1">
                </el-table-column>
                <el-table-column prop="ROWS" label="订单行数" class="column1">
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
        <el-tab-pane :label="menuArr[1]" @click="getListData2" class="dbItem">
          <div class="block">
            <h2>主机_CV</h2>
            <template>
              <el-table
                :data="tableData2.slice((currentPage2-1)*pagesize2,currentPage2*pagesize2)"
                :row-style="tableRowStyle"
                style="width: 100%">
                <el-table-column prop="fileName" width="500%" label="文件名称" class="column1">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.fileName}}</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="version" label="数据截止时间" class="column1">
                </el-table-column>
                <el-table-column prop="lastUpdateTime" label="文件更新时间" class="column1">
                </el-table-column>
                <el-table-column prop="ROWS" label="订单行数" class="column1">
                </el-table-column>
              </el-table>
            </template>
            <el-pagination
              background
              class="pagein"
              @size-change="handleSizeChange2"
              @current-change="handleCurrentChange2"
              :current-page="currentPage2"
              :page-size="pagesize2"
              layout="prev, pager, next"
              :total="tableData2.length">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" @click="getListData3" class="dbItem">
          <div class="block">
            <h2>主机_工厂</h2>
            <template>
              <el-table
                :data="tableData3.slice((currentPage3-1)*pagesize3,currentPage3*pagesize3)"
                :row-style="tableRowStyle"
                style="width: 100%">
                <el-table-column prop="fileName" width="500%" label="文件名称" class="column1">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.fileName}}</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="version" label="数据截止时间" class="column1">
                </el-table-column>
                <el-table-column prop="lastUpdateTime" label="文件更新时间" class="column1">
                </el-table-column>
                <el-table-column prop="ROWS" label="订单行数" class="column1">
                </el-table-column>
              </el-table>
            </template>
            <el-pagination
              background
              class="pagein"
              @size-change="handleSizeChange3"
              @current-change="handleCurrentChange3"
              :current-page="currentPage3"
              :page-size="pagesize3"
              layout="prev, pager, next"
              :total="tableData3.length">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      currentPage: 1,
      pagesize: 10,
      currentPage2: 1,
      pagesize2: 10,
      currentPage3: 1,
      pagesize3: 10,
      url: '',
      tableData1: [],
      tableData2: [],
      tableData3: [],
      menuArr: ['主机_MTM', '主机_CV', '主机_工厂']
    }
  },
  created () {
    this.getListData1()
    this.getListData2()
    this.getListData3()
  },
  methods: {
    tabClick (tab) {
      switch (tab.index) {
        case '0':
          this.getListData1()
          break
        case '1':
          this.getListData2()
          break
        case '2':
          this.getListData3()
          break
      }
    },
    handleSizeChange (size) {
      this.pagesize = size
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    handleSizeChange2 (size) {
      this.pagesize2 = size
    },
    handleCurrentChange2 (currentPage) {
      this.currentPage2 = currentPage
    },
    handleSizeChange3 (size) {
      this.pagesize3 = size
    },
    handleCurrentChange3 (currentPage) {
      this.currentPage3 = currentPage
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
    getListData1 () {
      let vm = this
      vm.$ajax({
        url: '/reportDownload',
        method: 'get',
        params: {
          'roleName': 'FF_YTNB',
          'showName': '主机_MTM',
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
    getListData2 () {
      let vm = this
      vm.$ajax({
        url: '/reportDownload',
        method: 'get',
        params: {
          'roleName': 'FF_YTNB',
          'showName': '主机_CV',
          'time': new Date().getTime()
        },
        done (data) {
          vm.tableData2 = [].concat(data).map((item) => {
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
    getListData3 () {
      let vm = this
      vm.$ajax({
        url: '/reportDownload',
        method: 'get',
        params: {
          'roleName': 'FF_YTNB',
          'showName': '主机_工厂',
          'time': new Date().getTime()
        },
        done (data) {
          vm.tableData3 = [].concat(data).map((item) => {
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
    tableRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px'
      }
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
.pagein
  float right
  margin-top 8px
</style>
