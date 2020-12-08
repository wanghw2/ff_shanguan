
<template>
  <div class="offspec-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="offspecitem">
          <div class="block">
            <el-form :inline="true" :model="form" ref="form" label-width="80px" size="mine" class="demo-form-inline">
              <el-form-item label="Site" prop="site">
                <el-input v-model="form.site" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="PN" prop="pn">
                <el-input v-model="form.pn" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-input v-model="form.family" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="From SBB" prop="fromsbb">
                <el-input v-model="form.fromsbb" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="To SBB" prop="tosbb">
                <el-input v-model="form.tosbb" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="商品类型" prop="productType">
                <el-select v-model="form.productType" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productTypes"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Offspec 原因" label-width="100px" prop="offspecreason">
                <el-select v-model="form.offspecreason" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in offspecreasons"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 20px">
                <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>Offspec SBB 参数
              <div class="form-box">
                <upload
                  @on-success="updateoffsbb"
                  @updateTimeChange="updateoffsbb1"
                  :sheetsName="'Offspec_SBB_参数'"
                  :logTableName="'Think_Offspec_SBB'"
                  :logObj="'thinksbb'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Offspec_SBB_参数'"
                :tableName='"Think_Offspec_SBB"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'Offspec_SBB_参数'"
                ref="gridsbb">
              </v-table>
            </div>
            <h2>Offspec 订单审批人
              <div class="form-box">
                <upload
                  @on-success="updateordercheck"
                  @updateTimeChange="updateordercheck1"
                  :sheetsName="'Offspec_订单审批人'"
                  :logTableName="'Think_Offspec_orderapprover'"
                  :logObj="'thinkordercheck'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Offspec_订单审批人'"
                :tableName='"Think_Offspec_orderapprover"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'Offspec_订单审批人'"
                ref="gridordercheck">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="offspecitem">
          <div class="block">
            <h2>Offspec 订单上传
              <div class="form-box">
                <upload
                  @on-success="updateofforder"
                  @updateTimeChange="updateofforder1"
                  :sheetsName="'Offspec_订单上传'"
                  :logTableName="'Think_Offspec_Orderupload'"
                  :logObj="'thinkofforder'">
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Offspec_订单上传'"
                :tableName='"Think_Offspec_Orderupload"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'Offspec_订单上传'"
                ref="gridofforder">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="offspecitem">
          <div class="block">
            <el-form :inline="true" :model="formorder" ref="formorder" size="mine" class="demo-form-inline">
              <el-form-item label="Site" prop="site">
                <el-input v-model="formorder.site" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-input v-model="formorder.family" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="移除部件编号" prop="removecode">
                <el-input v-model="formorder.removecode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="加入部件编号" prop="sddcode">
                <el-input v-model="formorder.site" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="Offspec 原因" prop="offspecreason">
                <el-select v-model="formorder.offspecreason" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in offspecreasonsorder"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品类型" prop="productType">
                <el-select v-model="formorder.productType" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in productTypesorder"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="上传日期">
                <el-date-picker
                  v-model="formorder.updatetime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="Offspc编号" prop="offspccode">
                <el-input v-model="formorder.offspccode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="销售订单号" prop="saleorder">
                <el-input v-model="formorder.saleorder" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="DPMS 状态" prop="dpmsStatus">
                <el-select v-model="formorder.dpmsStatus" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in dpmsStatuss"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="当前Step" prop="nowStep">
                <el-select v-model="formorder.nowStep" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in nowSteps"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Offspc来源" prop="offspcSource">
                <el-select v-model="formorder.offspcSource" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in offspcSources"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="当前Step" prop="nowStep">
                <el-select v-model="formorder.nowStep" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in nowSteps"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="提交者姓名" prop="submitName">
                <el-input v-model="formorder.submitName" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="Open/Close" prop="openclose">
                <el-select v-model="formorder.openclose" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in opencloses"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="BPM" prop="bpm">
                <el-input v-model="formorder.bpm" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item style="margin-left: 20px">
                <el-button type="primary" size="mini" @click="onSubmit(formorder)">查询</el-button>
                <el-button @click="resetForm('formorder')" size="mini" >重置</el-button>
              </el-form-item>
              <el-form-item >
                <el-button type="primary" size="mini">查询下载</el-button>
                <el-button type="primary" size="mini">历史下载</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini">OE SBB建议/PSD</el-button>
                <el-button type="primary" size="mini">FF 审批</el-button>
                <el-button type="primary" size="mini">MO 审批</el-button>
                <el-button type="primary" size="mini">Sales 审批</el-button>
              </el-form-item>
            </el-form>
            <div class="addgrid">
              <v-table
                :sheetsName="'Offspec_订单上传'"
                :tableName='"Think_Offspec_OrderRecord"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'Offspec_订单上传'"
                ref="gridorderupload">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="offspecitem">
          <div class="block">
            <el-form :inline="true" :model="formAnalysis" ref="formAnalysis" label-width="60px" size="mine" class="demo-form-inline">
              <el-form-item label="财年" prop="FiscalYear">
                <el-select v-model="formAnalysis.FiscalYear" @visible-change="getQueryYear1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in FiscalYears"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财季" prop="Fiscalquarter">
                <el-select v-model="formAnalysis.Fiscalquarter" @visible-change="getQueryYear1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in Fiscalquarters"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month">
                <el-select v-model="formAnalysis.month" @visible-change="getQueryMonth1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit1(formAnalysis)">查询</el-button>
                <el-button @click="resetForm('formAnalysis')" size="mini" >重置</el-button>
                <el-button type="primary" size="mini">数据下载</el-button>
              </el-form-item>
            </el-form>
            <div class="addgrid">
              <v-table
                :sheetsName="'Offspec_订单分析'"
                :tableName='"Think_Offspec_OrderAnalysis"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'Offspec_订单分析'"
                ref="gridanalysis">
              </v-table>
            </div>
            <div class="chart-box" style="width:100%">
              <div class="doublepieGraph" ref="doublepieGraph" style="width:560px;height:400px;float:left"></div>
              <div class="pieGraph" ref="pieGraph" style="width:560px;height:400px;float:left"></div>
            </div>
            <div class="chart-box" style="width:100%">
              <div class="pieGraph" ref="pieGraph1" style="width:560px;height:400px;float:left"></div>
              <div class="doublepieGraph" ref="doublepieGraph1" style="width:560px;height:400px;float:left"></div>
            </div>
            <div class="dynamicchart" ref="dynamicchart" style="width:1100px;height:400px;margin: 10px auto"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="offspecitem">
          <div class="block">
            <h2>Think_OE 反馈SBB 推送明细
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
            </h2>
            <div class="box1">
              <template>
                <el-table
                  :data="tableData1.slice((currentPage1-1)*pagesize,currentPage1*pagesize)"
                  :row-style="tableRowStyle"
                  style="width: 100%">
                  <el-table-column prop="fileName" sortable width="500%" label="文件名称" class="column1">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.fileName}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="version" sortable label="数据截止时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="lastUpdateTime" sortable label="文件更新时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="ROWS" sortable label="订单行数" class="column1">
                  </el-table-column>
                </el-table>
              </template>
              <el-pagination
                background
                class="pagein"
                @size-change="handleSizeChange1"
                @current-change="handleCurrentChange1"
                :current-page="currentPage1"
                :page-size="pagesize"
                layout="prev, pager, next"
                :total="tableData1.length">
              </el-pagination>
            </div>
            <h2>Think_FF 推送明细
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="box2">
              <template>
                <el-table
                  :data="tableData2.slice((currentPage2-1)*pagesize,currentPage2*pagesize)"
                  :row-style="tableRowStyle"
                  style="width: 100%">
                  <el-table-column prop="fileName" sortable width="500%" label="文件名称" class="column1">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.fileName}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="version" sortable label="数据截止时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="lastUpdateTime" sortable label="文件更新时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="ROWS" sortable label="订单行数" class="column1">
                  </el-table-column>
                </el-table>
              </template>
              <el-pagination
                background
                class="pagein"
                @size-change="handleSizeChange2"
                @current-change="handleCurrentChange2"
                :current-page="currentPage2"
                :page-size="pagesize"
                layout="prev, pager, next"
                :total="tableData2.length">
              </el-pagination>
            </div>
            <h2>Think_MO 推送明细
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
            </h2>
            <div class="box3">
              <template>
                <el-table
                  :data="tableData3.slice((currentPage3-1)*pagesize,currentPage3*pagesize)"
                  :row-style="tableRowStyle"
                  style="width: 100%">
                  <el-table-column prop="fileName" sortable width="500%" label="文件名称" class="column1">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.fileName}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="version" sortable label="数据截止时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="lastUpdateTime" sortable label="文件更新时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="ROWS" sortable label="订单行数" class="column1">
                  </el-table-column>
                </el-table>
              </template>
              <el-pagination
                background
                class="pagein"
                @size-change="handleSizeChange3"
                @current-change="handleCurrentChange3"
                :current-page="currentPage3"
                :page-size="pagesize"
                layout="prev, pager, next"
                :total="tableData3.length">
              </el-pagination>
            </div>
            <h2>Think_Sales推送明细
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
            </h2>
            <div class="box4">
              <template>
                <el-table
                  :data="tableData4.slice((currentPage4-1)*pagesize,currentPage4*pagesize)"
                  :row-style="tableRowStyle"
                  style="width: 100%">
                  <el-table-column prop="fileName" sortable width="500%" label="文件名称" class="column1">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.fileName}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="version" sortable label="数据截止时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="lastUpdateTime" sortable label="文件更新时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="ROWS" sortable label="订单行数" class="column1">
                  </el-table-column>
                </el-table>
              </template>
              <el-pagination
                background
                class="pagein"
                @size-change="handleSizeChange4"
                @current-change="handleCurrentChange4"
                :current-page="currentPage4"
                :page-size="pagesize"
                layout="prev, pager, next"
                :total="tableData4.length">
              </el-pagination>
            </div>
            <h2>Think_FF 提交OE 推送明细
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
            </h2>
            <div class="box5">
              <template>
                <el-table
                  :data="tableData5.slice((currentPage5-1)*pagesize,currentPage5*pagesize)"
                  :row-style="tableRowStyle"
                  style="width: 100%">
                  <el-table-column prop="fileName" sortable width="500%" label="文件名称" class="column1">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.fileName}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="version" sortable label="数据截止时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="lastUpdateTime" sortable label="文件更新时间" class="column1">
                  </el-table-column>
                  <el-table-column prop="ROWS" sortable label="订单行数" class="column1">
                  </el-table-column>
                </el-table>
              </template>
              <el-pagination
                background
                class="pagein"
                @size-change="handleSizeChange5"
                @current-change="handleCurrentChange5"
                :current-page="currentPage5"
                :page-size="pagesize"
                layout="prev, pager, next"
                :total="tableData5.length">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
