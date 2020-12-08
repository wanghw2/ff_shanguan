<template>
  <div class="db-box">
    <div class="content">
      <el-form :inline="true" :model="form" ref="form" label-width="58px" class="demo-form-inline">
        <el-form-item label="发货过账" prop="cadate" label-width="65px">
          <el-date-picker
            v-model="form.cadate"
            type="daterange"
            size="mini" 
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="财年" prop="year" label-width="32px">
          <el-select v-model="form.year" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in years"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="财季" prop="quarter" label-width="32px">
          <el-select v-model="form.quarter" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in quarters"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="财月" prop="month" label-width="32px">
          <el-select v-model="form.month" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in months"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="财周" prop="week" label-width="32px">
          <el-select v-model="form.week" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in weeks"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户细分1" prop="cussegment1" label-width="65px">
          <el-select v-model="form.cussegment1" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in cussegment1s"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编码" prop="matCode">
          <el-select v-model="form.matCode" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in matCodes"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="确认编码" prop="checkCode">
          <el-select v-model="form.checkCode" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in checkCodes"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料类型" prop="matType">
          <el-select v-model="form.matType" size="mini" @visible-change="''" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in matTypes"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item><br/>
        <el-form-item label="客户细分4" prop="cussegment4" label-width="65px">
          <el-select v-model="form.cussegment4" size="mini" @visible-change="''" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in cussegment4s"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料描述" prop="matDesc">
          <el-input v-model="form.martidesc" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="确认描述" prop="checkDesc">
          <el-select v-model="form.checkDesc" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in checkDescs"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <formPublic/>
        <el-form-item style="margin-left: 10px">
          <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
      </el-form>
      <h2>CA Tracking
        <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
      </h2>
      <div class="addgrid">
        <v-table-query
          :params='params'
          :sheetsName="'ConNB_CA_Tracking'"
          :tableName="'Tablet_SI_Tracking_PN_TTL'"
          :source="'FF_IDSS_Data_Tablet'"
          :fileName="'ConNB_CA_Tracking'">
        </v-table-query>
      </div>
    </div>
  </div>
</template>
<script>
import formPublic from '@/components/public/formPublic1'
// import VTable from '@/components/public/vtable1'
import VTableQuery from '@/components/public/vtableQuery'
// const $ = window.$
export default {
  data () {
    return {
      params: {},
      toggle: false,
      form: {
        cussegment1: [],
        cussegment4: [],
        matType: [], // 物料类型
        checkCode: [], // 确认编码
        year: [],
        month: [],
        week: [],
        quarter: [],
        matDesc: '',
        checkDesc: [], // 确认描述
        matCode: [],
        cadate: [] // 发货过账日期
      },
      matTypes: [],
      cussegment1s: [],
      cussegment4s: [],
      years: [],
      quarters: [],
      months: [],
      weeks: [],
      checkCodes: [],
      checkDescs: [],
      matCodes: []
    }
  },
  components: {
    formPublic,
    VTableQuery
  },
  created () {
    this.valieForm()
  },
  mounted () {
    this.toggleList()
  },
  methods: {
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    onSubmit (form) {
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    valieForm () { // params参数
      let params = {}
      if (this.form.cussegment1.join() !== '') {
        params['cusSegment1'] = this.form.cussegment1
      }
      if (this.form.cussegment4.join() !== '') {
        params['cusSegment4'] = this.form.cussegment4
      }
      if (this.form.family.join() !== '') {
        params['family'] = this.form.family
      }
      if (this.form.area.join() !== '') { // 大区
        params['area'] = this.form.area
      }
      if (this.form.wararea.join() !== '') { // 战区
        params['wararea'] = this.form.wararea
      }
      if (this.form.alloType.join() !== '') {
        params['alloType'] = this.form.alloType
      }
      if (this.form.martidesc !== '') {
        params['matDesc'] = this.form.martidesc.replace(/ /g, ',')
      }
      if (this.form.materialcode !== '') {
        params['matCode'] = this.form.materialcode.replace(/ /g, ',')
      }
      if (this.form.craddate !== '') {
        params['cradStartDay'] = this.form.craddate[0]
        params['cradEndDay'] = this.form.craddate[1]
      }
      if (this.form.cadate !== '') {
        params['caStartDay'] = this.form.cadate[0] // 发货过账
        params['caEndDay'] = this.form.cadate[1] // 发货过账
      }
      if (this.form.qdname !== '') {
        params['bpName'] = this.form.qdname.replace(/ /g, ',') // 渠道名称
      }
      if (this.form.qdcode !== '') {
        params['bpCode'] = this.form.qdcode.replace(/ /g, ',')
      }
      this.params = params
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
      margin-bottom 0 !important
    .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner
      width 192px !important // 输入框
    .el-form--inline .el-form-item__content
      width 192px !important
  .content
    width 100%
    height 100%
    h2
      width 100%
      height 38px
      line-height 38px
      font-weight normal
      box-shadow: 0 2px 8px #ccc
      font-size 14px
      padding 0 20px
      margin-bottom 5px
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
</style>
