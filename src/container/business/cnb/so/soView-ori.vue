<template>
<div class="so">
  <div class="leftTop">
    <div class="leftTop-left">
      <h2 class="water-title">整体完成进度(CA vs Tgt.)</h2>
      <div class="waterGraph" ref="waterGraph"></div>
      <ul class="leftTop-bottom">
        <li><span>242K</span><span>Target</span></li>
        <li><span>114K</span><span>Order</span></li>
        <li><span>22K</span><span>Cover</span></li>
        <li><span>42K</span><span>Confirm</span></li>
        <li><span>342K</span><span>CA</span></li>
      </ul>
    </div>
    <div class="topCenter">
      <h2 class="progress-title">分客户完成进度</h2>
      <ul class="topCenter-item">
        <li>
          <h3>传统渠道</h3>
          <ul>
            <li>Target<span>80k</span></li>
            <li>Order<span>20k</span></li>
            <li>Cover<span>30k</span></li>
            <li>Confirm<span>10k</span></li>
            <li>CA<span>60k</span></li>
          </ul>
          <div class="progress">
            <el-progress type="circle" :width="55" :percentage="25"></el-progress>
          </div>
        </li>
        <li>
          <h3>线上渠道</h3>
          <ul>
            <li>Target<span>80k</span></li>
            <li>Order<span>20k</span></li>
            <li>Cover<span>30k</span></li>
            <li>Confirm<span>10k</span></li>
            <li>CA<span>60k</span></li>
          </ul>
          <div class="progress">
            <el-progress type="circle" :width="55" :color="'#8e71c7'" :percentage="85"></el-progress>
          </div>
        </li>
        <li>
          <h3>RKA</h3>
          <ul>
            <li>Target<span>80k</span></li>
            <li>Order<span>20k</span></li>
            <li>Cover<span>30k</span></li>
            <li>Confirm<span>10k</span></li>
            <li>CA<span>60k</span></li>
          </ul>
          <div class="progress">
            <el-progress type="circle" :width="55" color="#8e71c7" :percentage="35"></el-progress>
          </div>
        </li>
        <li>
          <h3>直营</h3>
          <ul>
            <li>Target<span>80k</span></li>
            <li>Order<span>20k</span></li>
            <li>Cover<span>30k</span></li>
            <li>Confirm<span>10k</span></li>
            <li>CA<span>60k</span></li>
          </ul>
          <div class="progress">
            <el-progress type="circle" :width="55" :percentage="65" :color="'#eee'"></el-progress>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="rightTop">
    <!-- <div class="selectBox">
      <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
        <el-form-item label="客户细分1" prop="customer" >
          <el-select v-model="form.customer" size="mini" multiple filterable collapse-tags placeholder="请选择">
            <el-option
              v-for="item in customers"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family" prop="family">
          <el-select v-model="form.family" size="mini" placeholder="请选择">
            <el-option
              v-for="item in familys"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料编码" prop="mtm">
          <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
      </el-form>
    </div> -->
    <h2 class="analys-title">欠单分析</h2>
    <div class="pieGraph" ref="pieGraph"></div>
  </div>
  <div class="line-box">
    <div class="lineItem">
      <div class="lineGraph" ref="lineGraph"></div>
      <div><el-progress type="circle" :width="55" :percentage="65" :color="'#eee'"></el-progress></div>
    </div>
    <div class="lineItem">
      <div class="lineGraph" ref="lineGraph1"></div>
      <div><el-progress type="circle" :width="55" :percentage="65" :color="'#eee'"></el-progress></div>
    </div>
    <div class="lineItem">
      <div class="lineGraph" ref="lineGraph2"></div>
      <div><el-progress type="circle" :width="55" :percentage="65" :color="'#eee'"></el-progress></div>
    </div>
  </div>
