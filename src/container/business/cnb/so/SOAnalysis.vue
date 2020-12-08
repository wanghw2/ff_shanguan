<template>
  <div class="so-wrap">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="soitem">
          <div class="block">
            <el-form :inline="true" :model="form" ref="form" label-width="65px" class="demo-form-inline">
              <el-form-item label="客户细分1" prop="cussegment1" label-width="70px">
                <el-select v-model="form.cussegment1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in cussegment1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family1" prop="family1">
                <el-select v-model="form.family1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in family1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="matCode">
                <el-select v-model="form.matCode" size="mini" @visible-change="getQuerymatCode" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in matCodes"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="渠道编码" prop="qdcode">
                <el-select v-model="form.qdcode" size="mini" @visible-change="getQueryqdCode" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in qdcodes"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户细分4" prop="cussegment4" label-width="70px">
                <el-select v-model="form.cussegment4" size="mini" @visible-change="getQuerycussegment41" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in cussegment4s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family2" prop="family2">
                <el-select v-model="form.family2" size="mini" @visible-change="getQueryFamily2" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in family2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料描述" prop="matDesc">
                <el-input v-model="form.matDesc" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="渠道名称" prop="qdname">
                <el-input v-model="form.qdname" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="大区" prop="area">
                <el-select v-model="form.area" size="mini" multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in areas"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="战区" prop="wararea">
                <el-select v-model="form.wararea" size="mini" @visible-change="getQuerywararea1" multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in warareas"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 20px">
                <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <div class="piegraph" ref="piegraph"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="soitem">
          <div class="block">
            <el-form :inline="true" :model="secform" ref="secform" label-width="65px" class="demo-form-inline">
              <el-form-item label="客户细分1" prop="cussegment1" label-width="70px">
                <el-select v-model="secform.cussegment1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in cussegment1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="大区" prop="area">
                <el-select v-model="secform.area" size="mini" multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in secareas"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="渠道编码" prop="qdcode">
                <el-input v-model="secform.qdcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="物料编码" prop="matCode">
                <el-input v-model="secform.matCode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="客户细分4" prop="cussegment4" label-width="70px">
                <el-select v-model="secform.cussegment4" size="mini" @visible-change="getQuerycussegment42" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in cussegment4s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="战区" prop="wararea">
                <el-select v-model="secform.wararea" size="mini" @visible-change="getQuerywararea2" multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in secwarareas"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="渠道名称" prop="qdname">
                <el-input v-model="secform.qdname" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="物料描述" prop="matDesc">
                <el-input v-model="secform.matDesc" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item style="margin-left: 20px">
                <el-button type="primary" size="mini" @click="onSubmit(secform)">查询</el-button>
                <el-button @click="resetForm('secform')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <div class="sun" ref="sunChart1" style="width:1100px;height:500px;margin: 10px auto;"></div>
            <div class="stack" ref="stack1" style="width:1100px;height:400px;margin: 10px auto;"></div>
            <div class="sun" ref="sunChart2" style="width:1100px;height:500px;margin: 10px auto;"></div>
            <div class="stack" ref="stack2" style="width:1100px;height:400px;margin: 10px auto;"></div>
            <div class="waterfallgraph" ref="waterfallgraph" style="width:1100px;height:400px;margin: 10px auto;"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="soitem">
          <div class="block">
            <el-form :inline="true" :model="formjd" ref="formjd" label-width="80px" class="demo-form-inline">
              <el-form-item label="时间纬度" prop="timedemjd" >
                <el-select v-model="formjd.timedemjd" size="mini"  filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timedemjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="matCodejd">
                <el-input v-model="formjd.matCodejd" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="formjd.familyjd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in familyjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="订单类型" prop="sotypejd">
                <el-select v-model="formjd.sotypejd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in sotypejds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间范围" prop="timerangejd">
                <el-select v-model="formjd.timerangejd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timerangejds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料描述" prop="matDescjd">
                <el-select v-model="formjd.matDescjd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in matDescjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品组" prop="productgroupjd">
                <el-select v-model="formjd.productgroupjd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productgroupjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="订单原因" prop="soreasonjd">
                <el-select v-model="formjd.soreasonjd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in soreasonjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 20px">
                <el-button type="primary" size="mini" @click="onSubmit(formjd)">查询</el-button>
                <el-button @click="resetForm('formjd')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <div class="graphEffective-box">
              <div class="graphEffective" ref="graphEffective"></div>
              <div class="graphEffective" ref="graphEffective1"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="soitem">
          <div class="block">
            <el-form :inline="true" :model="formjd" ref="formjd" label-width="80px" class="demo-form-inline">
              <el-form-item label="时间纬度" prop="timedemjd" >
                <el-select v-model="formjd.timedemjd" size="mini"  filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timedemjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="matCodejd">
                <el-input v-model="formjd.matCodejd" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="产品Family" prop="family">
                <el-select v-model="formjd.familyjd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in familyjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="订单类型" prop="sotypejd">
                <el-select v-model="formjd.sotypejd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in sotypejds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间范围" prop="timerangejd">
                <el-select v-model="formjd.timerangejd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timerangejds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料描述" prop="matDescjd">
                <el-select v-model="formjd.matDescjd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in matDescjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品组" prop="productgroupjd">
                <el-select v-model="formjd.productgroupjd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productgroupjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="订单原因" prop="soreasonjd">
                <el-select v-model="formjd.soreasonjd" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in soreasonjds"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 20px">
                <el-button type="primary" size="mini" @click="onSubmit(formjd)">查询</el-button>
                <el-button @click="resetForm('formjd')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <div class="graphjd1-box">
              <div class="graph1" ref="graph1"></div>
            </div>
            <div class="graphjd2-box">
              <div class="graph2" ref="graph2"></div>
              <div class="graph3" ref="graph3"></div>
            </div>
            <div class="graphjd3-box">
              <div class="graph4" ref="graph4"></div>
              <div class="graph5" ref="graph5"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="soitem">
          <div class="block">
            <div class="graphDump1-box">
              <div class="graphDump1" ref="graphDump1"></div>
            </div>
            <div class="graphDump2-box">
              <div class="graphDump3" ref="graphDump3"></div>
              <div class="graphDump2" ref="graphDump2"></div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import Upload from '@/components/public/upload1'
