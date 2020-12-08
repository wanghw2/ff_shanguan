<template>
<div class="user">
  <div class="box">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="480">
      <el-table-column
        type="index"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="id"
        label="用户ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="defRoleId"
        label="默认角色ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="defRole"
        label="默认角色">
      </el-table-column>
      <el-table-column label="操作" width="80" >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column width="80">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column width="80">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            v-show="!scope.row.isValid"
            style="color: #ccc">无效</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="gridBox">
    <div class="table" ref="table"></div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
const $ = window.$
export default {
  data () {
    return {
      tableData: [],
      columns: [
          {title: '用户名', field: 'name'},
          {title: '用户ID', field: 'id'},
          {title: '默认角色ID', field: 'defRoleId'},
          {title: '默认角色', field: 'defRole'}
      ],
      dataSource: [],
      pageSize: 15
      // isValid: true // 用户是否是无效,true（1）是有效，false（0）是无效
    }
  },
  created () {
    this.getAllUser()
    this.getTableData()
  },
  methods: {
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
        excel: {
          fileName: '用户管理' + '_' + vm.getDate1() + '.xlsx',
          allPages: true
        },
        pageable: {
          numeric: true,
          pageSizes: [10, 15, 20, 25, 30, 'all']
        },
        excelExport (e) {
          e.workbook.sheets[0].name = '用户管理'
        },
        columns: vm.columns,
        dataSource: {
          data: vm.dataSource,
          pageSize: vm.pageSize
        }
      })
    },
    getTableData () { // 合并列名和列的数据
      axios.all([this.getAllUser()]).then(() => {
        this.$nextTick(() => {
          this.initTab()
        })
      })
    },
    getAllUser () {
      let vm = this
      return vm.$ajax({
        url: '/getUserAll',
        method: 'get',
        done (data) {
          vm.tableData = [].concat(data).map((item) => {
            return {
              id: item.id,
              loginName: item.loginName,
              name: item.name,
              defRoleId: item.deRoleId,
              defRole: item.deRoleName,
              isValid: item.isValid
            }
          })
          vm.isValid = vm.tableData
          vm.dataSource = [].concat(data).map((item) => {
            return {
              defRole: item.deRoleName,
              name: item.name,
              defRoleId: item.deRoleId,
              id: item.id
            }
          })
          // console.log(vm.tableData)
        }
      })
    },
    handleEdit (index, obj) { // 修改按钮触发的方法
      this.$router.push(`/controller/user/userModify?id=${obj.id}&code=${obj.loginName}&name=${obj.name}`)
      // console.log(obj)
      // console.log(obj.id)
      // console.log(obj.name)
      // console.log(obj.loginName)
    },
    deleteRow (index, rows) { // 移除行数据
      // rows.splice(index, 1)
      // console.log(rows[index].loginName)
      let vm = this
      vm.$ajax({
        url: '/deleteUserByLoginName',
        data: {
          loginName: rows[index].loginName
        },
        done (data) {
          vm.getAllUser()
        }
      })
    },
    indexMethod (index) {
      return index + 1
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.user
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .box
    width 900px
    height auto
    border 1px solid #ccc
    margin 0px auto
    padding 10px
    background #fff
    margin-bottom 10px
  .gridBox
    width 900px
    height auto
    margin 0 auto
</style>

