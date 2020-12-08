
<template>
  <div class="home-page">
    <div class="home-page-box">
      <div class="home-page-header">
        Management 360
      </div>
      <div class="home-container">
        <div class="home-container-left">
          <div class="home-container-left-title">| 市场360</div>
          <div class="home-container-left-text">
            <table class="market-table">
              <tr>
                <th class="colname">任务风险</th>
                <th class="colvalue">高风险通路</th>
                <th class="colvalue">高风险战区</th>
              </tr>
              <tr>
                <td>有效订单进度delay</td>
                <!-- <td>{{channelRiskList[0][0]}}</td> -->
                <td>11</td>
                <td>山东</td>
              </tr>
              <tr>
                <td>shipment进度delay</td>
              </tr>
              <tr>
                <td>shipment OL</td>
              </tr>
              <tr>
                <th>趋势下行</th>
                <th>高风险通路</th>
                <th>高风险战区</th>
              </tr>
              <tr>
                <td>shipment总量减少</td>
              </tr>
              <tr>
                <td>shipment节奏减慢</td>
              </tr>
            </table>
          </div>
          <div class="home-container-left-graph">
            <div ref="chbChart"
                 style="height:100%;width:100%"></div>
          </div>
        </div>
        <div class="home-container-center">
          <div class="home-container-center-text">| KPI</div>
          <div class="home-container-center-graph">
            <div ref="kpiChart"
                 style="height:100%;width:100%"></div>
          </div>
        </div>
        <div class="home-container-right">
          <div class="home-container-right-title">| 促销360</div>
          <div class="home-container-right-text">
          </div>
          <div class="home-container-right-graph">
            <div ref="promoteChart"
                 style="height:100%;width:100%"></div>
          </div>
        </div>
      </div>
      <div class="home-bottom">
        <div class="home-bottom-left">
          <div class="home-bottom-left-title">| 产品360</div>
          <div class="home-bottom-left-container">
            <div class="home-bottom-left-text">text</div>
            <div class="home-bottom-left-graph">
              <div ref="productChart"
                   style="height:100%;width:100%"></div>
            </div>
          </div>
        </div>
        <div class="home-bottom-right">
          <div class="home-bottom-right-title">| 客户360</div>
          <div class="home-bottom-right-container">
            <div class="home-bottom-right-text">text</div>
            <div class="home-bottom-right-graph">
              <div ref="customerChart"
                   style="height:100%;width:100%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">

var echarts = require('echarts');
export default {
  name: 'home-page',
  data: {
    //订单颜色
    
    channelRiskList: [ // 高风险通路任务风险List
      { channelname: '31通路', value1: '5%', value2: '4%', value3: '3%', value4: '3%', value5: '3%' },
      { channelname: '51通路', value1: '10%', value2: '8%', value3: '9%', value4: '8%', value5: '9%' },
      { channelname: '11通路', value1: '30K', value2: '15K', value3: '20K', value4: '8%', value4: '9%' }
    ],
  },
  mounted () {
    this.drawChannelChart();
    this.drawPromoteChart();
    this.drawKPIChart();
    this.drawProductChart();
    this.drawCustomerChart();
  },
  methods: {
    drawChannelChart () {
      let stackChart = echarts.init(this.$refs.chbChart);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: '5px',
          right: '15px',
          bottom: '10px',
          top: '2px',
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
        series: [
          {
            name: "累计来单",
            type: "bar",
            stack: "总量",
            // barWidth: "65%",
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
            name: "未资",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#51b4f1"
              }
            },
            data: [220, 182, 191]
          },
          {
            name: "PSD",
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
                color: "#447bff"
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
                color: "#f63d62"
              }
            },
            data: [320, 432, 201]
          }
        ]
      };
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => {
        stackChart.resize();
      });
    },
    drawPromoteChart () {
      let stackChart = echarts.init(this.$refs.promoteChart);
      var option = {
        grid: {
          left: '2px',
          right: '15px',
          bottom: '10px',
          top: '15px',
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
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => {
        stackChart.resize();
      });
    },
    drawKPIChart () {
      let stackChart = echarts.init(this.$refs.kpiChart);
      var option = {
        // backgroundColor: "#060e31",
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '5%',
          containLabel: true
        },
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
              color: "rgba(13, 113, 214, 1)"
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
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => {
        stackChart.resize();
      });
    },
    drawProductChart () {
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
      let seriesData = [180, 160, 160, 20, 120, 200, 80, 120, 200, 150, 80, 70];
      var option = {
        grid: {
          left: "2px",
          right: "2px",
          top: "2px",
          bottom: "2px",
          containLabel: true
        },
        // backgroundColor: "#0f2252",
        xAxis: [
          {
            type: "category",
            data: xAxisData,
            axisTick: {
              show: true
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              textStyle: {
                color: "#7888af",
                fontSize: 9,
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
          // data: [0, 50, 150, 200],
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
              fontSize: 10,
              textAlign: "right"
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
                color: function (params) {
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
      let stackChart = echarts.init(this.$refs.productChart);
      stackChart.resize();
      stackChart.setOption(option);
      let vm = this
      window.addEventListener('resize', () => {
        // vm.$refs.productBarBox.style.width = (document.getElementsByClassName('item-bottom')[0].clientWidth - document.getElementsByClassName('product-box')[0].clientWidth - 10) + 'px'
        stackChart.resize();
      });
    },
    drawCustomerChart () {
      var option = {
        grid: {
          left: "2px",
          right: "2px",
          top: "20px",
          bottom: "2px",
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
      let stackChart = echarts.init(this.$refs.customerChart);
      stackChart.resize();
      stackChart.setOption(option);
      window.addEventListener('resize', () => {
        stackChart.resize();
      });
    }
  },
  created () { }
}

</script>

<style lang="less" scoped>
@import url("../../less/home-page-ori.less");
</style>
