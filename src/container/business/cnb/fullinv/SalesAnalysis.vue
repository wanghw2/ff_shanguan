<template>
<div class="waterfalls">
  <h2 style="margin-top: 0px">销量分析</h2>
  <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
    <div class="line1">
      <el-form-item  label="日期范围" prop="dateRange" label-width="90px">
        <div class="block">
          <el-date-picker
            size="mini"
            v-model="form.dateRange"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="客户细分1" prop="cusSegment1" label-width="80px">
        <el-select v-model="form.cusSegment1" @visible-change="getCusSegment1s" size="mini" multiple collapse-tags filterable  placeholder="请选择">
          <el-option
            v-for="(item, index) in cusSegment1s"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="大区"  prop="large" >
        <el-select v-model="form.large" @visible-change="getLarges" multiple collapse-tags size="mini" placeholder="请选择">
          <el-option
            v-for="(item, index) in larges"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="渠道名称" prop="bpName">
        <el-input v-model="form.bpName" size="mini" placeholder="请输入">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-form-item>
    </div>
    <div class="line1">
      <el-form-item label="时间维度" label-width="90px">
        <el-select v-model="form.timeDimension" size="mini"  placeholder="请选择">
          <el-option
            v-for="(item, index) in timeDimensions"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户细分4" prop="cusSegment4" label-width="80px">
        <el-select v-model="form.cusSegment4" @visible-change="getCusSegment4s" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in cusSegment4s"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="战区"  prop="subLarge" >
        <el-select v-model="form.subLarge" @visible-change="getsubLarges" multiple collapse-tags size="mini" placeholder="请选择">
          <el-option
            v-for="(item, index) in subLarges"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="渠道编码" prop="bpCode">
        <el-input v-model="form.bpCode" size="mini" placeholder="请输入">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-form-item>
    </div>
    <div class="line1">
      <el-form-item label="产品细分" prop="prosegment" label-width="90px">
        <el-select v-model="form.prosegment" @visible-change="getProsegments" size="mini" filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in prosegments.value"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Family1" prop="Family1" label-width="80px">
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
    </div>
      <el-form-item label="FCST Family" prop="fcstFamily" label-width="90px">
        <el-select v-model="form.fcstFamily" @visible-change="getFcstFamilys" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
          <el-option
            v-for="(item, index) in fcstFamilys.value"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="物料编码" prop="materialcode" label-width="80px">
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
      </el-form-item>
    <form-public ref="formPublic"
    :pn='this.getPNvalue()'>
    </form-public>
  </el-form>
  <div class="block">
    <h2>历史趋势图
      <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
    </h2>
    <div class="addgrid addgrid1">
      <div class="dateView"></div>
    </div>
    <div class="stack" ref="stack1"></div>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
