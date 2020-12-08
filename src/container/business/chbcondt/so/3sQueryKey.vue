
<template>
  <div class="fastpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form1" ref="form1" label-width="73px"  size="mini" class="demo-form-inline">
              <el-form-item label="财年" prop="year">
                <el-select v-model="form1.year" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in years"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month" label-width="48px">
                <el-select v-model="form1.month"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财季" prop="quarter">
                <el-select v-model="form1.quarter"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in quarters"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财周" prop="week">
                <el-select v-model="form1.week"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in weeks"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="库存日期" prop="invDate" >
                  <div class="block">
                    <el-date-picker
                      size="mini"
                      v-model="form1.invDate"
                      type="daterange"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                  </div>
                </el-form-item>
              <div class="line1">
                <el-form-item label="物料编码" prop="matCode">
                  <el-input v-model="form1.matCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="大区"  prop="large" label-width="48px" >
                  <el-select v-model="form1.large" multiple collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in larges.children"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="渠道编码" prop="bpCode" >
                  <el-input v-model="form1.bpCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
              </div>
              <div class="line1">
                <el-form-item label="物料名称" prop="matName" >
                    <el-input v-model="form1.matName" placeholder="请输入">
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="战区"  prop="subLarge" label-width="48px">
                  <el-select v-model="form1.subLarge" multiple collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in subLarges.children"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="渠道名称" prop="bpName">
                  <el-input v-model="form1.bpName" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item style="margin-left:20px">
                  <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
                  <el-button @click="resetForm('form')" size="mini" >重置</el-button>
                </el-form-item>
              </div>
            </el-form>
            <h2>3S库存明细
              <a class="small">下载</a>
            </h2>
            <v-table-query
              ref="Query3s1"
              :url="'queryTableData251'"
              :columnurl="'/queryTableColumns251'"
              :tableName='"ConDT_STI_3S_Stock_TTL"'
              :source="'FF_IDSS_Data_CON'"
              :sheetsName="'3S库存明细'"
              :params='params1'
              :fileName="'3S库存明细' ">
            </v-table-query>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form2" ref="form2" label-width="73px"  size="mini" class="demo-form-inline">
              <el-form-item label="财年" prop="year">
                <el-select v-model="form2.year" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in years"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month">
                <el-select v-model="form2.month"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财季" prop="quarter">
                <el-select v-model="form2.quarter"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in quarters"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财周" prop="week">
                <el-select v-model="form2.week"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in weeks"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出货日期" prop="deliveryDate" >
                <div class="block">
                  <el-date-picker
                    size="mini"
                    v-model="form2.deliveryDate"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </el-form-item>
              <div class="line2">
                <el-form-item label="物料编码" prop="matCode">
                  <el-input v-model="form2.matCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="渠道编码" prop="bpCode">
                  <el-input v-model="form2.bpCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="出货口径" prop="shipcaliber">
                  <el-select v-model="form2.shipcaliber"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in shipcalibers"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="line2">
                <el-form-item label="物料描述" prop="matdesc" >
                    <el-input v-model="form2.matdesc" placeholder="请输入">
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="渠道名称" prop="bpName">
                  <el-input v-model="form2.bpName" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="渠道类型" prop="bpType">
                  <el-input v-model="form2.bpType" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item style="margin-left:20px">
                  <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
                  <el-button @click="resetForm('form')" size="mini" >重置</el-button>
                </el-form-item>
              </div>
            </el-form>
            <h2>STI明细 物料
              <a class="small">下载</a>
            </h2>
            <v-table-query
              ref="Query3s2"
              :url="'queryTableData251'"
              :columnurl="'/queryTableColumns251'"
              :tableName='"ConDT_STI_3S_31_TTL"'
              :source="'FF_IDSS_Data_CON'"
              :sheetsName="'STI明细_物料'"
              :params='params2'
              :fileName="'STI明细_物料'">
            </v-table-query>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form3" ref="form3" label-width="73px"  size="mini" class="demo-form-inline">
              <el-form-item label="财年" prop="year" label-width="48px">
                <el-select v-model="form3.year" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in years"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month">
                <el-select v-model="form3.month"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财季" prop="quarter">
                <el-select v-model="form3.quarter"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in quarters"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财周" prop="week">
                <el-select v-model="form3.week"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in weeks"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出货日期" prop="deliveryDate" >
                  <div class="block">
                    <el-date-picker
                      size="mini"
                      v-model="form3.deliveryDate"
                      type="daterange"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                  </div>
                </el-form-item>
              <div class="line2">
                <el-form-item label="LN" prop="ln" label-width="48px">
                  <el-input v-model="form3.ln" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="物料编码" prop="matCode">
                  <el-input v-model="form3.matCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="渠道编码" prop="matdesc">
                  <el-input v-model="form3.matdesc" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="出货口径" prop="shipcaliber">
                  <el-select v-model="form3.shipcaliber"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in shipcalibers"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="line2">
                <el-form-item label="SN" prop="sn" label-width="48px">
                  <el-input v-model="form3.sn" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="物料描述" prop="matName" >
                    <el-input v-model="form3.matName" placeholder="请输入">
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="渠道名称" prop="bpName">
                  <el-input v-model="form3.bpName" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="渠道类型" prop="bpType">
                  <el-input v-model="form3.bpType" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item style="margin-left:20px">
                  <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
                  <el-button @click="resetForm('form')" size="mini" >重置</el-button>
                </el-form-item>
              </div>
            </el-form>
            <h2>STI明细 SN
              <a class="small">下载</a>
            </h2>
            <v-table-query
              ref="Query3s3"
              :url="'queryTableData251'"
              :columnurl="'/queryTableColumns251'"
              :tableName='"ConDT_STI_3S_TTL"'
              :source="'FF_IDSS_Data_CON'"
              :sheetsName="'STI明细_SN '"
              :params='params1'
              :fileName="'STI明细_SN '">
            </v-table-query>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import UploadNew from '@/components/public/upload5'
