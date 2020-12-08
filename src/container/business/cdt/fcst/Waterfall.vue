<template>
<div class="waterfalls">
  <h2>waterfall查询</h2>
  <el-form :inline="true" :model="form" ref="form" label-width="70px" class="demo-form-inline">
    <div class="line">
      <el-form-item label="预测版本" prop="version">
        <el-select v-model="form.version" size="mini" @change="getWaterfallColumn" filterable  placeholder="请选择">
          <el-option
            v-for="(item, index) in versions"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户细分" prop="cusSegment" >
        <el-select v-model="form.cusSegment" size="mini"  filterable clearable  placeholder="请选择">
          <el-option
            v-for="item in cusSegments.children"
            :key="item.value"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="制造工厂" prop="buildfact">
        <el-select v-model="form.buildfact" size="mini" filterable clearable  placeholder="请选择">
          <el-option
            v-for="item in buildfacts.children"
            :key="item.value"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品细分" prop="prosegment" label-width="93px">
        <el-select v-model="form.prosegment" @visible-change="getProsegments" size="mini" filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in prosegments.value"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="line">
      <el-form-item label="Family1" prop="Family1">
        <el-select v-model="form.Family1" @visible-change="getFamily1s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in Family1s.value"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Family2" prop="Family2">
        <el-select v-model="form.Family2" @visible-change="getFamily2s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in Family2s.value"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Family3" prop="Family3">
        <el-select v-model="form.Family3" @visible-change="getFamily3s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in Family3s.value"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="FCST Family" prop="fcstFamily" label-width="93px">
        <el-select v-model="form.fcstFamily" @visible-change="getFcstFamilys" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in fcstFamilys.value"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
    </div>
      <el-form-item label="物料编码" prop="materialcode" >
        <el-select v-model="form.materialcode" @visible-change="getMaterialcodes" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in materialcodes.value"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="物料描述" prop="matDesc" >
        <el-select v-model="form.matDesc" @visible-change="getmatDescs" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in matDescs.value"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="margin-left:150px">
      <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
      <el-button @click="resetForm('form')" size="mini" >重置</el-button>
      <el-button type="success" size="mini" :disabled='disabledload' @click.prevent="downloadDate">下载</el-button>
    </el-form-item>
    <form-public ref="formPublic"
    :pn='this.getPNvalue()'>
    </form-public>
  </el-form>
  <div class="waterTable">
    <div class="table1">
      <el-table
        border
        :data="tableData"
        :empty-text="tableMessage"
        style="width: 100%;">
        <el-table-column fixed prop="预测Version" :label="lableList.预测Version" width="80">
          <template slot-scope="scope">
            <div class="fcst-version">{{scope.row.预测Version}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="Last_M1" :label="lableList.Last_M1" width="55">
          <template slot-scope="scope">
            <div class="a2">{{scope.row.Last_M1.value}}</div>
          </template>
        </el-table-column>
        <el-table-column  prop="Last_M2" :label="lableList.Last_M2" width="55">
          <template slot-scope="scope">
            <div class="a3">{{scope.row.Last_M2.value}}</div>
          </template>
        </el-table-column>
        <el-table-column  prop="Last_M3" :label="lableList.Last_M3" width="55">
          <template slot-scope="scope">
            <div class="a4">{{scope.row.Last_M3.value}}</div>
          </template>
        </el-table-column>
        <el-table-column  prop="Last_M4" :label="lableList.Last_M4" width="55">
          <template slot-scope="scope">
            <div class="a5">{{scope.row.Last_M4.value}}</div>
          </template>
        </el-table-column>
        <el-table-column  prop="Last_M5" :label="lableList.Last_M5" width="55">
          <template slot-scope="scope">
            <div class="a6">{{scope.row.Last_M5.value}}</div>
          </template>
        </el-table-column>
        <el-table-column  prop="Last_M6" :label="lableList.Last_M6" width="55">
          <template slot-scope="scope">
            <div class="a7">{{scope.row.Last_M6.value}}</div>
          </template>
        </el-table-column>
        <el-table-column  prop="Last_M7" :label="lableList.Last_M7" width="55">
          <template slot-scope="scope">
            <div class="a8">{{scope.row.Last_M7.value}}</div>
          </template>
        </el-table-column>
        <el-table-column  prop="Last_M8" :label="lableList.Last_M8" width="55">
          <template slot-scope="scope">
            <div class="a9">{{scope.row.Last_M8.value}}</div>
          </template>
        </el-table-column>
        <el-table-column  prop="M1" :label="lableList.M1" width="54">
        </el-table-column>
        <el-table-column  prop="M2" :label="lableList.M2" width="54">
        </el-table-column>
        <el-table-column  prop="M3" :label="lableList.M3" width="54">
        </el-table-column>
        <el-table-column  prop="M4" :label="lableList.M4" width="54">
        </el-table-column>
        <el-table-column prop="M5" :label="lableList.M5" width="54">
        </el-table-column>
      </el-table>
    </div>
    <div class="table2">
      <el-table
        border
        :data="tableData"
        style="width:100%">
        <el-table-column prop="SUM" :label="lableList.SUM" width="130">
        </el-table-column>
        <el-table-column prop="TTL_Rolling_WTW_Change" :label="lableList.TTL_Rolling_WTW_Change" width="110">
          <template slot-scope="scope">
            <div class="a16">{{scope.row.TTL_Rolling_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="TTL_业务分析" :label="lableList.TTL_业务分析" width="170">
          <template slot-scope="scope">
            <div class="a17">{{scope.row.TTL_业务分析.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="Q_版本序号" :label="lableList.Q_版本序号" width="70">
          <template slot-scope="scope">
            <div class="a18">{{scope.row.Q_版本序号.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="Q_WTW_Change" :label="lableList.Q_WTW_Change" width="105">
          <template slot-scope="scope">
            <div class="a19">{{scope.row.Q_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="Q_Rolling_WTW_Change" :label="lableList.Q_Rolling_WTW_Change" width="105">
          <template slot-scope="scope">
            <div class="a20">{{scope.row.Q_Rolling_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="Q_业务分析" :label="lableList.Q_业务分析" width="130">
        </el-table-column>
        <el-table-column prop="M1_版本序号" :label="lableList.M1_版本序号" width="75">
          <template slot-scope="scope">
            <div class="a22">{{scope.row.M1_版本序号.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M1_WTW_Change" :label="lableList.M1_WTW_Change" width="110">
          <template slot-scope="scope">
            <div class="a23">{{scope.row.M1_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M1_Rolling_WTW_Change" :label="lableList.M1_Rolling_WTW_Change" width="105">
          <template slot-scope="scope">
            <div class="a24">{{scope.row.M1_Rolling_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M1_业务分析" :label="lableList.M1_业务分析" width="120">
        </el-table-column>
        <el-table-column prop="M2_版本序号" :label="lableList.M2_版本序号" width="75">
          <template slot-scope="scope">
            <div class="a26">{{scope.row.M2_版本序号.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M2_WTW_Change" :label="lableList.M2_WTW_Change" width="115">
          <template slot-scope="scope">
            <div class="a27">{{scope.row.M2_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M2_Rolling_WTW_Change" :label="lableList.M2_Rolling_WTW_Change" width="105">
          <template slot-scope="scope">
            <div class="a28">{{scope.row.M2_Rolling_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M2_业务分析" :label="lableList.M2_业务分析" width="120">
        </el-table-column>
        <el-table-column prop="M3_版本序号" :label="lableList.M3_版本序号" width="75">
          <template slot-scope="scope">
            <div class="a30">{{scope.row.M3_版本序号.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M3_WTW_Change" :label="lableList.M3_WTW_Change" width="115">
          <template slot-scope="scope">
            <div class="a31">{{scope.row.M3_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M3_Rolling_WTW_Change" :label="lableList.M3_Rolling_WTW_Change" width="105">
          <template slot-scope="scope">
            <div class="a32">{{scope.row.M3_Rolling_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M3_业务分析" :label="lableList.M3_业务分析" width="120">
        </el-table-column>
        <el-table-column prop="M4_版本序号" :label="lableList.M4_版本序号" width="75">
          <template slot-scope="scope">
            <div class="a34">{{scope.row.M4_版本序号.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M4_WTW_Change" :label="lableList.M4_WTW_Change" width="115">
          <template slot-scope="scope">
            <div class="a35">{{scope.row.M4_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M4_Rolling_WTW_Change" :label="lableList.M4_Rolling_WTW_Change" width="105">
          <template slot-scope="scope">
            <div class="a36">{{scope.row.M4_Rolling_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M4_业务分析" :label="lableList.M4_业务分析" width="120">
        </el-table-column>
        <el-table-column prop="M5_版本序号" :label="lableList.M5_版本序号" width="75">
          <template slot-scope="scope">
            <div class="a38">{{scope.row.M5_版本序号.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M5_WTW_Change" :label="lableList.M5_WTW_Change" width="115">
          <template slot-scope="scope">
            <div class="a39">{{scope.row.M5_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M5_Rolling_WTW_Change" :label="lableList.M5_Rolling_WTW_Change" width="105">
          <template slot-scope="scope">
            <div class="a40">{{scope.row.M5_Rolling_WTW_Change.value}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="M5_业务分析" :label="lableList.M5_业务分析" width="120">
        </el-table-column>
      </el-table>
    </div>
  </div>
  <div class="varyanalysischart" ref="varyanalysischart1"></div>
</div>
</template>
<script>
import echarts from 'echarts'
import formPublic from '@/components/public/formPubcdt'
const $ = window.$
export default {
  data () {
    return {
      tableMessage: '请稍等，正在快马加鞭计算中……',
      disabledload: false,
      tableData: [],
      lableList: {
        预测Version: '',
        Last_M1: '',
        Last_M2: '',
        Last_M3: '',
        Last_M4: '',
        Last_M5: '',
        Last_M6: '',
        Last_M7: '',
        Last_M8: '',
        M1: '',
        M2: '',
        M3: '',
        M4: '',
        M5: '',
        SUM: '',
        TTL_Rolling_WTW_Change: '',
        TTL_业务分析: '',
        Q_版本序号: '',
        Q_WTW_Change: '',
        Q_Rolling_WTW_Change: '',
        Q_业务分析: '',
        M1_版本序号: '',
        M1_WTW_Change: '',
        M1_Rolling_WTW_Change: '',
        M1_业务分析: '',
        M2_版本序号: '',
        M2_WTW_Change: '',
        M2_Rolling_WTW_Change: '',
        M2_业务分析: '',
        M3_版本序号: '',
        M3_WTW_Change: '',
        M3_Rolling_WTW_Change: '',
        M3_业务分析: '',
        M4_版本序号: '',
        M4_WTW_Change: '',
        M4_Rolling_WTW_Change: '',
        M4_业务分析: '',
        M5_版本序号: '',
        M5_WTW_Change: '',
        M5_Rolling_WTW_Change: '',
        M5_业务分析: ''
      },
      form: {
        version: '', // version
        cusSegment: '', // 客户细分
        Family1: [], // Family1
        Family2: [], // Family2
        Family3: [], // Family3
        fcstFamily: [], // fcstFamily
        prosegment: '', // 产品细分
        buildfact: '', // 制造工厂
        matDesc: [],
        materialcode: [] // 物料编码
      },
      versions: [],
      cusSegments: [],
      prosegments: {pn: [], value: []},
      Family1s: {pn: [], value: []},
      Family2s: {pn: [], value: []},
      Family3s: {pn: [], value: []},
      fcstFamilys: {pn: [], value: []},
      materialcodes: {pn: [], value: []},
      matDescs: {pn: [], value: []},
      buildfacts: []
    }
  },
  components: {
    formPublic
  },
  created () {
    this.getQuerybuipro()
    this.getQueryVersion()
  },
  mounted () {
    setTimeout(() => {
      this.getTableData()
      this.varyanalysischart1()
    }, 1000)
  },
  methods: {
    varyanalysischart1 () {
      let vm = this
      let params = this.valieForm()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_FCST_Waterfall_Tran_TTL'
      params['style'] = '2'
      params['businessLine'] = 'ConDT'
      vm.$ajax({
        url: '/selectFcstWaterfallData',
        data: params,
        done (data) {
          let series = data.series
          for (let i = 0; i < series.length; i++) {
            series[i].barWidth = '30px'
          }
          let varyanalysischart = echarts.init(vm.$refs.varyanalysischart1)
          var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '1%',
              top: '25%',
              bottom: '10%',
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
            toolbox: {
              show: true,
              feature: {
                saveAsImage: {
                  show: true
                },
                restore: {},
                dataView: {
                  show: true
                }
              }
            },
            xAxis: {
              type: 'category',
              data: data.xAxis,
              axisLabel: {
                interval: 0,
                rotate: 30,
                margin: 2
              }
            },
            color: ['#9cdcf0', '#c6e579', '#f5b7c3', '#fcce10', '#d5bcfb', '#7fe8df', '#dce6f2', '#fc3d39', '#34b1f5', '#68d845', '#fecb2f', '#cd7de0', '#f79646'],
            legend: {
              data: data.legend,
              right: '13%'
            },
            yAxis: {
              type: 'value'
            },
            series: series
          }
          varyanalysischart.setOption(option, true)
        },
        fail (data) {
          let varyanalysischart = echarts.init(vm.$refs.varyanalysischart1)
          var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '1%',
              top: '25%',
              bottom: '10%',
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
            toolbox: {
              show: true,
              feature: {
                saveAsImage: {
                  show: true
                },
                restore: {},
                dataView: {
                  show: true
                }
              }
            },
            xAxis: {
              type: 'category',
              data: [],
              axisLabel: {
                interval: 0,
                rotate: 30,
                margin: 2
              }
            },
            color: ['#409EFF', '#ff0000', '#C6E579', '#FCCE10', '#b6a2de', '#F56C6C', '#67C23A', '#DCE6F2', '#ffff00', '#9CDCF0', '#F79646', '#9BBB59', '#f94e6e'],
            legend: {
              data: [],
              right: '13%'
            },
            yAxis: {
              type: 'value'
            },
            series: []
          }
          varyanalysischart.setOption(option)
        }
      })
    },
    downloadDate () {
      this.disabledload = true
      let vm = this
      let params = this.valieForm()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_FCST_Waterfall_Tran_TTL'
      params['businessLine'] = 'ConDT'
      this.$ajax1({
        url: '/downloadExelWaterfall',
        data: params,
        done (data) {
          let blob = new Blob([data], {type: 'application/vnd.ms-excel;charset=utf-8'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'waterfall下载.xlsx'
          link.click()
          window.URL.revokeObjectURL(link.href)
          vm.disabledload = false
        }
      })
      setTimeout(() => {
        vm.disabledload = false
      }, 20000)
    },
    getPNvalue () {
      let pn = []
      if (this.form.Family1.length === 0) {
        this.Family1s.pn = []
      }
      if (this.form.Family2.length === 0) {
        this.Family2s.pn = []
      }
      if (this.form.fcstFamily.length === 0) {
        this.fcstFamilys.pn = []
      }
      if (this.form.materialcode.length !== 0) {
        pn = this.form.materialcode
      } else if (this.form.fcstFamily.length !== 0) {
        pn = this.fcstFamilys.pn
      } else if (this.form.Family2.length !== 0) {
        pn = this.Family2s.pn
      } else if (this.form.Family1.length !== 0) {
        pn = this.Family1s.pn
      }
      if (this.form.matDesc.length !== 0) {
        pn = this.matDescs.pn
      } else if (this.form.fcstFamily.length !== 0) {
        pn = this.fcstFamilys.pn
      } else if (this.form.Family2.length !== 0) {
        pn = this.Family2s.pn
      } else if (this.form.Family1.length !== 0) {
        pn = this.Family1s.pn
      }
      return pn
    },
    countProperties (obj) { // 判断对象的长度
      let count = 0
      for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
          count++
        }
      }
      return count
    },
    valieForm () {
      let params = this.$refs.formPublic.valieForm()
      if (this.form.materialcode.join() !== '') {
        params['materialcode'] = this.form.materialcode
      }
      if (this.form.version !== '') {
        params['version'] = this.form.version
      }
      if (this.form.prosegment !== '') {
        params['prosegment'] = this.form.prosegment
      }
      if (this.form.cusSegment !== '') {
        params['cusSegment'] = this.form.cusSegment
      }
      if (this.form.buildfact !== '') {
        params['buildfact'] = this.form.buildfact
      }
      if (this.form.Family1.join() !== '') {
        params['Family1'] = this.form.Family1
      }
      if (this.form.Family2.join() !== '') {
        params['Family2'] = this.form.Family2
      }
      if (this.form.Family3.join() !== '') {
        params['Family3'] = this.form.Family3
      }
      if (this.form.fcstFamily.join() !== '') {
        params['fcstFamily'] = this.form.fcstFamily
      }
      if (this.countProperties(params) === 1 && params.hasOwnProperty('version')) { // 如果params对象长度为1并且只包含version属性
        params['init'] = 1
      }
      return params
    },
    getQueryVersion () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_FCST_Waterfall_Tran_PN_TTL'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.versions = data
          vm.form.version = data[0]
          vm.getWaterfallColumn()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerybuipro () { // 获取产品细分和制造工厂的下拉选项
      let vm = this
      this.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {'codeValue': '制造工厂_ConDT,客户细分1_CON'},
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === '客户细分1_CON') {
              vm.cusSegments = data[i]
            }
            if (data[i].value === '制造工厂_ConDT') {
              vm.buildfacts = data[i]
            }
          }
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getProsegments () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[产品细分]'
      params['tableName'] = 'CONDT_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.prosegments = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFamily1s () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[Family1]'
      params['tableName'] = 'CONDT_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
        params['objv1'] = this.form.prosegment
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.Family1s.value = data.value
          vm.Family1s.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFamily2s () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[Family2]'
      params['tableName'] = 'CONDT_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'b.[Family1]'
        params['objv2'] = this.form.Family1
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.Family2s.value = data.value
          vm.Family2s.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFamily3s () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[Family3]'
      params['tableName'] = 'CONDT_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'b.[Family1]'
        params['objv2'] = this.form.Family1
      }
      if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
        params['objk3'] = 'b.[Family2]'
        params['objv3'] = this.form.Family2
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.Family3s.value = data.value
          vm.Family3s.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getFcstFamilys () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'a.[FCST Family]'
      params['tableName'] = 'CONDT_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'b.[Family1]'
        params['objv2'] = this.form.Family1
      }
      if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
        params['objk3'] = 'b.[Family2]'
        params['objv3'] = this.form.Family2
      }
      if (Array.isArray(this.form.Family3) && this.form.Family3.length !== 0) {
        params['objk4'] = 'b.[Family3]'
        params['objv4'] = this.form.Family3
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.fcstFamilys.value = data.value
          vm.fcstFamilys.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getMaterialcodes () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'a.[PN]'
      params['tableName'] = 'CONDT_FCST_Waterfall_Tran_PN_TTL'
      params['businessLine'] = 'ConDT'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'b.[Family1]'
        params['objv2'] = this.form.Family1
      }
      if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
        params['objk3'] = 'b.[Family2]'
        params['objv3'] = this.form.Family2
      }
      if (Array.isArray(this.form.Family3) && this.form.Family3.length !== 0) {
        params['objk4'] = 'b.[Family3]'
        params['objv4'] = this.form.Family3
      }
      if (Array.isArray(this.form.fcstFamily) && this.form.fcstFamily.length !== 0) {
        params['objk5'] = 'a.[FCST Family]'
        params['objv5'] = this.form.fcstFamily
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          vm.materialcodes.value = data.value
          vm.materialcodes.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getmatDescs () {
      let vm = this
      let params = {}
      params['version'] = vm.form.version
      params['obj0'] = 'b.[Desc]'
      if (this.form.materialcode.length !== 0) {
        params['objk2'] = 'a.[PN]'
        params['objv2'] = this.form.materialcode
      }
      if (this.form.materialcode.length === 0) {
        if (this.form.prosegment !== '') {
          let prosegment = []
          prosegment[0] = this.form.prosegment
          params['objk1'] = '产品细分'
          params['objv1'] = prosegment
        }
        if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
          params['objk2'] = 'Family1'
          params['objv2'] = this.form.Family1
        }
        if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
          params['objk3'] = 'Family2'
          params['objv3'] = this.form.Family2
        }
        if (Array.isArray(this.form.Family3) && this.form.Family3.length !== 0) {
          params['objk4'] = 'Family3'
          params['objv4'] = this.form.Family3
        }
        if (Array.isArray(this.form.fcstFamily) && this.form.fcstFamily.length !== 0) {
          params['objk5'] = 'FCST Family'
          params['objv5'] = this.form.fcstFamily
        }
      }
      vm.$ajax({
        url: '/queryWaterfallPull',
        data: params,
        done (data) {
          console.log(data)
          vm.matDescs.value = data.value
          vm.matDescs.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    onSubmit (form) {
      this.tableData = []
      this.getTableData()
      this.varyanalysischart1()
    },
    resetForm (form) {
      this.$refs.formPublic.resetForm()
      this.$refs[form].resetFields()
      this.$refs.formPublic.CVvalue = ''
      this.tableData = []
      this.form.version = this.versions[0]
      this.getTableData()
      this.varyanalysischart1()
    },
    getWaterfallColumn () {
      let vm = this
      vm.$ajax({
        url: '/selectFcstWaterfallColumn',
        method: 'get',
        params: {
          'version': vm.form.version,
          'dbName': 'FF_IDSS_Data_CON',
          'tableName': 'ConDT_FCST_Waterfall_Tran_TTL'
        },
        done (data) {
          let newItem = {}
          for (var key in data) {
            newItem[('' + key).replace(/\s/g, '_')] = data[key]
          }
          vm.lableList = newItem
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getTableData () {
      let vm = this
      let params = this.valieForm()
      vm.tableMessage = '请稍等，正在快马加鞭计算中……'
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_FCST_Waterfall_Tran_TTL'
      params['style'] = '1'
      params['businessLine'] = 'ConDT'
      vm.$ajax({
        url: '/selectFcstWaterfallData',
        data: params,
        done (data) {
          if (JSON.stringify(data.list) === '[]') {
            vm.tableMessage = '计算条件无数据'
          }
          vm.tableData = [].concat(data.list).map(item => {
            let newItem = {}
            for (var key in item) {
              newItem[('' + key).replace(/\s/g, '_')] = item[key]
            }
            return newItem
          })
          setTimeout(() => {
            vm.setStyle()
          }, 10)
        },
        fail (data) {
          vm.tableMessage = data
        }
      })
    },
    setStyle () {
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].Last_M1.style === 'Y') {
          $('.a2').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M2.style === 'Y') {
          $('.a3').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M3.style === 'Y') {
          $('.a4').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M4.style === 'Y') {
          $('.a5').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M5.style === 'Y') {
          $('.a6').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M6.style === 'Y') {
          $('.a7').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M7.style === 'Y') {
          $('.a8').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M8.style === 'Y') {
          $('.a9').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].TTL_Rolling_WTW_Change.style === 'Y') {
          $('.a16').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].TTL_业务分析.style === 'Y') {
          $('.a17').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].Q_版本序号.style === 'Y') {
          $('.a18').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].Q_WTW_Change.style === 'Y') {
          $('.a19').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].Q_Rolling_WTW_Change.style === 'Y') {
          $('.a20').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M1_版本序号.style === 'Y') {
          $('.a22').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M1_WTW_Change.style === 'Y') {
          $('.a23').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M1_Rolling_WTW_Change.style === 'Y') {
          $('.a24').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M2_版本序号.style === 'Y') {
          $('.a26').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M2_WTW_Change.style === 'Y') {
          $('.a27').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M2_Rolling_WTW_Change.style === 'Y') {
          $('.a28').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M3_版本序号.style === 'Y') {
          $('.a30').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M3_WTW_Change.style === 'Y') {
          $('.a31').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M3_Rolling_WTW_Change.style === 'Y') {
          $('.a32').eq(i).css({
            'color': 'red'
          })
        }

        if (this.tableData[i].M4_版本序号.style === 'Y') {
          $('.a34').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M4_WTW_Change.style === 'Y') {
          $('.a35').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M4_Rolling_WTW_Change.style === 'Y') {
          $('.a36').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M5_版本序号.style === 'Y') {
          $('.a38').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M5_WTW_Change.style === 'Y') {
          $('.a39').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M5_Rolling_WTW_Change.style === 'Y') {
          $('.a40').eq(i).css({
            'color': 'red'
          })
        }
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.waterfalls
  width 100%
  height auto
  padding 10px
  .waterTable
    width 1200px
    height auto
    overflow hidden
    margin 15px 0px 15px 20px
    .table1, .table2
      float left
    .table1
      width 790px
    .table2
      width 410px
  .el-form-item
    margin-bottom -5px !important
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
  .fcst-version
    width 100%
    height 100%
    background #FFC000
  .varyanalysischart
    width 1200px
    height 400px
</style>
