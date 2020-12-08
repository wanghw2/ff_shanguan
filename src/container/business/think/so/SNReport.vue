<template>
<div class="fastpara">
  <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
    <el-form-item  label="创建日期" prop="createDate">
      <div class="block">
        <el-date-picker
          size="mini"
          v-model="form.createDate"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="发货过账" prop="issueDate">
      <div class="block">
        <el-date-picker
          size="mini"
          v-model="form.issueDate"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="订单类型" prop="orderType">
      <el-select v-model="form.orderType" size="mini" multiple collapse-tags placeholder="请选择">
        <el-option
          v-for="item in orderType.children"
          :key="item.value"
          :label="item.name"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="SO" prop="so">
      <el-input v-model="form.so" size="mini" placeholder="请输入">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-form-item>
    <el-form-item label="采购订单" prop="pOrderNumber">
        <el-input v-model="form.pOrderNumbe" size="mini" placeholder="请输入" >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </el-form-item>
    <el-form-item label="发票日期" prop="invoiceDate" >
      <div class="block">
        <el-date-picker
          size="mini"
          v-model="form.invoiceDate"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="物流发货" prop="logisticsDate" >
      <div class="block">
        <el-date-picker
          size="mini"
          v-model="form.logisticsDate"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="通路"  prop="channel"  >
        <el-select v-model="form.channel" size="mini" multiple collapse-tags placeholder="请选择">
          <el-option
            v-for="item in channel.children"
            :key="item.value"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="SN" prop="sn">
      <el-input v-model="form.sn" size="mini" placeholder="请输入">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-form-item>
    <el-form-item label="渠道名称" prop="bpName" >
      <el-input v-model="form.bpName" size="mini" placeholder="请输入">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-form-item>
    <el-form-item label="签收日期" prop="signDate"  >
      <div class="block">
        <el-date-picker
          size="mini"
          v-model="form.signDate"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="产品组" prop="productGroup" class="bpName">
      <el-select v-model="form.productGroup" size="mini" multiple collapse-tags placeholder="请选择">
        <el-option
          v-for="item in productGroup.children"
          :key="item.value"
          :label="item.name"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="订单原因" prop="orderReason">
      <el-select v-model="form.orderReason" size="mini" multiple collapse-tags placeholder="请选择">
        <el-option
          v-for="item in orderReason.children"
          :key="item.value"
          :label="item.name"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="物料编码" prop="matCode" >
      <el-input v-model="form.matCode" size="mini" placeholder="请输入">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-form-item>
    <el-form-item style="margin-left:65px">
      <el-button type="primary" size="mini" @click="submitForm()">查询</el-button>
      <el-button size="mini" @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
  <h2>SN查询</h2>
  <div class="addgrid">
    <v-table-query
      :sheetsName="'Think_SN_Data'"
      :tableName="'Think_SN_Data'"
      :source="'FF_IDSS_Data_Think'"
      :fileName="'Think_SN_Data'"
      ref="thinkSNDate">
    </v-table-query>
  </div>
</div>
</template>
<script>
import VTableQuery from '@/components/public/vtableQuery'
export default {
  data () {
    return {
      form: {
        sn: '',
        so: '',
        bpName: '',
        matCode: '',
        pOrderNumber: '',
        logisticsDate: [],
        invoiceDate: [],
        issueDate: [],
        signDate: [],
        createDate: [],
        channel: [],
        productGroup: [],
        orderType: [],
        orderReason: []
      },
      channel: [],
      productGroup: [],
      orderType: [],
      orderReason: []
    }
  },
  components: {
    VTableQuery
  },
  methods: {
    onSubmit () {
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
  .el-form-item
    margin-bottom -3px !important
  .bpName
    margin-right 43px
  h2
    width 100%
    height 38px
    line-height 38px
    font-weight normal
    box-shadow: 0 2px 8px #ccc
    font-size 14px
    padding 0 20px
    margin-bottom 5px
    margin-top 10px
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
