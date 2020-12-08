<template>
  <div class="fcst-box">
    <div class="fcst-wrap">
      <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
        <el-form-item label="预测版本" prop="preversion" >
          <el-select v-model="form.preversion" size="mini" :disabled="disabled" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in preversions.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户细分" prop="cussegment">
          <el-select v-model="form.cussegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in cussegments.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品状态" prop="prostatus">
          <el-select v-model="form.prostatus" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in prostatuss.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="制造工厂" prop="buildfact">
          <el-select v-model="form.buildfact" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in buildfacts.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品细分" prop="prosegment">
          <el-select v-model="form.prosegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in prosegments.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family1" prop="Family1">
          <el-select v-model="form.Family1" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in Family1s.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family2" prop="Family2">
          <el-select v-model="form.Family2" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in Family2s.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编码" prop="materialcode">
          <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="价位段" prop="price">
          <el-select v-model="form.price" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in prices.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择维度" prop="dimension">
          <el-select v-model="form.dimension" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in dimensions.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" style="margin-left:30px" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
      </el-form>
      <div class="block">
        <h2>客户类型
          <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
        </h2>
        <div class="addgrid">
          <v-table
            :sheetsName="'ConNB_客户类型'"
            :tableName="'ConNB_Target'"
            :source="'FF_IDSS_Data_CON'"
            :fileName="'ConNB_客户类型'"
            ref="cnbcus">
          </v-table>
        </div>
        <div class="stack" ref="stack"></div>
        <div class="stack" ref="stack1"></div>
      </div>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtablePage251'
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle: true,
      disabled: false,
      form: {
        preversion: '',
        cussegment: [], // 客户细分
        prostatus: [], // 产品状态
        Family1: [],
        Family2: [],
        prosegment: [], // 产品细分
        buildfact: [], // 制造工厂
        price: [],
        dimension: '', // 维度
        materialcode: '' // 物料编码
      },
      preversions: [],
      cussegments: [],
      prostatuss: [],
      Family1s: [],
      Family2s: [],
      dimensions: [],
      prices: [],
      prosegments: [],
      buildfacts: []
    }
  },
  components: {
    VTable
  },
  created () {
    this.getQuerydata()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.drawStack()
      this.drawStack1()
    }, 300)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    drawStack () {
      var option = {
        title: {
          text: '客户细分',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
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
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直营', 'RkA', '线上渠道', '传统渠道'],
          right: 0,
          orient: 'vertical',
          top: '40%'
        },
        grid: {
          left: '5%',
          right: '18%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['四月', '五月', '六月', '七月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直营',
            type: 'bar',
            barWidth: 35,
            stack: '广告',
            data: [108, 99, 116, 128]
          },
          {
            name: 'RkA',
            type: 'bar',
            stack: '广告',
            data: [112, 142, 157, 131]
          },
          {
            name: '线上渠道',
            type: 'bar',
            stack: '广告',
            data: [51, 30, 24, 27]
          },
          {
            name: '传统渠道',
            type: 'bar',
            stack: '广告',
            data: [36, 34, 41, 33]
          }
        ]
      }
      let stackChart = echarts.init(this.$refs.stack)
      stackChart.setOption(option)
    },
    drawStack1 () {
      var option = {
        title: {
          // backgroundColor: '#333',
          text: '客户细分',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
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
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直营', 'RkA', '线上渠道', '传统渠道'],
          right: 0,
          orient: 'vertical',
          top: '40%'
        },
        grid: {
          left: '5%',
          right: '18%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['四月', '五月', '六月', '七月']
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
            name: '直营',
            type: 'bar',
            barWidth: 35,
            stack: '广告',
            data: [35.12, 32.48, 34.36, 39.99]
          },
          {
            name: 'RkA',
            type: 'bar',
            stack: '广告',
            data: [36.56, 46.51, 46.41, 41.11]
          },
          {
            name: '线上渠道',
            type: 'bar',
            stack: '广告',
            data: [16.63, 9.76, 7.04, 8.58]
          },
          {
            name: '传统渠道',
            type: 'bar',
            stack: '广告',
            data: [11.69, 11.24, 12.20, 10.32]
          }
        ]
      }
      let stackChart1 = echarts.init(this.$refs.stack1)
      stackChart1.setOption(option)
    },
    getQuerydata () { // 获取查询条件
      let vm = this
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': '客户细分1_CON,产品状态,制造工厂_ConNB,产品细分_CONNB,价位段'
        },
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === '客户细分1_CON') {
              vm.prosegments = data[i]
            }
            if (data[i].value === '产品状态') {
              vm.prostatuss = data[i]
            }
            if (data[i].value === '制造工厂_ConNB') {
              vm.buildfacts = data[i]
            }
            if (data[i].value === '产品细分_CONNB') {
              vm.prosegments = data[i]
            }
            if (data[i].value === '价位段') {
              vm.prices = data[i]
            }
          }
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
.fcst-box
  width 100%
  height 100%
  padding 10px
  .fcst-wrap
    width 100%
    height 100%
    .el-form-item
      margin-bottom 0 !important
    .block
      width 100%
      height auto
      overflow hidden
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
      .addgrid
        min-height 10px
        width 100%
        overflow hidden
        margin-bottom 10px
      .stack
        width 50%
        height 400px
        float left
        margin-bottom 20px
</style>