import VTableQuery from '@/components/public/vtableQuery'
import echarts from 'echarts'
const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['Offspec SBB 参数', 'Offspec 订单上传', 'Offspec 订单查询', 'Offspec 订单分析', 'Offspc 推送明细'],
      params: {},
      params1: {},
      columnsList: [],
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      currentPage1: 1,
      pagesize: 10,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
      currentPage5: 1,
      url: '',
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5: [],
      form: {
        productType: [],
        offspecreason: [],
        site: '',
        pn: '',
        family: '',
        fromsbb: '',
        tosbb: '',
        materialcode: ''
      },
      productTypes: [],
      offspecreasons: [],
      formorder: { // 订单查询
        site: '',
        family: '',
        addcode: '',
        removecode: '',
        bpm: '',
        submitName: '',
        saleorder: '',
        offspccode: '',
        updatetime: '',
        nowStep: [],
        openclose: [],
        offspcSource: [],
        dpmsStatus: [],
        productType: [],
        offspecreason: []
      },
      opencloses: [],
      offspcSources: [],
      nowSteps: [],
      dpmsStatuss: [],
      productTypesorder: [],
      offspecreasonsorder: [],
      formAnalysis: { // 订单分析
        FiscalYear: '',
        Fiscalquarter: '',
        month: ''
      },
      Fiscalquarters: [],
      FiscalYears: [],
      months: []
    }
  },
  components: {
    Upload,
    VTable,
    VTableQuery
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.doublepieGraph()
      this.doublepieGraph1()
      this.pieGraph()
      this.pieGraph1()
      this.dynamicchart()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
    }, 3000)
  },
  methods: {
    toggleList1 () {
      let addgrid = document.getElementsByClassName('box1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('box2')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    toggleList3 () {
      let addgrid = document.getElementsByClassName('box3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('box4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('box5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
    },
    submitForm (formName) {
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleSizeChange1 (size) {
      this.pagesize = size
    },
    handleCurrentChange1 (currentPage) {
      this.currentPage1 = currentPage
    },
    handleSizeChange2 (size) {
      this.pagesize = size
    },
    handleCurrentChange2 (currentPage) {
      this.currentPage2 = currentPage
    },
    handleSizeChange3 (size) {
      this.pagesize = size
    },
    handleCurrentChange3 (currentPage) {
      this.currentPage = currentPage
    },
    handleSizeChange4 (size) {
      this.pagesize = size
    },
    handleCurrentChange4 (currentPage) {
      this.currentPage4 = currentPage
    },
    handleSizeChange5 (size) {
      this.pagesize = size
    },
    handleCurrentChange5 (currentPage) {
      this.currentPage5 = currentPage
    },
    handleClick (row) {
      let vm = this
      vm.url = row.url
      vm.$ajax({
        url: '/isFileExist',
        method: 'get',
        params: {
          url: vm.url
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
        },
        fail (msg) {
          alert('此文件不存在')
        }
      })
    },
    tableRowStyle ({row, rowIndex}) {
      return {
        fontSize: '12px'
      }
    },
    getListData1 () {
      let vm = this
      vm.$ajax({
        url: '/reportDownload',
        method: 'get',
        params: {
          'roleName': 'FF_ConNB',
          'showName': 'Think_OE_反馈SBB_推送明细',
          'time': new Date().getTime()
        },
        done (data) {
          // console.log(data)
          vm.tableData1 = [].concat(data).map((item) => {
            return {
              url: item.url,
              version: item.version,
              ROWS: item.ROWS,
              lastUpdateTime: item.lastUpdateTime,
              fileName: item.fileName
            }
          })
        }
      })
    },
    getListData2 () {
      let vm = this
      vm.$ajax({
        url: '/reportDownload',
        method: 'get',
        params: {
          'roleName': 'FF_ConNB',
          'showName': 'Think_FF_推送明细',
          'time': new Date().getTime()
        },
        done (data) {
          vm.tableData2 = [].concat(data).map((item) => {
            return {
              url: item.url,
              version: item.version,
              ROWS: item.ROWS,
              lastUpdateTime: item.lastUpdateTime,
              fileName: item.fileName
            }
          })
        }
      })
    },
    getListData3 () {
      let vm = this
      vm.$ajax({
        url: '/reportDownload',
        method: 'get',
        params: {
          'roleName': 'FF_ConNB',
          'showName': 'Think_MO_推送明细',
          'time': new Date().getTime()
        },
        done (data) {
          vm.tableData3 = [].concat(data).map((item) => {
            return {
              url: item.url,
              version: item.version,
              ROWS: item.ROWS,
              lastUpdateTime: item.lastUpdateTime,
              fileName: item.fileName
            }
          })
        }
      })
    },
    getListData4 () {
      let vm = this
      vm.$ajax({
        url: '/reportDownload',
        method: 'get',
        params: {
          'roleName': 'FF_ConNB',
          'showName': 'Think_Sales推送明细',
          'time': new Date().getTime()
        },
        done (data) {
          // console.log(data)
          vm.tableData4 = [].concat(data).map((item) => {
            return {
              url: item.url,
              version: item.version,
              ROWS: item.ROWS,
              lastUpdateTime: item.lastUpdateTime,
              fileName: item.fileName
            }
          })
        }
      })
    },
    getListData5 () {
      let vm = this
      vm.$ajax({
        url: '/reportDownload',
        method: 'get',
        params: {
          'roleName': 'FF_ConNB',
          'showName': 'Think_FF 提交OE 推送明细',
          'time': new Date().getTime()
        },
        done (data) {
          vm.tableData5 = [].concat(data).map((item) => {
            return {
              url: item.url,
              version: item.version,
              ROWS: item.ROWS,
              lastUpdateTime: item.lastUpdateTime,
              fileName: item.fileName
            }
          })
        }
      })
    },
    updateoffsbb () {
      this.$refs.gridsbb.updateTabFun()
    },
    updateoffsbb1 () {
      this.$refs.gridsbb.updateTimeChange()
    },
    updateordercheck () {
      this.$refs.gridordercheck.updateTabFun()
    },
    updateordercheck1 () {
      this.$refs.gridordercheck.updateTimeChange()
    },
    updateofforder () {
      this.$refs.gridofforder.updateTabFun()
    },
    updateofforder1 () {
      this.$refs.gridofforder.updateTimeChange()
    },
    doublepieGraph () {
      var option = {
        title: {
          text: 'Site/Family',
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
            radius: [0, '30%'],
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
            radius: ['35%', '48%'],
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
      let doublepieGraph = echarts.init(this.$refs.doublepieGraph)
      doublepieGraph.setOption(option)
    },
    pieGraph () {
      var option = {
        title: {
          text: '商品类型/Offspc 原因',
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
          // orient: 'vertical',
          right: 'center',
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
    doublepieGraph1 () {
      var option = {
        title: {
          text: 'C/V',
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
            radius: [0, '30%'],
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
            radius: ['35%', '48%'],
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
      let doublepieGraph = echarts.init(this.$refs.doublepieGraph1)
      doublepieGraph.setOption(option)
    },
    pieGraph1 () {
      var option = {
        title: {
          text: '业务类型/Customer sold to ',
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
          // orient: 'vertical',
          right: 'center',
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
      let pieGraph = echarts.init(this.$refs.pieGraph1)
      pieGraph.setOption(option)
    },
    dynamicchart () {
      let myChart = echarts.init(this.$refs.dynamicchart)
      setTimeout(function () {
        var option = {
          legend: {left: 40, top: 20},
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              [],
              ['坏品', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['BTC', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['A', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['DOA库存', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['显示器', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              name: '120D Reserve',
              data: [41.1, 30.4, 65.1, 53.3, 83.8, 98.7]
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              name: '160D Reserve',
              data: [86.5, 92.1, 85.7, 83.1, 73.4, 55.1]
            },
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                formatter: '{b}: {@2012} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
              }
            }
          ]
        }
        myChart.on('updateAxisPointer', function (event) {
          var xAxisInfo = event.axesInfo[0]
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            })
          }
        })
        myChart.setOption(option)
      })
    },
    getQueryFamily1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_Commit_TTL'
      params['obj0'] = 'Commit Family'
      if (Array.isArray(this.form1.version) && this.form1.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form1.version
      }
      if (Array.isArray(this.form1.FiscalYear) && this.form1.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form1.FiscalYear
      }
      if (Array.isArray(this.form1.month) && this.form1.month.length !== 0) {
        params['objk3'] = '财月'
        params['objv3'] = this.form1.month
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.family1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryMonth1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_Commit_TTL'
      params['obj0'] = '财月'
      if (Array.isArray(this.form1.version) && this.form1.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form1.version
      }
      if (Array.isArray(this.form1.FiscalYear) && this.form1.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form1.FiscalYear
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.month1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryYear1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_Commit_TTL'
      params['obj0'] = '财年'
      if (Array.isArray(this.form1.version) && this.form1.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form1.version
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.FiscalYear1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVersion1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_Commit_TTL'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.version1s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryFamily () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_TTL'
      params['obj0'] = 'FCST Family'
      if (Array.isArray(this.form.version) && this.form.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form.version
      }
      if (Array.isArray(this.form.FiscalYear) && this.form.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form.FiscalYear
      }
      if (Array.isArray(this.form.month) && this.form.month.length !== 0) {
        params['objk3'] = '财月'
        params['objv3'] = this.form.month
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.familys = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryMonth () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_TTL'
      params['obj0'] = '财月'
      if (Array.isArray(this.form.version) && this.form.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form.version
      }
      if (Array.isArray(this.form.FiscalYear) && this.form.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form.FiscalYear
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.months = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryYear () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_TTL'
      params['obj0'] = '财年'
      if (Array.isArray(this.form.version) && this.form.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form.version
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.FiscalYears = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVersion () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_FCST_TTL'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.versions = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    updataFCSTt () {
      this.$refs.gridFCSTt.updateTabFun()
    },
    updataCommit () {
      this.$refs.gridupcommit.updateTabFun()
    },
    updataFCSTt1 () {
      this.$refs.gridFCSTt.updateTimeChange()
    },
    updataCommit1 () {
      this.$refs.gridupcommit.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.offspec-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 5px !important
  .offspecitem
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
        .small
          margin-top 6px
          float right
          margin-left 20px
          border-radius 6px
          font-size 12px
          height 24px
          width 60px
          line-height 24px
          text-align center
          border 0
          font-size 12px
          background #6ab7fc
          color #fff
          box-sizing border-box
          &:hover
            background #4691e4
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
      .chart-box
        width 100%
        height 400px
      .box1,.box2,.box3,.box4,.box5
        overflow hidden
        padding-bottom 10px
      .pagein
        float right
        margin-top 8px
</style>
