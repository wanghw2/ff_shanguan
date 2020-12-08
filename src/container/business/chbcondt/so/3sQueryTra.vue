
<template>
  <div class="fastpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form1" ref="form1" label-width="73px"  size="mini" class="demo-form-inline">
              <el-form-item label="财年" prop="year">
                <el-select v-model="form1.year" @visible-change="getYear1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in year1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财季" prop="quarter" label-width="48px">
                <el-select v-model="form1.quarter" @visible-change="getQuarter1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in quarter1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month" >
                <el-select v-model="form1.month"  size="mini" @visible-change="getMonth1" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in month1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财周" prop="week" label-width="43px">
                <el-select v-model="form1.week"  size="mini" @visible-change="getWeek1" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in week1s"
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
                  <el-select v-model="form1.large" @visible-change="getLarge1" multiple collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in large1s"
                      :key="index"
                      :label="item"
                      :value="item">
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
                  <el-select v-model="form1.subLarge" @visible-change="getsubLarge1" multiple collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in subLarge1s"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="渠道名称" prop="bpName">
                  <el-input v-model="form1.bpName" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item style="margin-left:20px">
                  <el-button type="primary" size="mini" @click="onSubmit1()">查询</el-button>
                  <el-button @click="resetForm1('form1')" size="mini" >重置</el-button>
                </el-form-item>
              </div>
            </el-form>
            <h2>3S库存明细
              <a :disabled='disabledload1' @click.prevent="downloadDate1" class="small">下载</a>
            </h2>
            <v-table-query
              ref="Query3s1"
              :url="'querySTI3SStockTTL'"
              :columnurl="'/queryTableColumns251'"
              :tableName='"ConDT_STI_3S_Stock_TTL"'
              :source="'FF_IDSS_Data_CON'"
              :sheetsName="'3S库存明细'"
              :params='this.valieForm1()'
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
              <el-form-item label="财季" prop="quarter" label-width="43px">
                <el-select v-model="form2.quarter"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in quarters"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month" >
                <el-select v-model="form2.month"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months"
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
                <el-form-item label="大区"  prop="large" label-width="43px" >
                  <el-select v-model="form2.large" multiple collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in larges.children"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="上级渠道类型" prop="tbpType" label-width="90px" >
                  <el-input v-model="form2.tbpType" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="上级渠道编码" prop="tbpCode" label-width="90px">
                  <el-input v-model="form2.tbpCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="上级渠道名称" prop="tbpName" label-width="90px">
                  <el-input v-model="form2.tbpName" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
              </div>
              <div class="line2">
                <el-form-item label="物料名称" prop="matName" >
                    <el-input v-model="form2.matName" placeholder="请输入">
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="战区"  prop="subLarge" label-width="43px">
                  <el-select v-model="form2.subLarge" multiple collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in subLarges.children"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="下级渠道类型" prop="fbpType" label-width="90px">
                  <el-input v-model="form2.fbpType" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="下级渠道编码" prop="fbpCode" label-width="90px">
                  <el-input v-model="form2.fbpCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="下级渠道名称" prop="fbpName" label-width="90px">
                  <el-input v-model="form2.fbpName" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
              </div>
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
                <el-form-item>
                  <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
                  <el-button @click="resetForm('form2')" size="mini" >重置</el-button>
                </el-form-item>
            </el-form>
            <h2>STI明细 物料
              <a class="small">下载</a>
            </h2>
            <v-table-query
              ref="Query3s2"
              :url="'queryTableData251'"
              :columnurl="'/queryTableColumns251'"
              :tableName='"ConDT_STI_3S_11_TTL"'
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
              <el-form-item label="财年" prop="year">
                <el-select v-model="form3.year" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in years"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财季" prop="quarter" label-width="43px">
                <el-select v-model="form3.quarter"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in quarters"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month" >
                <el-select v-model="form3.month"  size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财周" prop="week" >
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
                <el-form-item label="物料编码" prop="matCode">
                  <el-input v-model="form3.matCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="大区"  prop="large" label-width="43px" >
                  <el-select v-model="form3.large" multiple collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in larges.children"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="上级渠道类型" prop="tbpType" label-width="90px" >
                  <el-input v-model="form3.tbpType" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="上级渠道编码" prop="tbpCode" label-width="90px">
                  <el-input v-model="form3.tbpCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="上级渠道名称" prop="tbpName" label-width="90px">
                  <el-input v-model="form3.tbpName" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
              </div>
              <div class="line2">
                <el-form-item label="物料名称" prop="matName" >
                    <el-input v-model="form3.matName" placeholder="请输入">
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="战区"  prop="subLarge" label-width="43px">
                  <el-select v-model="form3.subLarge" multiple collapse-tags placeholder="请选择">
                    <el-option
                      v-for="item in subLarges.children"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="下级渠道类型" prop="fbpType" label-width="90px">
                  <el-input v-model="form3.fbpType" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="下级渠道编码" prop="fbpCode" label-width="90px">
                  <el-input v-model="form3.fbpCode" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="下级渠道名称" prop="fbpName" label-width="90px">
                  <el-input v-model="form3.fbpName" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
              </div>
              <el-form-item label="SN" prop="sn">
                <el-input v-model="form3.sn" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="LN" prop="ln" label-width="43px">
                <el-input v-model="form3.ln" placeholder="请输入">
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
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
                <el-button @click="resetForm('form3')" size="mini" >重置</el-button>
              </el-form-item>
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
      disabledload1: false,
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['3S库存明细', 'STI明细_物料', 'STI明细_SN'],
      params1: {},
      params2: {},
      params3: {},
      form1: {
        year: [],
        month: [],
        quarter: [], // 季
        week: [], // 周
        large: [], // 大区
        subLarge: [], // 战区
        invDate: [], // 库存日期
        bpCode: '', // 渠道编码
        matCode: '', // 物料编码
        matName: '', // 物料名称
        bpName: '' // 渠道名称
      },
      year1s: [],
      month1s: [],
      quarter1s: [],
      week1s: [],
      large1s: [],
      subLarge1s: [],
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
        tbpCode: '',
        tbpName: '',
        tbpType: '',
        fbpCode: '',
        fbpName: '',
        fbpType: '',
        matCode: '',
        matName: ''
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
        tbpCode: '',
        tbpName: '',
        tbpType: '',
        fbpCode: '',
        fbpName: '',
        fbpType: '',
        matCode: '',
        matName: ''
      }
    }
  },
  components: {
    UploadNew,
    VTableQuery
  },
  created () {
    // this.valieForm1()
  },
  mounted () {
  },
  methods: {
    downloadDate1 () {
      this.disabledload1 = true
      let vm = this
      let params = vm.valieForm1()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_STI_3S_Stock_TTL'
      params['methodName'] = 'querySTI3SStockTTL'
      this.$ajax1({
        url: '/downloadExelOrCsv',
        data: params,
        done (data) {
          let blob = new Blob([data], {type: 'application/csv;charset=gb18030'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = '3s查询.csv'
          link.click()
          window.URL.revokeObjectURL(link.href)
          vm.disabledload1 = false
        }
      })
      setTimeout(() => {
        vm.disabledload1 = false
      }, 20000)
    },
    getLarge1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_STI_3S_Stock_TTL'
      params['checked'] = '1'
      params['obj0'] = '大区'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.large1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getsubLarge1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_STI_3S_Stock_TTL'
      params['checked'] = '1'
      params['obj0'] = '战区'
      if (Array.isArray(this.form1.large) && this.form1.large.length !== 0) {
        params['objk1'] = '大区'
        params['objv1'] = this.form1.large
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.subLarge1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getYear1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_STI_3S_Stock_TTL'
      params['checked'] = '1'
      params['obj0'] = '财年'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.year1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuarter1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_STI_3S_Stock_TTL'
      params['checked'] = '1'
      params['obj0'] = '财季'
      if (Array.isArray(this.form1.year) && this.form1.year.length !== 0) {
        params['objk1'] = '财年'
        params['objv1'] = this.form1.year
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.quarter1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getMonth1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_STI_3S_Stock_TTL'
      params['checked'] = '1'
      params['obj0'] = '财月'
      if (Array.isArray(this.form1.year) && this.form1.year.length !== 0) {
        params['objk1'] = '财年'
        params['objv1'] = this.form1.year
      }
      if (Array.isArray(this.form1.quarter) && this.form1.quarter.length !== 0) {
        params['objk2'] = '财季'
        params['objv2'] = this.form1.quarter
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.month1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getWeek1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_STI_3S_Stock_TTL'
      params['checked'] = '1'
      params['obj0'] = '财周'
      if (Array.isArray(this.form1.year) && this.form1.year.length !== 0) {
        params['objk1'] = '财年'
        params['objv1'] = this.form1.year
      }
      if (Array.isArray(this.form1.quarter) && this.form1.quarter.length !== 0) {
        params['objk2'] = '财季'
        params['objv2'] = this.form1.quarter
      }
      if (Array.isArray(this.form1.month) && this.form1.month.length !== 0) {
        params['objk3'] = '财月'
        params['objv3'] = this.form1.month
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.week1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    valieForm1 () { // params参数
      let params = {}
      if (this.form1.bpCode !== '') {
        params['bpCode'] = this.form1.bpCode.replace(/ /g, ',').split(',')
      }
      if (this.form1.matCode !== '') {
        params['matCode'] = this.form1.matCode.replace(/ /g, ',').split(',')
      }
      if (this.form1.matName !== '') {
        params['matName'] = this.form1.matName.replace(/ /g, ',').split(',')
      }
      if (this.form1.bpName !== '') {
        params['bpName'] = this.form1.bpName.replace(/ /g, ',').split(',')
      }
      if (this.form1.year.join() !== '') {
        params['year'] = this.form1.year
      }
      if (this.form1.month.join() !== '') {
        params['month'] = this.form1.month
      }
      if (this.form1.quarter.join() !== '') {
        params['quarter'] = this.form1.quarter
      }
      if (this.form1.week.join() !== '') {
        params['week'] = this.form1.week
      }
      if (this.form1.large.join() !== '') {
        params['large'] = this.form1.large
      }
      if (this.form1.subLarge.join() !== '') {
        params['subLarge'] = this.form1.subLarge
      }
      if (this.form1.invDate[0] !== undefined) {
        params['invDateBgn'] = this.form.invDate[0]
        params['invDateEnd'] = this.form.invDate[1]
      }
      let isnull = (JSON.stringify(params) === '{}')
      if (isnull) {
        params['init'] = 1
      }
      params['channel'] = 11
      params['ip'] = '1'
      return params
    },
    onSubmit () {
    },
    onSubmit1 () {
      this.valieForm1()
      this.$refs.Query3s1.getColumns()
    },
    resetForm1 (form) {
      this.$refs[form].resetFields()
      this.valieForm1()
      this.$refs.Query3s1.getColumns()
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