import formPublic from '@/components/public/formPublic'
import axios from 'axios'
const $ = window.$
export default {
  data () {
    return {
      columnsList: [
        {title: '时间范围', field: '时间范围', width: '180px'},
        {title: '选择维度', field: '选择维度', width: '180px'},
        {title: '选择值', field: '选择值', width: '180px'},
        {title: 'LastTime', field: 'LastTime', width: '180px'},
        {title: 'SellIn', field: 'SellIn', width: '180px'},
        {title: 'SellOut', field: 'SellOut', width: '180px'},
        {title: 'STI SEC', field: 'STI_SEC', width: '180px'},
        {title: 'STI 3S', field: 'STI_3S', width: '180px'}
      ],
      toggle1: true,
      params1: {},
      form: {
        large: [],
        subLarge: [],
        bpCode: '',
        bpName: '',
        matDesc: [],
        cusSegment1: [], // 客户细分1
        cusSegment4: [], // 客户细分4
        Family1: [], // Family1
        Family2: [], // Family2
        Family3: [], // Family3
        fcstFamily: [], // fcstFamily
        prosegment: '', // 产品细分
        timeDimension: '自然周',
        materialcode: [], // 物料编码
        dateRange: []
      },
      timeDimensions: ['自然年', '自然季', '自然月', '自然周', '财年', '财季', '财月', '财周', '天'],
      cusSegment1s: [],
      cusSegment4s: [],
      prosegments: {pn: [], value: []},
      Family1s: {pn: [], value: []},
      Family2s: {pn: [], value: []},
      Family3s: {pn: [], value: []},
      fcstFamilys: {pn: [], value: []},
      materialcodes: {pn: [], value: []},
      matDescs: {pn: [], value: []},
      larges: {},
      subLarges: {}
    }
  },
  components: {
    formPublic
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.drawStack1()
      this.getTableData()
    }, 300)
  },
  methods: {
    onSubmit (form) {
      this.valieForm()
      this.drawStack1()
      this.getTableData()
    },
    resetForm (form) {
      this.$refs.formPublic.resetForm()
      this.$refs[form].resetFields()
      this.$refs.formPublic.CVvalue = ''
      this.form.timeDimension = '自然周'
      this.valieForm()
      this.drawStack1()
      this.getTableData()
    },
    initTab () { // 初始化表格
      let vm = this
      $('.dateView').html('')
      $('.dateView').kendoGrid({
        toolbar: ['excel'],
        sortable: true,
        columnMenu: true,
        reorderable: true,
        scrollable: true,
        filterable: true,
        resizable: true,
        excel: {
          fileName: 'ConNB_全国SO分布.xlsx',
          allPages: true
        },
        pageable: {
          numeric: true,
          pageSizes: [10, 15, 20, 25, 30, 'all']
        },
        excelExport (e) {
          e.workbook.sheets[0].name = 'ConNB_全国SO分布'
        },
        columns: vm.columnsList,
        dataSource: {
          data: vm.dataSource,
          pageSize: 18
        }
      })
    },
    getDataSource () { // 获取表格数据
      let vm = this
      let params = vm.valieForm()
      params['style'] = '2'
      return this.$ajax({
        url: '/getSalesAnalysis',
        data: params,
        done (data) {
          vm.dataSource = [].concat(data).map(item => {
            let newItem = {}
            // 处理列名带有空格的情况
            for (var key in item) {
              newItem[('' + key).replace(/\s|\\|%|\/|\(|（|）|\)|<|>|#|\.|\||-|:|&/g, '_')] = item[key]
            }
            return newItem
          })
        }
      })
    },
    getTableData () { // 合并列名和列的数据
      axios.all([this.getDataSource()]).then(() => {
        this.$nextTick(() => {
          this.initTab()
        })
      })
    },
    drawStack1 () {
      let vm = this
      let params = this.valieForm()
      params['style'] = '1'
      vm.$ajax({
        url: '/getSalesAnalysis',
        data: params,
        done (data) {
          var option = {
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
            color: ['#ff0000', '#409EFF', '#67C23A', '#FCCE10'],
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: data.legend
            },
            grid: {
              left: '5%',
              top: '8%',
              containLabel: true
            },
            xAxis: [
              {
                boundaryGap: false,
                type: 'category',
                data: data.yAxis,
                axisLabel: {
                  interval: 0,
                  rotate: 60,
                  margin: 2
                }
              }
            ],
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
            yAxis: {type: 'value'},
            series: data.series
          }
          let stackChart = echarts.init(vm.$refs.stack1)
          stackChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
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
      if (this.form.timeDimension !== '') {
        params['timeDimension'] = this.form.timeDimension
      }
      if (this.form.bpCode !== '') {
        params['bpCode'] = this.form.bpCode.replace(/ /g, ',').split(',')
      }
      if (this.form.bpName !== '') {
        params['bpName'] = this.form.bpName.replace(/ /g, ',').split(',')
      }
      if (this.form.large.join() !== '') {
        params['large'] = this.form.large
      }
      if (this.form.subLarge.join() !== '') {
        params['subLarge'] = this.form.subLarge
      }
      if (this.form.cusSegment1.join() !== '') {
        params['cusSegment1'] = this.form.cusSegment1
      }
      if (this.form.cusSegment4.join() !== '') {
        params['cusSegment4'] = this.form.cusSegment4
      }
      if (this.form.prosegment !== '') {
        params['prosegment'] = this.form.prosegment
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
      if (this.form.materialcode.join() !== '') {
        params['materialcode'] = this.form.materialcode
      }
      if (this.form.matDesc.join() !== '') {
        params['matDesc'] = this.form.matDesc
      }
      if (this.form.dateRange[0] !== undefined) {
        params['dateRangeBgn'] = this.form.dateRange[0]
        params['dateRangeEnd'] = this.form.dateRange[1]
      }
      this.params = params
      return params
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
      return pn
    },
    getCusSegment1s () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_3S_Tracking_Detail'
      params['checked'] = '1'
      params['obj0'] = '客户细分1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cusSegment1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getCusSegment4s () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_3S_Tracking_Detail'
      params['checked'] = '1'
      params['obj0'] = '客户细分4'
      if (Array.isArray(this.form.cusSegment1) && this.form.cusSegment1.length !== 0) {
        params['objk1'] = '客户细分1'
        params['objv1'] = this.form.cusSegment1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cusSegment4s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getLarges () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_3S_Tracking_Detail'
      params['checked'] = '1'
      params['obj0'] = '大区'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.larges = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getsubLarges () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_3S_Tracking_Detail'
      params['checked'] = '1'
      params['obj0'] = '战区'
      if (Array.isArray(this.form.large) && this.form.large.length !== 0) {
        params['objk1'] = '大区'
        params['objv1'] = this.form.large
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.subLarges = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getProsegments () {
      let vm = this
      let params = {}
      params['tableName'] = 'ConNB_SellOut_Tracking_Detail'
      params['obj0'] = '产品细分'
      vm.$ajax({
        url: '/querySelFamily',
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
      params['tableName'] = 'ConNB_SellOut_Tracking_Detail'
      params['obj0'] = 'Family1'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      vm.$ajax({
        url: '/querySelFamily',
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
      params['tableName'] = 'ConNB_SellOut_Tracking_Detail'
      params['obj0'] = 'Family2'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'Family1'
        params['objv2'] = this.form.Family1
      }
      vm.$ajax({
        url: '/querySelFamily',
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
      params['tableName'] = 'ConNB_SellOut_Tracking_Detail'
      params['obj0'] = 'Family3'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'Family1'
        params['objv2'] = this.form.Family1
      }
      if (Array.isArray(this.form.Family2) && this.form.Family2.length !== 0) {
        params['objk3'] = 'Family2'
        params['objv3'] = this.form.Family2
      }
      vm.$ajax({
        url: '/querySelFamily',
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
      params['tableName'] = 'ConNB_SellOut_Tracking_Detail'
      params['obj0'] = 'FCST Family'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
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
      vm.$ajax({
        url: '/querySelFamily',
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
      params['tableName'] = 'ConNB_SellOut_Tracking_Detail'
      params['obj0'] = 'PN'
      if (this.form.prosegment !== '') {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.prosegment
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
      vm.$ajax({
        url: '/querySelFamily',
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
      params['tableName'] = 'ConNB_SellOut_Tracking_Detail'
      params['obj0'] = 'Desc'
      if (this.form.materialcode.length !== 0) {
        params['objk2'] = 'PN'
        params['objv2'] = this.form.materialcode
      }
      if (this.form.materialcode.length === 0) {
        if (this.form.prosegment !== '') {
          params['objk1'] = '产品细分'
          params['objv1'] = this.form.prosegment
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
        url: '/querySelFamily',
        data: params,
        done (data) {
          vm.matDescs.value = data.value
          vm.matDescs.pn = data.pn
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.waterfalls
  width 100%
  height 100%
  padding 10px
  .el-form-item
    margin-bottom -5px !important
  h2
    width 100%
    height 38px
    line-height 38px
    font-weight normal
    box-shadow: 0 2px 8px #ccc
    font-size 14px
    margin-top 10px
    margin-bottom 5px
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
  .addgrid
    min-height 10px
    width 100%
    overflow hidden
    margin 10px 0px
  .stack
    width 98%
    height 350px
</style>
