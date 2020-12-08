<template>
<div class="fullinv">
  <h2>全国SO分布
    <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
  </h2>
  <div class="waterfalls">
    <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
      <div class="line1">
        <el-form-item  label="日期范围" prop="dateRange" label-width="95px">
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
        <el-form-item label="客户细分" prop="cusSegment" >
          <el-select v-model="form.cusSegment" @visible-change="getCusSegments" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in cusSegments"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品细分" prop="prosegment" >
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
      <div class="line1">
        <el-form-item label="Family1" prop="Family1" label-width="95px">
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
        <el-form-item label="FCST Family" prop="fcstFamily" label-width="95px">
          <el-select v-model="form.fcstFamily" @visible-change="getFcstFamilys" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in fcstFamilys.value"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编码" prop="materialcode">
          <el-select v-model="form.materialcode" @visible-change="getMaterialcodes" size="mini" multiple collapse-tags filterable clearable  placeholder="请选择">
            <el-option
              v-for="(item, index) in materialcodes.value"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料描述" prop="matDesc">
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
  </div>
  <div class="grid">
    <div class="lableDate">
      <div class="dateView"></div>
    </div>
  </div>
  <div ref="provinceCity" style="width:1200px;height: 500px;margin:10px auto"></div>
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
        {title: '省份', field: '省份', width: '180px'},
        {title: '城市', field: '城市', width: '180px'},
        {title: 'Qty', field: 'Qty', width: '180px'},
        {title: 'WHERE', field: 'WHERE', width: '180px'}
      ],
      dataSource: [],
      params: {},
      toggle: true,
      form: {
        cusSegment: [], // 客户细分
        Family1: [], // Family1
        Family2: [], // Family2
        Family3: [], // Family3
        fcstFamily: [], // fcstFamily
        prosegment: '', // 产品细分
        materialcode: [], // 物料编码
        dateRange: [],
        matDesc: []
      },
      versions: [],
      cusSegments: [],
      prosegments: {pn: [], value: []},
      Family1s: {pn: [], value: []},
      Family2s: {pn: [], value: []},
      Family3s: {pn: [], value: []},
      matDescs: {pn: [], value: []},
      fcstFamilys: {pn: [], value: []},
      materialcodes: {pn: [], value: []}
    }
  },
  components: {
    formPublic
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.provinceCity()
      this.getTableData()
    }, 300)
  },
  methods: {
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
        url: '/getSODistribution',
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
    valieForm () {
      let params = this.$refs.formPublic.valieForm()
      if (this.form.cusSegment.join() !== '') {
        params['cusSegment'] = this.form.cusSegment
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
    getProsegments () {
      let vm = this
      let params = {}
      params['tableName'] = 'ConNB_MTM_Family'
      params['obj0'] = 'b.[产品细分]'
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
      params['tableName'] = 'ConNB_MTM_Family'
      params['obj0'] = 'b.[Family1]'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
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
      params['tableName'] = 'ConNB_MTM_Family'
      params['obj0'] = 'b.[Family2]'
      if (this.form.prosegment !== '') {
        params['objk1'] = 'b.[产品细分]'
        params['objv1'] = this.form.prosegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk2'] = 'b.[Family1]'
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
      params['tableName'] = 'ConNB_MTM_Family'
      params['obj0'] = 'b.[Family3]'
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
      params['tableName'] = 'ConNB_MTM_Family'
      params['obj0'] = 'b.[FCST Family]'
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
      params['tableName'] = 'ConNB_MTM_Family'
      params['obj0'] = 'b.[PN]'
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
        params['objk5'] = 'b.[FCST Family]'
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
      params['tableName'] = 'ConNB_MTM_Family'
      params['obj0'] = 'b.[Desc]'
      if (this.form.materialcode.length !== 0) {
        params['objk2'] = 'b.[PN]'
        params['objv2'] = this.form.materialcode
      }
      if (this.form.materialcode.length === 0) {
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
          params['objk5'] = 'b.[FCST Family]'
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
    getCusSegments () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_Family'
      params['checked'] = '1'
      params['obj0'] = '客户细分1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cusSegments = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    onSubmit (form) {
      this.valieForm()
      this.provinceCity()
      this.getTableData()
    },
    resetForm (form) {
      this.$refs.formPublic.resetForm()
      this.$refs[form].resetFields()
      this.$refs.formPublic.CVvalue = ''
      this.valieForm()
      this.provinceCity()
      this.getTableData()
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('grid')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    provinceCity () {
      let vm = this
      let params = this.valieForm()
      params['style'] = '1'
      params['tableName'] = 'ConNB_MTM_Family'
      vm.$ajax({
        url: '/getSODistribution',
        data: params,
        done (data) {
          let provinceCity = echarts.init(vm.$refs.provinceCity)
          var provinces = {
            '上海': '/static/province/shanghai.json',
            '河北': '/static/province/hebei.json',
            '山西': '/static/province/shanxi.json',
            '内蒙古': '/static/province/neimenggu.json',
            '辽宁': '/static/province/liaoning.json',
            '吉林': '/static/province/jilin.json',
            '黑龙江': '/static/province/heilongjiang.json',
            '江苏': '/static/province/jiangsu.json',
            '浙江': '/static/province/zhejiang.json',
            '安徽': '/static/province/anhui.json',
            '福建': '/static/province/fujian.json',
            '江西': '/static/province/jiangxi.json',
            '山东': '/static/province/shandong.json',
            '河南': '/static/province/henan.json',
            '湖北': '/static/province/hubei.json',
            '湖南': '/static/province/hunan.json',
            '广东': '/static/province/guangdong.json',
            '广西': '/static/province/guangxi.json',
            '海南': '/static/province/hainan.json',
            '四川': '/static/province/sichuan.json',
            '贵州': '/static/province/guizhou.json',
            '云南': '/static/province/yunnan.json',
            '西藏': '/static/province/xizang.json',
            '陕西': '/static/province/shanxi1.json',
            '甘肃': '/static/province/gansu.json',
            '青海': '/static/province/qinghai.json',
            '宁夏': '/static/province/ningxia.json',
            '新疆': '/static/province/xinjiang.json',
            '北京': '/static/province/beijing.json',
            '天津': '/static/province/tianjin.json',
            '重庆': '/static/province/chongqing.json',
            '香港': '/static/province/xianggang.json',
            '澳门': '/static/province/aomen.json'
          }
          var data1 = data.data1
          for (var i = 0; i < data1.length; i++) {
            data1[i].itemStyle = {
              normal: {
                areaColor: '#eee'
              }
            }
          }
          var option = {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c}'
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              x: 'right',
              y: 'center',
              feature: {
                mark: {
                  show: true
                },
                dataView: {
                  show: true,
                  readOnly: false
                }
              }
            },
            series: [{
              name: '选择器',
              type: 'map',
              mapType: 'china',
              left: 'left',
              top: 'center',
              width: '50%',
              // height: '50%',
              roam: false,
              selectedMode: 'single',
              showLegendSymbol: false,
              itemStyle: {
                normal: {
                  label: {
                    show: true
                  }
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              },
              data: data1
            }],
            animation: false
          }
          var data2 = data.data2
          setTimeout(delay, 1000)
          function delay () {
            provinceCity.on('click', function (param) {
              var selectedProvince = param.name // 获取点击的省份名称
              var data = option.series[0].data
              for (var key in data) {
                if (data[key].name === param.name) {
                  data[key].itemStyle.normal.areaColor = 'red'
                } else {
                  data[key].itemStyle.normal.areaColor = '#eee'
                }
              }
              if (!provinces[selectedProvince]) {
                option.series.splice(1)
                option.legend = null
                option.visualMap = null
                provinceCity.setOption(option, true)
                return
              }
              axios.get(provinces[selectedProvince]).then(res => {
                echarts.registerMap(selectedProvince, res.data)
                option.series[1] = {
                  name: '选择器',
                  type: 'map',
                  mapType: selectedProvince,
                  left: '60%',
                  top: 'center',
                  width: '30%',
                  // height: '50%',
                  roam: true,
                  selectedMode: 'single',
                  itemStyle: {
                    normal: {
                      label: {
                        show: true
                      }
                    },
                    emphasis: {
                      label: {
                        show: true
                      }
                    }
                  },
                  data: data2
                }
                option.legend = {
                  left: 'right',
                  data: ['随机数据']
                }
                option.visualMap = {
                  seriesIndex: 1,
                  orient: 'horizontal',
                  left: 'right',
                  min: 0,
                  max: 1000,
                  color: ['orange', 'yellow'],
                  text: ['高', '低'], // 文本，默认为数值文本
                  splitNumber: 0
                }
                provinceCity.setOption(option, true)
              })
            })
          }
          provinceCity.setOption(option, true)
        },
        fail (msg) {
          alert(msg)
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fullinv
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom -5px !important
  h2
    width 100%
    height 38px
    line-height 38px
    font-weight normal
    box-shadow: 0 2px 8px #ccc
    font-size 14px
    padding 0 20px
    margin 5px 0
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
  .grid
    width 100%
    height auto
    overflow hidden
    margin 10px auto
</style>
