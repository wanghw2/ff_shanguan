
<template>
  <div>
    <div>
      <div class="table" ref="table"></div>
    </div>
  </div>
</template>
<script>
const $ = window.$
export default {
  data () {
    return {
      columnsList: [],
      dataSource: []
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
    },
    allPages: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  created () {
    this.getColumns()
  },
  methods: {
    updateTabFun () { // 上传后自动刷新表格数据
      this.getColumns()
    },
    updateTimeChange () {
      this.getColumns()
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
              field: ('' + item.name).replace(/\s|\\|\/|\(|（|）|\)|<|>|#|\.|\||-|:|&/g, '_'),
              width: '120px'
            }
          })
          vm.initTabTable()
        }
      })
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
    initTabTable () { // 初始化表格
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
        excel: {
          fileName: vm.fileName + '_' + vm.getDate1() + '.xlsx',
          allPages: vm.allPages
        },
        excelExport (e) {
          e.workbook.sheets[0].name = vm.sheetsName
        },
        columns: vm.columnsList,
        dataSource: {
          transport: {
            read (options) {
              let params = {}
              params['source'] = vm.source
              params['tableName'] = vm.tableName
              params['pageNum'] = options.data.page
              params['pageSize'] = options.data.pageSize
              vm.$ajax({
                url: '/queryTableData',
                method: 'get',
                params: params,
                done (data) {
                  options.success(data)
                },
                fail (msg) {
                  options.error(msg)
                }
              })
            }
          },
          serverPaging: true,
          schema: {
            data: function (response) {
              if (response.list !== undefined) {
                response.list = response.list.map(item => {
                  let newItem = {}
                  for (var key in item) {
                    newItem[key.replace(/\s|\\|\/|\(|（|）|\)|<|>|#|\.|\||-|:|&/g, '_')] = item[key]
                  }
                  return newItem
                })
                return response.list
              } else {
                return []
              }
            },
            total: function (response) {
              return response.total
            }
          }
        },
        pageable: {
          buttonCount: 5,
          page: 1,
          pageSize: 18,
          pageSizes: [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 5000, 'all']
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.loading
  width 100%
  height 5.5rem
  position relative
  img
    position absolute
    left 50%
    top 2.5rem
    transform translate(-50%,-50%)
.table
  width 100%
  height 100%
  margin-bottom 0.125rem
  box-shadow: 0 0.025rem 0.1rem #ccc
</style>
