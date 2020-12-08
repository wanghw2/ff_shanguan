<template>
  <div class="so-wrap">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="soitem">
          <div class="block">
            <el-form :inline="true" :model="form" ref="form" label-width="70px" class="demo-form-inline">
              <el-form-item label="CRAD" prop="craddate" >
                <el-date-picker
                  v-model="form.craddate"
                  type="daterange"
                  size="mini"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="客户细分1" prop="cussegment1">
                <el-select v-model="form.cussegment1" size="mini" multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in cussegment1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
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
              <el-form-item label="渠道编码" prop="qdcode">
                <el-input v-model="form.qdcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item><br/>
              <el-form-item label="发货过账" prop="cadate">
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
              <el-form-item label="客户细分4" prop="cussegment4">
                <el-select v-model="form.cussegment4" size="mini" @visible-change="getQuerycussegment41" multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in cussegment4s"
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
              <el-form-item label="渠道名称" prop="qdname">
                <el-input v-model="form.qdname" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item><br/>
              <el-form-item label="分货类型" prop="alloType">
                <el-select v-model="form.alloType" size="mini" multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in alloTypes.children"
                    :key="index"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="form.family" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in familys"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="materialcode">
                <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="物料描述" prop="martidesc">
                <el-input v-model="form.martidesc" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item><br/>
              <el-form-item style="margin-left: 10px">
                <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>CRAD Accuracy
              <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
            </h2>
            <div class="lineGraph" ref="lineGraph"></div>
            <h2>时段分布
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
            </h2>
            <div class="timeDist">
              <el-form :inline="true" :model="formdim" ref="formdim" label-width="65px" class="demo-form-inline">
                <el-form-item label="选择维度" prop="dimension">
                  <el-select v-model="formdim.dim" size="mini" placeholder="请选择">
                    <el-option
                      v-for="(item, index) in dims"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item style="margin-left: 10px">
                  <el-button type="primary" size="mini" @click="onSubmitdim(formdim)">查询</el-button>
                </el-form-item>
              </el-form>
              <div class="confirmcradgraph" ref="confirmcradgraph" style="width:1100px;height: 400px;margin:10px auto"></div>
            </div>
            <h2>产品分布
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="cradBox">
              <div class="cradChart" ref="cradChart"></div>
              <div class="cradChart" ref="cradChart1"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="soitem">
          <div class="block">
            <el-form :inline="true" :model="secform" ref="secform" label-width="70px" class="demo-form-inline">
              <el-form-item label="客户细分1" prop="cussegment1">
                <el-select v-model="secform.cussegment1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in seccussegment1"
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
              <el-form-item label="物料编码" prop="matcode">
                <el-input v-model="secform.matcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item><br/>
              <el-form-item label="客户细分4" prop="cussegment4">
                <el-select v-model="secform.cussegment4" size="mini" @visible-change="getQuerycussegment42" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in seccussegment4"
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
              <el-form-item label="物料描述" prop="martidesc">
                <el-input v-model="secform.martidesc" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item><br/>
              <el-form-item label="分货类型" prop="alloType">
                <el-select v-model="secform.alloType" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in secalloType.children"
                    :key="index"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="secform.family" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in secfamily"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 10px">
                <el-button type="primary" size="mini" @click="onSubmitSec(secform)">查询</el-button>
                <el-button @click="resetForm('secform')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <div class="stackpsd" ref="stackpsd1"></div>
            <h2>PSD-CRAD （by Family）
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
            </h2>
            <div class="chartBox">
              <div class="stackpsd" ref="stackpsd2"></div>
              <div class="stackpsd" ref="stackpsd3"></div>
            </div>
            <h2>PSD 订单明细
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid">
              <v-table-query
                :params="params1"
                :url="'getPSDCRAD'"
                :sheetsName="'ConDT_PSD_订单明细'"
                :tableName='"ConDT_CRAD_SaleOrder"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_PSD_订单明细'"
                ref="gridSaleOrder">
              </v-table-query>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="soitem">
          <div class="block">
            <div class="pie" ref="pie"></div>
            <el-form :inline="true" :model="formhabit" ref="formhabit" label-width="65px" class="demo-form-inline">
              <el-form-item label="创建日期" prop="buildDate" >
                <el-date-picker
                  v-model="formhabit.buildDate"
                  type="daterange"
                  size="mini"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="客户细分1" prop="cussegment1">
                <el-select v-model="formhabit.cussegment1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in habitcussegment1"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="大区" prop="area">
                <el-select v-model="formhabit.area" size="mini" multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in habitareas"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="渠道编码" prop="qdcode">
                <el-input v-model="formhabit.qdcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item><br/>
              <el-form-item label="发货过账" prop="caDate">
                <el-date-picker
                  v-model="formhabit.caDate"
                  type="daterange"
                  size="mini"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="客户细分4" prop="cussegment4">
                <el-select v-model="formhabit.cussegment4" size="mini" @visible-change="getQuerycussegment44" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in habitcussegment4"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="战区" prop="wararea">
                <el-select v-model="formhabit.wararea" size="mini" @visible-change="getQuerywararea4" multiple collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in habitwarareas"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="渠道名称" prop="qdname">
                <el-input v-model="formhabit.qdname" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item><br/>
              <el-form-item label="分货类型" prop="alloType">
                <el-select v-model="formhabit.alloType" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in habitalloType.children"
                    :key="index"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="formhabit.family" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in habitfamily"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="matCode">
                <el-input v-model="formhabit.matCode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="物料描述" prop="matDesc">
                <el-input v-model="formhabit.matDesc" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item><br/>
              <el-form-item label="选择维度" prop="dimension">
                <el-select v-model="formhabit.dimension" size="mini" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in habitdimensions"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="订单状态" prop="orderstatus">
                <el-select v-model="formhabit.orderstatus" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in habitorderstatus.children"
                    :key="index"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 10px">
                <el-button type="primary" size="mini" @click="onSubmithabit(formhabit)">查询</el-button>
                <el-button @click="resetForm('formhabit')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <div class="stackpsd" ref="stackhabit1"></div>
            <div class="stackpsd" ref="stackhabit2"></div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import VTableQuery from '@/components/public/vtableQuery'
