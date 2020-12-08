<template>
<div class="reg">
  <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
    <el-form-item label="战区" prop="zhanqu">
      <el-input v-model="form.zhanqu" size="mini" placeholder="请输入">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-form-item>
    <el-form-item label="渠道名称" prop="bpName" >
      <el-input v-model="form.bpName" size="mini" placeholder="请输入">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-form-item>
    <el-form-item label="物料编码" prop="bpCode" >
      <el-input v-model="form.bpCode" size="mini" placeholder="请输入">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" size="mini" @click="submitForm()">查询</el-button>
      <el-button size="mini" @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
  <h2>信用查询</h2>
  <div class="addgrid">
    <v-table-query
      :sheetsName="'信用查询'"
      :tableName="'CON_Credit_Tracking'"
      :source="'FF_IDSS_Data_CON'"
      :fileName="'信用查询'"
      ref="thinkCreditDate">
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
        zhanqu: '',
        bpName: '',
        bpCode: ''
      }
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
.reg
  width 100%
  height 100%
  padding 10px
  .el-form-item
    margin-bottom -3px !important
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
