<template>
  <div class="con-set">
    <div class="conparaset">
      <div class="block">
        <h2>Server 上传表配置参数
          <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
          <div class="form-box">
            <div class="upload-box">
              <form class="upload">
                <p class="logTip" :title="showhislog">{{showhislog}}</p>
                <div class="upload-title">
                  <div class="download-box">
                    <input type="file" name="file" class="input" @change="uploadFile" :disabled="disabled"/>
                    <span class="submit" :class="{'disabled': disabled}">上传</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </h2>
        <div class="addconset">
          <div class="table" ref="table"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
const $ = window.$
export default {
  data () {
    return {
      columns: [
          {title: 'Role_Id', field: 'Role_Id', width: '120px'},
          {title: 'Role_Name', field: 'Role_Name', width: '120px'},
          {title: 'Save_TTL', field: 'Save_TTL', width: '120px'},
          {title: 'Sheet_Name', field: 'Sheet_Name', width: '120px'},
          {title: 'DB_Name', field: 'DB_Name', width: '120px'},
          {title: 'Table_Name', field: 'Table_Name', width: '120px'},
          {title: 'Condition_1', field: 'Condition_1', width: '120px'},
          {title: 'Condition_2', field: 'Condition_2', width: '120px'},
          {title: 'Condition_3', field: 'Condition_3', width: '120px'},
          {title: 'Condition_4', field: 'Condition_4', width: '120px'},
          {title: 'Condition_5', field: 'Condition_5', width: '120px'},
          {title: 'Custom_Column', field: 'Custom_Column', width: '120px'},
          {title: 'Is_Batch', field: 'Is_Batch', width: '120px'},
          {title: 'Is_Delete', field: 'Is_Delete', width: '120px'},
          {title: 'Del_Column', field: 'Del_Column', width: '120px'},
          {title: 'Column_Name', field: 'Column_Name', width: '120px'}
      ],
      dataSource: [],
      fieldsList: [],
      pageSize: 18,
      toggle: false,
      disabled: false,
      showhislog: '',
      updateTime: ''
    }
  },
  created () {
    this.hislog()
    this.getTableData()
  },
  mounted () {
    this.toggleList()
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
          fileName: 'Server_上传表配置参数_' + '_' + vm.getDate1() + '.xlsx',
          allPages: true
        },
        pageable: {
          numeric: true,
          pageSizes: [10, 15, 20, 25, 30, 'all']
        },
        excelExport (e) {
          e.workbook.sheets[0].name = 'Server_上传表配置参数_'
        },
        columns: vm.columns,
        dataSource: {
          data: vm.dataSource,
          pageSize: vm.pageSize
        }
      })
    },
    getDataSource () { // 获取表格数据
      let vm = this
      return this.$ajax({
        url: '/queryTableData',
        method: 'get',
        params: {
          tableName: 'Table_Excel_Upload_Mapping_Server',
          source: 'FF_IDSS'
        },
        done (data) {
          vm.dataSource = [].concat(data).map(item => {
            let newItem = {}
            // 处理列名带有空格的情况
            for (var key in item) {
              newItem[('' + key).replace(/\s|\\|%|\/|\(|（|）|\)|<|>|#|\.|\||-|:|&/g, '_')] = item[key]
            }
            return newItem
          })
        }
      })
    },
    getTableData () { // 合并列名和列的数据
      axios.all([this.getDataSource()]).then(() => {
        this.$nextTick(() => {
          this.initTab()
        })
      })
    },
    getDate () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hour = date.getHours()
      var minute = date.getMinutes()
      var second = date.getSeconds()
      var time = year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second)
      function addZero (num) {
        return num > 9 ? '' + num : '0' + num
      }
      return time
    },
    hislog () {
      let vm = this
      vm.$ajax({
        url: '/showHisLog',
        method: 'get',
        params: {
          tableName: 'Table_Excel_Upload_Mapping_Server'
        },
        done (data) {
          vm.showhislog = data.updateTime + '，' + data.userName + '，' + data.message + '!'
          if (data.updateTime !== vm.updateTime) {
            vm.getDataSource()
            vm.updateTime = data.updateTime
          } else {
          }
        },
        fail (msg) {
          console.log(msg)
        }
      })
    },
    uploadFile (e) {
      if (this.disabled) {
        return
      }
      this.disabled = true
      let file = e.target.files[0]
      e.target.value = ''
      if (!file) {
        this.disabled = false
        return
      }
      let data = new FormData()
      let Token = JSON.parse(window.sessionStorage.getItem('token'))
      data.append('file', file)
      data.append('dbName', 'FF_IDSS')
      data.append('tableName', 'Table_Excel_Upload_Mapping_Server')
      let vm = this
      this.$ajax({
        url: '/uploadExcelMapping',
        headers: {
          'Content-type': 'multipart/form-data',
          'token': Token ? Token.sessionId : ''
        },
        data: data,
        done (data) {
          vm.showhislog = data
          vm.disabled = false
          vm.getTableData()
        },
        fail (msg) {
          vm.showhislog = msg
          vm.disabled = false
        }
      })
    },
    toggleList () {
      let addconset = document.getElementsByClassName('addconset')[0]
      if (this.toggle) {
        addconset.style.display = 'none'
      } else {
        addconset.style.display = 'block'
      }
      this.toggle = !this.toggle
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.con-set
  width 100%
  height 100%
  padding 10px
  .conparaset
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      h2
        width 100%
        height 38px
        line-height 38px
        font-weight normal
        box-shadow: 0 2px 8px #ccc
        font-size 14px
        margin-bottom 10px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 80px
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
      .addconset
        min-height 10px
        width 100%
        overflow hidden
        margin 10px
        margin-top 0
.upload-box
  width 100%
  height 38px
  overflow hidden
  .upload
    width 100%
    height auto
    overflow hidden
    .upload-title
      height 38px
      float left
      label
        padding 0 10px
        float left
        height 38px
        line-height 38px
        font-size 14px
      .download-box
        width 60px
        height 32px
        float right
        margin-top 6px
        position relative
        &:hover
          .submit
            background #00b000
            &.disabled
              background #ccc
              cursor not-allowed
        .input
          width 100%
          height 24px
          line-height 24px
          display block
          opacity 0
          position absolute
          left 0
          top 0
          z-index 99
          cursor pointer
        .submit
          width 100%
          height 24px
          line-height 24px
          display block
          font-size 12px
          color #fff
          border-radius 6px
          background #76d467
          text-align center
          &.disabled
            background #ccc
            cursor not-allowed
    .downBtn
      width 60px
      height 24px
      float left
      margin 6px 10px
      .download-btn // a标签
        color #fff
        display block
        background #fdbc40
        width 60px
        height 24px
        line-height 24px
        border-radius 6px
        float right
        font-size 12px
        text-align center
        &:hover
          background #ffa700
    .logTip
      max-width 400px
      height 38px
      line-height 38px
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      color #d4d5d9
      float left
      font-size 12px
      margin 0 10px
</style>


