<template>
  <div class="salesanalysis-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="dbItem">
          <div class="block">
            <el-form :inline="true" :model="form1" ref="form1" label-width="95px" class="demo-form-inline">
              <el-form-item label="Site" prop="site">
                <el-select v-model="form1.site" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in sites"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="form1.family" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in familys"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Think业务线" prop="thinkline">
                <el-select v-model="form1.thinkline" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in thinklines"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品类型" prop="productType">
                <el-select v-model="form1.productType" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productTypes"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间维度" prop="timedimension">
                <el-select v-model="form1.timedimension" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timedimensions"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间范围" prop="timerange">
                <el-select v-model="form1.timerange" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timeranges"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left:10px">
                <el-button type="primary" size="mini" @click="onSubmit(form1)">查询</el-button>
                <el-button @click="resetForm('form1')" size="mini" >重置</el-button>
              </el-form-item>
              <form-public ref="formpublic"/>
            </el-form>
            <h2>工厂销量
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid1">
              <v-table-query
                :params='params1'
                :sheetsName="'Think_工厂销量'"
                :tableName='"Think_FcstCA_MFG"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_工厂销量'"
                ref="fcstCAMFG">
              </v-table-query>
            </div>
            <div class="stackbar" ref="stackbar" style="width:1100px;height:400px;margin: 10px auto"></div>
            <div class="stackbar" ref="barline1" style="width:1100px;height:400px;margin: 10px auto"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="dbItem">
          <div class="block">
            <el-form :inline="true" :model="form2" ref="form2" label-width="95px" class="demo-form-inline">
              <el-form-item label="Site" prop="site">
                <el-select v-model="form2.site" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in site2s"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="form2.family" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in family2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Think业务线" prop="thinkline">
                <el-select v-model="form2.thinkline" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in thinkline2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品类型" prop="productType">
                <el-select v-model="form2.productType" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productType2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间维度" prop="timedimension">
                <el-select v-model="form2.timedimension" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timedimension2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间范围" prop="timerange">
                <el-select v-model="form2.timerange" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timerange2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left:10px">
                <el-button type="primary" size="mini" @click="onSubmit(form2)">查询</el-button>
                <el-button @click="resetForm('form2')" size="mini" >重置</el-button>
              </el-form-item>
              <form-public ref="formpublic"/>
            </el-form>
            <h2>客户销量
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid2">
              <v-table-query
                :params='params2'
                :sheetsName="'Think_客户销量'"
                :tableName='"Think_FcstCA_Customer"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_客户销量'"
                ref="Customer">
              </v-table-query>
            </div>
            <div class="stackbar" ref="stackbar2" style="width:1100px;height:400px;margin: 10px auto"></div>
            <div class="stackbar" ref="barline2" style="width:1100px;height:400px;margin: 10px auto"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="dbItem">
          <div class="block">
            <el-form :inline="true" :model="form3" ref="form3" label-width="95px" class="demo-form-inline">
              <el-form-item label="Site" prop="site">
                <el-select v-model="form3.site" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in site3s"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="form3.family" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in family3s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Think业务线" prop="thinkline">
                <el-select v-model="form3.thinkline" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in thinkline3s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品类型" prop="productType">
                <el-select v-model="form3.productType" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productType3s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间维度" prop="timedimension">
                <el-select v-model="form3.timedimension" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timedimension3s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间范围" prop="timerange">
                <el-select v-model="form3.timerange" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in timerange3s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left:10px">
                <el-button type="primary" size="mini" @click="onSubmit(form3)">查询</el-button>
                <el-button @click="resetForm('form3')" size="mini" >重置</el-button>
              </el-form-item>
              <form-public ref="formpublic"/>
            </el-form>
            <h2>选件服务
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid3">
              <v-table-query
                :params='params3'
                :sheetsName="'Think_选件服务'"
                :tableName='"Think_FcstCA_Option"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_选件服务'"
                ref="fcstCAMFG">
              </v-table-query>
            </div>
            <div class="stackbar" ref="stackbar3" style="width:1100px;height:400px;margin: 10px auto"></div>
            <div class="stackbar" ref="barline3" style="width:1100px;height:400px;margin: 10px auto"></div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
