<template>
  <div class="fcst-wraps">
    <div class="content">
      <div class="block1">
        <div class="fcst-wrap">
          <div class="waterfalls">
            <el-form :inline="true" :model="form" ref="form" label-width="70px" class="demo-form-inline">
              <el-form-item label="预测版本" prop="version">
                <el-select v-model="form.version" @change="getTableList" size="mini" filterable  placeholder="请选择">
                  <el-option
                    v-for="(item, index) in versions"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="选择维度" prop="dimension">
                <el-select v-model="form.dimension" @change="clearcvValue" size="mini" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in dimensions"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="CV值" prop="cvValue">
                <el-select v-model="form.cvValue" @visible-change="getcvValuedata" size="mini" placeholder="请选择">
                  <el-option
                    v-for="item in cvValue.children"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left:50px">
                <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="block">
            <div class="vary-box">
              <div class="table-box">
                <el-table
                  :empty-text="tableMessage"
                  :data="tableData1"
                  :header-row-style="headerRowStyle"
                  :row-style="tableRowStyle"
                  border
                  stripe
                  style="width: 100%"
                  max-height="152"
                  >
                  <el-table-column
                    prop="选择值"
                    label="选择值"
                    align="center"
                    sortable>
                    <template slot-scope="scope">
                      <div>
                        <a style="cursor:pointer" @click="handleClick1(scope.row)">{{scope.row.选择值}}</a>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="M1 Change"
                    :label="tableList1.M1"
                    align="center"
                    sortable>
                  </el-table-column>
                  <el-table-column
                    prop="M2 Change"
                    :label="tableList1.M2"
                    align="center"
                    sortable>
                  </el-table-column>
                  <el-table-column
                    prop="M3 Change"
                    :label="tableList1.M3"
                    align="center"
                    sortable>
                  </el-table-column>
                  <el-table-column
                    prop="M4 Change"
                    :label="tableList1.M4"
                    align="center"
                    sortable>
                  </el-table-column>
                  <el-table-column
                    prop="M5 Change"
                    :label="tableList1.M5"
                    align="center"
                    sortable>
                  </el-table-column>
                  <el-table-column
                    prop="Rolling Change"
                    label= "Rolling Change"
                    align="center"
                    sortable>
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <div class="vary-box">
              <div class="varyanalysischartleft" ref="varyanalysischart"></div>
              <div class="varyanalysischartright" ref="varyanalysischart1"></div>
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
  data () {
    return {
      tableMessage: '请稍等，正在快马加鞭计算中……',
      tableData1: [],
      tableList: [],
      tableList1: {
        M1: '',
        M2: '',
        M3: '',
        M4: '',
        M5: ''
      },
      token: '',
      selectValue: '',
      form: {
        dimension: 'Family1',
        version: '',
        cvValue: ''
      },
      versions: [],
      cvValue: {},
      dimensions: ['客户细分', '制造工厂', '产品细分', 'Family1', 'Family2', 'Family3', 'FCST Family', '物料编码', 'CV_CPU', 'CV_硬盘', 'CV_内存', 'CV_显卡', 'CV_屏幕', 'CV_颜色', 'CV_OS', 'CV_Office', 'CV_其它']
    }
  },
  created () {
    this.getQueryVersion()
  },
  mounted () {
    this.$nextTick(() => {
    }, 300)
  },
  methods: {
    onSubmit (form) {
      if (this.form.dimension.indexOf('CV') !== -1 && this.form.cvValue === '') {
        alert('CV值不能为空')
      } else {
        this.getTableData()
      }
    },
    resetForm (form) {
      this.form.version = this.versions[0]
      this.form.dimension = 'Family1'
      this.getTableData()
    },
    getTableList () {
      let vm = this
      vm.tableList = []
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 2,
          version: vm.form.version,
          businessLine: 'ConDT'
        },
        done (data) {
          vm.tableList1.M1 = data[0]
          vm.tableList1.M2 = data[1]
          vm.tableList1.M3 = data[2]
          vm.tableList1.M4 = data[3]
          vm.tableList1.M5 = data[4]
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    varyanalysischart () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 6,
          selectValue: vm.selectValue,
          token: vm.token,
          version: vm.form.version,
          businessLine: 'ConDT'
        },
        done (data) {
          let varyanalysischart = echarts.init(vm.$refs.varyanalysischart)
          var option = {
            title: {
              text: vm.selectValue + '  预测变化',
              top: 0,
              left: '10%',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              },
              formatter: function (params) {
                var tar = params[1]
                return tar.name + ' : ' + tar.value
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
            color: ['#9CDCF0', '#9CDCF0'],
            grid: {
              left: '3%',
              right: '1%',
              bottom: '13%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              splitLine: {show: false},
              data: data.xAxis
            },
            yAxis: {
              type: 'value'
            },
            series: data.series
          }
          varyanalysischart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    varyanalysischart1 () {
      let vm = this
      vm.$ajax({
        url: '/getFcstChanges',
        data: {
          style: 7,
          selectValue: vm.selectValue,
          token: vm.token,
          version: vm.form.version,
          businessLine: 'ConDT'
        },
        done (data) {
          for (let i = 0; i < data.series.length; i++) {
            data.series[i].barMaxWidth = '30px'
          }
          let varyanalysischart = echarts.init(vm.$refs.varyanalysischart1)
          var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '1%',
              top: '25%',
              bottom: '10%',
              containLabel: true
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
            legend: {
              data: data.legend,
              right: '13%'
            },
            color: ['#9cdcf0', '#c6e579', '#f5b7c3', '#fcce10', '#d5bcfb', '#7fe8df', '#dce6f2', '#fc3d39', '#34b1f5', '#68d845', '#fecb2f', '#cd7de0', '#f79646'],
            xAxis: {
              type: 'category',
              data: data.xAxis,
              axisLabel: {
                interval: 0,
                rotate: 30,
                margin: 2
              }
            },
            yAxis: {
              type: 'value'
            },
            series: data.series
          }
          varyanalysischart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getTableData () {
      let vm = this
      vm.tableData1 = []
      vm.tableMessage = '请稍等，正在快马加鞭计算中……'
      let params = this.valieForm()
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['businessLine'] = 'ConDT'
      params['style'] = '5'
      vm.$ajax({
        url: '/getFcstChanges',
        data: params,
        done (data) {
          if (JSON.stringify(data.part1) === '[]') {
            vm.tableMessage = '计算条件无数据'
          }
          vm.tableData1 = data.part1
          vm.token = data.token
          vm.selectValue = data.part1[0].选择值
          vm.varyanalysischart()
          vm.varyanalysischart1()
        },
        fail (data) {
          alert(data)
        }
      })
    },
    clearcvValue () {
      this.form.cvValue = ''
    },
    getcvValuedata () { // 获取查询条件
      let vm = this
      vm.cvValue = {}
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': this.form.dimension + '_0001'
        },
        done (data) {
          if (JSON.stringify(data) !== '[]') {
            vm.cvValue = data[0]
          }
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    valieForm () {
      let params = {}
      if (this.form.version !== '') {
        params['version'] = this.form.version
      }
      if (this.form.dimension !== '') {
        if (this.form.dimension === '物料编码') {
          params['dimension'] = 'pn'
        } else {
          params['dimension'] = this.form.dimension
        }
      }
      if (this.form.cvValue !== '') {
        params['cvValue'] = this.form.cvValue
      }
      return params
    },
    getQueryVersion () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConDT_FCST_Waterfall_Tran_PN_TTL'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.versions = data
          vm.form.version = data[0]
          vm.getTableList()
          vm.getTableData()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    headerRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px',
        height: '35px'
      }
    },
    tableRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px',
        height: '14px'
      }
    },
    handleClick1 (row) {
      this.selectValue = row.选择值
      this.varyanalysischart()
      this.varyanalysischart1()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fcst-wraps
  width 100%
  height 100%
  padding 10px
  .el-form-item
    margin-bottom 0 !important
  .block1
    width 100%
    height auto
    overflow hidden
    display none
    &:nth-child(1)
      display block
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
      .title
        background #fff
        box-shadow 0 0 0 #fff
        font-weight 700
      .addgrid
        min-height 10px
        width 100%
        overflow hidden
        margin 10px 0px
      .drawBarLine
        width 95%
        height 400px
        margin 10px auto
      .vary-box
        width 100%
        height auto
        margin 10px 0px
        .varytable
          width 94%
          margin 0 3%
          a
            cursor pointer
            :hover
              cursor pointer
        .varyanalysischartleft
          width 40%
          height 400px
          float left
        .varyanalysischartright
          width 60%
          height 400px
          float left
</style>

