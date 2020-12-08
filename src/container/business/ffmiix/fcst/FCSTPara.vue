
<template>
  <div class="fastpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <h2>TModel 预测
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updataTModel"
                  @updateTimeChange="updataTModel1"
                  :sheetsName="'MIIX_FCST_TModel'"
                  :dbName="'FF_IDSS_Data_Tablet'"
                  :url="'/uploadExceTabletFCST'"
                  :tableName='"MIIX_FCST_TModel"'
                  :logTableName='"MIIX_FCST_TModel"'
                  :logObj="'TModel'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'MIIX_FCST_TModel'"
                :tableName='"MIIX_FCST_TModel"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'MIIX_FCST_TModel'"
                ref="gridTModel">
              </v-table>
            </div>
            <h2>RModel 预测
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updataRModel"
                  @updateTimeChange="updataRModel1"
                  :sheetsName="'MIIX_FCST_RModel'"
                  :dbName="'FF_IDSS_Data_Tablet'"
                  :url="'/uploadExceTabletFCST'"
                  :tableName='"MIIX_FCST_RModel"'
                  :logTableName='"MIIX_FCST_RModel"'
                  :logObj="'RModel'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'MIIX_FCST_Rmodel'"
                :tableName='"MIIX_FCST_Rmodel"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'MIIX_FCST_Rmodel'"
                ref="gridRModel">
              </v-table>
            </div>
            <h2>分通路 预测
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updatapathways"
                  @updateTimeChange="updatapathways1"
                  :dbName="'FF_IDSS_Data_Tablet'"
                  :url="'/uploadExceTabletFCST'"
                  :sheetsName="'MIIX_FCST_Month'"
                  :tableName='"MIIX_FCST_Month"'
                  :logTableName='"MIIX_FCST_Month"'
                  :logObj="'pathways'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'MIIX_FCST_Month'"
                :tableName='"MIIX_FCST_Month"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'MIIX_FCST_Month'"
                ref="gridpathways">
              </v-table>
            </div>
            <h2>Smarthome 预测
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updataSmarthome"
                  @updateTimeChange="updataSmarthome1"
                  :sheetsName="'MIIX_FCST_Smarthome'"
                  :dbName="'FF_IDSS_Data_Tablet'"
                  :url="'/uploadExceTabletFCST'"
                  :tableName='"MIIX_FCST_Smarthome"'
                  :logTableName='"MIIX_FCST_Smarthome"'
                  :logObj="'Smarthome'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'MIIX_FCST_Smarthome'"
                :tableName='"MIIX_FCST_Smarthome"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'MIIX_FCST_Smarthome'"
                ref="gridSmarthome">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block">
            <h2>TModel Commit
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updataTModelCommit"
                  @updateTimeChange="updataTModelCommit1"
                  :sheetsName="'TModel_Commit'"
                  :dbName="'FF_IDSS_Data_Tablet'"
                  :url="'/uploadCommitTransfer'"
                  :tableName='"MIIX_Commit_TModel"'
                  :logTableName='"MIIX_Commit_TModel"'
                  :logObj="'TModelCommit'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'TModel_Commit'"
                :tableName='"MIIX_Commit_TModel"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'TModel_Commit'"
                ref="gridTmodelcommit" >
              </v-table>
            </div>
            <h2>RModel Commit
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'RModel_Commit'"
                :tableName='"MIIX_Commit_RModel"'
                :source="'FF_IDSS_Data_Tablet'"
                :fileName="'RModel_Commit'"
                ref="gridRmodelcommit" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form" ref="form" label-width="60px" size="mine" class="demo-form-inline">
              <el-form-item label="预测版本" prop="version" label-width="80px">
                <el-select v-model="form.version" @visible-change="getQueryVersion" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in versions"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财年" prop="FiscalYear">
                <el-select v-model="form.FiscalYear" @visible-change="getQueryYear" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in FiscalYears"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month">
                <el-select v-model="form.month" @visible-change="getQueryMonth" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="form.family" @visible-change="getQueryFamily" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in familys"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="materialcode" label-width="80px">
                <el-input v-model="form.materialcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
                <el-button @click="resetForm('form')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>预测 TModel查询</h2>
            <v-table-query
              ref="fcstTTtl"
              :tableName='"MIIX_FCST_TModel_TTL"'
              :source="'FF_IDSS_Data_Tablet'"
              :sheetsName="'MIIX_预测_TModel查询'"
              :params='params'
              :fileName="'MIIX_预测_TModel查询'">
            </v-table-query>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form1" ref="form1" label-width="60px" size="mine" class="demo-form-inline">
              <el-form-item label="预测版本" prop="version" label-width="100px">
                <el-select v-model="form1.version" @visible-change="getQueryVersion1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in version1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财年" prop="FiscalYear">
                <el-select v-model="form1.FiscalYear" @visible-change="getQueryYear1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in FiscalYear1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month">
                <el-select v-model="form1.month" @visible-change="getQueryMonth1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in month1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="form1.family" @visible-change="getQueryFamily1" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in family1s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="materialcode" label-width="80px">
                <el-input v-model="form1.materialcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit1(form1)">查询</el-button>
                <el-button @click="resetForm('form1')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>预测 RModel查询</h2>
            <v-table-query
              :params='params1'
              :sheetsName="'MIIX_预测_RModel查询'"
              :tableName='"MIIX_FCST_RModel_TTL"'
              :source="'FF_IDSS_Data_Tablet'"
              :fileName="'MIIX_预测_RModel查询'"
              ref="fcstRTtl">
            </v-table-query>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[4]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form3" ref="form3" label-width="60px" size="mine" class="demo-form-inline">
              <el-form-item label="Commit版本" prop="version" label-width="100px">
                <el-select v-model="form3.version" @visible-change="getQueryVersion3" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in version3s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财年" prop="FiscalYear">
                <el-select v-model="form3.FiscalYear" @visible-change="getQueryYear3" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in FiscalYear3s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month">
                <el-select v-model="form3.month" @visible-change="getQueryMonth3" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in month3s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="form3.family" @visible-change="getQueryFamily3" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in family3s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="materialcode" label-width="80px">
                <el-input v-model="form3.materialcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit3(form3)">查询</el-button>
                <el-button @click="resetForm('form3')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>Commit TModel查询</h2>
            <v-table-query
              ref="commitTTtl"
              :tableName='"MIIX_Commit_TModel"'
              :source="'FF_IDSS_Data_Tablet'"
              :sheetsName="'MIIX_TModel查询'"
              :params='params3'
              :fileName="'MIIX_TModel查询'">
            </v-table-query>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[5]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form4" ref="form4" label-width="60px" size="mine" class="demo-form-inline">
              <el-form-item label="Commit版本" prop="version" label-width="100px">
                <el-select v-model="form4.version" @visible-change="getQueryVersion4" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in version4s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财年" prop="FiscalYear">
                <el-select v-model="form4.FiscalYear" @visible-change="getQueryYear4" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in FiscalYear4s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month">
                <el-select v-model="form4.month" @visible-change="getQueryMonth4" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in month4s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Family" prop="family">
                <el-select v-model="form4.family" @visible-change="getQueryFamily4" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in family4s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="materialcode" label-width="80px">
                <el-input v-model="form4.materialcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="mini" @click="onSubmit4(form4)">查询</el-button>
                <el-button @click="resetForm('form4')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>Commit RModel查询</h2>
            <v-table-query
              :params='params4'
              :sheetsName="'MIIX_RModel查询'"
              :tableName='"MIIX_Commit_RModel"'
              :source="'FF_IDSS_Data_Tablet'"
              :fileName="'MIIX_RModel查询'"
              ref="commitRTtl">
            </v-table-query>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[6]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form2" ref="form2" label-width="70px" size="mine" class="demo-form-inline">
              <el-form-item label="Version" prop="version" >
                <el-select v-model="form2.version" size="mini" @visible-change="getQueryVersion2" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in version2s"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财年" prop="FiscalYear">
                <el-select v-model="form2.FiscalYear" size="mini" @visible-change="getQueryYear2" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in FiscalYears2"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财月" prop="month">
                <el-select v-model="form2.month" size="mini" @visible-change="getQueryMonth2" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in months2"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财周" prop="week">
                <el-select v-model="form2.week" size="mini" @visible-change="getQueryweek" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in weeks"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户细分" prop="cussegment">
                <el-select v-model="form2.cussegment" size="mini" @visible-change="getQuerycussegment" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in cussegments"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物料编码" prop="materialcode">
                <el-input v-model="form2.materialcode" size="mini" placeholder="请输入">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="物料类型" prop="materialType">
                <el-select v-model="form2.materialType" size="mini" @visible-change="getQuerymaterialType" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in materialTypes"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-left: 30px">
                <el-button type="primary" size="mini" @click="onSubmit2(form2)">查询</el-button>
                <el-button @click="resetForm('form2')" size="mini" >重置</el-button>
              </el-form-item>
            </el-form>
            <h2>分通路查询</h2>
            <v-table-query
              :params='params2'
              :sheetsName="'MIIX_分通路查询'"
              :tableName='"MIIX_FCST_Month_TTL"'
              :source="'FF_IDSS_Data_Tablet'"
              :fileName="'MIIX_分通路查询'"
              ref="fcstMonth">
            </v-table-query>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import UploadNew from '@/components/public/upload5'
