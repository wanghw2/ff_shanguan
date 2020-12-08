<template>
  <div class="allo-box">
    <ul class="state">
      <li>当前确认金额:  232元</li>
      <li>当前确认进度:  未交付</li>
      <li>目标金额:  545元</li>
      <li>预计确认进度:  545元</li>
      <li>预计确认金额:  1000元</li>
    </ul>
    <el-form :model="ruleForm" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <ul class="filter">
        <li>
          <el-form-item label="渠道编号" prop="qdbh">
            <el-input v-model="ruleForm.qdbh" :disabled="disabled" size="mini" placeholder="请输入">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
        </li>
        <li>
          <el-form-item label="渠道名称" prop="qdmc">
            <el-input v-model="ruleForm.qdmc" :disabled="disabled" size="mini" placeholder="请输入">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
        </li>
        <li>
          <el-form-item label="物料编号" prop="wlbh">
            <el-input v-model="ruleForm.wlbh" size="mini" placeholder="请输入">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
        </li>
        <li>
          <el-form-item label="物料描述" prop="wlms">
            <el-input v-model="ruleForm.wlms" size="mini" placeholder="请输入">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
        </li>
        <li>
          <el-form-item label="下单日期" prop="xdrq">
          <el-date-picker
            v-model="ruleForm.xdrq"
            type="daterange"
            align="right"
            size="mini"
            unlink-panels
            range-separator="-"
            value-format="yyyy-MM-dd"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          </el-form-item>
        </li>
        <li>
          <el-form-item>
            <el-button size="mini" type="primary" @click="onSubmit('ruleForm')">搜索</el-button>
            <el-button size="mini" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </li>
      </ul>
    </el-form>
    <div class="grid"></div>
    <div class="btn-submit"><el-button size="small" type="primary">提交</el-button></div>
  </div>
</template>
<script>
const $ = window.$
export default {
  data () {
    return {
      ruleForm: {
        qdbh: '',
        qdmc: '',
        wlbh: '',
        wlms: '',
        xdrq: []
      },
      xdrq: [],
      disabled: false,
      columnsList: [
        {
          selectable: true,
          width: '50px'
        },
        {
          title: '订单号',
          field: '订单号',
          width: '100px'
        },
        {
          title: '客户采购订单号',
          field: '客户采购订单号',
          width: '100px'
        },
        {
          title: '下单日期',
          field: '下单日期',
          width: '100px'
        },
        {
          title: '产品组名称',
          field: '产品组名称',
          width: '100px'
        },
        {
          title: '行项目号',
          field: '行项目号',
          width: '100px'
        },
        {
          title: '物料编号',
          field: '物料编号',
          width: '100px'
        },
        {
          title: '物料描述',
          field: '物料描述',
          width: '100px'
        },
        {
          title: '数量',
          field: '数量',
          width: '100px'
        },
        {
          title: '金额',
          field: '金额',
          // format: '{0:c}',
          width: '100px'
        },
        {
          title: '总金额',
          field: '总金额',
          // format: '{0:c}',
          width: '100px'
        },
        {
          title: '预计发货日期',
          field: '预计发货日期',
          width: '100px'
        },
        {
          title: '勾单标识',
          field: '勾单标识',
          width: '100px'
        }
      ],
      tableData: [],
      createDateBgn: '',
      createDateEnd: ''
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.tabData()
    }, 1000)
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.tabData()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    tabData () {
      let vm = this
      if (this.ruleForm.xdrq[0] !== undefined) {
        this.createDateBgn = this.ruleForm.xdrq[0]
        this.createDateEnd = this.ruleForm.xdrq[1]
      } else {
        this.createDateBgn = ''
        this.createDateEnd = ''
      }
      vm.$ajax({
        url: '/queryTick',
        data: {
          bpCode: vm.ruleForm.qdbh,
          bpName: vm.ruleForm.qdmc,
          pn: vm.ruleForm.wlbh,
          desc: vm.ruleForm.wlms,
          createDateBgn: vm.createDateBgn,
          createDateEnd: vm.createDateEnd
        },
        done (data) {
          vm.tableData = [].concat(data)
          $('.grid').kendoGrid({
            pageable: {
              pageSize: 15,
              numeric: true,
              pageSizes: [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'all']
            },
            scrollable: true,
            persistSelection: true,
            filterable: true,
            resizable: true,
            columnMenu: true,
            reorderable: true,
            sortable: true,
            toolbar: ['excel'],
            excel: {
              fileName: '勾单界面' + '.xlsx',
              allPages: true
            },
            columns: vm.columnsList,
            dataSource: {
              data: vm.tableData,
              schema: {
                model: { id: '订单号' }
              }
            }
          })
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
  overflow hidden
  .inline-box
    width 100%
    height auto
    li
      float left
      padding 0 10px
      text-align left
      span
        display inline-block
        width 100px
        height 30px
        font-weight 500
  .state
    width 100%
    height 40px
    margin-top 10px
    background #f9f9f9
    overflow hidden
    li
      float left
      width 200px
      height 40px
      line-height 40px
      text-align center
      font-size 14px
      font-weight 500
      color #333
  .filter
    width 98%
    height auto
    margin 0 auto
    overflow hidden
    li
      width 170px
      height 38px
      float left
      margin-right 5px
      &:nth-child(5)
        width 380px
        .el-date-editor
          width 290px
      &:last-child
        width 210px
        height 38px
        float right
  .grid
    width 98%
    overflow hidden
    margin 10px auto
  .btn-submit
    width 90%
    height 38px
    text-align left
    margin 0 auto
</style>