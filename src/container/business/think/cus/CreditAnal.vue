<template>
  <div class="fastpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="supItem">
          <div class="block">
            <h2>总代信用参数
              <div class="form-box">
                <upload
                  @on-success="updateOper1"
                  @updateTimeChange="updateOperAnal1"
                  :logTableName="'Think_BP_Credit_Data'"
                  :sheetsName="'Think_总代信用参数'"
                  :logObj="'thinkOperaAnal1'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <vtable-edit
                :sheetsName="'Think_总代信用参数'"
                :tableName='"Think_BP_Credit_Data"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_总代信用参数'"
                ref="thinkOperaAnal1">
              </vtable-edit>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="supItem">
          <div class="block">
            <h2>总代信用概览
              <div class="form-box">
                <updata
                  @on-success="updateOper2"
                  :menuId="'603'"
                  :menuName="''"
                  :logTableName="'Think_BP_Credit_SUM'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <vtable-edit
                :sheetsName="'总代信用概览'"
                :tableName='"Think_BP_Credit_SUM"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'总代信用概览'"
                ref="thinkOperaAnal2">
              </vtable-edit>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="supItem">
          <div class="block">
            <el-form :inline="true" :model="form" ref="form" label-width="60px" size="mine" class="demo-form-inline">
              <el-form-item label="渠道编码" prop="bpCode" label-width="80px">
                <el-input v-model="form.bpCode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="渠道名称" prop="bpName" label-width="80px">
                <el-input v-model="form.bpName" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="财年" prop="FiscalYear">
                <el-select v-model="form.FiscalYear" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in FiscalYears"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month">
                <el-select v-model="form.month" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财季" prop="quarter">
                <el-select v-model="form.quarter" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in quarters"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>总代信用评估
              <div class="form-box">
                <updata
                  @on-success="updateOper3"
                  :menuId="'603'"
                  :menuName="''"
                  :logTableName="'Think_BP_Credit_Analyze'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <vtable-edit
                :sheetsName="'总代信用评估'"
                :tableName='"Think_BP_Credit_Analyze"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'总代信用评估'"
                ref="thinkOperaAnal3">
              </vtable-edit>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import vtableEdit from '@/components/public/vtableEditQuery'
import updata from '@/components/public/updata'
export default {
  data () {
    return {
      form: {
        bpCode: '',
        bpName: '',
        FiscalYear: [],
        month: [],
        quarter: []
      },
      FiscalYears: [],
      months: [],
      quarters: [],
      tabPosition: 'left',
      menuArr: ['总代信用参数', '总代信用概览', '总代信用评估']
    }
  },
  components: {
    Upload,
    vtableEdit,
    updata
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    onSubmit () {
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    updateOper1 () {
      this.$refs.thinkOperaAnal1.updateTabFun()
    },
    updateOperAnal1 () {
      this.$refs.thinkOperaAnal1.updateTimeChange()
    },
    updateOper2 () {
      this.$refs.thinkOperaAnal2.initTabTable()
    },
    updateOper3 () {
      this.$refs.thinkOperaAnal3.updateTabFun()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fastpara
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 5px !important
  .supItem
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
        margin-bottom 5px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
          .download-box
            width 81px
            height 30px
            margin-top 7px
            margin-left 20px
            &:hover
              .submit
                background #00b000
                &.disabled
                  background #ccc
                  cursor not-allowed
            .input
              width 100%
              height 30px
              line-height 24px
              display block
              opacity 0
              position absolute
              left 0
              top 0
              z-index 99
              cursor pointer
            .submit
              z-index 1
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
</style>
