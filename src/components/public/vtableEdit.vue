<template>
  <div class="table" ref="table"></div>
</template>
<script>
import axios from 'axios'
const $ = window.$
export default {
  data () {
    return {
      columnsList: [],
      dataSource: [],
      pageSize: 18
    }
  },
  props: {
    tableName: { // 接口参数
      type: String,
      required: true
    },
    source: { // 接口参数
      type: String,
      required: true
    },
    fileName: { // 导出excel的名字
      type: String,
      required: true
    },
    sheetsName: {
      type: String,
      required: true
    }
  },
  created () {
    this.getTableData()
  },
  mounted () {
    // this.getTableData()
  },
  methods: {
    updateTabFun () { // 上传后自动刷新表格数据
      // console.log('111111')
      this.reloadData()
    },
    updateTimeChange () {
      this.getDataSource()
    },
    getDate1 () { // 获取当前时间
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var time = year + addZero(month) + addZero(day)
      function addZero (num) {
        return num > 9 ? '' + num : '0' + num
      }
      return time
    },
    initTab () { // 初始化表格
      let vm = this
      $(this.$refs.table).html('')
      $(this.$refs.table).kendoGrid({
        toolbar: ['excel'],
        sortable: true,
        columnMenu: true,
        reorderable: true,
        scrollable: true,
        filterable: true,
        resizable: true,
        pageable: {
          numeric: true,
          pageSizes: [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'all']
        },
        excel: {
          fileName: vm.fileName + '_' + vm.getDate1() + '.xlsx',
          allPages: true
        },
        editable: true,
        save: function (e) {
          vm.$ajax({
            url: '/updateTableByID',
            data: {
              'dbName': vm.source,
              'tbName': vm.tableName,
              'id': e.model.ID,
              'columnV': e.values
            },
            done (data) {
            },
            faild (data) {
              alert('修改失败')
            }
          })
        },
        remove: function (e) {
          vm.$ajax({
            url: '/deleteRowByID',
            data: {
              'dbName': vm.source,
              'tbName': vm.tableName,
              'id': e.model.ID
            },
            done (data) {
            },
            faild (data) {
              alert('删除失败')
            }
          })
        },
        excelExport (e) {
          e.workbook.sheets[0].name = vm.sheetsName
        },
        columns: vm.columnsList,
        dataSource: {
          data: vm.dataSource,
          pageSize: vm.pageSize
        }
      })
    },
    getColumns () { // 获取表格的列名
      let vm = this
      return this.$ajax({
        url: '/queryTableColumns',
        method: 'get',
        params: {
          tableName: vm.tableName,
          source: vm.source
        },
        done (data) {
          let arr = []
          for (let i = 0; i < data.length; i++) {
            if (data[i].name !== 'ID') {
              arr.push(data[i])
            }
          }
          vm.columnsList = [].concat(arr).map((item) => {
            return {
              title: item.name,
              field: ('' + item.name).replace(/\s|\\|\/|\(|（|）|\)|<|>|-/g, '_'),
              width: '120px'
            }
          })
          vm.columnsList.push({command: 'destroy', width: '120px'})
          // console.log(vm.columnsList)
        }
      })
    },
    getDataSource () { // 获取表格数据
      let vm = this
      return this.$ajax({
        url: '/queryTableData',
        method: 'get',
        params: {
          tableName: vm.tableName,
          source: vm.source,
          time: new Date().getTime()
        },
        done (data) {
          vm.dataSource = [].concat(data).map(item => {
            let newItem = {}
            // 处理列名带有空格的情况
            for (var key in item) {
              newItem[('' + key).replace(/\s/g, '_')] = item[key]
            }
            return newItem
          })
        }
      })
    },
    getTableData () { // 合并列名和列的数据
      axios.all([this.getColumns(), this.getDataSource()]).then(() => {
        this.$nextTick(() => {
          this.initTab()
        })
      })
    },
    reloadData () {
      this.getDataSource().then(() => {
        this.$nextTick(() => {
          this.initTab()
        })
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.table
  width 100%
  height 100%
  margin-bottom 0.125rem
  box-shadow: 0 0.025rem 0.1rem #ccc
</style>
