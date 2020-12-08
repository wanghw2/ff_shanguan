<template>
  <div class="poWrap">
    <h2>排产总览</h2>
    <div class="selectBox">
      <el-form :inline="true" :model="form" ref="form" label-width="110px" class="demo-form-inline">
        <el-form-item label="财年" prop="year">
          <el-select v-model="form.year" size="mini" filterable placeholder="请选择">
            <el-option
              v-for="(item, index) in years"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="财月" prop="month">
          <el-select v-model="form.month" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in months"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="BusinessModel" prop="Business_Model">
          <el-select v-model="form.Business_Model" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in Business_Models"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="业务类型" prop="businessline">
          <el-select v-model="form.businessline" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in businesslines"
              :key="index"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Brand" prop="Brand">
          <el-select v-model="form.Brand" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in Brands"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Plant" prop="Plant">
          <el-select v-model="form.Plant" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in Plants"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="FamilyECC" prop="Family_ECC">
          <el-select v-model="form.Family_ECC" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in Family_ECCs"
              :key="index"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="CustomerSoldto" prop="Customer_Soldto">
          <el-select v-model="form.Customer_Soldto" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in Customer_Soldtos"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <br/>
        <el-form-item label="CPU" prop="cpu">
          <el-select v-model="form.cpu" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in cpus"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="屏幕" prop="screen">
          <el-select v-model="form.screen" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in screens"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="硬盘1" prop="hardcard1">
          <el-select v-model="form.hardcard1" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in hardcard1s"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="硬盘2" prop="hardcard2">
          <el-select v-model="form.hardcard2" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in hardcard2s"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内存" prop="ram">
          <el-select v-model="form.ram" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in rams"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="显卡" prop="displaycard">
          <el-select v-model="form.displaycard" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in displaycards"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="颜色" prop="color">
          <el-select v-model="form.color" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in colors"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="OS" prop="os">
          <el-select v-model="form.os" size="mini" filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in oss"
              :key="index"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left: 30px">
          <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="chartbox" ref="Qty"></div>
    <h2>MTD需求
      <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
    </h2>
    <div class="chart-box mtd" ref="mtd"></div>
    <h2>今日需求
      <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
    </h2>
    <div class="chart-box today" ref="today"></div>
    <h2>昨日需求
      <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
    </h2>
    <div class="chart-box yesterday" ref="yesterday"></div>
    <h2>Pending PO
      <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
    </h2>
    <div class="pendingpobox" style="width: 100%;height auto;overflow:hidden;">
      <div class="PendingPO" ref="PendingPO" style="width: 73%;height: 500px;float: left;"></div>
      <div style="width: 25%;height:100%;float: left;margin-top:100px;">
        <el-form ref="formdesc" :model="formdesc" label-width="80px" >
          <el-form-item label="备注">
            <el-input type="textarea" rows="10" v-model="formdesc.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="mini" type="primary" @click="submitForm('formdesc')">保存</el-button>
            <el-button size="mini" @click="resetForm('formdesc')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <h2>新MTM 数量统计
      <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
    </h2>
    <div class="chart-box newMtm" ref="newMtm"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
