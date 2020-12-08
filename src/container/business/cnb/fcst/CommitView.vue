
<template>
  <div class="fcst-commit">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <div class="wood">
              <div class="wooditem">
                <ul>
                  <li>
                    <h4>{{QData.name}} Last Fcst</h4>
                    <i></i>
                    <span>{{QData['Last FCST']}}</span>
                  </li>
                  <li>
                    <h4>{{QData.name}} Fcst</h4>
                    <i>{{QData['FCST Change']}}</i>
                    <span>{{QData.FCST}}</span>
                  </li>
                  <li>
                    <h4>{{QData.name}} Commit</h4>
                    <i>{{QData['Commit Change']}}</i>
                    <span>{{QData.Commit}}</span>
                  </li>
                  <li>
                    <h4>{{QData.name}} Gap</h4>
                    <i></i>
                    <span>{{QData.Gap}}</span>
                  </li>
                </ul>
                <ul>
                  <li v-for="(item, index) in CAData" :key="index">
                    <h4>{{item.name}}</h4>
                    <i></i>
                    <span>{{item.data}}</span>
                  </li>
                </ul>
              </div>
              <div class="wooditem">
                <ul>
                  <li>
                    <h4>{{M1Data.name}} Last Fcst</h4>
                    <i></i>
                    <span>{{M1Data['Last FCST']}}</span>
                  </li>
                  <li>
                    <h4>{{M1Data.name}} Fcst</h4>
                    <i>{{M1Data['FCST Change']}}</i>
                    <span>{{M1Data.FCST}}</span>
                  </li>
                  <li>
                    <h4>{{M1Data.name}} Commit</h4>
                    <i>{{M1Data['Commit Change']}}</i>
                    <span>{{M1Data.Commit}}</span>
                  </li>
                  <li>
                    <h4>{{M1Data.name}} Gap</h4>
                    <i></i>
                    <span>{{M1Data.Gap}}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h4>{{M2Data.name}} Last Fcst</h4>
                    <i></i>
                    <span>{{M2Data['Last FCST']}}</span>
                  </li>
                  <li>
                    <h4>{{M2Data.name}} Fcst</h4>
                    <i>{{M2Data['FCST Change']}}</i>
                    <span>{{M2Data.FCST}}</span>
                  </li>
                  <li>
                    <h4>{{M2Data.name}} Commit</h4>
                    <i>{{M2Data['Commit Change']}}</i>
                    <span>{{M2Data.Commit}}</span>
                  </li>
                  <li>
                    <h4>{{M2Data.name}} Gap</h4>
                    <i></i>
                    <span>{{M2Data.Gap}}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h4>{{M3Data.name}} Last Fcst</h4>
                    <i></i>
                    <span>{{M3Data['Last FCST']}}</span>
                  </li>
                  <li>
                    <h4>{{M3Data.name}} Fcst</h4>
                    <i>{{M3Data['FCST Change']}}</i>
                    <span>{{M3Data.FCST}}</span>
                  </li>
                  <li>
                    <h4>{{M3Data.name}} Commit</h4>
                    <i>{{M3Data['Commit Change']}}</i>
                    <span>{{M3Data.Commit}}</span>
                  </li>
                  <li>
                    <h4>{{M3Data.name}} Gap</h4>
                    <i></i>
                    <span>{{M3Data.Gap}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <h2>Overview
              <a href="javascript:;" class="fold" @click="toggleListGird" v-text="toggle ? '折叠' : '展开'"></a>
            </h2>
            <div class="gridBox">
              <div id="grid"></div>
            </div>
            <h2>{{QTitle}} Gap
              <a href="javascript:;" class="fold" @click="toggleListQgapBtn" v-text="toggleQgap ? '折叠' : '展开'"></a>
            </h2>
            <div class="chartBox chartBoxQ">
              <div class="barChart" ref="barChart"></div>
              <div class="stackChart" ref="stackChart"></div>
            </div>
            <h2>{{M1Title}} Gap
              <a href="javascript:;" class="fold" @click="toggleListM1gapBtn" v-text="toggleM1gap ? '折叠' : '展开'"></a>
            </h2>
            <div class="chartBox chartBoxM1">
              <div class="barChart" ref="barChartM1"></div>
              <div class="stackChart" ref="stackChartM1"></div>
            </div>
            <h2>{{M2Title}} Gap
              <a href="javascript:;" class="fold" @click="toggleListM2gapBtn" v-text="toggleM2gap ? '折叠' : '展开'"></a>
            </h2>
            <div class="chartBox chartBoxM2">
              <div class="barChart" ref="barChartM2"></div>
              <div class="stackChart" ref="stackChartM2"></div>
            </div>
            <h2>{{M3Title}} Gap
              <a href="javascript:;" class="fold" @click="toggleListM3gapBtn" v-text="toggleM3gap ? '折叠' : '展开'"></a>
            </h2>
            <div class="chartBox chartBoxM3">
              <div class="barChart" ref="barChartM3"></div>
              <div class="stackChart" ref="stackChartM3"></div>
            </div>
            <h2>Rolling Gap
              <a href="javascript:;" class="fold" @click="toggleListrolgapBtn" v-text="togglerolgap ? '折叠' : '展开'"></a>
            </h2>
            <div class="rollingBox">
              <div class="table-box">
                <el-table
                  :data="tableArr"
                  :header-row-style="headerRowStyle"
                  :row-style="tableRowStyle"
                  border
                  stripe
                  height="380"
                  style="width: 100%"
                  :default-sort = "{prop: 'M3 Rolling Gap', order: 'ascending'}" >
                  <el-table-column
                    prop="Family"
                    label="Family"
                    align="center"
                    sortable>
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.Family}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="M1 Gap"
                    :label= waterM1
                    align="center"
                    sortable
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="M2 Gap"
                    :label= waterM2
                    align="center"
                    sortable
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="M3 Gap"
                    :label= waterM3
                    align="center"
                    sortable
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="M3 Rolling Gap"
                    label= "Rolling Gap"
                    align="center"
                    sortable
                    width="110">
                  </el-table-column>
                </el-table>
              </div>
              <div class="waterfallgraph" ref="waterfallgraph"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block">
            <!-- 筛选条件 -->
            <el-form :inline="true" :model="form" ref="form" label-width="75px" class="demo-form-inline">
              <el-form-item label="版本" prop="preversion" >
                <el-select v-model="form.preversion" size="mini" filterable placeholder="请选择">
                  <el-option
                    v-for="(item, index) in preversions"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="月份" prop="month">
                <el-select v-model="form.month" size="mini" filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="业务Issue" prop="businessissue">
                <el-select v-model="form.businessissue" size="mini" filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in businessissues.children"
                    :key="index"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="区间" prop="betweenmin">
                <el-input v-model="form.betweenmin" size="mini" class="betweeninput" placeholder="请输入"></el-input>
              </el-form-item>
              <i class="shortline">-</i>
              <el-form-item label="" prop="betweenmax">
                <el-input v-model="form.betweenmax" class="betweeninput" size="mini" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="产品细分" prop="productsegment">
                <el-select v-model="form.productsegment" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productsegments.children"
                    :key="index"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family1" prop="Family1">
                <el-select v-model="form.Family1" size="mini" @visible-change="queryfamily1" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in Family1s"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family2" prop="Family2">
                <el-select v-model="form.Family2" size="mini" @visible-change="queryfamily2" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in Family2s"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="materialcode">
                <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="价位段" prop="price">
                <el-select v-model="form.price" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in prices.children"
                    :key="index"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="选择维度" prop="dimension">
                <el-select v-model="form.dimension" size="mini" filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in dimensions"
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
            <h2>Fcst Commit Detail
              <a href="javascript:;" class="fold" @click="toggleListDetail" v-text="toggle1 ? '折叠' : '展开'"></a>
            </h2>
            <div class="tableWrap">
              <table class="tableitem tableCommit" border="0">
                <tr align="center">
                  <th v-for="(item, index) in tableDetailTitle" :key="index">{{item}}</th>
                </tr>
                <tr v-for="(tableitem, i) in tablesubDetailData" :key="i">
                  <td align="center" v-for="(itemchild, j) in tableitem" :key="j">
                    {{itemchild}}
                  </td>
                </tr>
              </table>
            </div>
            <div class="dynamic" ref="dynamicgraph"></div>
            <h2>Fcst Commit Change
              <a href="javascript:;" class="fold" @click="toggleListDetailChart" v-text="toggleCommit ? '折叠' : '展开'"></a>
            </h2>
            <div class="commitDetail">
              <div class="search-box">
                <div class="searchitem">
                  <h3>产品细分</h3>
                  <ul>
                    <li>游戏本</li>
                    <li>传统本</li>
                    <li>轻薄本</li>
                    <li>极致轻薄</li>
                  </ul>
                </div>
                <div class="searchitem">
                  <h3>Family</h3>
                  <ul>
                    <li>Y7000</li>
                    <li>Y7001</li>
                    <li>Y7002</li>
                    <li>Y7003</li>
                    <li>Y7004</li>
                    <li>Y7005</li>
                  </ul>
                </div>
                <div class="searchitem">
                  <h3>MTM</h3>
                  <ul class="searchMtm">
                    <li>80-000</li>
                    <li>80-111</li>
                    <li>80-1112</li>
                  </ul>
                </div>
              </div>
              <div class="commitvary" ref="commitvary"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="fcstItem">
          <div class="block">
            <h2>Commit 外 ATS</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'ConNB_预测版本'"
                :tableName="'ConNB_FCST_Version'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConNB_预测版本'"
                ref="gridfastversion">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="fcstItem">
          <div class="block">
            <div class="wood">
              <div class="wooditem">
                <ul>
                  <li>
                    <h4>本周Gap</h4>
                    <i></i>
                    <span>-30K</span>
                  </li>
                  <li>
                    <h4>下周Gap</h4>
                    <i></i>
                    <span>-20K</span>
                  </li>
                  <li>
                    <h4>隔周Gap</h4>
                    <i></i>
                    <span>-30K</span>
                  </li>
                </ul>
              </div>
            </div>
            <h2>Commit VS PSD VS RSD 分析
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'CONNB_PSD_Commit_Gap'"
                :tableName="'CONNB_PSD_Commit_Gap'"
                :source="'FF_IDSS_Data_CON'"
                :fileName="'CONNB_PSD_Commit_Gap'">
              </v-table>
            </div>
            <div class="chartBox chartBoxM2">
              <div class="barChart" ref="stackCommit1"></div>
              <div class="stackChart" ref="stackCommit2"></div>
              <el-button type="primary" style="margin-right:150px;float:right" size="mini">Family2</el-button>
              <el-button type="primary" size="mini" style="margin-right:15px;float:right">Family1</el-button>
              <div class="stackChart" ref="stackCommit3"></div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
