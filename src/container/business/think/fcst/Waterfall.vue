<template>
<div class="waterfalls">
  <h2>waterfall查询</h2>
  <el-form :inline="true" :model="form" ref="form" label-width="80px" class="demo-form-inline">
    <div class="line1">
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
    </div>
    <div class="line2">
      <el-form-item label="Family1" prop="Family1">
        <el-select v-model="form.Family1" size="mini" multiple filterable collapse-tags placeholder="请选择">
          <el-option
            v-for="item in Family1s"
            :key="item.value"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Family2" prop="Family2">
        <el-select v-model="form.Family2" size="mini" multiple filterable collapse-tags placeholder="请选择">
          <el-option
            v-for="item in Family2s"
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
      <el-form-item style="margin-left:30px">
      <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
      <el-button @click="resetForm('form')" size="mini" >重置</el-button>
    </el-form-item>
    </div>
    <form-public  ref="formpublic"></form-public>
  </el-form>
  <h2 class="title">{{title}}--{{titleValue}}</h2>
  <el-table
    border
    :data="tableData"
    style="width: 100%">
    <el-table-column fixed prop="预测Version" :label="lableList.预测Version" width="120">
      <template slot-scope="scope">
        <div class="fcst-version">{{scope.row.预测Version}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Last_M1" :label="lableList.Last_M1" width="100">
      <template slot-scope="scope">
        <div class="a2">{{scope.row.Last_M1.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Last_M2" :label="lableList.Last_M2" width="100">
      <template slot-scope="scope">
        <div class="a3">{{scope.row.Last_M2.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Last_M3" :label="lableList.Last_M3" width="100">
      <template slot-scope="scope">
        <div class="a4">{{scope.row.Last_M3.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Last_M4" :label="lableList.Last_M4" width="100">
      <template slot-scope="scope">
        <div class="a5">{{scope.row.Last_M4.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Last_M5" :label="lableList.Last_M5" width="100">
      <template slot-scope="scope">
        <div class="a6">{{scope.row.Last_M5.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Last_M6" :label="lableList.Last_M6" width="100">
      <template slot-scope="scope">
        <div class="a7">{{scope.row.Last_M6.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Last_M7" :label="lableList.Last_M7" width="100">
      <template slot-scope="scope">
        <div class="a8">{{scope.row.Last_M7.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Last_M8" :label="lableList.Last_M8" width="100">
      <template slot-scope="scope">
        <div class="a9">{{scope.row.Last_M8.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M1" :label="lableList.M1" width="100">
    </el-table-column>
    <el-table-column prop="M2" :label="lableList.M2" width="100">
    </el-table-column>
    <el-table-column prop="M3" :label="lableList.M3" width="100">
    </el-table-column>
    <el-table-column prop="M4" :label="lableList.M4" width="100">
    </el-table-column>
    <el-table-column prop="M5" :label="lableList.M5" width="100">
    </el-table-column>
    <el-table-column prop="SUM" :label="lableList.SUM" width="100">
    </el-table-column>
    <el-table-column prop="TTL_WTW_change" :label="lableList.TTL_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a16">{{scope.row.TTL_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="TTL_业务分析" :label="lableList.TTL_业务分析" width="120">
      <template slot-scope="scope">
        <div class="a17">{{scope.row.TTL_业务分析.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Q预测版本序号" :label="lableList.Q预测版本序号" width="100">
      <template slot-scope="scope">
        <div class="a18">{{scope.row.Q预测版本序号.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Q_WTW_change" :label="lableList.Q_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a19">{{scope.row.Q_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Q_Rolling_WTW_change" :label="lableList.Q_Rolling_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a20">{{scope.row.Q_Rolling_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="Q_业务分析" :label="lableList.Q_业务分析" width="120">
    </el-table-column>
    <el-table-column prop="M1预测版本序号" :label="lableList.M1预测版本序号" width="100">
      <template slot-scope="scope">
        <div class="a22">{{scope.row.M1预测版本序号.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M1_WTW_change" :label="lableList.M1_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a23">{{scope.row.M1_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M1_Rolling_WTW_change" :label="lableList.M1_Rolling_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a24">{{scope.row.M1_Rolling_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M1_业务分析" :label="lableList.M1_业务分析" width="120">
    </el-table-column>
    <el-table-column prop="M2预测版本序号" :label="lableList.M2预测版本序号" width="100">
      <template slot-scope="scope">
        <div class="a26">{{scope.row.M2预测版本序号.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M2_WTW_change" :label="lableList.M2_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a27">{{scope.row.M2_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M2_Rolling_WTW_change" :label="lableList.M2_Rolling_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a28">{{scope.row.M2_Rolling_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M2_业务分析" :label="lableList.M2_业务分析" width="120">
    </el-table-column>
    <el-table-column prop="M3预测版本序号" :label="lableList.M3预测版本序号" width="100">
      <template slot-scope="scope">
        <div class="a30">{{scope.row.M3预测版本序号.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M3_WTW_change" :label="lableList.M3_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a31">{{scope.row.M3_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M3_Rolling_WTW_change" :label="lableList.M3_Rolling_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a32">{{scope.row.M3_Rolling_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M3_业务分析" :label="lableList.M3_业务分析" width="120">
    </el-table-column>
    <el-table-column prop="M4预测版本序号" :label="lableList.M4预测版本序号" width="100">
      <template slot-scope="scope">
        <div class="a34">{{scope.row.M4预测版本序号.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M4_WTW_change" :label="lableList.M4_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a35">{{scope.row.M4_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M4_Rolling_WTW_change" :label="lableList.M4_Rolling_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a36">{{scope.row.M4_Rolling_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M4_业务分析" :label="lableList.M4_业务分析" width="120">
    </el-table-column>
    <el-table-column prop="M5预测版本序号" :label="lableList.M5预测版本序号" width="100">
      <template slot-scope="scope">
        <div class="a38">{{scope.row.M5预测版本序号.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M5_WTW_change" :label="lableList.M5_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a39">{{scope.row.M5_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M5_Rolling_WTW_change" :label="lableList.M5_Rolling_WTW_change" width="100">
      <template slot-scope="scope">
        <div class="a40">{{scope.row.M5_Rolling_WTW_change.value}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="M5_业务分析" :label="lableList.M5_业务分析" width="120">
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import formPublic from '@/components/public/formPublic1'
const $ = window.$
export default {
  data () {
    return {
      title: 'fcstVersion',
      titleValue: '20180528',
      tableData: [],
      lableList: {
        预测Version: '',
        Last_M1: '',
        Last_M2: '',
        Last_M3: '',
        Last_M4: '',
        Last_M5: '',
        Last_M6: '',
        Last_M7: '',
        Last_M8: '',
        M1: '',
        M2: '',
        M3: '',
        M4: '',
        M5: '',
        SUM: '',
        TTL_WTW_change: '',
        TTL_业务分析: '',
        Q预测版本序号: '',
        Q_WTW_change: '',
        Q_Rolling_WTW_change: '',
        Q_业务分析: '',
        M1预测版本序号: '',
        M1_WTW_change: '',
        M1_Rolling_WTW_change: '',
        M1_业务分析: '',
        M2预测版本序号: '',
        M2_WTW_change: '',
        M2_Rolling_WTW_change: '',
        M2_业务分析: '',
        M3预测版本序号: '',
        M3_WTW_change: '',
        M3_Rolling_WTW_change: '',
        M3_业务分析: '',
        M4预测版本序号: '',
        M4_WTW_change: '',
        M4_Rolling_WTW_change: '',
        M4_业务分析: '',
        M5预测版本序号: '',
        M5_WTW_change: '',
        M5_Rolling_WTW_change: '',
        M5_业务分析: ''
      },
      form: {
        cussegment: [], // 客户细分
        Family1: [],
        Family2: [],
        prosegment: [], // 产品细分
        buildfact: [], // 制造工厂
        materialcode: '' // 物料编码
      },
      cussegments: [],
      prosegments: [],
      Family1s: [],
      Family2s: [],
      buildfacts: []
    }
  },
  components: {
    formPublic
  },
  created () {
    this.getWaterfallColumn()
    this.getTableData()
  },
  mounted () {
    let vm = this
    setTimeout(() => {
      vm.setStyle()
    }, 1000)
  },
  methods: {
    getWaterfallColumn () {
      let vm = this
      vm.$ajax({
        url: '/selectFcstWaterfallColumn',
        method: 'get',
        params: {
          'fcstVersion': '20180528',
          'dbName': 'FF_IDSS_Data_CON',
          'tableName': 'ConNB_FCST_Waterfall_Graph'
        },
        done (data) {
          let newItem = {}
          for (var key in data) {
            newItem[('' + key).replace(/\s/g, '_')] = data[key]
          }
          vm.lableList = newItem
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getTableData () {
      let vm = this
      vm.$ajax({
        url: '/selectFcstWaterfallData',
        method: 'get',
        params: {
          'fcstVersion': '20180528',
          'dbName': 'FF_IDSS_Data_CON',
          'tableName': 'ConNB_FCST_Waterfall_Graph'
        },
        done (data) {
          vm.tableData = [].concat(data).map(item => {
            let newItem = {}
            for (var key in item) {
              newItem[('' + key).replace(/\s/g, '_')] = item[key]
            }
            return newItem
          })
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    setStyle () {
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].Last_M1.style === 'Y') {
          $('.a2').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M2.style === 'Y') {
          $('.a3').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M3.style === 'Y') {
          $('.a4').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M4.style === 'Y') {
          $('.a5').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M5.style === 'Y') {
          $('.a6').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M6.style === 'Y') {
          $('.a7').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M7.style === 'Y') {
          $('.a8').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].Last_M8.style === 'Y') {
          $('.a9').eq(i).css({
            'background': '#A6E2FF',
            'width': '100%',
            'height': '100%'
          })
        }
        if (this.tableData[i].TTL_WTW_change.style === 'Y') {
          $('.a16').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].TTL_业务分析.style === 'Y') {
          $('.a17').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].Q预测版本序号.style === 'Y') {
          $('.a18').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].Q_WTW_change.style === 'Y') {
          $('.a19').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].Q_Rolling_WTW_change.style === 'Y') {
          $('.a20').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M1预测版本序号.style === 'Y') {
          $('.a22').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M1_WTW_change.style === 'Y') {
          $('.a23').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M1_Rolling_WTW_change.style === 'Y') {
          $('.a24').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M2预测版本序号.style === 'Y') {
          $('.a26').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M2_WTW_change.style === 'Y') {
          $('.a27').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M2_Rolling_WTW_change.style === 'Y') {
          $('.a28').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M3预测版本序号.style === 'Y') {
          $('.a30').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M3_WTW_change.style === 'Y') {
          $('.a31').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M3_Rolling_WTW_change.style === 'Y') {
          $('.a32').eq(i).css({
            'color': 'red'
          })
        }

        if (this.tableData[i].M4预测版本序号.style === 'Y') {
          $('.a34').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M4_WTW_change.style === 'Y') {
          $('.a35').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M4_Rolling_WTW_change.style === 'Y') {
          $('.a36').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M5预测版本序号.style === 'Y') {
          $('.a38').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M5_WTW_change.style === 'Y') {
          $('.a39').eq(i).css({
            'color': 'red'
          })
        }
        if (this.tableData[i].M5_Rolling_WTW_change.style === 'Y') {
          $('.a40').eq(i).css({
            'color': 'red'
          })
        }
      }
    },
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
      this.$refs.formPublic.resetForm()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.waterfalls
  width 100%
  height 100%
  padding 10px
  .el-form-item
    margin-bottom 0 !important
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
  .title
    box-shadow: 0 0px 0px #fff
    margin-bottom 0px
    padding 0px
    text-align center
    font-weight 400
    background #fff
  .fcst-version
    width 100%
    height 100%
    background #FFC000
</style>