// const $ = window.$
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      form: {
        year: '', // 财年
        month: '', // 财月
        Customer_Soldto: '',
        Family_ECC: '',
        Plant: '',
        Brand: '',
        businessline: '',
        Business_Model: '',
        cpu: '',
        color: '',
        os: '',
        hardcard1: '',
        hardcard2: '',
        displaycard: '',
        ram: '',
        screen: ''
      },
      years: [],
      months: [],
      Customer_Soldtos: [],
      Family_ECCs: [],
      Plants: [],
      Brands: [],
      businesslines: [],
      Business_Models: [],
      cpus: [],
      colors: [],
      oss: [],
      hardcard1s: [],
      hardcard2s: [],
      displaycards: [],
      rams: [],
      screens: [],
      formdesc: {
        desc: ''
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.qtyChart()
      this.mtdChart()
      this.todayChart()
      this.yesterdayChart()
      this.newMtm()
      this.PendingPO()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    toggleList1 () {
      let addgrid = document.getElementsByClassName('mtd')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('today')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    toggleList3 () {
      let addgrid = document.getElementsByClassName('yesterday')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('pendingpobox')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('newMtm')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
    },
    qtyChart () {
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Daily Qty',
            // min: 0,
            // max: 250,
            // interval: 50,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: 'MTD Qty',
            // min: 0,
            // max: 25,
            // interval: 5,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '降水量',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均温度',
            type: 'line',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
      let Qty = echarts.init(this.$refs.Qty)
      Qty.setOption(option)
    },
    mtdChart () {
      var builderJson = {
        'orderStatusall': 580,
        'factoryall': 1180,
        'businessTypeall': 480,
        'delayTimepieall': 380,
        'factoryPieall': 1580,
        'businessPieall': 1280,
        'orderStatus': {
          '未下单': 322,
          '工厂未接单': 218,
          '工厂已接单': 249
        },
        'factory': {
          'LCFC': 110,
          'LIPC': 218,
          'WISTRON': 239,
          'COMPAL': 318,
          'QUANTA': 339,
          '3NOD': 510,
          'BITLAND': 450
        },
        'businessType': {
          'BTB': 128,
          'BTC': 315,
          'Demo': 212,
          'GAB': 314,
          'internal': 416,
          'OverBuild': 110,
          'SBO': 180,
          'TBD': 310,
          'ZTE/HW': 450,
          '包销': 180,
          '其他': 310
        }
      }
      var delayTimepie = {
        '未下单': 312,
        '工厂未接单': 228,
        '工厂已接单': 329
      }
      var factoryPie = {
        'LCFC': 120,
        'LIPC': 87,
        'WISTRON': 199,
        'COMPAL': 218,
        'QUANTA': 319,
        '3NOD': 350,
        'BITLAND': 230
      }
      var businessPie = {
        'BTB': 312,
        'BTC': 215,
        'Demo': 112,
        'GAB': 134,
        'internal': 316,
        'OverBuild': 110,
        'SBO': 160,
        'TBD': 180,
        'ZTE/HW': 410,
        '包销': 310,
        '其他': 210
      }
      var option = {
        tooltip: {},
        title: [{
          text: '订单状态',
          subtext: '总计 ' + builderJson.orderStatusall,
          x: '30%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '订单状态',
          subtext: '总计 ' + builderJson.delayTimepieall,
          x: '75%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '工厂',
          subtext: '总计 ' + builderJson.factoryall,
          x: '30%',
          y: '35%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '工厂',
          subtext: '总计 ' + builderJson.factoryPieall,
          x: '75%',
          y: '35%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '业务类型',
          subtext: '总计 ' + builderJson.businessTypeall,
          x: '30%',
          y: '66%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '业务类型',
          subtext: '总计 ' + builderJson.businessPieall,
          x: '75%',
          y: '66%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }],
        grid: [{
          top: '8%',
          width: '50%',
          bottom: '66%',
          left: 10,
          containLabel: true
        }, {
          top: '43%',
          width: '50%',
          bottom: '35%',
          left: 10,
          containLabel: true
        }, {
          top: '74%',
          width: '50%',
          bottom: 0,
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: builderJson.orderStatusall,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.factoryall,
          gridIndex: 1,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.businessTypeall,
          gridIndex: 2,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(builderJson.orderStatus),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          type: 'category',
          data: Object.keys(builderJson.factory),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 2,
          type: 'category',
          data: Object.keys(builderJson.businessType),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'orderStatus',
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.orderStatus).map(function (key) {
            return builderJson.orderStatus[key]
          })
        }, {
          type: 'bar',
          stack: 'orderStatus',
          silent: true,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.orderStatus).map(function (key) {
            return builderJson.orderStatusall - builderJson.orderStatus[key]
          })
        }, {
          type: 'bar',
          stack: 'factory',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.factory).map(function (key) {
            return builderJson.factory[key]
          })
        }, {
          type: 'bar',
          stack: 'factory',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.factory).map(function (key) {
            return builderJson.factoryall - builderJson.factory[key]
          })
        }, {
          type: 'bar',
          stack: 'businessType',
          xAxisIndex: 2,
          yAxisIndex: 2,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.businessType).map(function (key) {
            return builderJson.businessType[key]
          })
        }, {
          type: 'bar',
          stack: 'businessType',
          silent: true,
          xAxisIndex: 2,
          yAxisIndex: 2,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.businessType).map(function (key) {
            return builderJson.businessTypeall - builderJson.businessType[key]
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '20%'],
          data: Object.keys(delayTimepie).map(function (key) {
            return {
              name: key,
              value: delayTimepie[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '54%'],
          data: Object.keys(factoryPie).map(function (key) {
            return {
              name: key,
              value: factoryPie[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '86%'],
          data: Object.keys(businessPie).map(function (key) {
            return {
              name: key,
              value: businessPie[key]
            }
          })
        }]
      }
      let mtd = echarts.init(this.$refs.mtd)
      mtd.setOption(option)
    },
    todayChart () {
      var builderJson = {
        'orderStatusall': 580,
        'factoryall': 1180,
        'businessTypeall': 480,
        'delayTimepieall': 380,
        'factoryPieall': 1580,
        'businessPieall': 1280,
        'orderStatus': {
          '未下单': 322,
          '工厂未接单': 218,
          '工厂已接单': 249
        },
        'factory': {
          'LCFC': 110,
          'LIPC': 218,
          'WISTRON': 239,
          'COMPAL': 318,
          'QUANTA': 339,
          '3NOD': 510,
          'BITLAND': 450
        },
        'businessType': {
          'BTB': 128,
          'BTC': 315,
          'Demo': 212,
          'GAB': 314,
          'internal': 416,
          'OverBuild': 110,
          'SBO': 180,
          'TBD': 310,
          'ZTE/HW': 450,
          '包销': 180,
          '其他': 310
        }
      }
      var delayTimepie = {
        '未下单': 312,
        '工厂未接单': 228,
        '工厂已接单': 329
      }
      var factoryPie = {
        'LCFC': 120,
        'LIPC': 87,
        'WISTRON': 199,
        'COMPAL': 218,
        'QUANTA': 319,
        '3NOD': 350,
        'BITLAND': 230
      }
      var businessPie = {
        'BTB': 312,
        'BTC': 215,
        'Demo': 112,
        'GAB': 134,
        'internal': 316,
        'OverBuild': 110,
        'SBO': 160,
        'TBD': 180,
        'ZTE/HW': 410,
        '包销': 310,
        '其他': 210
      }
      var option = {
        tooltip: {},
        title: [{
          text: '订单状态',
          subtext: '总计 ' + builderJson.orderStatusall,
          x: '30%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '订单状态',
          subtext: '总计 ' + builderJson.delayTimepieall,
          x: '75%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '工厂',
          subtext: '总计 ' + builderJson.factoryall,
          x: '30%',
          y: '35%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '工厂',
          subtext: '总计 ' + builderJson.factoryPieall,
          x: '75%',
          y: '35%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '业务类型',
          subtext: '总计 ' + builderJson.businessTypeall,
          x: '30%',
          y: '66%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '业务类型',
          subtext: '总计 ' + builderJson.businessPieall,
          x: '75%',
          y: '66%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }],
        grid: [{
          top: '8%',
          width: '50%',
          bottom: '66%',
          left: 10,
          containLabel: true
        }, {
          top: '43%',
          width: '50%',
          bottom: '35%',
          left: 10,
          containLabel: true
        }, {
          top: '74%',
          width: '50%',
          bottom: 0,
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: builderJson.orderStatusall,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.factoryall,
          gridIndex: 1,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.businessTypeall,
          gridIndex: 2,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(builderJson.orderStatus),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          type: 'category',
          data: Object.keys(builderJson.factory),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 2,
          type: 'category',
          data: Object.keys(builderJson.businessType),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'orderStatus',
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.orderStatus).map(function (key) {
            return builderJson.orderStatus[key]
          })
        }, {
          type: 'bar',
          stack: 'orderStatus',
          silent: true,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.orderStatus).map(function (key) {
            return builderJson.orderStatusall - builderJson.orderStatus[key]
          })
        }, {
          type: 'bar',
          stack: 'factory',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.factory).map(function (key) {
            return builderJson.factory[key]
          })
        }, {
          type: 'bar',
          stack: 'factory',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.factory).map(function (key) {
            return builderJson.factoryall - builderJson.factory[key]
          })
        }, {
          type: 'bar',
          stack: 'businessType',
          xAxisIndex: 2,
          yAxisIndex: 2,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.businessType).map(function (key) {
            return builderJson.businessType[key]
          })
        }, {
          type: 'bar',
          stack: 'businessType',
          silent: true,
          xAxisIndex: 2,
          yAxisIndex: 2,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.businessType).map(function (key) {
            return builderJson.businessTypeall - builderJson.businessType[key]
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '20%'],
          data: Object.keys(delayTimepie).map(function (key) {
            return {
              name: key,
              value: delayTimepie[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '54%'],
          data: Object.keys(factoryPie).map(function (key) {
            return {
              name: key,
              value: factoryPie[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '86%'],
          data: Object.keys(businessPie).map(function (key) {
            return {
              name: key,
              value: businessPie[key]
            }
          })
        }]
      }
      let today = echarts.init(this.$refs.today)
      today.setOption(option)
    },
    yesterdayChart () {
      var builderJson = {
        'orderStatusall': 580,
        'factoryall': 1180,
        'businessTypeall': 480,
        'delayTimepieall': 380,
        'factoryPieall': 1580,
        'businessPieall': 1280,
        'orderStatus': {
          '未下单': 322,
          '工厂未接单': 218,
          '工厂已接单': 249
        },
        'factory': {
          'LCFC': 110,
          'LIPC': 218,
          'WISTRON': 239,
          'COMPAL': 318,
          'QUANTA': 339,
          '3NOD': 510,
          'BITLAND': 450
        },
        'businessType': {
          'BTB': 128,
          'BTC': 315,
          'Demo': 212,
          'GAB': 314,
          'internal': 416,
          'OverBuild': 110,
          'SBO': 180,
          'TBD': 310,
          'ZTE/HW': 450,
          '包销': 180,
          '其他': 310
        }
      }
      var delayTimepie = {
        '未下单': 312,
        '工厂未接单': 228,
        '工厂已接单': 329
      }
      var factoryPie = {
        'LCFC': 120,
        'LIPC': 87,
        'WISTRON': 199,
        'COMPAL': 218,
        'QUANTA': 319,
        '3NOD': 350,
        'BITLAND': 230
      }
      var businessPie = {
        'BTB': 312,
        'BTC': 215,
        'Demo': 112,
        'GAB': 134,
        'internal': 316,
        'OverBuild': 110,
        'SBO': 160,
        'TBD': 180,
        'ZTE/HW': 410,
        '包销': 310,
        '其他': 210
      }
      var option = {
        tooltip: {},
        title: [{
          text: '订单状态',
          subtext: '总计 ' + builderJson.orderStatusall,
          x: '30%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '订单状态',
          subtext: '总计 ' + builderJson.delayTimepieall,
          x: '75%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '工厂',
          subtext: '总计 ' + builderJson.factoryall,
          x: '30%',
          y: '35%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '工厂',
          subtext: '总计 ' + builderJson.factoryPieall,
          x: '75%',
          y: '35%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '业务类型',
          subtext: '总计 ' + builderJson.businessTypeall,
          x: '30%',
          y: '66%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '业务类型',
          subtext: '总计 ' + builderJson.businessPieall,
          x: '75%',
          y: '66%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }],
        grid: [{
          top: '8%',
          width: '50%',
          bottom: '66%',
          left: 10,
          containLabel: true
        }, {
          top: '43%',
          width: '50%',
          bottom: '35%',
          left: 10,
          containLabel: true
        }, {
          top: '74%',
          width: '50%',
          bottom: 0,
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: builderJson.orderStatusall,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.factoryall,
          gridIndex: 1,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.businessTypeall,
          gridIndex: 2,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(builderJson.orderStatus),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          type: 'category',
          data: Object.keys(builderJson.factory),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 2,
          type: 'category',
          data: Object.keys(builderJson.businessType),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'orderStatus',
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.orderStatus).map(function (key) {
            return builderJson.orderStatus[key]
          })
        }, {
          type: 'bar',
          stack: 'orderStatus',
          silent: true,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.orderStatus).map(function (key) {
            return builderJson.orderStatusall - builderJson.orderStatus[key]
          })
        }, {
          type: 'bar',
          stack: 'factory',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.factory).map(function (key) {
            return builderJson.factory[key]
          })
        }, {
          type: 'bar',
          stack: 'factory',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.factory).map(function (key) {
            return builderJson.factoryall - builderJson.factory[key]
          })
        }, {
          type: 'bar',
          stack: 'businessType',
          xAxisIndex: 2,
          yAxisIndex: 2,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.businessType).map(function (key) {
            return builderJson.businessType[key]
          })
        }, {
          type: 'bar',
          stack: 'businessType',
          silent: true,
          xAxisIndex: 2,
          yAxisIndex: 2,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.businessType).map(function (key) {
            return builderJson.businessTypeall - builderJson.businessType[key]
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '20%'],
          data: Object.keys(delayTimepie).map(function (key) {
            return {
              name: key,
              value: delayTimepie[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '54%'],
          data: Object.keys(factoryPie).map(function (key) {
            return {
              name: key,
              value: factoryPie[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '15%'],
          center: ['75%', '86%'],
          data: Object.keys(businessPie).map(function (key) {
            return {
              name: key,
              value: businessPie[key]
            }
          })
        }]
      }
      let yesterday = echarts.init(this.$refs.yesterday)
      yesterday.setOption(option)
    },
    newMtm () {
      var builderJson = {
        'businessall': 580,
        'thinkbusinessall': 1180,
        'businesspieall': 380,
        'thinkbusinessPieall': 1580,
        'business': {
          'BTB': 322,
          'BTC': 218,
          'Demo': 249,
          'GAB': 209,
          'internal': 209,
          'OverBuild': 239,
          'SBO': 239,
          'TBD': 259,
          'ZTE/HW': 509,
          '包销': 239,
          '分销-DC': 119,
          '分销-E': 229,
          '分销-R': 149,
          '零售专供': 432,
          '天禧传奇': 439,
          '直供-A': 359
        },
        'thinkbusiness': {
          'Edge': 110,
          'Premium': 218,
          'Box': 239,
          'AIO': 318
        }
      }
      var businesspie = {
        'BTB': 322,
        'BTC': 218,
        'Demo': 249,
        'GAB': 209,
        'internal': 409,
        'OverBuild': 309,
        'SBO': 309,
        'TBD': 509,
        'ZTE/HW': 269,
        '包销': 239,
        '分销-DC': 139,
        '分销-E': 329,
        '分销-R': 569,
        '零售专供': 209,
        '天禧传奇': 129,
        '直供-A': 419
      }
      var thinkbusinessPie = {
        'Edge': 110,
        'Premium': 218,
        'Box': 239,
        'AIO': 318
      }
      var option = {
        tooltip: {},
        title: [{
          text: '业务类型',
          subtext: '总计 ' + builderJson.businessall,
          x: '30%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '业务类型',
          subtext: '总计 ' + builderJson.businesspieall,
          x: '75%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: 'think业务线',
          subtext: '总计 ' + builderJson.thinkbusinessall,
          x: '30%',
          y: '50%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: 'think业务线',
          subtext: '总计 ' + builderJson.thinkbusinessPieall,
          x: '75%',
          y: '50%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }],
        grid: [{
          top: '8%',
          width: '50%',
          bottom: '52%',
          left: 10,
          containLabel: true
        }, {
          top: '58%',
          width: '50%',
          bottom: '0',
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: builderJson.businessall,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.thinkbusinessall,
          gridIndex: 1,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(builderJson.business),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          type: 'category',
          data: Object.keys(builderJson.thinkbusiness),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'business',
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.business).map(function (key) {
            return builderJson.business[key]
          })
        }, {
          type: 'bar',
          stack: 'business',
          silent: true,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.business).map(function (key) {
            return builderJson.businessall - builderJson.business[key]
          })
        }, {
          type: 'bar',
          stack: 'thinkbusiness',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.thinkbusiness).map(function (key) {
            return builderJson.thinkbusiness[key]
          })
        }, {
          type: 'bar',
          stack: 'thinkbusiness',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.thinkbusiness).map(function (key) {
            return builderJson.thinkbusinessall - builderJson.thinkbusiness[key]
          })
        }, {
          type: 'pie',
          radius: [0, '28%'],
          center: ['75%', '28%'],
          data: Object.keys(businesspie).map(function (key) {
            return {
              name: key,
              value: businesspie[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '28%'],
          center: ['75%', '78%'],
          data: Object.keys(thinkbusinessPie).map(function (key) {
            return {
              name: key,
              value: thinkbusinessPie[key]
            }
          })
        }]
      }
      let newMtm = echarts.init(this.$refs.newMtm)
      newMtm.setOption(option)
    },
    PendingPO () {
      var builderJson = {
        'delayTimeall': 580,
        'statusall': 1180,
        'delayTimepieall': 380,
        'statusPieall': 1580,
        'delayTime': {
          'Delay 1BD': 322,
          'Delay 2BD': 218,
          'Delay 3BD': 249,
          'Delay >3BD': 209
        },
        'status': {
          'Cost': 110,
          'Contract': 218,
          'Image/ AT': 239,
          'Other': 318,
          '下单超需求': 339
        }
      }
      var delayTimepie = {
        'Delay 1BD': 322,
        'Delay 2BD': 218,
        'Delay 3BD': 249,
        'Delay >3BD': 209
      }
      var statusPie = {
        'Cost': 110,
        'Contract': 218,
        'Image/ AT': 239,
        'Other': 318,
        '下单超需求': 339
      }
      var option = {
        tooltip: {},
        title: [{
          text: '延误天数',
          subtext: '总计 ' + builderJson.delayTimeall,
          x: '30%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '延误天数',
          subtext: '总计 ' + builderJson.delayTimepieall,
          x: '75%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '状态',
          subtext: '总计 ' + builderJson.statusall,
          x: '30%',
          y: '50%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }, {
          text: '状态',
          subtext: '总计 ' + builderJson.statusPieall,
          x: '75%',
          y: '50%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14
          }
        }],
        grid: [{
          top: '8%',
          width: '50%',
          bottom: '55%',
          left: 10,
          containLabel: true
        }, {
          top: '58%',
          width: '50%',
          bottom: '0',
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: builderJson.delayTimeall,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.statusall,
          gridIndex: 1,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(builderJson.delayTime),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          type: 'category',
          data: Object.keys(builderJson.status),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'delayTime',
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.delayTime).map(function (key) {
            return builderJson.delayTime[key]
          })
        }, {
          type: 'bar',
          stack: 'delayTime',
          silent: true,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.delayTime).map(function (key) {
            return builderJson.delayTimeall - builderJson.delayTime[key]
          })
        }, {
          type: 'bar',
          stack: 'status',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.status).map(function (key) {
            return builderJson.status[key]
          })
        }, {
          type: 'bar',
          stack: 'status',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.status).map(function (key) {
            return builderJson.statusall - builderJson.status[key]
          })
        }, {
          type: 'pie',
          radius: [0, '28%'],
          center: ['75%', '28%'],
          data: Object.keys(delayTimepie).map(function (key) {
            return {
              name: key,
              value: delayTimepie[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '28%'],
          center: ['75%', '78%'],
          data: Object.keys(statusPie).map(function (key) {
            return {
              name: key,
              value: statusPie[key]
            }
          })
        }]
      }
      let PendingPO = echarts.init(this.$refs.PendingPO)
      PendingPO.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.poWrap
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 0 !important
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
  .selectBox
    width 100%
    height auto
    overflow hidden
  .chartbox
    width 100%
    height 400px
    margin 10px auto
  .chart-box
    width 90%
    height 600px
    margin 10px auto
</style>