import VTable from '@/components/public/vtable1'
import VTableQuery from '@/components/public/vtableQuery'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      menuArr: ['预测上传', 'Commit上传', '预测 TModel查询', '预测 RModel查询', 'Commit TModel查询', 'Commit RModel查询', '分通路查询'],
      params: {},
      params1: {},
      params2: {},
      params3: {},
      params4: {},
      form: {
        version: [],
        FiscalYear: [],
        month: [],
        family: [],
        materialcode: ''
      },
      form1: {
        version: [],
        FiscalYear: [],
        month: [],
        family: [],
        materialcode: ''
      },
      form3: {
        version: [],
        FiscalYear: [],
        month: [],
        family: [],
        materialcode: ''
      },
      form4: {
        version: [],
        FiscalYear: [],
        month: [],
        family: [],
        materialcode: ''
      },
      versions: [], // form 预测Tmodel
      FiscalYears: [],
      months: [],
      familys: [],
      version1s: [], // form1 预测Rmodel
      FiscalYear1s: [],
      month1s: [],
      family1s: [],
      version3s: [], // form3 commit Tmodel
      FiscalYear3s: [],
      month3s: [],
      family3s: [],
      version4s: [], // form4 commit Rmodel
      FiscalYear4s: [],
      month4s: [],
      family4s: [],
      form2: {
        version: [],
        FiscalYear: [],
        month: [],
        week: [],
        cussegment: [],
        materialcode: '',
        materialType: []
      },
      version2s: [], // form2 分通路
      FiscalYears2: [],
      months2: [],
      weeks: [],
      cussegments: [],
      materialTypes: []
    }
  },
  components: {
    Upload,
    UploadNew,
    VTableQuery,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.valieForm()
      this.valieForm1()
      this.valieForm2()
      this.valieForm3()
      this.valieForm4()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
    }, 3000)
  },
  methods: {
    valieForm () { // params参数
      let params = {}
      if (this.form.materialcode !== '') {
        params['pn'] = this.form.materialcode.replace(/ /g, ',').split(',')
      }
      if (this.form.version.join() !== '') {
        params['version'] = this.form.version
      }
      if (this.form.FiscalYear.join() !== '') {
        params['year'] = this.form.FiscalYear
      }
      if (this.form.month.join() !== '') {
        params['month'] = this.form.month
      }
      if (this.form.family.join() !== '') {
        params['fcstFamily'] = this.form.family
      }
      let isnull = (JSON.stringify(params) === '{}')
      if (isnull) {
        params['init'] = 1
      }
      this.params = params
    },
    valieForm1 () { // params参数
      let params = {}
      if (this.form1.materialcode !== '') {
        params['pn'] = this.form1.materialcode.replace(/ /g, ',').split(',')
      }
      if (this.form1.version.join() !== '') {
        params['version'] = this.form1.version
      }
      if (this.form1.FiscalYear.join() !== '') {
        params['year'] = this.form1.FiscalYear
      }
      if (this.form1.month.join() !== '') {
        params['month'] = this.form1.month
      }
      if (this.form1.family.join() !== '') {
        params['fcstFamily'] = this.form1.family
      }
      let isnull = (JSON.stringify(params) === '{}')
      if (isnull) {
        params['init'] = 1
      }
      this.params1 = params
    },
    valieForm3 () { // params参数
      let params = {}
      if (this.form3.materialcode !== '') {
        params['pn'] = this.form3.materialcode.replace(/ /g, ',').split(',')
      }
      if (this.form3.version.join() !== '') {
        params['version'] = this.form3.version
      }
      if (this.form3.FiscalYear.join() !== '') {
        params['year'] = this.form3.FiscalYear
      }
      if (this.form3.month.join() !== '') {
        params['month'] = this.form3.month
      }
      if (this.form3.family.join() !== '') {
        params['commitFamily'] = this.form3.family
      }
      let isnull = (JSON.stringify(params) === '{}')
      if (isnull) {
        params['init'] = 1
      }
      this.params3 = params
    },
    valieForm4 () { // params参数
      let params = {}
      if (this.form4.materialcode !== '') {
        params['pn'] = this.form4.materialcode.replace(/ /g, ',').split(',')
      }
      if (this.form4.version.join() !== '') {
        params['version'] = this.form4.version
      }
      if (this.form4.FiscalYear.join() !== '') {
        params['year'] = this.form4.FiscalYear
      }
      if (this.form4.month.join() !== '') {
        params['month'] = this.form4.month
      }
      if (this.form4.family.join() !== '') {
        params['commitFamily'] = this.form4.family
      }
      let isnull = (JSON.stringify(params) === '{}')
      if (isnull) {
        params['init'] = 1
      }
      this.params4 = params
    },
    valieForm2 () { // params参数
      let params = {}
      if (this.form2.materialcode !== '') {
        params['pn'] = this.form2.materialcode.replace(/ /g, ',').split(',')
      }
      if (this.form2.version.join() !== '') {
        params['version'] = this.form2.version
      }
      if (this.form2.FiscalYear.join() !== '') {
        params['year'] = this.form2.FiscalYear
      }
      if (this.form2.month.join() !== '') {
        params['month'] = this.form2.month
      }
      if (this.form2.week.join() !== '') {
        params['week'] = this.form2.week
      }
      if (this.form2.cussegment.join() !== '') {
        params['customerSegmen'] = this.form2.cussegment
      }
      if (this.form2.materialType.join() !== '') {
        params['materialType'] = this.form2.materialType
      }
      let isnull = (JSON.stringify(params) === '{}')
      if (isnull) {
        params['init'] = 1
      }
      this.params2 = params
    },
    getQueryFamily4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_Commit_RModel'
      params['obj0'] = 'Commit Family'
      if (Array.isArray(this.form4.version) && this.form4.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form4.version
      }
      if (Array.isArray(this.form4.FiscalYear) && this.form4.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form4.FiscalYear
      }
      if (Array.isArray(this.form4.month) && this.form4.month.length !== 0) {
        params['objk3'] = '财月'
        params['objv3'] = this.form4.month
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.family4s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryMonth4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_Commit_RModel'
      params['obj0'] = '财月'
      if (Array.isArray(this.form4.version) && this.form4.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form4.version
      }
      if (Array.isArray(this.form4.FiscalYear) && this.form4.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form4.FiscalYear
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.month4s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryYear4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_Commit_RModel'
      params['obj0'] = '财年'
      if (Array.isArray(this.form4.version) && this.form4.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form4.version
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.FiscalYear4s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVersion4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_Commit_RModel'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.version4s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryFamily3 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_Commit_TModel'
      params['obj0'] = 'Commit Family'
      if (Array.isArray(this.form3.version) && this.form3.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form3.version
      }
      if (Array.isArray(this.form3.FiscalYear) && this.form3.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form3.FiscalYear
      }
      if (Array.isArray(this.form3.month) && this.form3.month.length !== 0) {
        params['objk3'] = '财月'
        params['objv3'] = this.form3.month
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.family3s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryMonth3 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_Commit_TModel'
      params['obj0'] = '财月'
      if (Array.isArray(this.form3.version) && this.form3.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form3.version
      }
      if (Array.isArray(this.form3.FiscalYear) && this.form3.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form3.FiscalYear
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.month3s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryYear3 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_Commit_TModel'
      params['obj0'] = '财年'
      if (Array.isArray(this.form3.version) && this.form3.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form3.version
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.FiscalYear3s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVersion3 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_Commit_TModel'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.version3s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryFamily1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_RModel_TTL'
      params['obj0'] = 'FCST Family'
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
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_RModel_TTL'
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
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_RModel_TTL'
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
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_RModel_TTL'
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
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_TModel_TTL'
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
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_TModel_TTL'
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
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_TModel_TTL'
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
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_TModel_TTL'
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
    getQueryweek () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_Month_TTL'
      params['obj0'] = '财周'
      if (Array.isArray(this.form2.version) && this.form2.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form2.version
      }
      if (Array.isArray(this.form2.FiscalYear) && this.form2.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form2.FiscalYear
      }
      if (Array.isArray(this.form2.month) && this.form2.month.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form2.month
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.weeks = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryMonth2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_Month_TTL'
      params['obj0'] = '财月'
      if (Array.isArray(this.form2.version) && this.form2.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form2.version
      }
      if (Array.isArray(this.form2.FiscalYear) && this.form2.FiscalYear.length !== 0) {
        params['objk2'] = '财年'
        params['objv2'] = this.form2.FiscalYear
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.months2 = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryYear2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_Month_TTL'
      params['obj0'] = '财年'
      if (Array.isArray(this.form2.version) && this.form2.version.length !== 0) {
        params['objk1'] = 'Version'
        params['objv1'] = this.form2.version
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.FiscalYears2 = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVersion2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_Month_TTL'
      params['obj0'] = 'Version'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.version2s = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerymaterialType () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_Month_TTL'
      params['obj0'] = '物料类型'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.materialTypes = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerycussegment () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_Tablet'
      params['tableName'] = 'MIIX_FCST_Month_TTL'
      params['obj0'] = '客户细分'
      params['orderType'] = '1'
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cussegments = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    onSubmit () {
      this.valieForm()
      this.$nextTick(() => {
        this.$refs.fcstTTtl.getColumns()
      }, 3000)
    },
    onSubmit1 () {
      this.valieForm1()
      this.$nextTick(() => {
        this.$refs.fcstRTtl.getColumns()
      }, 3000)
    },
    onSubmit2 () {
      this.valieForm2()
      this.$nextTick(() => {
        this.$refs.fcstMonth.getColumns()
      }, 3000)
    },
    onSubmit3 () {
      this.valieForm3()
      this.$nextTick(() => {
        this.$refs.commitTTtl.getColumns()
      }, 3000)
    },
    onSubmit4 () {
      this.valieForm4()
      this.$nextTick(() => {
        this.$refs.commitRTtl.getColumns()
      }, 3000)
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
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
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
    },
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle6 = !this.toggle6
    },
    updataTModel () {
      this.$refs.gridTModel.updateTabFun()
    },
    updataTModel1 () {
      this.$refs.gridTModel.updateTimeChange()
    },
    updataRModel () {
      this.$refs.gridRModel.updateTabFun()
    },
    updataRModel1 () {
      this.$refs.gridRModel.updateTimeChange()
    },
    updatapathways () {
      this.$refs.gridpathways.updateTabFun()
    },
    updatapathways1 () {
      this.$refs.gridpathways.updateTimeChange()
    },
    updataSmarthome () {
      this.$refs.gridSmarthome.updateTabFun()
    },
    updataSmarthome1 () {
      this.$refs.gridSmarthome.updateTimeChange()
    },
    updataTModelCommit () {
      this.$refs.gridTmodelcommit.updateTabFun()
    },
    updataTModelCommit1 () {
      this.$refs.gridTmodelcommit.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fastpara
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .fcstItem
    width 100%
    height 100%
    .el-form-item
      margin-bottom 5px !important
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
</style>
