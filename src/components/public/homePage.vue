<template>
  <div class="home-page">
    <div class="home-page-edge-left"></div>
    <div class="home-page-box">
      <div class="home-page-top">
        <div class="home-page-top-left">
          <span>Management 360</span>
        </div>
        <div  class="home-page-top-right">
          <el-tag class="findate">{{titleDate.year}}</el-tag>
          <el-tag class="findate">{{titleDate.quarter}}</el-tag>
          <el-tag class="findate">{{titleDate.month+"月"}}</el-tag>
          <span class="today">{{titleDate.date}}</span>
        </div>
      </div>
      <div class="home-page-center">
        <div class="home-page-edge-top"></div>
        <div class="home-page-center-bg">
          <div class="home-page-center-left">
            <div class="home-page-container-left">
              <div class="home-page-title2">| 市场360</div>
              <div class="home-page-center-text">
                <!-- <div class="item-box-title">高风险通路</div> -->
                <div class="market-box-content">
                  <dl>
                    <dt>高风险通路</dt>
                    <dd>有效订单进度delay</dd>
                    <dd>shipment进度delay</dd>
                    <dd>shipment OL</dd>
                    <dd>shipment总量减少</dd>
                    <dd>shipment节奏减慢</dd>
                  </dl>
                  <dl v-for="(item,index) in channelRiskList"
                      :key="index">
                    <dt>{{item.channelname}}</dt>
                    <dd>{{item.value1}}</dd>
                    <dd>{{item.value2}}</dd>
                    <dd>{{item.value3}}</dd>
                    <dd>{{item.value4}}</dd>
                    <dd>{{item.value5}}</dd>
                  </dl>
                </div>
                <!-- <div class="market-box-content">
                  <dl>
                    <dt>趋势下行</dt>
                    <dd>shipment总量减少</dd>
                    <dd>shipment节奏减慢</dd>
                  </dl>
                  <dl v-for="(item,index) in channelTrendDownwardList"
                      :key="index">
                    <dt>{{item.channelname}}</dt>
                    <dd>{{item.value1}}</dd>
                    <dd>{{item.value2}}</dd>
                    <dd>{{item.value3}}</dd>
                  </dl>
                </div> -->
                <!-- <div class="item-box-title">高风险战区</div> -->
                <div class="market-box-content">
                  <dl>
                    <dt>高风险战区</dt>
                    <dd>有效订单进度delay</dd>
                    <dd>shipment进度delay</dd>
                    <dd>shipment OL</dd>
                    <dd>shipment总量减少</dd>
                    <dd>shipment节奏减慢</dd>
                  </dl>
                  <dl v-for="(item,index) in warZoneRiskList"
                      :key="index">
                    <dt>{{item.warZonename}}</dt>
                    <dd>{{item.value1}}</dd>
                    <dd>{{item.value2}}</dd>
                    <dd>{{item.value3}}</dd>
                    <dd>{{item.value4}}</dd>
                    <dd>{{item.value5}}</dd>
                  </dl>
                </div>
                <!-- <div class="market-box-content">
                  <dl>
                    <dd>shipment总量减少</dd>
                    <dd>shipment节奏减慢</dd>
                  </dl>
                  <dl v-for="(item,index) in warZoneTrendDownwardList"
                      :key="index">
                    <dt>{{item.warZonename}}</dt>
                    <dd>{{item.value1}}</dd>
                    <dd>{{item.value2}}</dd>
                    <dd>{{item.value3}}</dd>
                  </dl>
                </div> -->
              </div>
              <div class="home-page-edge-top"></div>
              <div class="home-page-center-graph-left">
                <div ref="chbChart"
                     style="height:100%;width:100%"></div>
              </div>
            </div>
          </div>
          <div class="home-page-center-center">
            <div class="home-page-edge-left"></div>
            <div class="home-page-center-center-bg">
              <div class="home-page-title2">| KPI 360</div>
              <div class="home-page-kpi-container">
                <div class="home-page-center-kpi-text">
                  <div class="kpi-list-item"
                       v-for="(item, index) in kpiListData"
                       :key="index">
                    <div class="item-name">{{ item.name }}</div>
                    <div>
                      {{ item.number }}
                      <i :style="{
                    color: item.lift == 'down' ? 'red' : '#0fff6d',
                    fontWeight: 700
                  }"
                         :class="
                    item.lift == 'down' ? 'el-icon-bottom' : 'el-icon-top'
                  "></i>
                    </div>
                  </div>
                </div>
                <div class="home-page-center-kpi-graph">
                  <div ref="kpiChart"
                       style="height:100%;width:100%"></div>
                </div>
              </div>
            </div>
            <div class="home-page-edge-right"></div>
          </div>
          <div class="home-page-center-right">
            <div class="home-page-container-right">
              <div class="home-page-title2">| 促销360</div>
              <div class="home-page-center-text">
                <div class="promote-box-content"
                     v-for="(item,index) in salesPromotionList"
                     :key="index">
                  <div class="title">{{item.oneTitle}}</div>
                  <div class="promote-content-box"
                       v-for="(child,K) in item.salesPromotion"
                       :key="K">
                    <div class="two-title">{{child.twoTitle}}</div>
                    <div class="content"
                         v-for="(v,k) in child.salesPromotionData"
                         :key="k">
                      <div class="content-left">{{v.name}}</div>
                      <div class="content-right">{{v.value}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="home-page-edge-top"></div>
              <div class="home-page-center-graph-right">
                <div ref="promoteChart"
                     style="height:100%;width:100%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-page-edge-bottom"></div>
      </div>
      <div class="home-page-bottom">
        <div class="home-page-bottom-container">
          <div class="home-page-bottom-left">
            <div class="home-page-container">
              <div class="home-page-title2">| 产品360</div>
              <div class="home-page-bottom-content">
                <div class="home-page-bottom-text-left">
                  <div class="product-box-content">
                    <dl>
                      <dt>供应风险</dt>
                      <dd>严重缺货</dd>
                      <dd>客户欠单</dd>
                      <dd>AgedOrder多</dd>
                    </dl>
                    <dl v-for='(item,index) in productSupplyRiskList'
                        :key="index">
                      <dt>{{item.name}}</dt>
                      <dd>{{item.value1}}</dd>
                      <dd>{{item.value2}}</dd>
                      <dd>{{item.value3}}</dd>
                    </dl>
                  </div>
                  <div class="product-box-content">
                    <dl>
                      <dt>营销风险</dt>
                      <dd>预测变化大</dd>
                      <dd>Liablity多</dd>
                      <dd>SS Delay</dd>
                      <dd>产品复杂度高</dd>
                    </dl>
                    <dl v-for='(item,index) in productMORiskList'
                        :key="index">
                      <dt>{{item.name}}</dt>
                      <dd>{{item.value1}}</dd>
                      <dd>{{item.value2}}</dd>
                      <dd>{{item.value3}}</dd>
                      <dd>{{item.value4}}</dd>
                    </dl>
                  </div>
                </div>
                <div class="home-page-bottom-graph-left">
                  <div ref="productChart"
                       style="height:100%;width:100%"></div>
                </div>
              </div>
            </div>
            <!-- <div class="home-page-edge-right"></div> -->
          </div>
          <div class="home-page-bottom-right">
            <div class="home-page-edge-left"></div>
            <div class="home-page-container">
              <div class="home-page-title2">| 客户360</div>
              <div class="home-page-bottom-content">
                <div class="home-page-bottom-text-right">
                  <!-- <div class="title">高风险投诉客户</div> -->
                  <div class="custom-box-content">
                    <dl v-for="(item,index) in riskComplaintsCustomList">
                      <dt>{{item.title}}</dt>
                      <dt>{{item.describe}}</dt>
                      <dd v-for="(v,k) in item.item"
                          :key="k">
                        <span>{{v.name}}</span>
                        <span> {{v.value}}</span>
                      </dd>
                    </dl>
                  </div>
                  <!-- <div class="title">高风险坏账客户</div> -->
                  <div class="custom-box-content">
                    <dl v-for="(item,index) in riskbadDebtsListCustomList">
                      <dt>{{item.title}}</dt>
                      <dd v-for="(v,k) in item.item"
                          :key="k">
                        <span>{{v.name}}</span>
                        <span> {{v.value}}</span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="home-page-bottom-graph-right">
                  <div ref="customerChart"
                       style="height:100%;width:100%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-page-edge-top"></div>
    </div>
    <div class="home-page-edge-right"></div>
  </div>
</template>

<script>
var echarts = require('echarts');
import { domainUrl } from '../../config/config.js'
// import { drawChannelChart } from "../../../static/js/homepage.js"
export default {
  name: 'home-page',
  data () {
    return {
      //标题日期 
      titleDate: {
        year: '',   //财年
        quarter: '',//财季
        month: '',  //财月
        date: ''    //今天
      },
      channelRiskList: [ // 高风险通路任务风险List
        { channelname: '线下', value1: '5%', value2: '4%', value3: '30', value4: '5%', value5: '4%' },
        { channelname: '线上', value1: '10%', value2: '8%', value3: '10', value4: '5%', value5: '4%' },
        { channelname: 'RKA', value1: '10%', value2: '8%', value3: '20', value4: '5%', value5: '4%' }
      ],
      warZoneRiskList: [ // 高风险战区任务风险List
        { warZonename: '山东', value1: '5%', value2: '4%', value3: '30', value4: '5%', value5: '4%' },
        { warZonename: '上海', value1: '10%', value2: '8%', value3: '10', value4: '5%', value5: '4%' },
        { warZonename: '江苏', value1: '10%', value2: '8%', value3: '20', value4: '5%', value5: '4%' }
      ],
      kpiListData: [ //KPI360数据
        { name: "OTS", number: "56.0%", lift: "up" },
        { name: "SC", number: "79.7%", lift: "up" },
        { name: "FPSD", number: "50.0%", lift: "up" },
        { name: "FA", number: "85.1%", lift: "up" },
        { name: "E&O", number: "59.5%", lift: "down" },
        { name: "DOI", number: "47.2%", lift: "up" },
        { name: "CA", number: "88.3%", lift: "down" },
        { name: "PC", number: "56.7%", lift: "down" },
        { name: "CC", number: "87.7%", lift: "down" }
      ],
      salesPromotionList: [ //促销360数据
        {
          oneTitle: 'Supply Issue',
          salesPromotion: [
            { twoTitle: '1. 截至当周供应GAP 1K', salesPromotionData: [{ name: '天逸510S Mini-01IMH Mini-01IMH', value: '5K' }, { name: '天逸510S Mini-01IMH', value: '10K' }, { name: '天逸510S Mini-01IMH', value: '15K' }] },
            { twoTitle: '2. 截至11/11供应GAP 1K', salesPromotionData: [{ name: '天逸510S Mini-01IMH', value: '2K' }, { name: '天逸510S Mini-01IMH', value: '3K' }, { name: '天逸510S Mini-01IMH', value: '4K' }] },
          ]
        },
        {
          oneTitle: 'Key Change',
          salesPromotion: [
            { twoTitle: '1. D2D PSD减少 20K', salesPromotionData: [{ name: '天逸510S Mini-01IMH', value: '1K' }, { name: '天逸510S Mini-01IMH', value: '2K' }, { name: '天逸510S Mini-01IMH', value: '3K' }] },
            { twoTitle: '2. W2W Commit减少 20K', salesPromotionData: [{ name: '天逸510S Mini-01IMH', value: '4K' }, { name: '天逸510S Mini-01IMH', value: '5K' }, { name: '天逸510S Mini-01IMH', value: '6K' }] },
          ]
        }
      ],
      productSupplyRiskList: [//产品360供应风险
        { name: "TOP1", value1: "天逸510S Mimi-01IMH Mimi-01IMH", value2: "天逸510S Mimi-01IMH", value3: "天逸510S Mimi-01IMH" },
        { name: "TOP2", value1: "拯救者 刃9000-28ICO", value2: "拯救者 刃9000-28ICO", value3: "拯救者 刃7000-28APR" },
        { name: "TOP3", value1: "拯救者 刃9000-28ICO", value2: "拯救者 刃9000-28ICO", value3: "拯救者 刃7000-28APR" },
      ],
      productMORiskList: [//产品360营销风险
        { name: "TOP1", value1: "天逸510S Mimi-01IMH", value2: "天逸510S Mimi-01IMH", value3: "天逸510S Mimi-01IMH", value4: "天逸510S Mimi-01IMH" },
        { name: "TOP2", value1: "拯救者 刃9000-28ICO", value2: "拯救者 刃9000-28ICO", value3: "拯救者 刃7000-28APR", value4: "天逸510S Mimi-01IMH" },
        { name: "TOP3", value1: "拯救者 刃9000-28ICO", value2: "拯救者 刃9000-28ICO", value3: "拯救者 刃7000-28APR", value4: "天逸510S Mimi-01IMH" },
      ],
      riskComplaintsCustomList: [ // 客户360高风险投诉
        { title: '欠单多', describe: '(欠单数量)', item: [{ name: '炎黄太和', value: '40K' }, { name: '安联', value: '30K' }, { name: '河北合肥', value: '20K' }] },
        { title: '交期长', describe: '(aged order比例)', item: [{ name: '炎黄太和', value: '40K' }, { name: '山东高至', value: '30K' }, { name: '河北合肥', value: '20K' }] },
        { title: '急单多', describe: '(PSD无法满足CRAD)', item: [{ name: '炎黄太和', value: '40K' }, { name: '山东高至', value: '30K' }, { name: '河北合肥', value: '20K' }] }
      ],//急单比例/PSD无法满足CRAD //(aged order比例 //欠单数量
      riskbadDebtsListCustomList: [ // 客户360高风险坏账
        { title: 'SEC库存周转长', item: [{ name: '炎黄太和', value: '40K' }, { name: '山东高至', value: '30K' }, { name: '河北合肥', value: '20K' }] },
        { title: '逾期时间长', item: [{ name: '炎黄太和', value: '40K' }, { name: '山东高至', value: '30K' }, { name: '河北合肥', value: '20K' }] },
        { title: '无进货时间长', item: [{ name: '炎黄太和', value: '40K' }, { name: '山东高至', value: '30K' }, { name: '河北合肥', value: '20K' }] }
      ],
    }
  },
  created () {
    this.getFinDate();
  },
  mounted () {
    this.drawChannelChart();
    this.drawPromoteChart();
    this.drawKPIChart();
    this.drawProductChart();
    this.drawCustomerChart();
  },
  methods: {
    getFinDate () {
      let vm = this
      var date = new Date();
      vm.titleDate.year = date.getFullYear();
      vm.titleDate.month = date.getMonth() + 1;
      if (vm.titleDate.month <= 3) {
        vm.titleDate.quarter = 'Q4'
      } else if (vm.titleDate.month <= 6) {
        vm.titleDate.quarter = 'Q1'
      } else if (vm.titleDate.month <= 9) {
        vm.titleDate.quarter = 'Q2'
      } else if (vm.titleDate.month <= 12) {
        vm.titleDate.quarter = 'Q3'
      }
      vm.titleDate.date = date.getDate();
      vm.titleDate.date = vm.titleDate.year + '-' + vm.titleDate.month + '-' + vm.titleDate.date

      // this.$ajax({
      //   url: '/getFinDate',
      //   method: 'get',
      //   done (data) {
      //     vm.titleDate.year = data.year;
      //     vm.titleDate.quarter = data.quarter;
      //     vm.titleDate.month = data.month;
      //   }
      // })
    },
    drawChannelChart () {
      let stackChart = echarts.init(this.$refs.chbChart);
      var option = {
        toolbox: {
          feature: {
            saveAsImage: {},
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: '5px',
          right: '15px',
          bottom: '2px',
          top: '5px',
          containLabel: true
        },
        xAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#7888af",
              type: "dashed"
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 10,
              lineHeight: 10,
              color: "#7888af"
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: true
          }
        },
        yAxis: {
          type: "category",
          data: ["RKA", "线下", "线上"],
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        //彩虹色谱
        //color: [ '#313695','#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
        color: ['#313695', '#4575b4', '#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
        // color: [
        //   "#0e49f2", //累计来单
        //   "#51b4f1", //发货过账
        //   "#28df99", //未发
        //   "#23cee0", //未资
        //   "#8756ee", //PSD
        //   "#f4c948", //TBD
        //   "#447bff", //No Plan
        //   "#2ecb6c", //未数签欠单
        //   "#ff6700", //CRAD月外
        //   "#f63d62"],//超月分货上限
        // dataName: [
        //   "累计来单",
        //   "发货过账",
        //   "未发",
        //   "未资",
        //   "PSD",
        //   "TBD",
        //   "No Plan",
        //   "未数签欠单",
        //   "CRAD月外",
        //   "超月分货上限",
        // ],
        series: [
          {
            name: "累计来单",
            type: "bar",
            stack: "总量",
            barWidth: "80%",
            label: {
              show: true,
              align: "left",
              verticalAlign: "middle",
              position: "insideLeft",
              formatter: "{b}",
              color: "#cfd9f4"
            },
            data: [800, 900, 1000]
          },
          {
            name: "发货过账",
            type: "bar",
            stack: "总量",
            data: [120, 132, 101]
          },
          {
            name: "未发",
            type: "bar",
            stack: "总量",
            data: [150, 212, 201]
          },
          {
            name: "未资",
            type: "bar",
            stack: "总量",
            data: [220, 182, 191]
          },
          {
            name: "PSD",
            type: "bar",
            stack: "总量",
            data: [320, 432, 201]
          },
          {
            name: "TBD",
            type: "bar",
            stack: "总量",
            data: [320, 432, 201]
          },
          {
            name: "No Plan",
            type: "bar",
            stack: "总量",
            data: [320, 432, 201]
          },
          {
            name: "未数签欠单",
            type: "bar",
            stack: "总量",
            data: [320, 432, 201]
          },
          {
            name: "CRAD月外",
            type: "bar",
            stack: "总量",
            data: [320, 432, 201]
          },
          {
            name: "超月分货上限",
            type: "bar",
            stack: "总量",
            data: [320, 432, 201]
          }
        ]
      };
      stackChart.setOption(option);
      // stackChart.resize();
      window.addEventListener('resize', () => {
        stackChart.resize();
      });
    },
    drawPromoteChart () {
      let stackChart = echarts.init(this.$refs.promoteChart);
      var option = {
        toolbox: {
          feature: {
            // magicType: {
            //   type: ['line', 'bar']
            // },
            saveAsImage: {},
          }
        },
        grid: {
          left: '5px',
          right: '20px',
          bottom: '2px',
          top: '20px',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "#00aaff",
              width: 1,
              type: "solid"
            },
            z: -100
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "FCST",
            "CMT",
            "SupOL",
            "Order",
            "CA",
            "PO",
            "Sup"
          ],
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: "10",
              color: "#849de1"
            }
          },
          axisLine: { lineStyle: { color: "#233c7e", width: 1 } },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(255,255,255,.2)",
              width: 1
            },
            show: true
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: "10",
              color: "#849de1"
            }
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#849de1"
            }
          },
          splitNumber: 2
        },
        series: [
          {
            data: [380, 341, 351, 301, 251, 361, 281],
            type: "line",
            label: {
              show: true,
              align: "left",
              position: "outside",
              formatter: "{c}",
              fontSize: "10"
            },
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(233, 97, 83, .5)"
                },
                {
                  offset: 1,
                  color: "rgba(21, 39, 90,.0)"
                }
              ])
            },
            // 修改的是线的颜色
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                // 0% 处的颜色                           // 100% 处的颜色
                colorStops: [
                  { offset: 0, color: "#ffec06" },
                  { offset: 0.25, color: "#66d4fa" },
                  { offset: 0.75, color: "#f19835" },
                  { offset: 1, color: "#ef873e" }
                ],
                global: false // 缺省为 false
              },
              width: 2
            },
            // symbol: "none",
            symbolSize: 1,
            // showAllSymbol: false,
            itemStyle: {
              color: "#849de1",
              borderColor: "#849de1",
              borderWidth: 2
            }
          }
        ]
      };
      // stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => {
        stackChart.resize();
      });
    },
    drawKPIChart () {
      let stackChart = echarts.init(this.$refs.kpiChart);
      var option = {
        backgroundColor: "#060e31",
        toolbox: {
          feature: {
            saveAsImage: {},
          }
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '1%',
          top: '1%',
          containLabel: true
        },
        // color: ["rgba(209, 130, 9, 1)", "rgba(13, 113, 214, 1)"],
        color: ['#ffbb00', '#ff6f00'],
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: [
          {
            orient: "horizontal",
            icon: "roundRect",
            right: "5%",
            top: "10%",
            align: "left",
            data: ["5月"],
            textStyle: {
              fontSize: 12,
              color: "rgba(209, 130, 9, 1)"
            }
          },
          {
            orient: "horizontal",
            icon: "roundRect",
            right: "5%",
            top: "20%",
            align: "left",
            data: ["6月"],
            textStyle: {
              fontSize: 12,
              color: "rgba(255,237,145, 0.8)",//"rgba(13, 113, 214, 1)"
            }
          }
        ],
        radar: {
          center: ["50%", "50%"],
          radius: "70%",
          startAngle: 90,
          splitNumber: 5,
          shape: "circle",
          splitArea: {
            areaStyle: {
              color: ["transparent"]
            }
          },
          axisLabel: {
            show: false,
            fontSize: 10,
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "normal"
          },
          axisLine: {
            show: true,
            lineStyle: {
              // color: "#38446e",
              fontSize: 10
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#38446e"
            }
          },
          indicator: [
            {
              name: "OTS",
              max: 88,
            },
            {
              name: "SC",
              max: 88
            },
            {
              name: "FPSD",
              max: 88
            },
            {
              name: "FA",
              max: 88
            },
            {
              name: "E&O",
              max: 88
            },
            {
              name: "DOI",
              max: 88
            },
            {
              name: "CA",
              max: 88
            },
            {
              name: "PC",
              max: 88
            }
          ]
        },
        series: [
          {
            name: "5月",
            type: "radar",
            symbol: "circle",
            symbolSize: 0,
            areaStyle: {
              normal: {
                color: 'rgba(252,211,3, 0.4)',// "rgba(209, 130, 9, 0.4)"
              }
            },
            itemStyle: {
              // color: "rgba(209, 130, 9, 1)",
              // borderColor: "rgba(209, 130, 9, 0.3)",
              color: 'rgba(252,211,3, 0.4)',
              borderColor: 'rgba(255,237,145, 0.6)',
              borderWidth: 1
            },
            lineStyle: {
              normal: {
                color: "rgba(209, 130, 9, 1)",
                width: 1
              }
            },
            data: [[80, 50, 55, 80, 50, 80, 48, 43]]
          },
          {
            name: "6月",
            type: "radar",
            symbol: "circle",
            symbolSize: 0,
            itemStyle: {
              normal: {
                color: "rgba(252,211,3, 0.6)",//"rgba(13, 113, 214, 1)",
                borderColor: "rgba(255,237,145, 0.8)",//""rgba(13, 113, 214, 0.4)",
                borderWidth: 1
              }
            },
            areaStyle: {
              normal: {
                color: "rgba(252,211,3, 0.6)",//""rgba(13, 113, 214, 0.5)"
              }
            },
            lineStyle: {
              normal: {
                color: "rgba(255,237,145, 0.8)",//"rgba(13, 113, 214, 1)",
                width: 1,
                type: "solid"
              }
            },
            data: [[60, 60, 65, 60, 70, 40, 80, 63]]
          }
        ]
      };
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => {
        stackChart.resize();
      });
    },
    drawProductChart () {
      let stackChart = echarts.init(this.$refs.productChart);
      let xAxisData = [
        "FCST",
        "Commit",
        "PO RSD",
        "PO ATS",
        "PO PSD",
        "SO",
        "Backlog",
        "Shipment",
        "Sell out",
        "Lenovo FGI",
        "SEC FGI"
      ];
      // let seriesData = [180, 160, 160, 20, 120, 200, 80, 120, 200, 150, 80, 70];
      let seriesData = [180, 160, 160, 20, 120, 200, 80, 120, 200, 150, 80, 70];
      var option = {
        toolbox: {
          feature: {
            saveAsImage: {},
          }
        },
        grid: {
          left: "3%",
          right: "3%",
          top: "10%",
          bottom: "3%",
          height: (document.getElementsByClassName('home-page-bottom-graph').clientWidth) + 'px',
          containLabel: true
        },
        backgroundColor: "#0f2252",
        xAxis: [
          {
            type: "category",
            data: xAxisData,
            axisTick: {
              show: true,
            },
            axisLine: {
              show: true,
            },
            axisLabel: {
              textStyle: {
                color: "#7888af",
                fontSize: 8,
                textAlign: "center"
              },
              formatter: function (value) {
                let index = xAxisData.indexOf(value);
                return seriesData[index];
              }
            }
          }
        ],
        yAxis: {
          type: "value",
          // data: [0, 50, 180, 200],
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: "#fff",
              fontSize: 8,
              textAlign: "center"
            },
          },
        },
        series: [
          {
            label: {
              show: true,
              rotate: 90,
              align: "left",
              formatter: "{b}",
              verticalAlign: "middle",
              position: "insideBottom",
              distance: 5
            },
            data: seriesData,
            type: "bar",
            itemStyle: {
              normal: {
                color: (params) => {
                  return params.dataIndex % 2 == 0 ? '#37a2da' : '#9fe6b8'; //"#3d74fa" : "#ad5aff";
                  // let colors = ['#313695','#4575b4', '#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea']
                  // return colors[params.dataIndex]
                }
              }
            },
            showBackground: true,
            backgroundStyle: {
              color: "#12265a"
            }
          },
        ]
      };
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => {
        //vm.$refs.productChart.style.width = (document.getElementsByClassName('home-page-bottom-graph').clientWidth) + 'px'; //- document.getElementsByClassName('productChart').clientWidth - 10) + 'px'
        stackChart.resize();
      });
    },
    drawCustomerChart () {
      let stackChart = echarts.init(this.$refs.customerChart);
      var option = {
        toolbox: {
          feature: {
            saveAsImage: {}
          },
        },
        grid: {
          left: "0px",
          right: "0px",
          top: "25px",
          bottom: "5px",
          containLabel: false
        },
        // backgroundColor: "#0f2252",
        xAxis: [
          {
            type: "category",
            data: [
              "客户欠单",
              "远期订单",
              "超弹性来单",
              "超分货来单",
              "AGED订单",
              "可供欠单",
              "累计确认",
              "来单总量",
              "可供总量"
            ],
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          {
            type: "category",
            // inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#7888af",
                fontSize: 10,
                textAlign: "center"
              },
              // formatter: function(value) {
              //   return value.toLocaleString() + "W";
              // }
            },
            data: [3, 5, 7, 9, 12, 13, 18, 20, 22]
          }
        ],
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            label: {
              show: true,
              rotate: 90,
              align: "left",
              formatter: "{b}",
              verticalAlign: "middle",
              position: "insideBottom",
              distance: 5
            },
            data: [3, 5, 7, 9, 12, 13, 18, 20, 22],
            type: "bar",
            itemStyle: {
              normal: {
                color: function (params) {
                  return params.dataIndex % 2 == 0 ? "#fb7293" : "#8378ea";
                  // let colors = ['#313695','#4575b4', '#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea']
                  // return colors[params.dataIndex]
                }
              }
            },
            showBackground: true,
            backgroundStyle: {
              color: "#12265a"
            }
          }
        ]
      };
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => {
        stackChart.resize();
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../less/homePage.less");
</style>