import echarts from 'echarts'
import axios from 'axios'
export default {
  data () {
    return {
      params: {},
      params1: {style: 4},
      toggle: false,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      seriesData: [],
      axisData: [],
      legendData: [],
      tabPosition: 'left',
      menuArr: ['CRAD KPI', 'CRAD PSD', 'CRAD 分布'],
      clickFamilyName: '',
      psdFamily: '',
      token: '',
      token1: '',
      form: { // 第一个三级菜单下的表单筛选
        craddate: [],
        cussegment1: [],
        cussegment4: [],
        area: [],
        wararea: [],
        family: [],
        alloType: [],
        qdcode: '',
        qdname: '',
        martidesc: '',
        materialcode: '',
        cadate: [] // 发货过账
      },
      cussegment1s: [],
      cussegment4s: [],
      orderstatuss: [], // 订单状态
      areas: [],
      warareas: [],
      familys: [],
      alloTypes: [],
      formdim: { // 时段分布（选择维度）
        dim: '客户细分1'
      },
      dims: ['客户细分1', '客户细分4', '战区', '渠道编码'],
      secform: { // 第二个三级菜单--PSD-CRAD
        cussegment1: [],
        cussegment4: [],
        qdcode: '',
        area: [],
        wararea: [],
        family: [],
        alloType: [],
        qdname: '',
        matcode: '',
        martidesc: ''
      },
      seccussegment1: [],
      seccussegment4: [],
      secareas: [],
      secwarareas: [],
      secfamily: [],
      secalloType: [],
      formhabit: { // 第三个三级菜单--CRAD 分布
        cadate: [],
        buildDate: [],
        cussegment1: [],
        cussegment4: [],
        orderstatus: [],
        qdcode: '',
        area: [],
        wararea: [],
        family: [],
        alloType: [],
        qdname: '',
        dimension: '客户细分1',
        matCode: '',
        matDesc: ''
      },
      habitdimensions: ['客户细分1', '客户细分4', '战区', '分货类型', 'Family', '渠道名称', '物料编码'],
      habitcussegment1: [],
      habitareas: [],
      habitorderstatus: [],
      habitwarareas: [],
      habitcussegment4: [],
      habitfamily: [],
      habitalloType: []
    }
  },
  components: {
    VTable,
    VTableQuery
  },
  created () {
    this.getchart1() // 获取token值
    this.getQuerycussegment1() // 客户细分1
    this.getQueryarea() // 大区
    this.getQueryFamily() // family
    this.getQuerydata() // 订单状态、 分货类型
    this.valiesecFormTable(4) // 表格初始化条件
  },
  mounted () {
    this.$nextTick(() => {
      this.lineGraph() // Accuracy 第1个图
      this.confirmcradgraph() // Accuracy 第2个图
      this.productdist() // Accuracy 第3个图
      this.pie() // CRAD 分布
      this.stackhabit() // CRAD 分布
      this.toggleList()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.$refs.gridSaleOrder.getColumns()
    }, 3000)
  },
  methods: {
    toggleList () {
      let box = document.getElementsByClassName('lineGraph')[0]
      if (this.toggle) {
        box.style.display = 'none'
      } else {
        box.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let box = document.getElementsByClassName('timeDist')[0]
      if (this.toggle1) {
        box.style.display = 'none'
      } else {
        box.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let box = document.getElementsByClassName('cradBox')[0]
      if (this.toggle2) {
        box.style.display = 'none'
      } else {
        box.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    toggleList3 () {
      let box = document.getElementsByClassName('addgrid')[0]
      if (this.toggle3) {
        box.style.display = 'none'
      } else {
        box.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let box = document.getElementsByClassName('chartBox')[0]
      if (this.toggle4) {
        box.style.display = 'none'
      } else {
        box.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    onSubmit (form) {
      this.lineGraph()
      this.confirmcradgraph()
      this.productdist()
    },
    onSubmitSec (form) {
      axios.all([this.getchart1()]).then(() => {
        this.$nextTick(() => {
          this.stackpsd2()
        })
      })
      this.valiesecFormTable(4)
      this.$refs.gridSaleOrder.getColumns()
    },
    onSubmitdim (form) { // 时段分布 （维度条件限制）
      this.confirmcradgraph()
    },
    onSubmithabit (form) { // 时段分布
      this.stackhabit()
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
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['businessLine'] = 'ConDT'
      params['style'] = n
      this.params = params
    },
    valieFormdim () { // 时段分布
      this.valieForm(2)
      if (this.formdim.dim !== '') {
        this.params['dimension'] = this.formdim.dim.replace(/ /g, ',')
      }
      this.params['dbName'] = 'FF_IDSS_Data_CON'
      this.params['businessLine'] = 'ConDT'
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
        params['warArea'] = this.secform.wararea
      }
      if (this.secform.family.join() !== '') {
        params['family'] = this.secform.family
      }
      if (this.secform.alloType.join() !== '') { // 分货类型
        params['alloType'] = this.secform.alloType
      }
      if (this.secform.martidesc !== '') { // 物料描述
        params['matDesc'] = this.secform.martidesc.replace(/ /g, ',').split(',')
      }
      if (this.secform.qdname !== '') { // 渠道名称
        params['bpName'] = this.secform.qdname.replace(/ /g, ',').split(',')
      }
      if (this.secform.qdcode !== '') { // 渠道编码
        params['bpCode'] = this.secform.qdcode.replace(/ /g, ',').split(',')
      }
      if (this.secform.matcode !== '') { // 物料编码
        params['pn'] = this.secform.matcode.replace(/ /g, ',').split(',')
      }
      params['style'] = n
      this.params = params
    },
    valiesecFormTable (n) { // 查询表格params参数
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
        params['warArea'] = this.secform.wararea
      }
      if (this.secform.family.join() !== '') {
        params['family'] = this.secform.family
      }
      if (this.secform.alloType.join() !== '') { // 分货类型
        params['alloType'] = this.secform.alloType
      }
      if (this.secform.martidesc !== '') { // 物料描述
        params['matDesc'] = this.secform.martidesc.replace(/ /g, ',').split(',')
      }
      if (this.secform.qdname !== '') { // 渠道名称
        params['bpName'] = this.secform.qdname.replace(/ /g, ',').split(',')
      }
      if (this.secform.qdcode !== '') { // 渠道编码
        params['bpCode'] = this.secform.qdcode.replace(/ /g, ',').split(',')
      }
      if (this.secform.matcode !== '') { // 物料编码
        params['pn'] = this.secform.matcode.replace(/ /g, ',').split(',')
      }
      params['style'] = n
      this.params1 = params
    },
    valiehabitForm (n) { // params参数
      let params = {}
      if (this.formhabit.cussegment1.join() !== '') {
        params['cusSegment1'] = this.formhabit.cussegment1
      }
      if (this.formhabit.cussegment4.join() !== '') {
        params['cusSegment4'] = this.formhabit.cussegment4
      }
      if (this.formhabit.family.join() !== '') {
        params['family'] = this.formhabit.family
      }
      if (this.formhabit.alloType.join() !== '') {
        params['alloType'] = this.formhabit.alloType
      }
      if (this.formhabit.area.join() !== '') { // 大区
        params['area'] = this.formhabit.area
      }
      if (this.formhabit.orderstatus.join() !== '') { // 订单状态
        params['orderStatus'] = this.formhabit.orderstatus
      }
      if (this.formhabit.wararea.join() !== '') { // 战区
        params['warArea'] = this.formhabit.wararea
      }
      if (this.formhabit.matDesc !== '') {
        params['matDesc'] = this.formhabit.matDesc.replace(/ /g, ',')
      }
      if (this.formhabit.matCode !== '') {
        params['matCode'] = this.formhabit.matCode.replace(/ /g, ',')
      }
      if (this.formhabit.qdname !== '') {
        params['bpName'] = this.formhabit.qdname.replace(/ /g, ',')
      }
      if (this.formhabit.buildDate !== '') { // 创建日期
        params['buildStart'] = this.formhabit.buildDate[0]
        params['buildEnd'] = this.formhabit.buildDate[1]
      }
      if (this.formhabit.cadate !== '') { // 发货过账
        params['caStartDay'] = this.formhabit.cadate[0]
        params['caEndDay'] = this.formhabit.cadate[1]
      }
      if (this.formhabit.qdcode !== '') {
        params['bpCode'] = this.formhabit.qdcode.replace(/ /g, ',')
      }
      if (this.formhabit.dimension !== '') { // 选择维度
        params['dimension'] = this.formhabit.dimension.replace(/ /g, ',')
      }
      params['style'] = n
      this.params = params
      return params
    },
    getQuerycussegment1 () { // 客户细分1
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
      params['obj0'] = '客户细分1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cussegment1s = data
          vm.seccussegment1 = data
          vm.habitcussegment1 = data
        },
        fail (msg) {
        }
      })
    },
    getQuerycussegment41 () { // 客户细分4-1
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
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
        }
      })
    },
    getQuerycussegment42 () { // 客户细分4-2
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
      params['obj0'] = '客户细分4'
      if (Array.isArray(vm.secform.cussegment1) && vm.secform.cussegment1.length !== 0) {
        params['objk1'] = '客户细分1'
        params['objv1'] = vm.secform.cussegment1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.seccussegment4 = data
        },
        fail (msg) {
        }
      })
    },
    getQuerycussegment44 () { // 客户细分4-4
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
      params['obj0'] = '客户细分4'
      if (Array.isArray(vm.formhabit.cussegment1) && vm.formhabit.cussegment1.length !== 0) {
        params['objk1'] = '客户细分1'
        params['objv1'] = vm.formhabit.cussegment1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.habitcussegment4 = data
        },
        fail (msg) {
        }
      })
    },
    getQueryFamily () { // family
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
      params['obj0'] = 'Family'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.familys = data
          vm.secfamily = data
          vm.habitfamily = data
        },
        fail (msg) {
        }
      })
    },
    getQueryorderStatus () { // 订单状态
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
      params['obj0'] = '订单状态'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.habitorderstatus = data
        },
        fail (msg) {
        }
      })
    },
    getQuerydata () { // 获取查询条件
      let vm = this
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': '简约订单状态_CON,分货类型_CON'
        },
        done (data) {
          for (let i = 0; i < data.length; i++) {
            // if (data[i].value === '大区_CON') {
            //   vm.areas = data[i]
            //   vm.secareas = data[i]
            //   vm.habitareas = data[i]
            // }
            if (data[i].value === '分货类型_CON') {
              vm.alloTypes = data[i]
              vm.secalloType = data[i]
              vm.habitalloType = data[i]
            }
            if (data[i].value === '简约订单状态_CON') {
              vm.habitorderstatus = data[i]
            }
          }
        },
        fail (msg) {
        }
      })
    },
    getQueryarea () { // 大区
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
      params['obj0'] = '大区'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.areas = data
          vm.secareas = data
          vm.habitareas = data
        },
        fail (msg) {
        }
      })
    },
    getQuerywararea1 () { // 战区1
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
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
        }
      })
    },
    getQuerywararea2 () { // 战区2
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
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
        }
      })
    },
    getQuerywararea4 () { // 战区4
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_CRAD_SaleOrder_TTL'
      params['obj0'] = '战区'
      if (Array.isArray(vm.formhabit.area) && vm.formhabit.area.length !== 0) {
        params['objk1'] = '大区'
        params['objv1'] = vm.formhabit.area
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.habitwarareas = data
        },
        fail (msg) {
        }
      })
    },
    lineGraph () {
      let vm = this
      vm.valieForm(1)
      vm.$ajax({
        url: '/getCradAccuracy',
        data: vm.params,
        done (data) {
          let lineGraph = echarts.init(vm.$refs.lineGraph)
          lineGraph.showLoading()
          let seriesData = data.series
          let piedata = data.pie.data
          let xAxisData = data.yAxis
          var option = {
            title: {
              text: 'CRAD Accuracy',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '3%',
              right: '3%',
              top: '25%',
              containLabel: true
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 100
              },
              {
                type: 'inside',
                start: 0,
                end: 100
              }
            ],
            // legend: {
            //   // data: ['新办数'],
            //   // data: legendData,
            //   // right: '20%'
            // },
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                axisLabel: {
                  interval: 0,
                  rotate: 20,
                  margin: 8
                },
                data: xAxisData
              }
            ],
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: seriesData.name,
                type: 'line',
                areaStyle: {
                  normal: {
                    type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(199, 37, 50, 0.1)'
                    }, {
                      offset: 1,
                      color: 'rgba(199, 37, 50, 0.6)'
                    }], false)
                  }
                },
                smooth: true,
                itemStyle: {
                  normal: {
                    areaStyle: {
                      type: 'default'
                    }
                  }
                },
                data: seriesData.data
                // data: [136, 375, 380, 449, 114, 267, 142, 318, 357, 193, 421, 391]
              },
              {
                type: 'pie',
                radius: ['15%', '20%'],
                center: ['35%', '14%'],
                color: 'rgba(199, 37, 50, 0.8)',
                show: false,
                label: {
                  normal: {
                    textStyle: {
                      color: '#333'
                    },
                    position: 'center'
                  }
                },
                data: [
                  {
                    value: piedata[0],
                    label: {
                      show: false,
                      normal: {
                        formatter: '{d}%',
                        textStyle: {
                          fontSize: 14,
                          color: 'rgba(199, 37, 50, 0.8)'
                        }
                      }
                    }
                  },
                  {
                    value: piedata[1],
                    label: {
                      normal: {
                        textStyle: {
                          color: '#555',
                          fontSize: 13
                        }
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: '#aaa'
                      },
                      emphasis: {
                        color: '#aaa'
                      }
                    }
                  }
                ]
              }
            ]
          }
          lineGraph.hideLoading()
          lineGraph.setOption(option)
        },
        fail (msg) {
        }
      })
    },
    confirmcradgraph () {
      let vm = this
      vm.valieFormdim(2)
      vm.$ajax({
        url: '/getCradAccuracy',
        data: vm.params,
        done (data) {
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.yAxis
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].barWidth = '30px'
          }
          var option = {
            title: {
              text: '时段分布（确认日期-CRAD)',
              left: 'center',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '6CC47C', '7E6CC4', '891734', '178389', 'E895E5'],
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 100
              },
              {
                type: 'inside',
                start: 0,
                end: 100
              }
            ],
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            legend: {
              data: legendData,
              top: 30,
              left: 'center'
            },
            grid: {
              left: '3%',
              right: '4%',
              top: 80,
              bottom: '13%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
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
          }
          let confirmcradgraph = echarts.init(vm.$refs.confirmcradgraph)
          confirmcradgraph.setOption(option, true)
        },
        fail (msg) {
        }
      })
    },
    productdist () { // 产品分布图
      let vm = this
      vm.valieForm(4)
      vm.$ajax({
        url: '/getCradAccuracy',
        data: vm.params,
        done (data) {
          let cradChart = echarts.init(vm.$refs.cradChart)
          cradChart.showLoading()
          let legendData = data.legend
          let xAxisData = data.yAxis
          vm.token = data.token
          vm.clickFamilyName = xAxisData[0]
          let seriesData = data.series
          for (var j = 0; j < seriesData.length; j++) {
            if (seriesData[j].type === 'line') {
              seriesData[j].smooth = true
              seriesData[j].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            }
          }
          vm.cradChart1()
          var option = {
            title: {
              text: '产品分布（确认日期-CRAD)',
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
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}<br/>{a2}: {c2}<br/>{a3}: {c3}<br/>{a4}: {c4}<br/>{a5}: {c5}<br/>{a6}: {c6}<br/>{a7}: {c7}<br/>{a8}: {c8}<br/>{a9}: {c9}<br/>{a10}: {c10}<br/>{a11}: {c11}%'
            },
            color: ['#c2df47', '#9BBB59', '#CEE0F7', '#DCE6F2', '#9CDCF0', '#22a4e2', '#7E6CC4', '#503BA7', '#ffd11c', '#ff9934', '#C4762C', '#f94e6e'],
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 30
              },
              {
                type: 'inside',
                start: 0,
                end: 30
              }
            ],
            legend: {
              data: legendData,
              left: 'center',
              top: 30
            },
            grid: {
              left: '3%',
              top: 80,
              right: '4%',
              bottom: '13%',
              containLabel: true
            },
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                axisLabel: {
                  interval: 0,
                  rotate: 15,
                  margin: 8
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                position: 'right',
                axisLabel: {
                  formatter: '{value} %'
                }
              }
            ],
            series: seriesData
          }
          cradChart.on('click', function (params) {
            vm.clickFamilyName = params.name // 获取点击到的family值
            vm.cradChart1()
          })
          cradChart.hideLoading()
          cradChart.setOption(option)
        },
        fail (msg) {
        }
      })
    },
    cradChart1 () { // 根据点击的family不同，显示该图
      let vm = this
      vm.$ajax({
        url: '/getCradAccuracy',
        data: {
          style: 3,
          token: vm.token,
          family: vm.clickFamilyName
        },
        done (data) {
          let cradChart = echarts.init(vm.$refs.cradChart1)
          cradChart.showLoading()
          let seriesData = data.series
          let legendData = data.legend
          let xAxisData = data.yAxis
          for (var i = 0; i < seriesData.length; i++) {
            if (seriesData[i].type === 'line') {
              seriesData[i].smooth = true
              seriesData[i].label = {
                show: true,
                position: 'top',
                formatter: '{c} %'
              }
            } else {
              seriesData[i].barWidth = '30px'
            }
          }
          cradChart.hideLoading()
          var option = {
            title: {
              text: vm.clickFamilyName,
              top: 0,
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
              formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}<br/>{a2}: {c2}<br/>{a3}: {c3}<br/>{a4}: {c4}<br/>{a5}: {c5}<br/>{a6}: {c6}<br/>{a7}: {c7}<br/>{a8}: {c8}<br/>{a9}: {c9}<br/>{a10}: {c10}<br/>{a11}: {c11}%'
            },
            color: ['#c2df47', '#9BBB59', '#CEE0F7', '#DCE6F2', '#9CDCF0', '#22a4e2', '#7E6CC4', '#503BA7', '#ffd11c', '#ff9934', '#C4762C', '#f94e6e'],
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 100
              },
              {
                type: 'inside',
                start: 0,
                end: 100
              }
            ],
            legend: {
              data: legendData,
              top: 30,
              left: 'center'
            },
            grid: {
              left: '3%',
              top: 80,
              right: '4%',
              bottom: '13%',
              containLabel: true
            },
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 20,
                  margin: 8
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              {
                type: 'value',
                position: 'right',
                axisLabel: {
                  formatter: '{value} %'
                }
              }
            ],
            series: seriesData
          }
          cradChart.setOption(option)
        },
        fail (msg) {}
      })
    },
    getchart1 () {
      let vm = this
      vm.valiesecForm(1)
      vm.$ajax({
        url: '/getPSDCRAD',
        data: vm.params,
        done (data) {
          vm.seriesData = data.series
          vm.xAxisData = data.yAxis
          vm.legendData = data.legend
          vm.token1 = data.token
          vm.$nextTick(() => {
            vm.stackpsd1()
            vm.stackpsd2()
          }, 3000)
        },
        fail (msg) {
        }
      })
    },
    stackpsd1 () {
      var option = {
        title: {
          text: 'PSD-CRAD',
          top: 0,
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
          }
        },
        color: ['#c2df47', '#9BBB59', '#CEE0F7', '#DCE6F2', '#9CDCF0', '#22a4e2', '#7E6CC4', '#503BA7', '#ffd11c', '#ff9934', '#C4762C'],
        dataZoom: [
          {
            show: true,
            start: 70,
            end: 100
          },
          {
            type: 'inside',
            start: 70,
            end: 100
          }
        ],
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          data: this.legendData,
          left: 'center',
          top: 30
        },
        grid: {
          left: '3%',
          right: '4%',
          top: 80,
          bottom: '13%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.xAxisData,
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
        series: this.seriesData
      }
      let stackpsd = echarts.init(this.$refs.stackpsd1)
      stackpsd.setOption(option)
    },
    stackpsd2 () {
      let vm = this
      vm.valiesecForm(2)
      vm.params['token'] = vm.token1
      vm.$ajax({
        url: '/getPSDCRAD',
        data: vm.params,
        done (data) {
          let seriesData = data.series
          let xAxisData = data.yAxis
          vm.psdFamily = xAxisData[0]
          let legendData = data.legend
          vm.stackpsd3()
          var option = {
            title: {
              text: 'PSD-CRAD （by Family）',
              top: 0,
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
              }
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 100
              },
              {
                type: 'inside',
                start: 0,
                end: 100
              }
            ],
            toolbox: {
              show: true,
              feature: {
                // dataZoom: {
                //   yAxisIndex: 'none'
                // },
                dataView: {readOnly: false},
                // magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
              }
            },
            color: ['#c2df47', '#9BBB59', '#CEE0F7', '#DCE6F2', '#9CDCF0', '#22a4e2', '#7E6CC4', '#503BA7', '#ffd11c', '#ff9934', '#C4762C'],
            legend: {
              left: 'center',
              top: 30,
              data: legendData
            },
            grid: {
              left: '3%',
              right: '4%',
              top: 80,
              bottom: '13%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
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
          }
          let stackpsd = echarts.init(vm.$refs.stackpsd2)
          stackpsd.on('click', function (params) {
            vm.psdFamily = params.name // 获取点击到的family值
            vm.stackpsd3()
          })
          stackpsd.setOption(option)
        },
        fail (msg) {
        }
      })
    },
    stackpsd3 () { // 根据点击的family不同，显示该图
      let vm = this
      vm.valiesecForm(3)
      vm.params['psdFamily'] = vm.psdFamily
      vm.params['token'] = vm.token1
      vm.$ajax({
        url: '/getPSDCRAD',
        data: vm.params,
        done (data) {
          let seriesData = data.series
          let xAxisData = data.yAxis
          let legendData = data.legend
          var option = {
            title: {
              text: vm.psdFamily,
              top: 0,
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
              }
            },
            color: ['#c2df47', '#9BBB59', '#CEE0F7', '#DCE6F2', '#9CDCF0', '#22a4e2', '#7E6CC4', '#503BA7', '#ffd11c', '#ff9934', '#C4762C'],
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 30
              },
              {
                type: 'inside',
                start: 0,
                end: 30
              }
            ],
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                // magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
              }
            },
            legend: {
              data: legendData,
              left: 'center',
              top: 30
            },
            grid: {
              left: '3%',
              right: '4%',
              top: 80,
              bottom: '13%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
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
          }
          let stackpsd = echarts.init(vm.$refs.stackpsd3)
          stackpsd.setOption(option)
        },
        fail (msg) {
        }
      })
    },
    pie () {
      let vm = this
      vm.$ajax({
        url: '/getOrderHabit',
        data: {
          style: 1
        },
        done (data) {
          let seriesData = data.series
          let xAxisData = data.yAxis
          let legendData = data.legend
          var option = {
            title: {
              text: '时段分析（CRAD-下单日期）',
              x: 'left',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b}: {d}% ({c})',
              textStyle: {
                fontSize: 14
              }
            },
            color: ['#A5C9F0', '#5098E3', '#1F79D8', '#f9d95a', '#ffd11c', '#f3a150', '#F77C08', '#ec3a4f', '#c2df47', '#9BBB59'],
            legend: {
              orient: 'vertical',
              right: '50px',
              top: 30,
              data: legendData
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            grid: [
              {x: '7.5%', y: '65%', width: '88%', height: '30%'}
            ],
            xAxis: [
              {
                gridIndex: 0,
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                data: xAxisData
              }
            ],
            yAxis: [
              {
                gridIndex: 0, name: '', show: false
              }
            ],
            series: [
              {
                name: 'CRAD-Created',
                type: 'pie',
                radius: '44%',
                center: ['50%', '32%'],
                data: seriesData[0].data,
                label: {
                  normal: {
                    position: 'outside',
                    formatter: '{b}: {d}% ({c})',
                    textStyle: {
                      color: '',
                      fontSize: 12
                    }
                  }
                },
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              },
              {
                name: '',
                type: 'pie',
                // roseType: 'radius',
                radius: '23%',
                center: ['18%', '78%'],
                data: seriesData[1].data,
                label: {
                  normal: {
                    position: 'outside',
                    formatter: '{d}% ({c})',
                    textStyle: {
                      color: '',
                      fontSize: 12
                    }
                  }
                },
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              },
              {
                name: '',
                type: 'pie',
                radius: '23%',
                center: ['40%', '78%'],
                data: seriesData[2].data,
                label: {
                  normal: {
                    position: 'outside',
                    formatter: '{d}% ({c})',
                    offset: [0, 100],
                    textStyle: {
                      color: '',
                      fontSize: 14
                    }
                  }
                },
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              },
              {
                name: '',
                type: 'pie',
                // roseType:'radius',
                radius: '23%',
                center: ['62%', '78%'],
                data: seriesData[3].data,
                label: {
                  normal: {
                    position: 'outside',
                    formatter: '{d}% ({c})',
                    textStyle: {
                      color: '',
                      fontSize: 14
                    }
                  }
                },
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              },
              {
                name: '',
                type: 'pie',
                // roseType:'radius',
                radius: '23%',
                center: ['84%', '78%'],
                data: seriesData[4].data,
                label: {
                  normal: {
                    position: 'innerside',
                    formatter: '{d}% ({c})',
                    textStyle: {
                      color: '',
                      fontSize: 14
                    }
                  }
                },
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
          let stackpsd = echarts.init(vm.$refs.pie)
          stackpsd.setOption(option)
        },
        fail (msg) {
        }
      })
    },
    stackhabit () {
      let vm = this
      vm.valiehabitForm(2)
      vm.$ajax({
        url: '/getOrderHabit',
        data: vm.params,
        done (data) {
          let seriesData1 = data.dateAna.series
          let xAxisData1 = data.dateAna.yAxis
          let legendData1 = data.dateAna.legend
          let seriesData2 = data.dateDis.series
          let xAxisData2 = data.dateDis.yAxis
          let legendData2 = data.dateDis.legend
          for (var i = 0; i < seriesData1.length; i++) {
            if (xAxisData1.length < 12) {
              seriesData1[i].barWidth = '30px'
            }
          }
          for (var j = 0; j < seriesData2.length; j++) {
            if (xAxisData2.length < 12) {
              seriesData2[j].barWidth = '30px'
            }
          }
          var option1 = {
            title: {
              text: '时段分析（CRAD-下单日期）',
              top: 0,
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
              }
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 100
              },
              {
                type: 'inside',
                start: 0,
                end: 100
              }
            ],
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            legend: {
              data: legendData1,
              left: 'center',
              top: 30
            },
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
            grid: {
              left: '3%',
              right: '4%',
              top: 80,
              bottom: '13%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData1,
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
            series: seriesData1
          }
          let stackhabit1 = echarts.init(vm.$refs.stackhabit1)
          stackhabit1.setOption(option1)
          var option2 = {
            title: {
              text: '时间分布',
              top: 0,
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
              }
            },
            color: ['#A5C9F0', '#5098E3', '#1F79D8', '#f9d95a', '#ffd11c', '#f3a150', '#F77C08', '#ec3a4f', '#c2df47', '#9BBB59'],
            dataZoom: [
              {
                show: true,
                start: 70,
                end: 100
              },
              {
                type: 'inside',
                start: 70,
                end: 100
              }
            ],
            toolbox: {
              show: true,
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            legend: {
              data: legendData2,
              left: 'center',
              top: 30
            },
            grid: {
              left: '3%',
              top: 80,
              right: '4%',
              bottom: '13%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData2,
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
            series: seriesData2
          }
          let stackhabit2 = echarts.init(vm.$refs.stackhabit2)
          stackhabit2.setOption(option2)
        },
        fail (msg) {
        }
      })
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
    .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner
      width 192px !important // 输入框
    .el-form--inline .el-form-item__content
      width 192px !important
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
        margin-bottom 10px
        padding 0 20px
        background #fafafa
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
      .lineGraph
        width 1100px
        height 400px
        overflow hidden
        margin 10px auto
      .cradBox
        width 100%
        height auto
        overflow hidden
        .cradChart
          width 1100px
          height 400px
          margin 10px auto
      .pie
        width 1100px
        height 500px
        margin 10px auto
      .stackpsd
        width 1100px
        height 400px
        margin 10px auto
</style>
