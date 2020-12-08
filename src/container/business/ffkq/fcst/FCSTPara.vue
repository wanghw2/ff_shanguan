
<template>
  <div class="fastpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <h2>KQ 预测
              <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=KQ_预测')" >模板下载</a>
              <div class="form-box">
                <upload-new
                  @on-success="updataFCSTt"
                  @updateTimeChange="updataFCSTt1"
                  :sheetsName="'KQ_预测'"
                  :tableName='"KQ_Fcst"'
                  :dbName="'FF_IDSS_Data_CON'"
                  :url="'/uploadConTransfer'"
                  :logTableName='"KQ_Fcst"'
                  :logObj="'FCSTt'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_预测'"
                :tableName='"KQ_Fcst"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'KQ_预测'"
                ref="gridFCSTt">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block">
            <h2>KQ Commit
            <a class="small" :href="serverUrl+'/downloadExcelByTN?'+encodeURI('tableName=KQ_Commit')" >模板下载</a>
              <div class="form-box">
                <upload-new
                  @on-success="updataCommit"
                  @updateTimeChange="updataCommit1"
                  :sheetsName="'KQ_Commit'"
                  :dbName="'FF_IDSS_Data_CON'"
                  :url="'/uploadExceCommitFCST'"
                  :tableName='"KQ_Commit"'
                  :logTableName='"KQ_Commit"'
                  :logObj="'upcommit'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'KQ_Commit'"
                :tableName='"KQ_Commit"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'KQ_Commit'"
                ref="gridupcommit" >
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
            <h2>KQ预测查询</h2>
            <v-table-query
              ref="fcstTtl"
              :tableName='"KQ_FCST_TTL"'
              :source="'FF_IDSS_Data_CON'"
              :sheetsName="'KQ预测查询'"
              :params='params'
              :fileName="'KQ预测查询'">
            </v-table-query>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="fcstItem">
          <div class="block">
            <el-form :inline="true" :model="form1" ref="form1" label-width="60px" size="mine" class="demo-form-inline">
              <el-form-item label="Commit版本" prop="version" label-width="100px">
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
            <h2>KQ Commit查询</h2>
            <v-table-query
              :params='params1'
              :sheetsName="'KQ_Commit查询'"
              :tableName='"KQ_Commit_TTL"'
              :source="'FF_IDSS_Data_CON'"
              :fileName="'KQ_Commit查询'"
              ref="fcstcomTtl">
            </v-table-query>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import Upload from '@/components/public/upload1'
import UploadNew from '@/components/public/upload5'
import VTable from '@/components/public/vtablePage251'
import VTableQuery from '@/components/public/vtableQuery'
// const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      tabPosition: 'left',
      menuArr: ['预测上传', 'Commit上传', '预测查询', 'Commit查询'],
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
      versions: [],
      FiscalYears: [],
      months: [],
      familys: [],
      version1s: [],
      FiscalYear1s: [],
      month1s: [],
      family1s: []
    }
  },
  components: {
    Upload,
    UploadNew,
    VTableQuery,
    VTable
  },
  created () {
    this.valieForm()
    this.valieForm1()
  },
  mounted () {
    this.$nextTick(() => {
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
        params['commitFamily'] = this.form1.family
      }
      let isnull = (JSON.stringify(params) === '{}')
      if (isnull) {
        params['init'] = 1
      }
      this.params1 = params
    },
    getQueryFamily1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'KQ_Commit_TTL'
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
      params['tableName'] = 'KQ_Commit_TTL'
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
      params['tableName'] = 'KQ_Commit_TTL'
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
      params['tableName'] = 'KQ_Commit_TTL'
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
      params['tableName'] = 'KQ_FCST_TTL'
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
      params['tableName'] = 'KQ_FCST_TTL'
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
      params['tableName'] = 'KQ_FCST_TTL'
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
      params['tableName'] = 'KQ_FCST_TTL'
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
    onSubmit () {
      this.valieForm()
      this.$nextTick(() => {
        this.$refs.fcstTtl.getColumns()
      }, 3000)
    },
    onSubmit1 () {
      this.valieForm1()
      this.$nextTick(() => {
        this.$refs.fcstcomTtl.getColumns()
      }, 3000)
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    updataFcstVersion () {
      this.$refs.gridfastversion.updateTabFun()
    },
    updataFCSTt () {
      this.$refs.gridFCSTt.updateTabFun()
    },
    updataCommit () {
      this.$refs.gridupcommit.updateTabFun()
    },
    updataFcstVersion1 () {
      this.$refs.gridfastversion.updateTimeChange()
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
.fastpara
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
    margin-bottom 5px !important
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
