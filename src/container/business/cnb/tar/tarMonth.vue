<template>
  <div class="month-box">
    <div class="check-box">
      <div class="checkItem">
        <span> 业务线：</span>
        <div class="div1">
          <el-select v-model="serviceLinevalue" placeholder="请选择" size="small">
            <el-option
              v-for="item in serviceLineoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="checkItem">
        <span>指&nbsp;&nbsp;标：</span>
        <div class="div2">
          <el-checkbox v-for="target in targets" :label="target" :key="target">{{target}}</el-checkbox>
        </div>
      </div>
    </div>
    <div class="graph-month">
      <h2>月度目标</h2>
      <div class="toggle" @click="toggleList1">
        <a href="javascript:;" v-text="toggle1 ? '折叠' : '展开'"></a>
      </div>
      <div class="graph-select">
        <span>时间范围：</span>
        <el-select placeholder="按分类选择" v-model="timevalue" size="mini">
          <el-option label="day" value="day">
          </el-option>
          <el-option label="week" value="week">
          </el-option>
        </el-select>
        <el-button size="mini" type="primary" value="">下载图表</el-button>
      </div>
      <div class="graph-wrap clearfix">
        <div class="month-graph" ref="monthGraph"></div>
        <div class="pie-wrap">
          <div class="month-graph-pie pie1" ref="monthPie1">
          </div>
          <div class="month-graph-pie pie2" ref="monthPie2">
          </div>
          <div class="month-graph-pie pie3" ref="monthPie3">
          </div>
        </div>
      </div>
      <table class="table">
        <caption>Monthly savings</caption>
        <tr>
          <th>业务线</th>
          <th>姓名</th>
          <th>省份</th>
          <th>城市</th>
          <th>地址</th>
        </tr>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.name}}</td>
          <td>{{item.province}}</td>
          <td>{{item.city}}</td>
          <td>{{item.address}}</td>
        </tr>
      </table>
    </div>
    <div class="graph-quarter">
      <h2>季度目标</h2>
      <div class="toggle" @click="toggleList2">
        <a href="javascript:;" v-text="toggle2 ? '折叠' : '展开'"></a>
      </div>
      <div class="graph-select">
        <span>时间范围：</span>
        <el-select placeholder="按分类选择" v-model="timevalue" size="mini">
          <el-option label="day" value="day">
          </el-option>
          <el-option label="week" value="week">
          </el-option>
        </el-select>
        <el-button size="mini" type="primary" value="">下载图表</el-button>
      </div>
      <div class="graph-wrap clearfix">
        <div class="month-graph" ref="monthGraph"></div>
        <div class="pie-wrap">
          <div class="month-graph-pie pie1" ref="monthPie1">
          </div>
          <div class="month-graph-pie pie2" ref="monthPie2">
          </div>
          <div class="month-graph-pie pie3" ref="monthPie3">
          </div>
        </div>
      </div>
      <table class="table">
        <caption>Monthly savings</caption>
        <tr>
          <th>业务线</th>
          <th>姓名</th>
          <th>省份</th>
          <th>城市</th>
          <th>地址</th>
        </tr>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.name}}</td>
          <td>{{item.province}}</td>
          <td>{{item.city}}</td>
          <td>{{item.address}}</td>
        </tr>
      </table>
    </div>
    <div class="dangerTabBox">
      <h2 class="el-icon-warning">风险管理</h2>
      <div class="dangerMind">
        <table class="dangerTab">
          <tr align="centers">
            <th width="150">业务线</th>
            <th>最低-当前预测</th>
            <th>CA OL-Budget</th>
            <th>CA OL-Fin Target</th>
            <th>CA OL-Fin Target</th>
            <th>CA OL-Market Target</th>
            <th>PO-Budget </th>
            <th>PO-Fin Target</th>
            <th>PO-Market Target</th>
            <th>有效PO-Budget</th>
            <th>有效PO-Fin Target</th>
            <th>有效PO-Market Target</th>
            <th>Supply-Budget</th>
            <th>Supply-Fin Target</th>
            <th>Supply-Market Target</th>
          </tr>
          <tr align="center">
            <td>ThinkCentre-R</td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-12</a></td>
            <td><a href="javascript:;">-2</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-8</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-7</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-2</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-1</a></td>
          </tr>
          <tr align="center">
            <td>ThinkStation</td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-12</a></td>
            <td><a href="javascript:;">-2</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-8</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-7</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-2</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-221</a></td>
          </tr>
          <tr align="center">
            <td>ThinkPad_REL-GAB</td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-12</a></td>
            <td><a href="javascript:;">-2</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-8</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-7</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-2</a></td>
            <td><a href="javascript:;">12</a></td>
            <td><a href="javascript:;">-1</a></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="email-box">
      <div class="email-content">
        <div class="title">邮件内容</div>
        <el-form size="small" label-position="right" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="收件人" prop="to">
            <el-input v-model="ruleForm.to"></el-input>
          </el-form-item>
          <el-form-item label="主题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="邮件内容" prop="content">
            <el-input type="textarea" v-model="ruleForm.content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即发送</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="email-history">
        <div class="title">历史邮件</div>
        <div class="email-history-list">
          <div class="list-item" v-for="item in 3" :key="item">
            <div class="item-title">
              <span class="send">发件人：</span><span class="send-name">{{'赵彩云'}}</span><span class="time">时间：</span><span class="send-time">{{'2017年12月12日'}}</span>
            </div>
            <div class="item-body">
              <p>感谢您使用滴滴出行并选择开票业务，查看发票对应的行程单请单击附件。您可以在APP-我的钱包-开票-开票历史中查看最新的开票进度。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  components: {
  },
  data () {
    return {
      ruleForm: {
        to: '',
        title: '',
        content: ''
      },
      rules: {
        to: [
          { required: true, message: '请填写收件人地址', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请填写邮件标题', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请填邮件内容', trigger: 'blur' }
        ]
      },
      tableData: [{
        title: 'Tp-Edge',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        title: 'TP Premium',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        title: 'ThinkPad-T',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        title: 'PO Budget',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      serviceLineoptions: [{
        value: '1',
        label: 'Tp-Edge'
      }, {
        value: '2',
        label: 'TP Premium'
      }, {
        value: '3',
        label: 'ThinkPad-T2'
      }, {
        value: '4',
        label: 'PO Budget'
      }, {
        value: '5',
        label: 'ThinkPad-T5'
      }],
      serviceLinevalue: '',
      timevalue: '',
      toggle1: true,
      toggle2: true,
      targets: ['ThinkPad-T2', 'PO Budget4', 'Fin Target2', 'ThinkPad-T1', 'PO Budget', 'Fin Target1', 'ThinkPad-T3', 'PO Budget1', 'Fin Target23', 'ThinkPad-T13', 'PO Budget3', 'Fin Target66']
    }
  },
  methods: {
    toggleList1 () {
      let graphMonth = document.getElementsByClassName('graph-month')[0]
      if (this.toggle1) {
        graphMonth.style.height = '35px'
        graphMonth.style.overflow = 'hidden'
      } else {
        graphMonth.style.height = 'auto'
        graphMonth.style.overflow = 'auto'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let graphQuarter = document.getElementsByClassName('graph-quarter')[0]
      if (this.toggle2) {
        graphQuarter.style.height = '35px'
        graphQuarter.style.overflow = 'hidden'
      } else {
        graphQuarter.style.height = 'auto'
        graphQuarter.style.overflow = 'auto'
      }
      this.toggle2 = !this.toggle2
    },
    getDangerData () {
      var listA = document.getElementsByClassName('dangerTab')[0].getElementsByTagName('a')
      for (var i = 0; i < listA.length; i++) {
        // alert(list[i].innerText)
        if (listA[i].innerText < 0) {
          listA[i].style.color = 'red'
        }
      }
    },
    monthGraph () {
      this.monthGraph = this.$refs.monthGraph
      let monthGraphCharts = echarts.init(this.monthGraph)
      let monthGraphoption = {
        // title: {
        //   text: '月度目标示例图',
        //   left: 'left'
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
          left: 'left',
          // orient: 'vertical',
          data: ['2的指数', '3的指数'],
          top: 'top'
        },
        xAxis: {
          type: 'category',
          name: 'x',
          splitLine: {show: false},
          data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          backgroundColor: '#f90'
        },
        yAxis: {
          type: 'log',
          name: 'y',
          nameLocation: 'end'
        },
        series: [
          {
            name: '3的指数',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247]
          },
          {
            name: '2的指数',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32]
          },
          {
            name: '1/2的指数',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64]
          }
        ]
      }
      monthGraphCharts.setOption(monthGraphoption)
    },
    poGraph () {
      this.monthPie1 = this.$refs.monthPie1
      let monthPie1Charts = echarts.init(this.monthPie1)
      this.monthPie2 = this.$refs.monthPie2
      let monthPie2Charts = echarts.init(this.monthPie2)
      this.monthPie3 = this.$refs.monthPie3
      let monthPie3Charts = echarts.init(this.monthPie3)
      let poData = {
        title: {
          text: 'PO/PO Target',
          left: 'center',
          top: '30px',
          textStyle: {
            color: '#666',
            fontWeight: 'normal',
            fontSize: '12px'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   orient: 'vertical',
        //   left: 'left',
        //   data: ['PO', 'co']
        // },
        series: [
          {
            name: 'PO/PO Target',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: 'po'},
              {value: 235, name: 'co'}
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
      monthPie1Charts.setOption(poData)
      monthPie2Charts.setOption(poData)
      monthPie3Charts.setOption(poData)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.poGraph()
      this.monthGraph()
      this.toggleList1()
      this.toggleList2()
      this.getDangerData()
    }, 1200)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.clearfix
  zoom 1
  &:after
    content "."
    display block
    height 0
    clear both
    visibility hidden
.month-box
  width 100%
  height 100%
  padding 10px
  background #fff
  .check-box
    width 100%
    min-height 100px
    overflow hidden
    box-sizing border-box
    padding 0 20px
    .checkItem
      display table
      min-height 32px
      margin-bottom 8px
      overflow hidden
      font-size 14px
      span
        display table-cell
        width 70px
        line-height 32px
        height 100%
      .div1
        width 130px
        height 32px
        display table-cell
      .div2
        display table-cell
        height auto
        overflow hidden
      .el-checkbox
        margin-right 10px
        margin-bottom 10px
      .el-checkbox+.el-checkbox
        margin-left 0px
  // 图标样式
  .graph-month,.graph-quarter
    width 100%
    height auto
    overflow hidden
    padding 0 15px 10px 15px
    background #FCFAFA
    border-radius 4px
    position relative
    margin-bottom 20px
    h2
      width 100%
      height 35px
      line-height 35px
      font-size 14px
    .toggle
      position absolute
      width 100px
      text-align center
      right 10px
      top 0
      a
        display block
        padding 0 10px
        height 35px
        line-height 35px
    .graph-select
      width 100%
      height 28px
      margin-bottom 20px
      span
        display inline-block
        height 28px
        line-height 28px
        float left
      .el-select
        display inline-block
        width 120px
        height 28px
        margin-right 20px
        float left
    .month-graph
      width 500px
      height 260px
      float left
      background #eee
    .pie-wrap
      width 600px
      height 260px
      float left
      .month-graph-pie
        width 200px
        height 260px
        float left
    .table
      border 1px solid #e6ebf5
      border-collapse collapse
      border-radius 4px
      width 80%
      margin-top 40px
      tr, th, td
        border 1px solid #e6ebf5
      th, td
        padding 8px 10px
        text-align left
        color #5a5e66
        &:first-child
          font-weight bold
          color #878d99
      caption
        line-height 40px
        font-size 20px
        font-weight bold
        color #878d99
      th
        color #878d99
  // 风险管理
  .dangerTabBox
    width 100%
    height auto
    padding 20px
    h2
      width 100%
      height 30px
      line-height 30px
      font-size 14px
      font-weight normal
    .dangerMind
      width 100%
      min-height 100px
      overflow hidden
      .dangerTab
        border-collapse collapse
        border-radius 4px
        border 1px solid #e6ebf5
        tr
          height 30px
        th,tr,td
          border 1px solid #e6ebf5
        td:hover
          background #eee
        a
          display block
          width 100%
          height 100%
          color #333
  // 邮件部分
  .email-box
    width 100%
    height auto
    padding 20px
    // background  #fff
    .email-content, .email-history
      padding: 10px 20px
      border 1px solid #e6ebf5
      margin-bottom 20px
    .title
      line-height 40px
      font-size 14px
      font-weight bold
    .email-history-list
      .list-item
        padding 5px 10px
        line-height 26px
      .item-title
        color #5a5e66
      .send-time
        margin-left 20px
      .item-body p
        width 300px
        height 26px
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
</style>
