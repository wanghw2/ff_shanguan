<template>
  <div class="reg">
    <el-button type="primary" @click="changebtnName">{{btnName}}</el-button>
    <div class="piegraph" ref="piegraph"></div>
    <div class="piegraph" ref="piegraph1"></div>
    <div class="piegraph" ref="piegraph2"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      btnName: '月度'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.piegraph()
      this.piegraph1()
      this.piegraph2()
    }, 3000)
  },
  methods: {
    changebtnName () {
      if (this.btnName === '月度') {
        this.btnName = '季度'
      } else {
        if (this.btnName === '季度') {
          this.btnName = '月度'
        }
      }
    },
    piegraph () {
      var option = {
        title: {
          text: 'CON',
          x: '20%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '3%',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            center: ['30%', '45%'],
            radius: [0, '36%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直达', selected: true},
              {value: 679, name: '营销广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '48%'],
            center: ['30%', '45%'],
            data: [
              {value: 335, name: '直达'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1048, name: '百度'},
              {value: 251, name: '谷歌'},
              {value: 147, name: '必应'},
              {value: 102, name: '其他'}
            ]
          }
        ]
      }
      let pieGraph = echarts.init(this.$refs.piegraph)
      pieGraph.setOption(option)
    },
    piegraph1 () {
      var option = {
        title: {
          text: 'ConNB',
          x: '20%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '3%',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            center: ['30%', '45%'],
            radius: [0, '36%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直达', selected: true},
              {value: 679, name: '营销广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '48%'],
            center: ['30%', '45%'],
            data: [
              {value: 335, name: '直达'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1048, name: '百度'},
              {value: 251, name: '谷歌'},
              {value: 147, name: '必应'},
              {value: 102, name: '其他'}
            ]
          }
        ]
      }
      let pieGraph = echarts.init(this.$refs.piegraph1)
      pieGraph.setOption(option)
    },
    piegraph2 () {
      var option = {
        title: {
          text: 'ConDT',
          x: '20%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '3%',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            center: ['30%', '45%'],
            radius: [0, '36%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直达', selected: true},
              {value: 679, name: '营销广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '48%'],
            center: ['30%', '45%'],
            data: [
              {value: 335, name: '直达'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1048, name: '百度'},
              {value: 251, name: '谷歌'},
              {value: 147, name: '必应'},
              {value: 102, name: '其他'}
            ]
          }
        ]
      }
      let pieGraph = echarts.init(this.$refs.piegraph2)
      pieGraph.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.reg
  width 100%
  height 100%
  padding 10px
  .piegraph
    width 800px
    height 400px
</style>
