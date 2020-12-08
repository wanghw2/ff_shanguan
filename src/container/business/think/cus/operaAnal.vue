<template>
  <div class="fastpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="supItem">
          <div class="block">
            <h2>月运作参数
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateOper1"
                  @updateTimeChange="updateOperAnal1"
                  :logTableName="'Think_BP_Operation_Data'"
                  :sheetsName="'Think_总代月运作参数'"
                  :logObj="'thinkOperaAnal1'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <vtable-edit
                :sheetsName="'Think_总代月运作参数'"
                :tableName='"Think_BP_Operation_Data"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_总代月运作参数'"
                ref="thinkOperaAnal1">
              </vtable-edit>
            </div>
            <h2>签约额参数
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateOper2"
                  @updateTimeChange="updateOperAnal2"
                  :logTableName="'Think_BP_Operation_Contract_Target'"
                  :sheetsName="'Think_总代签约额参数'"
                  :logObj="'thinkOperaAnal2'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <vtable-edit
                :sheetsName="'Think_总代签约额参数'"
                :tableName='"Think_BP_Operation_Contract_Target"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_总代签约额参数'"
                ref="thinkOperaAnal2">
              </vtable-edit>
            </div>
            <h2>现金点参数
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateOper3"
                  @updateTimeChange="updateOperAnal3"
                  :logTableName="'Think_BP_Operation_Cash_Point'"
                  :sheetsName="'Think_总代现金点参数'"
                  :logObj="'thinkOperaAnal3'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <vtable-edit
                :sheetsName="'Think_总代现金点参数'"
                :tableName='"Think_BP_Operation_Cash_Point"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_总代现金点参数'"
                ref="thinkOperaAnal3">
              </vtable-edit>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="supItem" name="second">
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
            <h2>总代业绩目标
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper4"
                  :menuId="'601'"
                  :menuName="''"
                  :logTableName="'Think_BP_Operation_Contract_Target_TTL'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <vtable-edit
                :sheetsName="'总代业绩目标'"
                :tableName='"Think_BP_Operation_Contract_Target_TTL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'总代业绩目标'"
                ref="thinkOperaAnal4">
              </vtable-edit>
            </div>
            <h2>总代进货额
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper5"
                  :menuId="'601'"
                  :menuName="''"
                  :logTableName="'Think_BP_Operation_SI'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid5">
              <vtable-edit
                :sheetsName="'总代进货额'"
                :tableName='"Think_BP_Operation_SI"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'总代进货额'"
                ref="thinkOperaAnal5">
              </vtable-edit>
            </div>
            <h2>总代业绩达成情况
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper6"
                  :menuId="'601'"
                  :menuName="''"
                  :logTableName="'Think_BP_Operation_SI_Achieve'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid6">
              <vtable-edit
                :sheetsName="'总代业绩达成情况'"
                :tableName='"Think_BP_Operation_SI_Achieve"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'总代业绩达成情况'"
                ref="thinkOperaAnal6">
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
            <h2>总代运作指标汇总
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper7"
                  :menuId="'601'"
                  :menuName="''"
                  :logTableName="'Think_BP_Operation_KPI_TTL'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid7">
              <vtable-edit
                :sheetsName="'总代运作指标汇总'"
                :tableName='"Think_BP_Operation_KPI_TTL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'总代运作指标汇总'"
                ref="thinkOperaAnal7">
              </vtable-edit>
            </div>
            <h2>库存周转分析
              <a href="javascript:;" class="fold" @click="toggleList8" v-text="toggle8 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper8"
                  :menuId="'601'"
                  :menuName="''"
                  :logTableName="'Think_BP_Operation_INV_Turnover'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid8">
              <vtable-edit
                :sheetsName="'库存周转分析'"
                :tableName='"Think_BP_Operation_INV_Turnover"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'库存周转分析'"
                ref="thinkOperaAnal8">
              </vtable-edit>
            </div>
            <h2>应收周转分析
              <a href="javascript:;" class="fold" @click="toggleList9" v-text="toggle9 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper9"
                  :menuId="'601'"
                  :menuName="''"
                  :logTableName="'Think_BP_Operation_Receivable_Turnover'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid9">
              <vtable-edit
                :sheetsName="'应收周转分析'"
                :tableName='"Think_BP_Operation_Receivable_Turnover"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'应收周转分析'"
                ref="thinkOperaAnal9">
              </vtable-edit>
            </div>
            <h2>营业周期分析
              <a href="javascript:;" class="fold" @click="toggleList10" v-text="toggle10 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper10"
                  :menuId="'601'"
                  :menuName="''"
                  :logTableName="'Think_BP_Operation_Trade_Cycle'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid10">
              <vtable-edit
                :sheetsName="'营业周期分析'"
                :tableName='"Think_BP_Operation_Trade_Cycle"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'营业周期分析'"
                ref="thinkOperaAnal10">
              </vtable-edit>
            </div>
            <h2>自投资金分析
              <a href="javascript:;" class="fold" @click="toggleList11" v-text="toggle11 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper11"
                  :menuId="'601'"
                  :menuName="''"
                  :logTableName="'Think_BP_Operation_Capital'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid11">
              <vtable-edit
                :sheetsName="'自投资金分析'"
                :tableName='"Think_BP_Operation_Capital"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'自投资金分析'"
                ref="thinkOperaAnal11">
              </vtable-edit>
            </div>
            <h2>现金点分析
              <a href="javascript:;" class="fold" @click="toggleList12" v-text="toggle12 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateOper12"
                  :menuId="'601'"
                  :menuName="''"
                  :logTableName="'Think_BP_Operation_Cash_Analyze'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid12">
              <vtable-edit
                :sheetsName="'现金点分析'"
                :tableName='"Think_BP_Operation_Cash_Analyze"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'现金点分析'"
                ref="thinkOperaAnal12">
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
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      toggle7: true,
      toggle8: true,
      toggle9: true,
      toggle10: true,
      toggle11: true,
      toggle12: true,
      tabPosition: 'left',
      menuArr: ['运作参数', '总代进货额分析', '总代运作指标']
    }
  },
  components: {
    Upload,
    vtableEdit,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
      this.toggleList7()
      this.toggleList8()
      this.toggleList9()
      this.toggleList10()
      this.toggleList11()
      this.toggleList12()
    }, 3000)
  },
  methods: {
    updateOper1 () {
      this.$refs.thinkOperaAnal1.updateTabFun()
    },
    updateOperAnal1 () {
      this.$refs.thinkOperaAnal1.updateTimeChange()
    },
    updateOper2 () {
      this.$refs.thinkOperaAnal2.initTabTable()
    },
    updateOperAnal2 () {
      this.$refs.thinkOperaAnal2.initTabTable()
    },
    updateOper3 () {
      this.$refs.thinkOperaAnal3.updateTabFun()
    },
    updateOperAnal3 () {
      this.$refs.thinkOperaAnal3.updateTimeChange()
    },
    updateOper4 () {
      this.$refs.thinkOperaAnal4.updateTabFun()
    },
    updateOper5 () {
      this.$refs.thinkOperaAnal5.updateTabFun()
    },
    updateOper6 () {
      this.$refs.thinkOperaAnal6.updateTabFun()
      this.$refs.thinkOperaAnal6two.updateTabFun()
    },
    updateOper7 () {
      this.$refs.thinkOperaAnal7.updateTabFun()
    },
    updateOper8 () {
      this.$refs.thinkOperaAnal8.updateTabFun()
      this.$refs.thinkOperaAnal8two.updateTabFun()
    },
    updateOper9 () {
      this.$refs.thinkOperaAnal9.updateTabFun()
    },
    updateOper10 () {
      this.$refs.thinkOperaAnal10.updateTabFun()
      this.$refs.thinkOperaAnal10two.updateTabFun()
    },
    updateOper11 () {
      this.$refs.thinkOperaAnal11.updateTabFun()
    },
    updateOper12 () {
      this.$refs.thinkOperaAnal12.updateTabFun()
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
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
    },
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle6 = !this.toggle6
    },
    toggleList7 () {
      let addgrid = document.getElementsByClassName('addgrid7')[0]
      if (this.toggle7) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle7 = !this.toggle7
    },
    toggleList8 () {
      let addgrid = document.getElementsByClassName('addgrid8')[0]
      if (this.toggle8) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle8 = !this.toggle8
    },
    toggleList9 () {
      let addgrid = document.getElementsByClassName('addgrid9')[0]
      if (this.toggle9) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle9 = !this.toggle9
    },
    toggleList10 () {
      let addgrid = document.getElementsByClassName('addgrid10')[0]
      if (this.toggle10) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle10 = !this.toggle10
    },
    toggleList11 () {
      let addgrid = document.getElementsByClassName('addgrid11')[0]
      if (this.toggle11) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle11 = !this.toggle11
    },
    toggleList12 () {
      let addgrid = document.getElementsByClassName('addgrid12')[0]
      if (this.toggle12) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle12 = !this.toggle12
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