</div> 
</template>
<script>
// const $ = window.$
import echarts from 'echarts'
export default {
  data () {
    return {
      form: {
        customer: '',
        family: '',
        materialcode: ''
      },
      customers: [
        {
          label: '区域1',
          value: 23
        },
        {
          label: '区域2',
          value: 53
        },
        {
          label: '区域3',
          value: 21
        }
      ],
      familys: []
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.water()
      this.pie()
      this.line()
      this.line1()
      this.line2()
    }, 3000)
  },
  methods: {
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    water () {
      var option = {
        // title: {
        //   text: '整体完成进度',
        //   x: 'center',
        //   textStyle: {
        //     fontSize: 14
        //   }
        // },
        series: [{
          type: 'liquidFill',
          data: [
            {
              value: 0.16,
              direction: 'left',
              itemStyle: {
                color: '#4F94B6'
              }
            }
          ],
          radius: '60%'
          // label: {
          //   normal: {
          //     position: ['50%', '70%'],
          //     formatter: 'sdsd',
          //     textStyle: {
          //       fontSize: 12,
          //       color: '#4F94B6'
          //     }
          //   }
          // }
        }]
        // label: { // 容器内部字体
        //   normal: {
        //     // formatter: '{b}\n{a}', // 格式化输出 默认是百分比
        //     formatter: '{a}\n{b}\nvalue:{c}',
        //     textStyle: {
        //       fontSize: '12px'
        //     }
        //   }
        // }
      }
      let waterGraph = echarts.init(this.$refs.waterGraph)
      waterGraph.setOption(option)
    },
    pie () {
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          // orient: 'vertical',
          right: '0',
          top: '10%',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '40%',
            center: ['45%', '60%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      let pieGraph = echarts.init(this.$refs.pieGraph)
      pieGraph.setOption(option)
    },
    line () {
      var option = {
        title: {
          text: 'SO PSD Accuracy',
          left: '6%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '3%',
          top: '15%',
          containLabel: true
        },
        legend: {
          data: ['新办数'],
          right: '3%'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '新办数',
            type: 'line',
            areaStyle: {
              normal: {
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 37, 50, 0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(199, 37, 50, 0.6)'
                }], false)
              }
            },
            smooth: true,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default'
                }
              }
            },
            data: [136, 375, 380, 449, 114, 267, 142, 318, 357, 193, 421, 391]
          },
          {
            type: 'pie',
            radius: ['15%', '20%'],
            center: ['65%', '20%'],
            color: 'red',
            label: {
              normal: {
                textStyle: {
                  color: '#333'
                },
                position: 'center'
              }
            },
            data: [
              {
                value: 255,
                label: {
                  normal: {
                    formatter: '{d} %',
                    textStyle: {
                      fontSize: 13
                    }
                  }
                }
              },
              {
                value: 107,
                label: {
                  normal: {
                    // formatter: '\n到期注销占比',
                    textStyle: {
                      color: '#555',
                      fontSize: 13
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#aaa'
                  },
                  emphasis: {
                    color: '#aaa'
                  }
                }
              }
            ]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph)
      lineGraph.setOption(option)
    },
    line1 () {
      var option = {
        title: {
          text: 'CRAD Accuracy',
          left: '6%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '3%',
          top: '15%',
          containLabel: true
        },
        legend: {
          data: ['新办数', '注销数'],
          right: '3%'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '新办数',
            type: 'line',
            areaStyle: {
              normal: {
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 137, 50, 0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(199, 37, 50, 0.6)'
                }], false)
              }
            },
            smooth: true,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default'
                }
              }
            },
            data: [136, 375, 380, 449, 114, 267, 142, 318, 357, 193, 421, 391]
          },
          {
            name: '注销数',
            type: 'line',
            areaStyle: {
              normal: {
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(19, 37, 250,0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(19, 37, 250,0.2)'
                }], false)
              }
            },
            smooth: true,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default'
                }
              }
            },
            data: [610, 312, 221, 654, 910, 630, 310, 521, 354, 560, 830, 310]
          },
          {
            type: 'pie',
            radius: ['15%', '20%'],
            center: ['65%', '20%'],
            color: 'red',
            label: {
              normal: {
                position: 'center',
                textStyle: {
                  color: '#333'
                }
              }
            },
            data: [
              {
                value: 305,
                label: {
                  normal: {
                    formatter: '{d} %',
                    textStyle: {
                      fontSize: 13
                    }
                  }
                }
              },
              {
                value: 107,
                label: {
                  normal: {
                    // formatter: '\n到期注销占比',
                    textStyle: {
                      color: '#555',
                      fontSize: 13
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#aaa'
                  },
                  emphasis: {
                    color: '#aaa'
                  }
                }
              }
            ]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph1)
      lineGraph.setOption(option)
    },
    line2 () {
      var option = {
        title: {
          text: 'OTS Accuracy',
          left: '6%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '3%',
          top: '15%',
          containLabel: true
        },
        legend: {
          data: ['注销数'],
          right: '3%'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '注销数',
            type: 'line',
            areaStyle: {
              normal: {
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(19, 37, 250, 0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(19, 37, 250, 0.6)'
                }], false)
              }
            },
            smooth: true,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default'
                }
              }
            },
            data: [610, 312, 221, 654, 910, 630, 310, 521, 354, 560, 830, 310]
          },
          {
            type: 'pie',
            radius: ['15%', '20%'],
            center: ['65%', '20%'],
            color: 'red',
            label: {
              normal: {
                position: 'center',
                textStyle: {
                  color: '#333'
                }
              }
            },
            data: [
              {
                value: 305,
                label: {
                  normal: {
                    formatter: '{d} %',
                    textStyle: {
                      fontSize: 14
                    }
                  }
                }
              },
              {
                value: 107,
                label: {
                  normal: {
                    // formatter: '\n到期注销占比',
                    textStyle: {
                      color: '#555',
                      fontSize: 14
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#aaa'
                  },
                  emphasis: {
                    color: '#aaa'
                  }
                }
              }
            ]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph2)
      lineGraph.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.so
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .leftTop
    width 830px
    padding 10px
    float left
    overflow hidden
    .leftTop-left
      width 380px
      height auto
      float left
      overflow hidden
      .water-title
        width 100%
        height 30px
        line-height 30px
        border-bottom 1px solid #ccc
      .waterGraph
        width 340px
        height 300px
      .leftTop-bottom
        width 380px
        height 100px
        li
          float left
          width 75px
          border-right dashed 2px #ccc
          &:first-child
            border-left dashed 2px #ccc
          span
            display block
            width 75px
            height 30px
            text-align center
            &:first-child
              font-weight bold
              font-size 14px
    .topCenter
      width 380px
      height auto
      overflow hidden
      float right
      .progress-title
        width 100%
        height 30px
        line-height 30px
      .topCenter-item
        width 100%
        height auto
        >li
          border-bottom 1px solid #ccc
          width 380px
          height 101px
          &:first-child
            border-top 1px solid #ccc
          h3
            width 100px
            height 100px
            line-height 100px
            text-align center
            float left
          ul
            width 140px
            height auto
            overflow hidden
            float left
            li
            height 20px
            line-height 20px
            border-bottom 0
            span
              display inline-block
              width 70px
              height 20px
              float right
              text-align right
          .progress
            float right
            width 100px
            height 100px
            text-align: center
            padding-top 20px
  .rightTop
    width 435px
    height auto
    float right
    padding 10px
    overflow hidden
    .analys-title
      width 100%
      height 30px
      line-height 30px
      border-bottom 1px #ccc solid
    .pieGraph
      width 100%
      height 350px
  .line-box
    width 100%
    height 380px
    margin 10px auto
    overflow hidden
    .lineItem
      width 33.333%
      float left
      .lineGraph
        width 100%
        height 380px
</style>
