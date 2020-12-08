<template>
  <div class="home-page">
    <div class="home-page-box">
      <!-- 头部 -->
      <div class="home-header tag-group">
        <span class="tag-group__title title">Management 360</span>
        <el-tag effect="dark">{{titleDate.year}}</el-tag>
        <el-tag effect="dark">{{titleDate.quarter}}</el-tag>
        <el-tag effect="dark">{{titleDate.mounth}}</el-tag>
      </div>
      <!-- 中部 -->
      <div class="home-container">
        <!-- 中左 市场360 -->
        <div class="item-left container-item">
          <div class="item-title">
            <span class="vertical-bar"></span>
            <span>市场360</span>
          </div>
          <div class="item-left-top">
            <div class="item-box-title">高风险通路</div>
            <div class="item-box">
              <dl>
                <dt>任务分险</dt>
                <dd>有效订单进度delay</dd>
                <dd>shipment进度delay</dd>
                <dd>shipment OL</dd>
              </dl>
              <dl v-for="(item,index) in channelRiskList" :key="index">
                <dt>{{item.channelname}}</dt>
                <dd>{{item.value1}}</dd>
                <dd>{{item.value2}}</dd>
                <dd>{{item.value3}}</dd>
              </dl>
            </div>
            <div class="item-box">
              <dl>
                <dt>趋势下行</dt>
                <dd>shipment总量减少</dd>
                <dd>shipment节奏减慢</dd>
              </dl>
              <dl v-for="(item,index) in channelTrendDownwardList" :key="index">
                <dt>{{item.channelname}}</dt>
                <dd>{{item.value1}}</dd>
                <dd>{{item.value2}}</dd>
                <dd>{{item.value3}}</dd>
              </dl>
            </div>
            <div class="item-box-title">高风险战区</div>
            <div class="item-box">
              <dl>
                <dt>任务分险</dt>
                <dd>有效订单进度delay</dd>
                <dd>shipment进度delay</dd>
                <dd>shipment OL</dd>
              </dl>
              <dl v-for="(item,index) in warZoneRiskList" :key="index">
                <dt>{{item.warZonename}}</dt>
                <dd>{{item.value1}}</dd>
                <dd>{{item.value2}}</dd>
                <dd>{{item.value3}}</dd>
              </dl>
            </div>
            <div class="item-box">
              <dl>
                <dt>趋势下行</dt>
                <dd>shipment总量减少</dd>
                <dd>shipment节奏减慢</dd>
              </dl>
              <dl v-for="(item,index) in warZoneTrendDownwardList" :key="index">
                <dt>{{item.warZonename}}</dt>
                <dd>{{item.value1}}</dd>
                <dd>{{item.value2}}</dd>
                <dd>{{item.value3}}</dd>
              </dl>
            </div>
          </div>
          <div class="item-left-bottom">
            <span class="bottom-title">时间图</span>
            <div ref="barBox" style="height:136px;width:100%"></div>
          </div>
        </div>
       <!-- 中中 KPI360-->
        <div class="item-center container-item">
          <div class="item-title">
            <span class="vertical-bar"></span>
            <span>KPI 360</span>
          </div>
          <div class="kpi-list-box">
            <div
              class="kpi-list-item"
              v-for="(item, index) in kpiListData"
              :key="index"
            >
              <div class="item-name">{{ item.name }}</div>
              <div>
                {{ item.number }}
                <i
                  :style="{
                    color: item.lift == 'down' ? 'red' : '#0fff6d',
                    fontWeight: 700
                  }"
                  :class="
                    item.lift == 'down' ? 'el-icon-bottom' : 'el-icon-top'
                  "
                ></i>
              </div>
            </div>
          </div>
          <div
            ref="radarBox"
            style="width:100%;height:360px"
          ></div>
        </div>
        <!-- 中右 促销360-->
        <div class="item-right container-item">
          <div class="item-title">
            <span class="vertical-bar"></span>
            <span>促销360</span>
          </div>
          <div class="item-right-top" >
            <div class="item-right-top-box" v-for="(item,index) in salesPromotionList" :key="index">
              <div class="title">{{item.oneTitle}}</div>
              <div class="content-box" v-for="(child,K) in item.salesPromotion" :key="K">
                <div class="two-title">{{child.twoTitle}}</div>
                <div class="content" v-for="(v,k) in child.salesPromotionData" :key="k">
                  <div class="content-left">{{v.name}}</div>
                  <div class="content-right">{{v.value}}</div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="item-right-bottom">
            <span class="bottom-title">时点图</span>
            <div ref="lineBox" style="height:136px;width:100%"></div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="home-bottom">
        <!-- 底部左 产品360-->
        <div class="bottom-item bottom-item-left">
          <div class="item-title">
            <span class="vertical-bar"></span>
            <span>产品360</span>
          </div>
          <div class="item-bottom">
            <div class="item-bottom-left product-box">
              <div class="product-box-content">
                <dl>
                  <dt>供应风险</dt>
                  <dd>严重缺货</dd>
                  <dd>客户欠单</dd>
                  <dd>Aged order较多</dd>
                </dl>
                <dl v-for='(item,index) in productSupplyRiskList' :key="index">
                  <dt>{{item.name}}</dt>
                  <dd><span>{{item.value1}}</span></dd>
                  <dd><span>{{item.value2}}</span></dd>
                  <dd><span>{{item.value3}}</span></dd>
                </dl>
              </div>
              <div class="product-box-content">
                <dl>
                  <dt>供应风险</dt>
                  <dd>严重缺货</dd>
                  <dd>客户欠单</dd>
                  <dd>Aged order较多</dd>
                </dl>
                <dl v-for='(item,index) in productSupplyRiskList' :key="index">
                  <dt>{{item.name}}</dt>
                  <dd><span>{{item.value1}}</span></dd>
                  <dd><span>{{item.value2}}</span></dd>
                  <dd><span>{{item.value3}}</span></dd>
                </dl>
              </div>
              
            </div>
            <div class="item-bottom-right">
              <span class="bottom-title">时点值</span>
              <div ref="productBarBox" style="height:180px;width:100%;margin-left:10px"></div>
            </div>
          </div>
        </div>
        <!-- 底部右 客户360-->
        <div class="bottom-item bottom-item-right">
          <div class="item-title">
            <span class="vertical-bar"></span>
            <span>客户360</span>
          </div>
          <div class="item-bottom">
            <div class="item-bottom-left custom-box">
              <div class="title">高风险投诉客户</div>
              <div class="custom-top">
                <dl v-for="(item,index) in riskComplaintsCustomList">
                  <dt>{{item.title}}</dt>
                  <dt>{{item.describe}}</dt>
                  <dd v-for="(v,k) in item.item" :key="k">
                    <span>{{v.name}}</span>
                    <span> {{v.value}}</span>
                  </dd>
                </dl>
              </div>
              <div class="title">高风险坏账客户</div>
              <div class="custom-bottom">
                <dl v-for="(item,index) in riskbadDebtsListCustomList">
                  <dt>{{item.title}}</dt>
                  <dd v-for="(v,k) in item.item" :key="k">
                    <span>{{v.name}}</span>
                    <span> {{v.value}}</span>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="item-bottom-right">
              <span class="bottom-title">时点值</span>
              <div ref="customBarBox" style="height:180px;width:100%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "home-page",
  data() {
    return {
      titleDate:{
        year:'2020',
        quarter:'Q2',
        mounth:'8月'
      },
      channelRiskList:[ // 高风险通路任务风险List
        {channelname:'31通路',value1:'5%',value2:'4%',value3:'3%'},
        {channelname:'51通路',value1:'10%',value2:'8%',value3:'9%'},
        {channelname:'11通路',value1:'30K',value2:'15K',value3:'20K'}
      ],
      channelTrendDownwardList:[ //高风险通路趋势下行List
        {channelname:'31通路',value1:'5%',value2:'4%'},
        {channelname:'51通路',value1:'10%',value2:'8%'},
        {channelname:'51通路',value1:'10%',value2:'8%'},
      ],
      warZoneRiskList:[ // 高风险战区任务风险List
        {warZonename:'山东战区',value1:'5%',value2:'4%',value3:'3%'},
        {warZonename:'上海战区',value1:'10%',value2:'8%',value3:'9%'},
        {warZonename:'江苏战区',value1:'30K',value2:'15K',value3:'20K'}
      ],
      warZoneTrendDownwardList:[ //高风险战区趋势下行List
        {warZonename:'山东战区',value1:'5%',value2:'4%'},
        {warZonename:'上海战区',value1:'10%',value2:'8%'},
        {warZonename:'上海战区',value1:'10%',value2:'8%'},
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
      salesPromotionList:[ //促销360数据
        {
          oneTitle:'Supply Issue1',
          salesPromotion:[
            {twoTitle:'1.截至当周供应GAP 1K',salesPromotionData:[{name:'天逸510S Mini-01IMH',value:'5K'},{name:'天逸510S Mini-01IMH',value:'10K'},{name:'天逸510S Mini-01IMH',value:'15K'}]},
            {twoTitle:'2.截至当周供应GAP 1K',salesPromotionData:[{name:'天逸510S Mini-01IMH',value:'2K'},{name:'天逸510S Mini-01IMH',value:'3K'},{name:'天逸510S Mini-01IMH',value:'4K'}]},
          ]
        },
        {
          oneTitle:'Supply Issue2',
          salesPromotion:[
            {twoTitle:'1.截至当周供应GAP 2K',salesPromotionData:[{name:'天逸510S Mini-01IMH',value:'1K'},{name:'天逸510S Mini-01IMH',value:'2K'},{name:'天逸510S Mini-01IMH',value:'3K'}]},
            {twoTitle:'2.截至当周供应GAP 2K',salesPromotionData:[{name:'天逸510S Mini-01IMH',value:'4K'},{name:'天逸510S Mini-01IMH',value:'5K'},{name:'天逸510S Mini-01IMH',value:'6K'}]},
          ]
        }
      ],
      productSupplyRiskList:[//产品360供应风险
        { name: "TOP1", value1: "天逸510S Mimi-01IMH", value2: "天逸510S Mimi-01IMH", value3: "天逸510S Mimi-01IMH"},
        { name: "TOP2", value1: "拯救者 刃9000-28ICO", value2: "拯救者 刃9000-28ICO", value3: "拯救者 刃7000-28APR"},
        { name: "TOP3", value1: "拯救者 刃9000-28ICO", value2: "拯救者 刃9000-28ICO", value3: "拯救者 刃7000-28APR"},
      ],
      riskComplaintsCustomList:[ // 客户360高风险投诉
        {title:'欠单多',describe:'(欠单数量)',item:[{name:'炎黄太和',value:'40K'},{name:'山东高至',value:'30K'},{name:'河北合肥',value:'20K'}]},
        {title:'交期长',describe:'(aged order比例)',item:[{name:'炎黄太和',value:'40K'},{name:'山东高至',value:'30K'},{name:'河北合肥',value:'20K'}]},
        {title:'急单多',describe:'(急单比例 / PSD无法满足CRAD)',item:[{name:'炎黄太和',value:'40K'},{name:'山东高至',value:'30K'},{name:'河北合肥',value:'20K'}]}
      ],
      riskbadDebtsListCustomList:[ // 客户360高风险坏账
        {title:'SEC库存周期长',item:[{name:'炎黄太和',value:'40K'},{name:'山东高至',value:'30K'},{name:'河北合肥',value:'20K'}]},
        {title:'逾期时间长',item:[{name:'炎黄太和',value:'40K'},{name:'山东高至',value:'30K'},{name:'河北合肥',value:'20K'}]},
        {title:'持续长时间无进货',item:[{name:'炎黄太和',value:'40K'},{name:'山东高至',value:'30K'},{name:'河北合肥',value:'20K'}]}
      ],
    };
  },
  methods: {
    drawRadarChart() {
      var option = {
        backgroundColor: "#060e31",
        color: ["rgba(209, 130, 9, 1)", "rgba(13, 113, 214, 1)"],
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: [
          {
            orient: "horizontal",
            icon: "roundRect",
            right: "5%",
            top: "85%",
            align: "left",
            data: ["5月"],
            textStyle: {
              fontSize: 14,
              color: "rgba(209, 130, 9, 1)"
            }
          },
          {
            orient: "horizontal",
            right: "5%",
            icon: "roundRect",
            top: "95%",
            align: "left",
            data: ["6月"],
            textStyle: {
              fontSize: 14,
              color: "rgba(13, 113, 214, 1)"
            }
          }
        ],
        radar: {
          center: ["50%", "50%"],
          radius: "83%",
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
            fontSize: 18,
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "normal"
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#38446e"
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
              max: 88
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
                color: "rgba(209, 130, 9, 0.4)"
              }
            },
            itemStyle: {
              color: "rgba(209, 130, 9, 1)",
              borderColor: "rgba(209, 130, 9, 0.3)",
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
                color: "rgba(13, 113, 214, 1)",
                borderColor: "rgba(13, 113, 214, 0.4)",
                borderWidth: 1
              }
            },
            areaStyle: {
              normal: {
                color: "rgba(13, 113, 214, 0.5)"
              }
            },
            lineStyle: {
              normal: {
                color: "rgba(13, 113, 214, 1)",
                width: 1,
                type: "solid"
              }
            },
            data: [[60, 60, 65, 60, 70, 40, 80, 63]]
          }
        ]
      };
      let stackChart = echarts.init(this.$refs.radarBox);
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => { 
        stackChart.resize();
      });
    },
    drawBarChart() {
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          orient: "horizontal",
          data: [
            "累计来单",
            "发货过账",
            "未资",
            "未发",
            "PSD",
            "TBD",
            "No Plan",
            "未数签欠单",
            "CRAD月外",
            "超月分货上限"
          ],
          bottom: 0,
          left: 0,
          formatter: "{a|{name}}",
          textStyle: {
            rich: {
              a: {
                color: "#849de1",
                fontSize: 12,
                width: 55,
                padding: [0, 0, 0, 0]
              }
            }
          },
          icon: "rect",
          itemWidth: 12,
          itemHeight: 12
        },
        grid: {
          left: "10px",
          right: "3%",
          top: "1%",
          bottom: "30%",
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
              fontSize: "12",
              lineHeight: "14",
              color: "#7888af"
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "category",
          data: ["线上渠道", "RKB", "线下渠道"],
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
        series: [
          {
            name: "累计来单",
            type: "bar",
            stack: "总量",
            barWidth: "75%",
            itemStyle: {
              normal: {
                color: "#0e49f2"
              }
            },
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
            itemStyle: {
              normal: {
                color: "#28df99"
              }
            },
            data: [120, 132, 101]
          },
          {
            name: "未资",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#f63d62"
              }
            },
            data: [220, 182, 191]
          },
          {
            name: "未发",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#23cee0"
              }
            },
            data: [150, 212, 201]
          },
          {
            name: "PSD",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#447bff"
              }
            },
            data: [320, 432, 201]
          },
          {
            name: "TBD",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#f4c948"
              }
            },
            data: [320, 432, 201]
          },
          {
            name: "No Plan",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#8756ee"
              }
            },
            data: [320, 432, 201]
          },
          {
            name: "未数签欠单",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#2ecb6c"
              }
            },
            data: [320, 432, 201]
          },
          {
            name: "CRAD月外",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#ff6700"
              }
            },
            data: [320, 432, 201]
          },
          {
            name: "超月分货上限",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#51b4f1"
              }
            },
            data: [320, 432, 201]
          }
        ]
      };
      let stackChart = echarts.init(this.$refs.barBox);
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => { 
        stackChart.resize();
      });
    },
    drawLineChart() {
      var option = {
        grid: {
          left: "10%",
          right: "5%",
          top: "10%",
          bottom: "15%"
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
            "Q FCST",
            "Q CMT",
            "Q Sup OL",
            "QTD order",
            "QTD CA",
            "QTD PO",
            "QTD Sup"
          ],
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: "12",
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
              fontSize: "12",
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
              formatter: "{c}"
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
      let stackChart = echarts.init(this.$refs.lineBox);
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => { 
        stackChart.resize();
      });
    },
    drawProductBarChart() {
      let xAxisData = [
        "fcst",
        "commit",
        "PO release",
        "ATS",
        "PO PSD coverage",
        "客户来单",
        "客户欠单",
        "shipment",
        "sell out",
        "联想FGI",
        "SEC FGI"
      ];
      let seriesData = [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70];
      var option = {
        grid: {
          left: "0",
          right: "1%",
          top: "3%",
          bottom: "20%"
        },
        backgroundColor: "#0f2252",
        xAxis: [
          {
            type: "category",
            data: xAxisData,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#7888af",
                fontSize: 10,
                textAlign: "center"
              },
              formatter: function(value) {
                let index = xAxisData.indexOf(value);
                return seriesData[index];
              }
            }
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
            data: seriesData,
            type: "bar",
            itemStyle: {
              normal: {
                color: function(params) {
                  return params.dataIndex % 2 == 0 ? "#3d74fa" : "#ad5aff";
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
      this.$refs.productBarBox.style.width = (document.getElementsByClassName('item-bottom')[0].clientWidth - document.getElementsByClassName('product-box')[0].clientWidth-10) + 'px'
      let stackChart = echarts.init(this.$refs.productBarBox);
      stackChart.resize();
      stackChart.setOption(option);
      let vm = this
      window.addEventListener('resize', () => { 
        vm.$refs.productBarBox.style.width = (document.getElementsByClassName('item-bottom')[0].clientWidth - document.getElementsByClassName('product-box')[0].clientWidth-10) + 'px'
        stackChart.resize();
      });
    },

    drawCustomBarChart() {
      var option = {
        grid: {
          left: "0",
          right: "3%",
          top: "15%",
          bottom: "3%"
        },
        backgroundColor: "#0f2252",
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
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#7888af",
                fontSize: 10,
                textAlign: "center"
              },
              formatter: function(value) {
                return value.toLocaleString() + "W";
              }
            },
            data: [3, 5, 7, 9, 12, 13, 18, 20, 22].reverse()
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
                color: function(params) {
                  return params.dataIndex % 2 == 0 ? "#05b0f7" : "#f8734e";
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
      this.$refs.customBarBox.style.width = (document.getElementsByClassName('item-bottom')[0].clientWidth - document.getElementsByClassName('custom-box')[0].clientWidth-10) + 'px'
      let stackChart = echarts.init(this.$refs.customBarBox);
      stackChart.resize();
      stackChart.setOption(option);
      let vm = this
      window.addEventListener('resize', () => { 
        vm.$refs.customBarBox.style.width = (document.getElementsByClassName('item-bottom')[0].clientWidth - document.getElementsByClassName('custom-box')[0].clientWidth-10) + 'px'
        let stackChart = echarts.init(vm.$refs.customBarBox);
        stackChart.resize();
      });
    }
  },
  mounted() {
    this.drawRadarChart();
    this.drawBarChart();
    this.drawLineChart();
    this.drawProductBarChart();
    this.drawCustomBarChart();
  },
};
</script>
<style  lang="less">
// @import url('../../less/theme.less');
@dark-bg: #0f2252;
@light-bg: #12265a;
@dark-font:#cfd9f4;
@light-font:#7888af;

//背景深蓝 #0f2252
//背景浅蓝 #12265a
//加亮文字 #cfd9f4
//浅文字 #7888af

.home-page{
  height: 100vh;
  width: 100%;
  background-color: #0c1440;
  .home-page-box {
    margin: 0 auto;
    min-width: 1400px;
    padding: 10px 15px 10px 10px;
    box-sizing: border-box;
    background-color: #0c1440;
    line-height: 16px;
    color: #fff;
    // 头部
    .home-header {
      color: #fff;
      background: #0c1441;
      margin-bottom: 10px;
      height: 47px;
      line-height: 47px;
      .title {
        font-size: 18px;
        margin-right: 36px;
      }
      .el-tag {
        margin-right: 16px;
        width: 60px;
        height: 30px;
        text-align: center;
      }
    }
    // 中部
    .home-container {
      display: flex;
      justify-content: space-between;
      .container-item {
        height: 490px;
        background-color:@light-bg;
        flex:1;
      }
      // 中左
      .item-left {
        max-width: 550px;
        .item-left-top {
          height: 278px;
          .item-box-title {
            height: 20px;
            padding-left: 13px;
            font-size: 14px;
            color: @dark-font;
          }
          .item-box {
            display: flex;
            dl{
              flex: 1;
              text-align: center;
              line-height: 17px;
              dd {
                color: @dark-font;
                background: @dark-bg;
              }
              dd:nth-child(3){
                background: @light-bg;
              }
            }
            dl:nth-child(1){
              min-width: 150px;
              dd {
                color: @light-font;
              }
            }
          }
        }
        .item-left-bottom {
          margin-top: 12px;
        }
      }
      // 中中
      .item-center {
        background-color: #060e31;
        margin: 0 10px;
        min-width: 550px;
        .kpi-list-box {
          display: flex;
          justify-content: space-between;
          .kpi-list-item {
            width: 58px;
            height: 40px;
            background: #0c1440;
            flex-direction: column;
            display: flex;
            color: #cbd5f3;
            padding-left: 5px;
            box-sizing: border-box;
            .item-name {
              height: 20px;
              line-height: 20px;
              font-size: 16px;
            }
          }
        }
      }
      // 中右
      .item-right {
        max-width: 550px;
        margin-left: 0px;
        .item-right-top {
          background: @light-bg; //浅蓝
          height: 278px;
          display: flex;
          .item-right-top-box {
            flex: 1;
            .title {
              padding-left: 13px;
              font-size: 16px;
              line-height: 30px;
              color: @dark-font;
            }
            .content-box {
              .two-title {
                padding-left: 20px;
                line-height: 30px;
                color: @dark-font;
                font-size: 14px;
              }
              .content {
                display: flex;
                justify-content: space-between;
                line-height: 28px;
                color: @light-font;
                .content-left {
                  padding-left: 20px;
                }
                .content-right {
                  padding-right: 10px;
                }
              }
              .content:nth-child(even) {
                background: @dark-bg;
              }
            }
          }
        }
        .item-right-bottom {
          margin-top: 12px;
        }
      }
    }
    .home-bottom {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .bottom-item {
        height: 244px;
        flex:1;
        background-color: @light-bg;
        .item-bottom {
          display: flex;
          justify-content: space-between;
          .product-box {
            line-height: 21px;
            color: @light-font;
            max-width: 400px;
            .product-box-content {
              display: flex;
              dl{
                text-align: center;
                max-width: 900px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                box-sizing: border-box;
                dt{
                  line-height: 26px;
                  color: @dark-font;
                }
                dd{
                  background: @dark-bg;
                  span{
                    display: inline-block;
                    padding: 0 10px;
                  }
                }
                dd:nth-child(3){
                  background: @light-bg;
                }
              }
              dl:nth-child(1){
                min-width: 120px;
              }
            }
          }
          .custom-box {
            background: @light-bg;
            color: @light-font;
            line-height: 18px;
            max-width: 400px;
            .title {
              padding-left: 13px;
              font-size: 14px;
              line-height: 20px;
              color: @dark-font;
            }
            .custom-top {
              display: flex;
              dl{
                min-width: 90px;
                text-align: center;
                dd{
                  display: flex;
                  justify-content: space-between;
                  padding: 0 5px;
                  background: @dark-bg;
                }
                dd:nth-child(4){
                  background: @light-bg;
                  
                }
                
              }
              dl:nth-child(2){
                min-width: 100px;
              }
              dl:nth-child(3){
                min-width: 180px;
              }
            }
            .custom-bottom {
              display: flex;
              dl{
                min-width: 124px;
                text-align: center;
                dd{
                  display: flex;
                  justify-content: space-between;
                  padding: 0 5px;
                  background: @dark-bg;
                }
                dd:nth-child(3){
                  background: @light-bg;
                }
              }
            }
          }
        }
      }
      .bottom-item:nth-child(2){
        margin-left: 10px;
      }
    }
  }
  // 公共
  .item-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    margin: 13px 0px 10px 13px;
    .vertical-bar {
      display: inline-block;
      background-color: #fff;
      width: 4px;
      height: 16px;
      vertical-align: bottom;
      // margin-right: 4px;
    }
  }
  .bottom-title {
    padding-left: 8px;
    box-sizing: border-box;
    font-size: 16px;
    color: @dark-font;
  }
}

</style>