import echarts from 'echarts'
const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      toggle: true,
      toggle1: true,
      toggle2: true,
      toggleQgap: true,
      toggleM1gap: true,
      toggleM2gap: true,
      toggleM3gap: true,
      togglerolgap: true,
      toggleCommit: true,
      tableData: [], // overview表的数据
      tableDetailTitle: ['选择维度', '版本', '月份', 'Q Fcst', 'Q commit', 'Q gap', 'Q 备货上限', 'Q 当前备货', 'Q 订单', '5 Fcst', '5 Commit', '5 Gap', '5 备货上限', '5 当前备货', '5 订单'],
      tablesubDetailData: [
        ['120s-14IAP', '5月', 32, 29, -3, 10, 10, 8, -2, 12, 11, -1, 14, 17, 67],
        ['XiaoXin Air 15IKBR', 'XiaoXin Air 15IKBR', 32, 29, -3, 10, 10, 8, -2, 12, 11, -45, 55, 34, 24],
        ['XiaoXin Air 15IKBR', 'XiaoXin Air 15IKBR', 32, -29, -3, 10, -10, 8, -2, 12, 11, 45, 55, 34, 24],
        ['XiaoXin Air 15IKBR', 'XiaoXin Air 15IKBR', 32, 29, -3, 10, 10, 8, -2, -12, 11, -45, 55, 34, -24],
        ['XiaoXin Air 15IKBR', 'XiaoXin Air 15IKBR', 32, 29, -3, 10, 10, 8, -2, 12, 11, 45, -55, 34, 24],
        ['XiaoXin Air 15IKBR', 'XiaoXin Air 15IKBR', -32, 29, -3, -10, 10, -8, -2, 12, 11, 45, 55, -34, 24],
        ['XiaoXin Air 15IKBR', 'XiaoXin Air 15IKBR', 32, 29, -3, 10, 10, 8, -2, 12, 11, 45, -55, 34, 24],
        ['Y7000', 'XiaoXin Chao7000-14AST', 32, -29, -3, 10, 10, 8, -2, 12, 11, -1, 14, 45, -64]
      ],
      menuArr: ['Overview', 'Commit Detail', 'Commit 外ATS', 'Commit 准确性'],
      form: {
        preversion: [],
        productsegment: [], // 产品细分
        materialcode: '', // 物料编码
        price: [], // 价位段
        businessissue: '', // 业务Issue
        Family1: [],
        Family2: [],
        dimension: '', // 选择维度
        month: '6月', // 目标
        betweenmin: '', // 区间最小值
        betweenmax: '' // 区间最大值
      },
      preversions: [],
      productsegments: [],
      Family1s: [],
      Family2s: [],
      months: ['5月', '6月', '7月', '8月', '9月'],
      businessissues: [],
      prices: [],
      dimensions: ['Family2', '产品细分', 'Family1', '价位段', '物料编码', 'CV'],
      QData: [],
      M1Data: [],
      M2Data: [],
      M3Data: [],
      CAData: [],
      QTitle: '',
      M1Title: '',
      M2Title: '',
      M3Title: '',
      waterM1: '',
      waterM2: '',
      waterM3: '',
      defwaterFallFamily: '',
      tableArr: []
    }
  },
  components: {
    Upload,
    VTable
  },
  created () {
    // this.overviewTable()
  },
  mounted () {
    this.$nextTick(() => {
      this.CommitDetailChart()
      this.boardData()  // overview面板
      this.commitChange()
      this.toggleList()
      this.toggleList2()
      this.toggleListDetail()
      this.toggleListDetailChart()
      this.toggleListQgap()
      this.toggleListM1gap()
      this.toggleListM2gap()
      this.toggleListM3gap()
      this.toggleListrolgap()
      this.waterfallTable()
      this.judgeNegative()
      this.drawStackCommit1()
      this.drawStackCommit2()
      this.drawStackCommit3()
      this.getQuerydata() // 产品细分，价位段
      this.queryVersionCode() // 版本条件筛选
      this.queryfamily1() // family1条件筛选
      this.queryfamily2() // family2条件筛选
      this.querymonths() // months条件筛选
    }, 3000)
  },
  methods: {
    drawStackCommit1 () {
      var option = {
        title: {
          text: 'PSD vs Commit Gap分析',
          top: 0,
          left: 'left',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 30
          },
          {
            type: 'inside',
            start: 0,
            end: 30
          }
        ],
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          data: ['本周PSD gap', '下周PSD gap', '隔周PSD gap'],
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
            // axisLabel: {
            //   interval: 0,
            //   rotate: 25,
            //   margin: 2
            // },
            data: ['拯救者Y7000', '拯救者Y7001', '拯救者Y7002', '拯救者Y7003', '拯救者Y7004', '拯救者Y7005', '拯救者Y7006']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '本周PSD gap',
            type: 'bar',
            data: [-320, -332, -301, -334, -390, 330, 320]
          },
          {
            name: '下周PSD gap',
            type: 'bar',
            data: [120, -132, -101, -134, -90, 230, 210]
          },
          {
            name: '隔周PSD gap',
            type: 'bar',
            data: [220, -182, 191, -234, -290, 330, -310]
          }
        ]
      }
      let stackCommit = echarts.init(this.$refs.stackCommit1)
      stackCommit.setOption(option)
    },
    drawStackCommit2 () {
      let bcBySeriesIndex = ['本版分周Commit摆放', '本版分周Commit摆放', '本版分周Commit摆放', '本版分周Commit摆放', '本版分周Commit摆放', '当天最新的PSD分周情况', '当天最新的PSD分周情况', '当天最新的PSD分周情况', '当天最新的PSD分周情况', '当天最新的PSD分周情况', '当天最新的RSD分周情况', '当天最新的RSD分周情况', '当天最新的RSD分周情况', '当天最新的RSD分周情况', '当天最新的RSD分周情况']
      var option = {
        title: {
          text: 'PSD vs Commit 分析',
          top: 0,
          left: '10%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        color: ['#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
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
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var html = []
            var category = {}
            echarts.util.each(params, function (param) {
              var catName = param.seriesName
              var bc = bcBySeriesIndex[param.seriesIndex]
              if (!category[catName]) {
                category[catName] = {}
              }
              category[catName][bc] = param.value
            })
            console.log(category)
            echarts.util.each(category, function (cate, key) {
              html.push(
                '<tr>',
                '<td>', key, '</td>',
                '<td>', cate.本版分周Commit摆放, '</td>',
                '<td>', cate.当天最新的PSD分周情况, '</td>',
                '<td>', cate.当天最新的RSD分周情况, '</td>',
                '</tr>'
              )
            })
            return '<table border=1 style="text-align:center;"><tbody>' + '<tr><td></td><td>本版分周Commit摆放</td><td>当天最新的PSD分周情况</td><td>当天最新的RSD分周情况</td></tr>' + html.join('') + '</tbody></table>'
          }
        },
        legend: {
          data: ['W1', 'W2', 'W3', 'W4', 'W5']
        },
        xAxis: [
          {
            type: 'category',
            data: ['拯救者Y7000', '拯救者Y7001', '拯救者Y7002', '拯救者Y7003', '拯救者Y7004', '拯救者Y7005', '拯救者Y7005']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'W1',
            type: 'bar',
            stack: '本版分周Commit摆放',
            data: [201, 321, 312, 343, 900, 300, 200]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: '本版分周Commit摆放',
            data: [120, 32, 101, 134, 90, 230, 210]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: '本版分周Commit摆放',
            data: [220, 182, 11, 234, 290, 330, 310]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: '本版分周Commit摆放',
            data: [150, 232, 21, 154, 190, 330, 410]
          },
          {
            name: 'W5',
            type: 'bar',
            stack: '本版分周Commit摆放',
            data: [862, 18, 964, 1026, 1679, 1600, 170]
          },
          {
            name: 'W1',
            type: 'bar',
            stack: '当天最新的PSD分周情况',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: '当天最新的PSD分周情况',
            data: [120, 132, 101, 134, 10, 230, 210]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: '当天最新的PSD分周情况',
            data: [220, 182, 11, 234, 290, 330, 310]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: '当天最新的PSD分周情况',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'W5',
            type: 'bar',
            stack: '当天最新的PSD分周情况',
            data: [862, 108, 964, 1026, 1679, 1600, 1570]
          },
          {
            name: 'W1',
            type: 'bar',
            stack: '当天最新的RSD分周情况',
            data: [320, 32, 301, 334, 390, 330, 320]
          },
          {
            name: 'W2',
            type: 'bar',
            stack: '当天最新的RSD分周情况',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'W3',
            type: 'bar',
            stack: '当天最新的RSD分周情况',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'W4',
            type: 'bar',
            stack: '当天最新的RSD分周情况',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'W5',
            type: 'bar',
            stack: '当天最新的RSD分周情况',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570]
          }
        ]
      }
      let stackCommit = echarts.init(this.$refs.stackCommit2)
      stackCommit.setOption(option)
    },
    drawStackCommit3 () {
      var option = {
        title: {
          text: 'Commit周匹配度分析',
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
          }
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        color: ['#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
        legend: {
          data: ['全月可分', '累计来单', '有效订单', '日供应', '累计确认'],
          right: '30%'
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 80
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 80
          }
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false,
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: {type: 'value'},
        series: [
          {
            name: '全月可分',
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '累计来单',
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '日供应',
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '累计确认',
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '有效订单',
            type: 'line',
            stack: '总量',
            smooth: true,
            areaStyle: {normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      let stackCommit = echarts.init(this.$refs.stackCommit3)
      stackCommit.setOption(option)
    },
    onSubmit (form) {
      console.log('submit!')
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    validParams () {
      var dimValue = '' // 判断选择维度的value值
      let params = {} // 判断参数是否为空
      if (this.form.dimension === '产品细分') {
        dimValue = '产品细分_CONNB'
      }
      if (this.form.dimension === '价位段') {
        dimValue = '价位段'
      }
      if (this.form.dimension === 'Family1') {
        dimValue = 'Family1'
      }
      if (this.form.dimension === 'Family2') {
        dimValue = 'Family2'
      }
      if (this.form.dimension === 'Cv值') {
        dimValue = 'Cv值'
      }
      if (this.form.preversion !== '') {
        params['version'] = this.form.preversion
      }
      if (this.form.Family1.join() !== '') {
        params['family1'] = this.form.Family1
      }
      if (this.form.Family2.join() !== '') {
        params['family2'] = this.form.Family2
      }
      if (this.form.productsegment.join() !== '') {
        params['productsegment'] = this.form.productsegment
      }
      if (this.form.price.join() !== '') {
        params['pricesegment'] = this.form.price
      }
      if (this.form.materialcode !== '') {
        params['pn'] = this.form.materialcode
      }
      params['dimKey'] = this.form.dimension
      params['dimValue'] = dimValue
      return params
    },
    getQuerydata () { // 获取查询条件（公用接口）
      let vm = this
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': '产品细分_CONNB,价位段,Commit_Issue_ConNB'
        },
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === '产品细分_CONNB') {
              vm.productsegments = data[i]
            }
            if (data[i].value === '价位段') {
              vm.prices = data[i]
            }
            if (data[i].value === 'Commit_Issue_ConNB') {
              vm.businessissues = data[i]
            }
          }
          vm.form.dimension = vm.dimensions[0]
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    queryVersionCode () { // 版本预测筛选条件的数据
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_Commit_TTL'
      params['obj0'] = 'version'
      params['orderType'] = 1 // 倒叙排列
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.preversions = data
          let current = vm.preversions[0]
          vm.form.preversion = current
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    querymonths () { // 版本预测筛选条件的数据
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_TTL'
      params['obj0'] = '月份'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.months = data
          // let current = vm.preversions[0]
          // vm.form.preversion = current
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    queryfamily1 () { // family1筛选条件的数据
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_Query_Overview_Base_TTL'
      params['obj0'] = 'Family1'
      if (Array.isArray(this.form.productsegment) && this.form.productsegment.length !== 0) {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.productsegment
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.Family1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    queryfamily2 (show) { // family2筛选条件的数据
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_Query_Overview_Base_TTL'
      params['obj0'] = 'Family2'
      if (Array.isArray(this.form.productsegment) && this.form.productsegment.length !== 0) {
        params['objk1'] = '产品细分'
        params['objv1'] = this.form.productsegment
      }
      if (Array.isArray(this.form.Family1) && this.form.Family1.length !== 0) {
        params['objk1'] = 'Family1'
        params['objv1'] = this.form.Family1
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.Family2s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    judgeNegative () { // 判断表里的负值
      var tdlist = document.getElementsByClassName('tableCommit')[0].getElementsByTagName('td')
      for (var i = 0; i < tdlist.length; i++) {
        // alert(list[i].innerText)
        if (tdlist[i].innerText < 0) {
          tdlist[i].style.color = 'red'
        }
      }
    },
    headerRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px',
        height: '35px'
      }
    },
    tableRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px'
      }
    },
    handleClick (row) { // 根据选择的family不同，展示rollinggap图
      this.defwaterFallFamily = row.Family
      this.waterfallgraph()
    },
    boardData () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 5
        },
        done (data) {
          vm.QData = data.Q
          vm.M1Data = data.M1
          vm.M2Data = data.M2
          vm.M3Data = data.M3
          vm.CAData = data.CA
          vm.QTitle = vm.QData.name
          vm.M1Title = vm.M1Data.name
          vm.M2Title = vm.M2Data.name
          vm.M3Title = vm.M3Data.name
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    toggleList () {
      let addgrid = document.getElementsByClassName('gridBox')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
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
    toggleListGird () {
      this.toggleList()
      this.overviewTable()
    },
    toggleListDetail () {
      let tableWrap = document.getElementsByClassName('tableWrap')[0]
      if (this.toggle1) {
        tableWrap.style.display = 'none'
      } else {
        tableWrap.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleListDetailChart () {
      let commitDetail = document.getElementsByClassName('commitDetail')[0]
      if (this.toggleCommit) {
        commitDetail.style.display = 'none'
      } else {
        commitDetail.style.display = 'block'
      }
      this.toggleCommit = !this.toggleCommit
    },
    toggleListQgap () {
      let chartBoxQ = document.getElementsByClassName('chartBoxQ')[0]
      if (this.toggleQgap) {
        chartBoxQ.style.display = 'none'
      } else {
        chartBoxQ.style.display = 'block'
      }
      this.toggleQgap = !this.toggleQgap
    },
    toggleListQgapBtn () {
      this.toggleListQgap()
      this.stackChartQgap()
      this.barChartQgap()
    },
    toggleListM1gap () {
      let chartBoxM1 = document.getElementsByClassName('chartBoxM1')[0]
      if (this.toggleM1gap) {
        chartBoxM1.style.display = 'none'
      } else {
        chartBoxM1.style.display = 'block'
      }
      this.toggleM1gap = !this.toggleM1gap
    },
    toggleListM1gapBtn () {
      this.toggleListM1gap()
      this.stackChartM1gap()
      this.barChartM1gap()
    },
    toggleListM2gap () {
      let chartBoxM2 = document.getElementsByClassName('chartBoxM2')[0]
      if (this.toggleM2gap) {
        chartBoxM2.style.display = 'none'
      } else {
        chartBoxM2.style.display = 'block'
      }
      this.toggleM2gap = !this.toggleM2gap
    },
    toggleListM2gapBtn () {
      this.toggleListM2gap()
      this.stackChartM2gap()
      this.barChartM2gap()
    },
    toggleListM3gap () {
      let chartBoxM3 = document.getElementsByClassName('chartBoxM3')[0]
      if (this.toggleM3gap) {
        chartBoxM3.style.display = 'none'
      } else {
        chartBoxM3.style.display = 'block'
      }
      this.toggleM3gap = !this.toggleM3gap
    },
    toggleListM3gapBtn () {
      this.toggleListM3gap()
      this.stackChartM3gap()
      this.barChartM3gap()
    },
    toggleListrolgap () {
      let rollingBox = document.getElementsByClassName('rollingBox')[0]
      if (this.togglerolgap) {
        rollingBox.style.display = 'none'
      } else {
        rollingBox.style.display = 'block'
      }
      this.togglerolgap = !this.togglerolgap
    },
    toggleListrolgapBtn () {
      this.waterfallgraph()
      this.toggleListrolgap()
    },
    overviewTable () {
      let vm = this
      let columnsList = [
        {title: '制造工厂', field: '制造工厂', width: '100px', locked: true},
        {title: 'Family', field: 'Family', width: '100px', locked: false},
        {
          title: '季度',
          columns: [
            {title: '-8W FCST', field: 'Q -8W FCST', width: '100px'},
            {title: '-4W FCST', field: 'Q -4W FCST', width: '100px'},
            {title: 'LAST FCST', field: 'Q LAST FCST', width: '100px'},
            {title: 'FCST', field: 'Q FCST', width: '100px'},
            {title: 'Commit', field: 'Q Commit', width: '100px'},
            {title: 'Gap', field: 'Q Gap', width: '100px'},
            {title: 'Gap Reason', field: 'Q Gap Reason', width: '100px'}
          ]
        },
        {
          title: 'CA',
          columns: [
            {
              title: '-M1 CA',
              field: '-M1 CA',
              width: '100px'
            },
            {
              title: '-M2 CA',
              field: '-M2 CA',
              width: '100px'
            }
          ]
        },
        {
          title: vm.M1Title,
          columns: [
            {title: '-8W FCST', width: '100px', field: 'M1 -8W FCST'},
            {title: '-4W FCST', width: '100px', field: 'M1 -4W FCST'},
            {title: 'LAST FCST', width: '100px', field: 'M1 LAST FCST'},
            {title: 'FCST', width: '100px', field: 'M1 FCST'},
            {title: 'Commit', width: '100px', field: 'M1 Commit'},
            {title: 'Gap', width: '100px', field: 'M1 Gap'},
            {title: 'Rolling Gap', width: '100px', field: 'M1 Rolling Gap'},
            {title: 'Gap Reason', width: '100px', field: 'M1 Gap Reason'}
          ]
        },
        {
          title: vm.M2Title,
          columns: [
            {title: '-8W FCST', width: '100px', field: 'M2 -8W FCST'},
            {title: '-4W FCST', width: '100px', field: 'M2 -4W FCST'},
            {title: 'LAST FCST', width: '100px', field: 'M2 LAST FCST'},
            {title: 'FCST', width: '100px', field: 'M2 FCST'},
            {title: 'Commit', width: '100px', field: 'M2 Commit'},
            {title: 'Gap', width: '100px', field: 'M2 Gap'},
            {title: 'Rolling Gap', width: '100px', field: 'M2 Rolling Gap'},
            {title: 'Gap Reason', width: '100px', field: 'M2 Gap Reason'}
          ]
        },
        {
          title: vm.M3Title,
          columns: [
            {title: '-8W FCST', width: '100px', field: 'M3 -8W FCST'},
            {title: '-4W FCST', width: '100px', field: 'M3 -4W FCST'},
            {title: 'LAST FCST', width: '100px', field: 'M3 LAST FCST'},
            {title: 'FCST', width: '100px', field: 'M3 FCST'},
            {title: 'Commit', width: '100px', field: 'M3 Commit'},
            {title: 'Gap', width: '100px', field: 'M3 Gap'},
            {title: 'Rolling Gap', width: '100px', field: 'M3 Rolling Gap'},
            {title: 'Gap Reason', width: '100px', field: 'M3 Gap Reason'}
          ]
        }
      ]
      columnsList = columnsList.map((item) => {
        if (item.columns) {
          item.columns = item.columns.map((obj) => {
            // console.log(obj)
            return {
              title: obj.title,
              field: ('' + obj.field).replace(/\s|\\|\/|\(|（|）|\)|<|>|#|\.|-/g, '_'),
              width: '100px'
            }
          })
          // console.log(item.columns)
          return {
            title: item.title,
            columns: item.columns
          }
        } else {
          return {
            title: item.title,
            field: ('' + item.field).replace(/\s|\\|\/|\(|（|）|\)|<|>|#|\.|-/g, '_'),
            width: '100px'
          }
        }
      })
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 4
        },
        done (data) {
          let newdataSource = [].concat(data).map((item) => {
            let newItem = {}
            for (var key in item) {
              newItem[('' + key).replace(/\s|\\|\/|\(|（|）|\)|<|>|#|\.|-/g, '_')] = item[key]
            }
            return newItem
          })
          $('#grid').kendoGrid({
            toolbar: ['excel'],
            sortable: true,
            columnMenu: true,
            filterable: true,
            resizable: true,
            scrollable: true,
            pageable: {
              pageSize: 15,
              numeric: true
            },
            columns: columnsList,
            dataSource: newdataSource,
            // scrollable: true,
            excel: {
              fileName: 'Overview.xlsx',
              allPages: true
            }
          })
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    barChartQgap () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 1,
          type: 'Q'
        },
        done (data) {
          let barChart = echarts.init(vm.$refs.barChart)
          barChart.showLoading()
          let yAxisData = data.jsonyAxis
          let legendData = data.legend
          let seriesData = data.series
          let titleData = data.title.slice()
          // yAxisData = yAxisData.map(element => {
          //   return element.slice(0, 20)
          // })
          var option = {
            title: {
              text: titleData,
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            legend: {
              data: legendData,
              left: '20%'
            },
            grid: {
              left: 0,
              right: '4%',
              // bottom: '15%',
              containLabel: true
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 30
              },
              {
                type: 'inside',
                start: 0,
                end: 30
              }
            ],
            xAxis: [
              {
                type: 'category',
                axisTick: {show: true},
                axisLabel: {
                  interval: 0,
                  rotate: 25,
                  margin: 2
                },
                data: yAxisData
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: seriesData
          }
          barChart.hideLoading()
          barChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    stackChartQgap () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 2,
          type: 'Q'
        },
        done (data) {
          let stackChart = echarts.init(vm.$refs.stackChart)
          stackChart.showLoading()
          let yAxisData = data.jsonyAxis
          let legendData = data.legend
          let titleData = data.title
          let seriesData = data.series
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].barWidth = '35px'
          }
          var option = {
            title: {
              text: titleData,
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
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
            legend: {
              data: legendData,
              left: '20%'
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
            grid: {
              left: '3%',
              right: '4%',
              top: '15%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: yAxisData,
              axisLabel: {
                interval: 0,
                rotate: 8,
                margin: 2
              }
            },
            yAxis: {
              type: 'value',
              inverse: true
            },
            series: seriesData
          }
          stackChart.hideLoading()
          stackChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    barChartM1gap () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 1,
          type: 'M1'
        },
        done (data) {
          let yAxisData = data.jsonyAxis
          let legendData = data.legend
          let seriesData = data.series
          let titleData = data.title
          yAxisData = yAxisData.map(element => {
            return element.slice(0, 20)
          })
          var option = {
            title: {
              text: titleData,
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
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
            legend: {
              data: legendData,
              left: '20%'
            },
            grid: {
              left: 0,
              right: '4%',
              containLabel: true
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 30
              },
              {
                type: 'inside',
                start: 0,
                end: 30
              }
            ],
            xAxis: [
              {
                type: 'category',
                axisTick: {show: true},
                axisLabel: {
                  interval: 0,
                  rotate: 25,
                  margin: 2
                },
                data: yAxisData
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: seriesData
          }
          let barChart = echarts.init(vm.$refs.barChartM1)
          barChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    stackChartM1gap () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 2,
          type: 'M1'
        },
        done (data) {
          let yAxisData = data.jsonyAxis
          let legendData = data.legend
          let titleData = data.title
          let seriesData = data.series
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].barWidth = '35px'
          }
          var option = {
            title: {
              text: titleData,
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
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
              data: legendData,
              left: '20%'
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
            grid: {
              left: '3%',
              right: '4%',
              top: '15%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: yAxisData,
              axisLabel: {
                interval: 0,
                rotate: 8,
                margin: 2
              }
            },
            yAxis: {
              type: 'value',
              inverse: true
            },
            series: seriesData
          }
          let stackChart = echarts.init(vm.$refs.stackChartM1)
          stackChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    barChartM2gap () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 1,
          type: 'M2'
        },
        done (data) {
          let yAxisData = data.jsonyAxis
          let legendData = data.legend
          let titleData = data.title
          yAxisData = yAxisData.map(element => {
            return element.slice(0, 20)
          })
          let seriesData = data.series
          var option = {
            title: {
              text: titleData,
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
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
            legend: {
              data: legendData,
              left: '20%'
            },
            grid: {
              left: 0,
              right: '4%',
              containLabel: true
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 30
              },
              {
                type: 'inside',
                start: 0,
                end: 30
              }
            ],
            xAxis: [
              {
                type: 'category',
                axisTick: {show: true},
                axisLabel: {
                  interval: 0,
                  rotate: 25,
                  margin: 2
                },
                data: yAxisData
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: seriesData
          }
          let barChart = echarts.init(vm.$refs.barChartM2)
          barChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    stackChartM2gap () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 2,
          type: 'M2'
        },
        done (data) {
          let yAxisData = data.jsonyAxis
          let legendData = data.legend
          let titleData = data.title
          // yAxisData = yAxisData.map(element => {
          //   return element.slice(0, 20)
          // })
          // console.log(yAxisData)
          let seriesData = data.series
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].barWidth = '35px'
          }
          var option = {
            title: {
              text: titleData,
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
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
            legend: {
              data: legendData,
              left: '20%'
            },
            grid: {
              left: '3%',
              right: '4%',
              top: '15%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: yAxisData,
              axisLabel: {
                interval: 0,
                rotate: 8,
                margin: 2
              }
            },
            yAxis: {
              type: 'value',
              inverse: true
            },
            series: seriesData
          }
          let stackChart = echarts.init(vm.$refs.stackChartM2)
          stackChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    barChartM3gap () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 1,
          type: 'M3'
        },
        done (data) {
          let yAxisData = data.jsonyAxis
          let legendData = data.legend
          let titleData = data.title
          yAxisData = yAxisData.map(element => {
            return element.slice(0, 20)
          })
          let seriesData = data.series
          var option = {
            title: {
              text: titleData,
              textStyle: {
                fontSize: 14,
                color: '#333'
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
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            color: ['#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2', '#ffd11c', '#f94e6e'],
            legend: {
              data: legendData,
              left: '20%'
            },
            grid: {
              left: 0,
              right: '4%',
              containLabel: true
            },
            dataZoom: [
              {
                show: true,
                start: 0,
                end: 30
              },
              {
                type: 'inside',
                start: 0,
                end: 30
              }
            ],
            xAxis: [
              {
                type: 'category',
                axisTick: {show: true},
                axisLabel: {
                  interval: 0,
                  rotate: 25,
                  margin: 2
                },
                data: yAxisData
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: seriesData
          }
          let barChart = echarts.init(vm.$refs.barChartM3)
          barChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    stackChartM3gap () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 2,
          type: 'M3'
        },
        done (data) {
          let yAxisData = data.jsonyAxis
          let legendData = data.legend
          let titleData = data.title
          let seriesData = data.series
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].barWidth = '35px'
          }
          var option = {
            title: {
              text: titleData,
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
            color: ['#f94e6e', '#c2df47', '#22a4e2', '#ff9934', '#ffd11c', '#bfbec4', '#9BBB59', '#9CDCF0', '#F79646', '#DCE6F2'],
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
              data: legendData,
              left: '20%'
            },
            grid: {
              left: '3%',
              right: '4%',
              top: '15%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: yAxisData,
              axisLabel: {
                interval: 0,
                rotate: 8,
                margin: 2
              }
            },
            yAxis: {
              type: 'value',
              inverse: true
            },
            series: seriesData
          }
          let stackChart = echarts.init(vm.$refs.stackChartM3)
          stackChart.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    waterfallTable () { // 瀑布图表格数据
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 6
        },
        done (data) {
          vm.waterM1 = vm.M1Title + 'Gap'
          vm.waterM2 = vm.M2Title + 'Gap'
          vm.waterM3 = vm.M3Title + 'Gap'
          vm.tableArr = data
          vm.defwaterFallFamily = vm.tableArr[0].Family
          // console.log(vm.waterM1)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    waterfallgraph () { // 瀑布图 Rolling Gap图
      let vm = this
      vm.$ajax({
        url: '/getFcstCommit',
        method: 'get',
        params: {
          style: 3,
          family: vm.defwaterFallFamily // 默认显示第一个family
        },
        done (data) {
          let waterfallgraph = echarts.init(vm.$refs.waterfallgraph)
          waterfallgraph.showLoading()
          let yAxisData = data.jsonyAxis
          // let legendData = data.legend
          let seriesData = data.series
          let titleData = data.title
          // for (var i = 0; i < seriesData.length; i++) {
          //   seriesData[i].label = {
          //     normal: {show: true, position: 'inside'}
          //   }
          // }
          waterfallgraph.hideLoading()
          var option = {
            title: {
              text: titleData,
              left: 'center',
              textStyle: {
                fontSize: 14,
                color: '#333'
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
            color: ['#F79646'],
            grid: {
              left: '10%',
              right: '10%'
            },
            xAxis: [
              {
                type: 'category',
                data: yAxisData
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: seriesData
          }
          waterfallgraph.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    CommitDetailChart () { // CommitDetail
      let vm = this
      vm.$ajax({
        url: '/getFcstCommitDetail',
        method: 'get',
        params: {
          style: 1
        },
        done (data) {
          let yAxisData = data.jsonyAxis
          let legendData = data.legend
          let seriesData = data.series
          for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].barWidth = '28px'
            seriesData[i].type = 'bar'
            seriesData[i].barGap = 0
            seriesData[i].label = {
              normal: {
                show: true,
                position: 'insideTop'
              }
            }
          }
          var option = {
            title: {
              text: 'FCST Commit Detail',
              textStyle: {
                fontSize: 14,
                color: '#333'
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
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
            legend: {
              data: legendData
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '10%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: yAxisData
            },
            yAxis: {
              type: 'value',
              boundaryGap: [0, 0.01]
            },
            series: seriesData
          }
          let dynamicgraph = echarts.init(vm.$refs.dynamicgraph)
          dynamicgraph.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    commitChange () {
      let vm = this
      vm.$ajax({
        url: '/getFcstCommitDetail',
        method: 'get',
        params: {
          style: 2
        },
        done (data) {
          let xAxisData = data.xAxis
          let legendData = data.legend
          let seriesData = data.series
          for (var i = 0; i < seriesData.length; i++) {
            // seriesData[i].barWidth = '30px'
            seriesData[i].barGap = 0
            // seriesData[i].label = {
            //   normal: {
            //     show: true,
            //     position: 'insideTop'
            //   }
            // }
          }
          var option = {
            title: {
              text: 'Fcst Commit Change',
              left: 'center',
              textStyle: {
                fontSize: 14
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: legendData,
              left: 'center',
              top: 30
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
            grid: {
              left: '6%',
              right: '4%',
              top: 80,
              bottom: '15%'
            },
            xAxis: {
              type: 'category',
              data: xAxisData
            },
            yAxis: {
              type: 'value'
            },
            series: seriesData
          }
          let commitvary = echarts.init(vm.$refs.commitvary)
          commitvary.setOption(option)
        },
        fail (msg) {
          alert(msg)
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fcst-commit
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 0 !important
  .fcstItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      display none
      &:nth-child(1)
        display block
      .shortline
        display inline-block
        width 10px
        height 40px
        line-height 40px
        margin-right 10px
        text-align center
      .el-form-item
        margin-bottom 0 !important
      .el-select, .el-input
        width 160px !important
      .betweeninput
        width 76px !important
      .wood
        width 100%
        height auto
        margin-top 10px
        overflow hidden
        .wooditem
          width 100%
          height auto
          overflow hidden
          ul
            width auto
            height 80px
            margin 0 10px 15px 0
            float left
            border-left 1px solid #71893F
            li
              width 84px
              height 80px
              float left
              text-align center
              border 1px solid #71893F
              border-left 0
              &:nth-child(1)
                background #DCE6F2
              &:nth-child(2)
                background #9CDCF0
              &:nth-child(3)
                background #9BBB59
              &:nth-child(4)
                background #F79646
              h4
                width 100%
                height 30px
                line-height 30px
                font-size 12px
              i
                text-align right
                width 100%
                height 25px
                line-height 25px
                padding-right 5px
                display block
                font-style normal
                font-size 10px
              span
                width 100%
                height 25px
                line-height 25px
                color #fff
                display block
                font-weight bold
                font-size 12px
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
      .gridBox
        width 100%
        height auto
        overflow hidden
        #grid
          width 100%
          height auto
          margin 10px 0
          box-shadow 0 2px 8px #ccc
          overflow hidden
      .chartBox
        width 100%
        height auto
        overflow hidden
        .stackChart, .barChart
          width 1100px
          height 400px
          margin 10px auto
          display block
      .tableWrap
        width 100%
        height auto
        overflow hidden
        padding 10px
        .tableitem
          width 98%
          height auto
          float left
          border-collapse collapse
          &:last-child
            float right
          tr,td,th
            border 1px solid #ccc
          th
            height 35px
            background #eee
          td
            height 28px
      .dynamic
        width 1100px
        height 400px
        margin 10px auto
      .rollingBox
        width 100%
        height auto
        padding-top 10px
        overflow hidden
        .table-box
          width 49%
          height 380px
          float left
        .waterfallgraph
          width 49%
          height 400px
          float right
      .commitDetail
        width 100%
        height auto
        overflow hidden
        margin 10px auto
        .search-box
          width 100%
          height auto
          padding-left 10%
          margin-bottom 10px
          overflow hidden
          .searchitem
            width 26%
            height auto
            margin-right 10px
            float left
            padding 5px
            border 1px solid #ccc
            border-radius 4px
            h3
              width 100%
              height 28px
              line-height 28px
              font-weight 500
              border-bottom 1px solid #ccc
              margin-bottom 5px
            ul
              width 100%
              height 61px
              overflow auto
              li
                width 74px
                height 26px
                line-height 26px
                float left
                margin-right 5px
                margin-bottom 5px
                text-align center
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                border 1px solid #ccc
                border-radius 4px
                cursor pointer
                background #eee
                &:hover
                  background #ddd
            .searchMtm
              width 100%
              height 61px
              overflow auto
              li
                width 100%
                height 26px
                text-align left
                padding-left 10px
        .commitvary
          width 1100px
          height 400px
          margin 10px auto
</style>