import echarts from 'echarts'
export default {
  data () {
    return {
      tabPosition: 'left',
      params: {},
      menuArr: ['订单构成', '欠单分析', '虚拟欠单', '虚拟订单_京东', '虚拟转储单'],
      form: {
        cussegment1: [],
        cussegment4: [],
        qdcode: [],
        qdname: '',
        area: [],
        family1: [],
        family2: [],
        matDesc: '',
        matCode: ''
      },
      cussegment1s: [],
      cussegment4s: [],
      matCodes: [],
      qdcodes: [],
      areas: [],
      warareas: [],
      family1s: [],
      family2s: [],
      secform: {
        cussegment1: [],
        cussegment4: [],
        qdcode: '',
        area: [],
        wararea: [],
        qdname: '',
        matDesc: '',
        matCode: ''
      },
      seccussegment1s: [],
      seccussegment4s: [],
      secqdnames: [],
      secmatDescs: [],
      secareas: [],
      secwarareas: [],
      formjd: {
        timedemjd: '',
        familyjd: '',
        timerangejd: '',
        matDescjd: '',
        matCodejd: '',
        productgroupjd: '',
        soreasonjd: '',
        sotypejd: ''
      },
      timedemjds: '',
      familyjds: '',
      timerangejds: '',
      matDescjds: '',
      productgroupjds: '',
      soreasonjds: '',
      sotypejds: ''
    }
  },
  components: {
    Upload,
    VTable
  },
  created () {
    this.getQuerycussegment1()
    this.getQueryFamily1()
    this.getQueryarea() // 大区
  },
  mounted () {
    this.$nextTick(() => {
      this.piegraph()
      this.sunChart1() // 旭日图
      this.sunChart2() // 旭日图
      this.stack1()
      this.stack2()
      this.waterfallgraph()
      this.graph1()
      this.graph2()
      this.graph3()
      this.graph4()
      this.graph5()
      this.graphDump1()
      this.graphDump2()
      this.graphDump3()
      this.graphEffective()
      this.graphEffective1()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      this.piegraph()
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    valieForm (n) { // params参数
      let params = {}
      if (this.form.cussegment1.join() !== '') {
        params['cusSegment1'] = this.form.cussegment1
      }
      if (this.form.cussegment4.join() !== '') {
        params['cusSegment4'] = this.form.cussegment4
      }
      if (this.form.qdcode.join() !== '') { // 渠道编码
        params['bpCode'] = this.form.qdcode
      }
      if (this.form.family1.join() !== '') {
        params['family1'] = this.form.family1
      }
      if (this.form.family2.join() !== '') {
        params['family2'] = this.form.family2
      }
      if (this.form.matCode.join() !== '') { // 物料编码
        params['matCode'] = this.form.matCode
      }
      if (this.form.area.join() !== '') { // 大区
        params['area'] = this.form.area
      }
      if (this.form.wararea.join() !== '') { // 战区
        params['warArea'] = this.form.wararea
      }
      if (this.form.matDesc !== '') { // 物料描述
        params['matDesc'] = this.form.matDesc
      }
      if (this.form.qdname !== '') {
        params['bpName'] = this.form.qdname // 渠道名称
      }
      params['style'] = n
      this.params = params
    },
    valiesecForm (n) { // params参数
      let params = {}
      if (this.secform.cussegment1.join() !== '') {
        params['cusSegment1'] = this.secform.cussegment1
      }
      if (this.secform.cussegment4.join() !== '') {
        params['cusSegment4'] = this.secform.cussegment4
      }
      if (this.secform.area.join() !== '') { // 大区
        params['area'] = this.secform.area
      }
      if (this.secform.wararea.join() !== '') { // 战区
        params['wararea'] = this.secform.wararea
      }
      if (this.secform.matDesc !== '') {
        params['matDesc'] = this.secform.matDesc
      }
      if (this.secform.matCode !== '') {
        params['matCode'] = this.secform.matCode
      }
      if (this.secform.qdname !== '') {
        params['bp_name'] = this.secform.bp_name // 渠道名称
      }
      if (this.secform.qdcode !== '') {
        params['bp_code'] = this.secform.qdcode
      }
      params['style'] = n
      return params
    },
    getQuerycussegment1 () { // 客户细分1
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = '客户细分1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cussegment1s = data
          vm.seccussegment1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerycussegment41 () { // 客户细分4-1
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = '客户细分4'
      if (Array.isArray(vm.form.cussegment1) && vm.form.cussegment1.length !== 0) {
        params['objk1'] = '客户细分1'
        params['objv1'] = vm.form.cussegment1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cussegment4s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryqdCode () { // 渠道编码
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = 'BP Code'
      if (Array.isArray(vm.form.cussegment1) && vm.form.cussegment1.length !== 0) {
        params['objk1'] = '客户细分1'
        params['objv1'] = vm.form.cussegment1
      }
      if (Array.isArray(vm.form.cussegment4) && vm.form.cussegment4.length !== 0) {
        params['objk1'] = '客户细分4'
        params['objv1'] = vm.form.cussegment4
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.qdcodes = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerycussegment42 () { // 客户细分4-2
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = '客户细分4'
      if (Array.isArray(vm.secform.cussegment1) && vm.secform.cussegment1.length !== 0) {
        params['objk1'] = '客户细分1'
        params['objv1'] = vm.secform.cussegment1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.seccussegment4s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryFamily1 () { // family1
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = 'Family1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.family1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryFamily2 () { // family2
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = 'Family2'
      if (Array.isArray(vm.form.family1) && vm.form.family1.length !== 0) {
        params['objk1'] = 'Family1'
        params['objv1'] = vm.form.family1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.family2s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerymatCode () { // 物料编码
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = 'PN'
      if (Array.isArray(vm.form.family1) && vm.form.family1.length !== 0) {
        params['objk1'] = 'Family1'
        params['objv1'] = vm.form.family1
      }
      if (Array.isArray(vm.form.family2) && vm.form.family2.length !== 0) {
        params['objk1'] = 'Family2'
        params['objv1'] = vm.form.family2
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.matCodes = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryarea () { // 大区
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = '大区'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.areas = data
          vm.secareas = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerywararea1 () { // 战区1
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = '战区'
      if (Array.isArray(vm.form.area) && vm.form.area.length !== 0) {
        params['objk1'] = '大区'
        params['objv1'] = vm.form.area
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.warareas = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerywararea2 () { // 战区2
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_SaleOrder_Month'
      params['obj0'] = '战区'
      if (Array.isArray(vm.secform.area) && vm.secform.area.length !== 0) {
        params['objk1'] = '大区'
        params['objv1'] = vm.secform.area
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.secwarareas = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    piegraph () {
      let vm = this
      vm.valieForm(1)
      vm.$ajax({
        url: '/getOrderConstitute',
        data: vm.params,
        done (data) {
          let seriesData = data.series
          let legenddata = data.legend
          var option = {
            title: {
              text: '总订单构成',
              left: '10%',
              textStyle: {
                fontSize: 14
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            legend: {
              orient: 'vertical',
              right: '20%',
              top: 'center',
              data: legenddata
            },
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#E00FD1', '#7E6CC4', '#891734', '#178389', '#E895E5'],
            series: [
              {
                name: seriesData[0].name,
                type: 'pie',
                selectedMode: 'single',
                center: ['45%', '50%'],
                radius: [0, '38%'],
                label: {
                  normal: {
                    position: 'inner'
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: seriesData[0].data
              },
              {
                name: seriesData[1].name,
                type: 'pie',
                radius: ['42%', '50%'],
                center: ['45%', '50%'],
                label: {
                  normal: {
                    position: 'outer',
                    formatter: '{b}: {c} ({d}%)'
                  }
                },
                data: seriesData[1].data
              }
            ]
          }
          let pieGraph = echarts.init(vm.$refs.piegraph)
          pieGraph.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    sunChart1 () {
      let vm = this
      vm.$ajax({
        url: '/getUnderAnalysis ',
        data: {
          style: 1,
          type: '自然分货'
        },
        done (data) {
          let seriesData = data.series
          var option = {
            title: {
              text: '自然分货',
              textStyle: {
                fontSize: 14,
                align: 'center'
              }
            },
            series: {
              type: 'sunburst',
              highlightPolicy: 'ancestor',
              data: seriesData,
              radius: [0, '95%'],
              sort: null,
              levels: [
                {},
                {
                  r0: '15%',
                  r: '35%',
                  itemStyle: {
                    borderWidth: 2
                  },
                  label: {
                    rotate: 'tangential'
                  }
                }, {
                  r0: '35%',
                  r: '70%',
                  label: {
                    align: 'right'
                  }
                }, {
                  r0: '70%',
                  r: '72%',
                  label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                  },
                  itemStyle: {
                    borderWidth: 3
                  }
                }
              ]
            }
          }
          let sun = echarts.init(vm.$refs.sunChart1)
          sun.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    sunChart2 () {
      let vm = this
      vm.$ajax({
        url: '/getUnderAnalysis ',
        data: {
          style: 1,
          type: '比例分货'
        },
        done (data) {
          let seriesData = data.series
          var option = {
            title: {
              text: '比例分货',
              textStyle: {
                fontSize: 14,
                align: 'center'
              }
            },
            series: {
              type: 'sunburst',
              highlightPolicy: 'ancestor',
              data: seriesData,
              radius: [0, '95%'],
              sort: null,
              levels: [
                {},
                {
                  r0: '15%',
                  r: '35%',
                  itemStyle: {
                    borderWidth: 2
                  },
                  label: {
                    rotate: 'tangential'
                  }
                }, {
                  r0: '35%',
                  r: '70%',
                  label: {
                    align: 'right'
                  }
                }, {
                  r0: '70%',
                  r: '72%',
                  label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                  },
                  itemStyle: {
                    borderWidth: 3
                  }
                }
              ]
            }
          }
          let sun = echarts.init(vm.$refs.sunChart2)
          sun.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    stack1 () {
      let vm = this
      vm.$ajax({
        url: '/getUnderAnalysis ',
        data: {
          style: 2
        },
        done (data) {
          // let seriesData = data.series
          // let legenddata = data.legend
          // let axisdata = data.yAxis
          var option = {
            title: {
              text: '虚拟订单有效期情况统计',
              textStyle: {
                fontSize: 14
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['NB', 'DT', 'Think']
            },
            dataZoom: [
              {
                show: true,
                start: 10,
                end: 100
              },
              {
                type: 'inside',
                start: 10,
                end: 100
              }
            ],
            grid: {
              left: '3%',
              right: '4%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
              type: 'value',
              boundaryGap: [0, 0.01]
            },
            series: [
              {
                name: 'NB',
                type: 'bar',
                barGap: 0,
                stack: 'psd',
                // label: {
                //   normal: {
                //     show: true,
                //     position: 'insideRight'
                //   }
                // },
                data: [123, 69, 34, 12, 44, 65, 40]
              },
              {
                name: 'DT',
                type: 'bar',
                barGap: 0,
                stack: 'psd',
                // label: {
                //   normal: {
                //     show: true,
                //     position: 'insideRight'
                //   }
                // },
                data: [15, 24, 54, 89, 26, 90, 58]
              },
              {
                name: 'Think',
                type: 'bar',
                barGap: 0,
                stack: 'psd',
                // label: {
                //   normal: {
                //     show: true,
                //     position: 'insideRight'
                //   }
                // },
                data: [45, 64, 24, 46, 20, 80, 45]
              }
            ]
          }
          let stack1 = echarts.init(vm.$refs.stack1)
          stack1.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    stack2 () {
      var option = {
        title: {
          text: '虚拟订单有效期情况统计',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['NB', 'DT', 'Think']
        },
        grid: {
          left: '3%',
          right: '4%',
          containLabel: true
        },
        dataZoom: [
          {
            show: true,
            start: 10,
            end: 100
          },
          {
            type: 'inside',
            start: 10,
            end: 100
          }
        ],
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: 'NB',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideRight'
            //   }
            // },
            data: [123, 69, 34, 12, 44, 65, 40]
          },
          {
            name: 'DT',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideRight'
            //   }
            // },
            data: [15, 24, 54, 89, 26, 90, 58]
          },
          {
            name: 'Think',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideRight'
            //   }
            // },
            data: [45, 64, 24, 46, 20, 80, 45]
          }
        ]
      }
      let stack1 = echarts.init(this.$refs.stack2)
      stack1.setOption(option)
    },
    waterfallgraph () { // 瀑布图
      let vm = this
      vm.$ajax({
        url: '/getUnderAnalysis ',
        data: {
          style: 3
        },
        done (data) {
          let seriesData = data.series
          let legenddata = data.legend
          let axisdata = data.xAxis
          var option = {
            title: {
              text: 'PSD分布',
              left: 'center',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: function (params) {
                var tar
                if (params[1].value !== '-') {
                  tar = params[1]
                } else {
                  tar = params[0]
                }
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
              }
            },
            legend: {
              data: legenddata
            },
            toolbox: {
              show: true,
              feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              top: 80,
              bottom: '13%',
              containLabel: true
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 40
              },
              {
                type: 'inside',
                start: 0,
                end: 40
              }
            ],
            xAxis: [
              {
                type: 'category',
                splitLine: {show: false},
                data: axisdata,
                axisLabel: {
                  interval: 0,
                  rotate: 20,
                  margin: 8
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: seriesData
            // [
            //   {
            //     name: '辅助',
            //     type: 'bar',
            //     stack: '总量',
            //     itemStyle: {
            //       normal: {
            //         barBorderColor: 'rgba(0,0,0,0)',
            //         color: 'rgba(0,0,0,0)'
            //       },
            //       emphasis: {
            //         barBorderColor: 'rgba(0,0,0,0)',
            //         color: 'rgba(0,0,0,0)'
            //       }
            //     },
            //     data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
            //   },
            //   {
            //     name: '收入',
            //     type: 'bar',
            //     stack: '总量',
            //     itemStyle: {
            //       normal: {
            //         label: {
            //           show: true,
            //           position: 'top'
            //         }
            //       }
            //     },
            //     data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
            //   },
            //   {
            //     name: '支出',
            //     type: 'bar',
            //     stack: '总量',
            //     itemStyle: {
            //       normal: {
            //         label: {
            //           show: true,
            //           position: 'bottom'
            //         }
            //       }
            //     },
            //     data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
            //   }
            // ]
          }
          let waterfallgraph = echarts.init(vm.$refs.waterfallgraph)
          waterfallgraph.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    graph1 () {
      var option = {
        title: {
          text: '虚拟订单来单情况',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['实际', '目标']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['实单', '虚单']
        },
        series: [
          {
            name: '实际',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [203, 129]
          },
          {
            name: '目标',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [265, 230]
          }
        ]
      }
      let graph1 = echarts.init(this.$refs.graph1)
      graph1.setOption(option)
    },
    graphDump1 () {
      var option = {
        title: {
          text: '虚拟订单来单情况',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['实际', '目标']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['DT', 'NB']
        },
        series: [
          {
            name: '实际',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [203, 129]
          },
          {
            name: '目标',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [265, 230]
          }
        ]
      }
      let graphDump1 = echarts.init(this.$refs.graphDump1)
      graphDump1.setOption(option)
    },
    graph2 () {
      var option = {
        title: {
          text: '虚拟订单有效期情况统计',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['NB', 'DT']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['一天', '两天', '三天', '三天以上']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: 'NB',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [123, 69, 34, 12]
          },
          {
            name: 'DT',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            data: [15, 24, 54, 26]
          }
        ]
      }
      let graph2 = echarts.init(this.$refs.graph2)
      graph2.setOption(option)
    },
    graphDump2 () {
      var option = {
        title: {
          text: '转储情况DT',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['真实订单', '虚拟订单']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['mtm1', 'mtm2', 'mtm3']
        },
        series: [
          {
            name: '真实订单',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [123, 69, 34]
          },
          {
            name: '虚拟订单',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [15, 24, 54]
          }
        ]
      }
      let graphDump2 = echarts.init(this.$refs.graphDump2)
      graphDump2.setOption(option)
    },
    graph3 () {
      var option = {
        title: {
          text: '虚拟订单有效期情况统计',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['NB', 'DT', 'Think']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
          {
            name: 'NB',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [123, 69, 34, 12, 44, 65, 40]
          },
          {
            name: 'DT',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [15, 24, 54, 89, 26, 90, 58]
          },
          {
            name: 'Think',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [45, 64, 24, 46, 20, 80, 45]
          }
        ]
      }
      let graph3 = echarts.init(this.$refs.graph3)
      graph3.setOption(option)
    },
    graphDump3 () {
      var option = {
        title: {
          text: '虚拟订单有效期情况统计',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['NB', 'DT', 'Think']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
          {
            name: 'NB',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [123, 69, 34, 12, 44, 65, 40]
          },
          {
            name: 'DT',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [15, 24, 54, 89, 26, 90, 58]
          },
          {
            name: 'Think',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [45, 64, 24, 46, 20, 80, 45]
          }
        ]
      }
      let graphDump3 = echarts.init(this.$refs.graphDump3)
      graphDump3.setOption(option)
    },
    graph4 () {
      var option = {
        title: {
          text: '虚拟订单执行情况',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['实际', '百分比']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['一月', '二月']
        },
        series: [
          {
            name: '实际',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [103, 169]
          },
          {
            name: '百分比',
            type: 'bar',
            barGap: 0,
            label: {
              formatter: '{value}%',
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [54, 96]
          }
        ]
      }
      let graph4 = echarts.init(this.$refs.graph4)
      graph4.setOption(option)
    },
    graph5 () {
      var option = {
        title: {
          text: '订单替换情况DT',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['真实订单', '虚拟订单']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['mtm1', 'mtm2', 'mtm3']
        },
        series: [
          {
            name: '真实订单',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [123, 69, 34]
          },
          {
            name: '虚拟订单',
            type: 'bar',
            barGap: 0,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [15, 24, 54]
          }
        ]
      }
      let graph5 = echarts.init(this.$refs.graph5)
      graph5.setOption(option)
    },
    graphEffective () {
      var option = {
        title: {
          text: '虚拟订单有效期情况统计',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['NB', 'DT', 'Think']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: 'NB',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [123, 69, 34, 12, 44, 65, 40]
          },
          {
            name: 'DT',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [15, 24, 54, 89, 26, 90, 58]
          },
          {
            name: 'Think',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [45, 64, 24, 46, 20, 80, 45]
          }
        ]
      }
      let graphEffective = echarts.init(this.$refs.graphEffective)
      graphEffective.setOption(option)
    },
    graphEffective1 () {
      var option = {
        title: {
          text: '虚拟订单有效期情况统计',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['NB', 'DT', 'Think']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: 'NB',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [123, 69, 34, 12, 44, 65, 40]
          },
          {
            name: 'DT',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [15, 24, 54, 89, 26, 90, 58]
          },
          {
            name: 'Think',
            type: 'bar',
            barGap: 0,
            stack: 'psd',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [45, 64, 24, 46, 20, 80, 45]
          }
        ]
      }
      let graphEffective = echarts.init(this.$refs.graphEffective1)
      graphEffective.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.so-wrap
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .soitem
    width 100%
    height 100%
    .el-form-item
      margin-bottom 0 !important
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
        margin-bottom 5px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
      .piegraph
        width 100%
        height 400px
        float left
      .piebargraph
        width 1200px
        height 400px
      .waterfallgraph
        width 1100px
        height 400px
        margin 0 auto
      .graphjd1-box
        width 100%
        height auto
        overflow hidden
        margin 10px auto
        .graph1
          width 1100px
          height 250px
      .graphjd2-box
        width 100%
        height auto
        overflow hidden
        margin 10px auto
        .graph2, .graph3
          width 550px
          height 400px
          float left
      .graphjd3-box
        width 100%
        height auto
        overflow hidden
        margin 10px auto
        .graph4,.graph5
          width 550px
          height 250px
          float left
      .graphDump1-box
        width 100%
        height auto
        overflow hidden
        margin 10px auto
        .graphDump1
          width 1100px
          height 250px
          float left
      .graphDump2-box
        width 100%
        height auto
        overflow hidden
        margin 10px auto
        .graphDump2,.graphDump3
          width 560px
          height 400px
          float left
      .graphEffective-box
        width 100%
        height auto
        overflow hidden
        margin 10px auto
        .graphEffective
          width 560px
          height 400px
          float left
</style>