import VTableQuery from '@/components/public/vtableQuery'
// const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['3S库存明细', 'STI明细_物料', 'STI明细_SN'],
      params1: {},
      params2: {},
      params3: {},
      form1: {
        year: [],
        month: [],
        quarter: [],
        week: [],
        large: [],
        subLarge: [],
        invDate: [],
        bpCode: '',
        matCode: '',
        matName: '',
        bpName: ''
      },
      years: [],
      months: [],
      quarters: [],
      weeks: [],
      larges: [],
      subLarges: [],
      shipcalibers: [],
      form2: {
        year: [],
        month: [],
        quarter: [],
        week: [],
        large: [],
        subLarge: [],
        deliveryDate: [],
        shipcaliber: [],
        bpCode: '',
        bpName: '',
        bpType: '',
        matCode: '',
        matdesc: ''
      },
      form3: {
        year: [],
        month: [],
        quarter: [],
        week: [],
        large: [],
        subLarge: [],
        deliveryDate: [],
        shipcaliber: [],
        ln: '',
        sn: '',
        matdesc: '',
        bpCode: '',
        bpName: '',
        bpType: '',
        matCode: ''
      }
    }
  },
  components: {
    UploadNew,
    VTableQuery
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.Query3s1.getColumns()
      this.$refs.Query3s2.getColumns()
      this.$refs.Query3s3.getColumns()
    }, 3000)
  },
  methods: {
    onSubmit () {
      this.$nextTick(() => {
      }, 3000)
    },
    onSubmit1 () {
      this.$nextTick(() => {
      }, 3000)
    },
    resetForm (form) {
      this.$refs[form].resetFields()
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
  .fcstItem
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
        margin 5px 0px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
        .small
          margin-top 6px
          float right
          margin-left 20px
          border-radius 6px
          font-size 12px
          height 24px
          width 60px
          line-height 24px
          text-align center
          border 0
          font-size 12px
          background #6ab7fc
          color #fff
          box-sizing border-box
          &:hover
            background #4691e4
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
