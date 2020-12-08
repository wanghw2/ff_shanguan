<template>
<div class="fullinv-box">
  <div class="block">
    <el-form :inline="true" :model="form" ref="form" size="mini" style="margin-left:20px" class="demo-form-inline">
      <el-form-item  label="时间选择" prop="version" >
        <el-select v-model="form.version" size="mini" placeholder="请选择">
          <el-option
            v-for="(item, index) in versions"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  label="SI起始日期" prop="siStartDate">
        <div class="block">
          <el-date-picker
            size="mini"
            v-model="form.siStartDate"
            type="date"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="客户细分1" prop="cussegment1" >
        <el-select v-model="form.cussegment1" size="mini" multiple filterable collapse-tags placeholder="请选择">
          <el-option
            v-for="(item, index) in cussegment1s"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户细分4" prop="cussegment4">
        <el-select v-model="form.cussegment4" size="mini" @visible-change="getQuerycussegment4" multiple filterable collapse-tags placeholder="请选择">
          <el-option
            v-for="(item, index) in cussegment4s"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
        <el-button @click="resetForm('form')" size="mini" >重置</el-button>
      </el-form-item>
    </el-form>
    <h2 style="margin-top:10px">产品返回率
      <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
    </h2>
    <div class="addgrid">
      <v-table-query
        :params='params'
        :url="'getProReg'"
        :columnurl="'queryTableColumns251'"
        :sheetsName="'ConDT_产品回归率'"
        :tableName="'ConDT_SellOut_Return_SUM'"
        :source="'FF_IDSS_Data_CON'"
        :fileName="'ConDT_产品回归率'"
        ref="gridreturn">
      </v-table-query>
    </div>
    <div class="chart" ref="percentchart" style="width:100%;height: 400px;margin:10px auto"></div>
    <div class="chart" ref="singleFamily" style="width:100%;height: 400px;margin:10px auto"></div>
  </div>
</div>
</template>
<script>
import VTable from '@/components/public/vtable1'
import VTableQuery from '@/components/public/vtableQuery'
import echarts from 'echarts'
export default {
  data () {
    return {
      params: {},
      clickFamilyName: '',
      toggle: true,
      currentDate: '',
      form: {
        version: '2018 07月',
        cussegment1: [],
        cussegment4: []
      },
      versions: [],
      cussegment4s: [],
      cussegment1s: []
    }
  },
  components: {
    VTable,
    VTableQuery
  },
  created () {
    this.getMonth()
    this.getQueryversions()
    this.getQuerycussegment1()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.percentchart()
    }, 3000)
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
      this.$nextTick(() => {
        this.percentchart()
        this.valieForm(2)
        this.$refs.gridreturn.getColumns()
      }, 3000)
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    getMonth () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var currentDate = year + ' ' + addZero(month) + '月'
      function addZero (num) {
        return num > 9 ? '' + num : '0' + num
      }
      this.currentDate = currentDate
      this.form.version = currentDate
      return currentDate
    },
    percentchart () {
      let vm = this
      vm.valieForm(1)
      let newparam = {version: '2018 07月'}
      vm.params = Object.assign({}, newparam, vm.params)
      vm.$ajax({
        url: '/getProReg',
        data: vm.params,
        done (data) {
          let seriesData = data.series
          let xAxisData = data.xAxis
          vm.clickFamilyName = xAxisData[0]
          vm.singeFamily()
          var option = {
            title: {
              text: '产品返回率分析',
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
              formatter: '{a} <br/>{b} : {c}%'
            },
            color: ['#F79646'],
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
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '13%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 30,
                  margin: 2
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value} %'
                }
                // max: 100
              }
            ],
            series: [
              {
                name: 'Family',
                type: 'bar',
                data: seriesData
              }
            ]
          }
          let percentchart = echarts.init(vm.$refs.percentchart)
          percentchart.on('click', function (params) {
            vm.clickFamilyName = params.name // 获取点击到的family值
            vm.singeFamily()
          })
          percentchart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    singeFamily () {
      let vm = this
      vm.$ajax({
        url: '/getProReg',
        data: {
          family: vm.clickFamilyName,
          style: 3,
          businessLine: 'ConDT'
        },
        done (data) {
          let seriesData = data.series
          let xAxisData = data.xAxis
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
              formatter: '{a} <br/>{b} : {c}%'
            },
            color: ['#F79646'],
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
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '13%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: xAxisData,
                axisLabel: {
                  interval: 0,
                  rotate: 30,
                  margin: 2
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value} %'
                },
                max: 100
              }
            ],
            series: [
              {
                name: 'Family',
                type: 'line',
                smooth: true,
                data: seriesData,
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                  }
                }
              }
            ]
          }
          let singleFamily = echarts.init(vm.$refs.singleFamily)
          singleFamily.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    valieForm (n) { // params参数
      let params = {}
      if (this.form.siStartDate !== '') {
        params['siStartDate'] = this.form.siStartDate
      }
      if (this.form.cussegment1.join() !== '') {
        params['cusSegment1'] = this.form.cussegment1
      }
      if (this.form.cussegment4.join() !== '') {
        params['cusSegment4'] = this.form.cussegment4
      }
      if (this.form.version !== '') {
        params['version'] = this.form.version
      }
      params['style'] = n
      params['version'] = this.form.version
      params['businessLine'] = 'ConDT'
      this.params = params
      return params
    },
    getQueryversions () {
      let vm = this
      vm.$ajax({
        url: '/getcny',
        method: 'get',
        done (data) {
          vm.versions = data
          vm.form.version = vm.versions[0]
          vm.valieForm(2)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerycussegment1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_SellOut_Return_SUM'
      params['obj0'] = '客户细分1'
      params['checked'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cussegment1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerycussegment4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_SellOut_Return_SUM'
      params['obj0'] = '客户细分4'
      params['checked'] = '1'
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
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fullinv-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
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
      width 100%
      min-height 10px
      overflow hidden
      margin-bottom 10px
</style>