import formPublic from '@/components/public/formPublic1'
import VTableQuery from '@/components/public/vtableQuery'
// const $ = window.$
import echarts from 'echarts'
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      params1: null,
      params2: null,
      params3: null,
      tabPosition: 'left',
      form1: {
        family: [],
        thinkline: [],
        productType: [], // 产品类型
        site: [],
        timedimension: [],
        timerange: []
      },
      familys: [],
      thinklines: [],
      productTypes: [],
      timeranges: [],
      timedimensions: [],
      sites: [],
      form2: {
        family: [],
        thinkline: [],
        productType: [], // 产品类型
        site: [],
        timedimension: [],
        timerange: []
      },
      family2s: [],
      thinkline2s: [],
      productType2s: [],
      timerange2s: [],
      timedimension2s: [],
      site2s: [],
      form3: {
        family: [],
        thinkline: [],
        productType: [], // 产品类型
        site: [],
        timedimension: [],
        timerange: []
      },
      family3s: [],
      thinkline3s: [],
      productType3s: [],
      timerange3s: [],
      timedimension3s: [],
      site3s: [],
      menuArr: ['工厂销量', '客户销量', '选件服务']
    }
  },
  components: {
    Upload,
    VTable,
    formPublic,
    VTableQuery
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.stackbar1()
      this.stackbar2()
      this.stackbar3()
      this.barline1()
      this.barline2()
      this.barline3()
    }, 3000)
  },
  methods: {
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('addgrid2')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    stackbar1 () {
      var option = {
        title: {
          text: 'xxx',
          top: 0,
          left: 'left',
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
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告'],
          left: '20%',
          right: '30%'
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
            // name: 'ND销量'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barGap: 0,
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            barGap: 0,
            // stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            barGap: 0,
            // stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            barGap: 0,
            // stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      let stackbar = echarts.init(this.$refs.stackbar)
      stackbar.setOption(option)
    },
    stackbar2 () {
      var option = {
        title: {
          text: 'xxx',
          top: 0,
          left: 'left',
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
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告'],
          left: '20%',
          right: '30%'
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
            // name: 'ND销量'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barGap: 0,
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            barGap: 0,
            // stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            barGap: 0,
            // stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            barGap: 0,
            // stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      let stackbar = echarts.init(this.$refs.stackbar2)
      stackbar.setOption(option)
    },
    stackbar3 () {
      var option = {
        title: {
          text: 'xxx',
          top: 0,
          left: 'left',
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
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告'],
          left: '20%',
          right: '30%'
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
            // name: 'ND销量'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barGap: 0,
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            barGap: 0,
            // stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            barGap: 0,
            // stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            barGap: 0,
            // stack: '广告',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // },
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      let stackbar = echarts.init(this.$refs.stackbar3)
      stackbar.setOption(option)
    },
    barline1 () {
      var xAxisData = ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000']
      var legendData = ['Step Start', 'Y7000', '20180321', '20180328', '20180404', '20180411', '20180418', '20180425', '20180502']
      var dataList = [
        [289.55, 937.96, 843.28, 545.3, 248.23, 98.33],
        [224.32, 974.27, 776.84, 571.35, 240.85, 116.08],
        [148.52, 1018.55, 721.58, 502.15, 253, 35.57],
        [78.47, 956.85, 695.53, 414.25, 315.16, 105.36],
        [134.91, 1021.79, 696.95, 358.12, 327.18, 80.36],
        [139.11, 1067.04, 736.44, 436.93, 424.98, 151.84],
        [182.64, 1079.56, 833.6, 534.93, 506.1, 80.01],
        [247.28, 1026.75, 924.68, 586.65, 465.35, 137.05]
      ]
      var option = {
        // title: {
        //   text: '预测版本变化滚动图表',
        //   top: 0,
        //   left: '10%',
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#333'
        //   }
        // },
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
          trigger: 'axis'
        },
        legend: {
          data: legendData,
          right: '6%'
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 100
        }, {
          type: 'inside',
          start: 0,
          end: 100
        }],
        xAxis: {
          data: xAxisData
        },
        yAxis: {},
        series: [{
          name: 'Step Start',
          type: 'line',
          step: 'middle',
          data: [12, 200, 300, 1000, 50, 500]
        }].concat(echarts.util.map(dataList, function (data, index) {
          return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
              normal: {
                opacity: 0.5
              }
            },
            data: data
          }
        }))
      }
      let drawBarLine = echarts.init(this.$refs.barline1)
      drawBarLine.setOption(option)
    },
    barline2 () {
      var xAxisData = ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000']
      var legendData = ['Step Start', 'Y7000', '20180321', '20180328', '20180404', '20180411', '20180418', '20180425', '20180502']
      var dataList = [
        [289.55, 937.96, 843.28, 545.3, 248.23, 98.33],
        [224.32, 974.27, 776.84, 571.35, 240.85, 116.08],
        [148.52, 1018.55, 721.58, 502.15, 253, 35.57],
        [78.47, 956.85, 695.53, 414.25, 315.16, 105.36],
        [134.91, 1021.79, 696.95, 358.12, 327.18, 80.36],
        [139.11, 1067.04, 736.44, 436.93, 424.98, 151.84],
        [182.64, 1079.56, 833.6, 534.93, 506.1, 80.01],
        [247.28, 1026.75, 924.68, 586.65, 465.35, 137.05]
      ]
      var option = {
        // title: {
        //   text: '预测版本变化滚动图表',
        //   top: 0,
        //   left: '10%',
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#333'
        //   }
        // },
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
          trigger: 'axis'
        },
        legend: {
          data: legendData,
          right: '6%'
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 100
        }, {
          type: 'inside',
          start: 0,
          end: 100
        }],
        xAxis: {
          data: xAxisData
        },
        yAxis: {},
        series: [{
          name: 'Step Start',
          type: 'line',
          step: 'middle',
          data: [12, 200, 300, 1000, 50, 500]
        }].concat(echarts.util.map(dataList, function (data, index) {
          return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
              normal: {
                opacity: 0.5
              }
            },
            data: data
          }
        }))
      }
      let drawBarLine = echarts.init(this.$refs.barline2)
      drawBarLine.setOption(option)
    },
    barline3 () {
      var xAxisData = ['Yoga720', 'Yoga710', 'xx 7000', 'xx air 14', 'xx air 15', 'Y7000']
      var legendData = ['Step Start', 'Y7000', '20180321', '20180328', '20180404', '20180411', '20180418', '20180425', '20180502']
      var dataList = [
        [289.55, 937.96, 843.28, 545.3, 248.23, 98.33],
        [224.32, 974.27, 776.84, 571.35, 240.85, 116.08],
        [148.52, 1018.55, 721.58, 502.15, 253, 35.57],
        [78.47, 956.85, 695.53, 414.25, 315.16, 105.36],
        [134.91, 1021.79, 696.95, 358.12, 327.18, 80.36],
        [139.11, 1067.04, 736.44, 436.93, 424.98, 151.84],
        [182.64, 1079.56, 833.6, 534.93, 506.1, 80.01],
        [247.28, 1026.75, 924.68, 586.65, 465.35, 137.05]
      ]
      var option = {
        // title: {
        //   text: '预测版本变化滚动图表',
        //   top: 0,
        //   left: '10%',
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#333'
        //   }
        // },
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
          trigger: 'axis'
        },
        legend: {
          data: legendData,
          right: '6%'
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 100
        }, {
          type: 'inside',
          start: 0,
          end: 100
        }],
        xAxis: {
          data: xAxisData
        },
        yAxis: {},
        series: [{
          name: 'Step Start',
          type: 'line',
          step: 'middle',
          data: [12, 200, 300, 1000, 50, 500]
        }].concat(echarts.util.map(dataList, function (data, index) {
          return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
              normal: {
                opacity: 0.5
              }
            },
            data: data
          }
        }))
      }
      let drawBarLine = echarts.init(this.$refs.barline3)
      drawBarLine.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.salesanalysis-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 0 !important
  .dbItem
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
