<template>
  <div class="fastpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="supItem">
          <div class="block">
            <h2>总代供应分析概览
              <div class="form-box">
                <updata
                  @on-success="updateOper3"
                  :menuId="'602'"
                  :menuName="''"
                  :logTableName="'Think_BP_Supply_SUM'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <vtable-edit
                :sheetsName="'总代供应分析概览'"
                :tableName='"Think_BP_Supply_SUM"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'总代供应分析概览'"
                ref="thinkSupAnal3">
              </vtable-edit>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="supItem">
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
            <h2>供应分析SUM
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper1"
                  :menuId="'602'"
                  :menuName="''"
                  :logTableName="'Think_BP_Supply_Analyze_SUM'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <vtable-edit
                :sheetsName="'供应分析SUM'"
                :tableName='"Think_BP_Supply_Analyze_SUM"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'供应分析SUM'"
                ref="thinkSupAnal1">
              </vtable-edit>
            </div>
            <h2>供应分析详情
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper2"
                  :menuId="'602'"
                  :menuName="''"
                  :logTableName="'Think_BP_Supply_Analyze_Data'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <vtable-edit
                :sheetsName="'供应分析详情'"
                :tableName='"Think_BP_Supply_Analyze_Data"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'供应分析详情'"
                ref="thinkSupAnal2">
              </vtable-edit>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
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
      toggle1: true,
      toggle2: true,
      tabPosition: 'left',
      menuArr: ['总代供应分析概览', '总代供应分析']
    }
  },
  components: {
    vtableEdit,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
    }, 3000)
  },
  methods: {
    updateOper1 () {
      this.$refs.thinkSupAnal1.updateTabFun()
    },
    updateOper2 () {
      this.$refs.thinkSupAnal2.initTabTable()
    },
    updateOper3 () {
      this.$refs.thinkSupAnal3.updateTabFun()
    },
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
