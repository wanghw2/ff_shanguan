<template>
  <div class="soPrio">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="tarItem">
          <div class="block">
            <h2>Think 急单规则
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateSoPrio1"
                  @updateTimeChange="updatesSoPrio1"
                  :logTableName="'Think_Critical_uploadrule'"
                  :sheetsName="'Think_Critical_uploadrule'"
                  :logObj="'thinkSoPrio1'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Think_Critical_uploadrule'"
                :tableName='"Think_Critical_uploadrule"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Critical_uploadrule'"
                ref="thinkSoPrio1">
              </v-table>
            </div>
            <h2>Think 急单 工厂订单原因 Owner
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateSoPrio2"
                  @updateTimeChange="updatesSoPrio2"
                  :logTableName="'Think_Critical_Reasoncode_Owner'"
                  :sheetsName="'Think_Critical_Reasoncode_Owner'"
                  :logObj="'thinkSoPrio2'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Think_Critical_Reasoncode_Owner'"
                :tableName='"Think_Critical_Reasoncode_Owner"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Critical_Reasoncode_Owner'"
                ref="thinkSoPrio2">
              </v-table>
            </div>
            <h2>Think 急单 DF Owner
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateSoPrio3"
                  @updateTimeChange="updatesSoPrio3"
                  :logTableName="'Think_Critical_DF_Owner'"
                  :sheetsName="'Think_Critical_DF_Owner'"
                  :logObj="'thinkSoPrio3'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'Think_Critical_DF_Owner'"
                :tableName='"Think_Critical_DF_Owner"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Critical_DF_Owner'"
                ref="thinkSoPrio3">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="tarItem">
          <div class="block">
            <h2>Think 急单上传 FF
              <div class="form-box">
                <upload
                  @on-success="updateSoPrio4"
                  @updateTimeChange="updatesSoPrio4"
                  :logTableName="'Think_Criticalupload_FF'"
                  :sheetsName="'Think_Criticalupload_FF'"
                  :logObj="'thinkSoPrio4'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Criticalupload_FF'"
                :tableName='"Think_Criticalupload_FF"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Criticalupload_FF'"
                ref="thinkSoPrio4">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="tarItem">
          <div class="block">
            <h2>急单查询
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
            </h2>
            <el-form :inline="true" :model="form" ref="form" label-width="88px" size="mine" class="demo-form-inline">
              <div class="addgrid4">
                <el-form-item label="急单编号" prop="CritNum" >
                  <el-input v-model="form.CritNum" size="mini" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="加急工厂" prop="Critfact" >
                  <el-select v-model="form.Critfact" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in Critfacts"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="加急机型" prop="CritMTM" >
                  <el-input v-model="form.CritMTM" size="mini" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="加急产品" prop="Critfamily" >
                  <el-select v-model="form.Critfamily" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in Critfamilys"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="加急原因" prop="Critreason" >
                  <el-select v-model="form.Critreason" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in Critreasons"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="工厂PO/SO" prop="CritFactPOSO" >
                  <el-input v-model="form.CritFactPOSO" size="mini" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="客户订单SO" prop="CritCustSO" >
                  <el-input v-model="form.CritCustSO" size="mini" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="客户分类" prop="Critcustseg" >
                  <el-select v-model="form.Critcustseg" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in Critcustsegs"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="客户名称" prop="Critcustname" >
                  <el-input v-model="form.Critcustname" size="mini" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="需求者ID" prop="CritreqID" >
                  <el-input v-model="form.CritreqID" size="mini" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="当前状态" prop="Critstatus" >
                  <el-select v-model="form.Critstatus" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in Critstatuss"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="具体状态" prop="Critdetail" >
                  <el-input v-model="form.Critdetail" size="mini" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="当前负责人" prop="Critowner" >
                  <el-input v-model="form.Critowner" size="mini" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="Think业务线" prop="Critbusline" >
                  <el-select v-model="form.Critbusline" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in Critbuslines"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="急单满足率" prop="Critperf" >
                  <el-select v-model="form.Critperf" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in Critperfs"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Open/Close" prop="Critpass" >
                  <el-select v-model="form.Critpass" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in Critpasss"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="需求日期gap" prop="Critdategap" >
                  <el-input v-model="form.Critdategap" size="mini" placeholder="请输入">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-form-item>
                <el-form-item label="订单来源" prop="Critsource" >
                  <el-select v-model="form.Critsource" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in Critsources"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="是否是BTO" prop="CritBTO" >
                  <el-select v-model="form.CritBTO" size="mini" multiple filterable collapse-tags placeholder="请选择">
                    <el-option
                      v-for="(item, index) in CritBTOs"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <div class="line">
                  <el-form-item label="加急月份" prop="Critmonth" >
                    <el-select v-model="form.Critmonth" size="mini" multiple filterable collapse-tags placeholder="请选择">
                      <el-option
                        v-for="(item, index) in Critmonths"
                        :key="index"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item  label="加急日期" prop="Crituploaddate" size="mini" >
                    <div class="block">
                      <el-date-picker
                        v-model="form.Crituploaddate"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="yyyy-MM-dd">
                      </el-date-picker>
                    </div>
                  </el-form-item>
                </div>
              </div>
              <div class="line">
                <el-form-item class="leftBtn">
                  <el-button type="primary" size="mini" @click="onSubmit()">查询</el-button>
                  <el-button @click="resetForm('form')" size="mini" >重置</el-button>
                  <el-button type="primary" size="mini">查询删除</el-button>
                  <el-button type="primary" size="mini">查询下载</el-button>
                  <el-button type="primary" size="mini">历史下载</el-button>
                </el-form-item>
                <el-form-item class="rightBtn">
                  <el-button type="primary" size="mini">FF 更新</el-button>
                  <el-button type="primary" size="mini">OE 更新</el-button>
                  <el-button type="primary" size="mini">采购更新</el-button>
                  <el-button type="primary" size="mini">质量更新</el-button>
                  <el-button type="primary" size="mini">商务更新</el-button>
                  <el-button type="primary" size="mini">物流更新</el-button>
                </el-form-item>
              </div>
            </el-form>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_急单_上传规则'"
                :tableName='"Think_Critical_uploadrule"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_急单_上传规则'"
                ref="thinkSoPrio">
              </v-table>
            </div>
            <h2>急单编号 20180107004_M 订单详情</h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_急单_上传规则'"
                :tableName='"Think_Critical_uploadrule"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_急单_上传规则'"
                ref="thinkSoPrio">
              </v-table>
            </div>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_急单_上传规则'"
                :tableName='"Think_Critical_uploadrule"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_急单_上传规则'"
                ref="thinkSoPrio">
              </v-table>
            </div>
            <h2>Action历史详情记录</h2>
            <div class="qResults-bottom">
              <div class="bottom-left">
                <div class="title">
                  <span class="orderflow">订单流</span>
                  <span class="status">状态</span>
                  <span class="length">时长</span>
                </div>
                <div class="elsteps">
                  <el-steps :active="5" direction="vertical" >
                    <div class="elstep">
                      <el-step title="签收时间" description="2017/11/10"></el-step>
                      <span class="length">1</span>
                    </div>
                    <div class="elstep">
                      <el-step title="物流发货时间" description="2017/11/10"></el-step>
                      <span class="length">1</span>
                    </div>
                    <div class="elstep">
                      <el-step title="开票时间" description="2017/11/10"></el-step>
                      <span class="length">8</span>
                    </div>
                    <div class="elstep">
                      <el-step title="发货过账时间" description="2017/11/10"></el-step>
                      <span class="length">8</span>
                    </div>
                    <div class="elstep">
                      <el-step title="生成交货单时间" description="2017/11/10"></el-step>
                      <span class="length">8</span>
                    </div>
                    <div class="elstep">
                      <el-step title="信用状态" description="2017/11/10"></el-step>
                      <span class="length">8</span>
                    </div>
                    <div class="elstep">
                      <el-step title="确认时间" description="2017/11/10"></el-step>
                      <span class="length">8</span>
                    </div>
                    <div class="elstep">
                      <el-step title="CRAD变更日期" description="2017/11/10"></el-step>
                      <span class="length">8</span>
                    </div>
                    <div class="elstep">
                      <el-step title="PSD提供日期" description="2017/11/10"></el-step>
                      <span class="length">8</span>
                    </div>
                    <div class="elstep">
                      <el-step title="创建时间" description="2017/11/10"></el-step>
                      <span class="length">8</span>
                    </div>
                  </el-steps>
                </div>
              </div>
              <div class="bottom-right">
                <div class="bottom-r-item">
                  <span class="title">CRAD-创建日期</span>
                  <span class="data">1</span>
                  <span class="status"><i class="el-icon-success"></i></span>
                </div>
                <div class="bottom-r-item">
                  <span class="title">CRAD-创建日期</span>
                  <span class="data">1</span>
                  <span class="status"><i class="el-icon-success"></i></span>
                </div>
                <div class="bottom-r-item">
                  <span class="title">CRAD-确认日期</span>
                  <span class="data">1</span>
                  <span class="status"><i class="el-icon-success"></i></span>
                </div>
                <div class="bottom-r-item">
                  <span class="title">确认日期-PSD</span>
                  <span class="data">1</span>
                  <span class="status"><i class="el-icon-success"></i></span>
                </div>
                <div class="bottom-r-item">
                  <span class="title">确认日期-创建日期</span>
                  <span class="data">8</span>
                  <span class="status"><i class="el-icon-success"></i></span>
                </div>
                <div class="bottom-r-item">
                  <span class="title">签收日期-创建日期</span>
                  <span class="data">10</span>
                  <span class="status"><i class="el-icon-error"></i></span>
                </div>
                <div class="bottom-r-item">
                  <span class="title">Pass due</span>
                  <span class="data">30</span>
                  <span class="status"><i class="el-icon-success"></i></span>
                </div>
              </div>
            </div>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_急单_上传规则'"
                :tableName='"Think_Critical_uploadrule"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_急单_上传规则'"
                ref="thinkSoPrio">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="tarItem">
          <div class="block">
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import updata from '@/components/public/updata'
import VTable from '@/components/public/vtable1'
export default {
  data () {
    return {
      form: {
        Critfact: [],
        Critfamily: [],
        Critreason: [],
        Critcustseg: [],
        Critstatus: [],
        Critbusline: [],
        Critperf: [],
        Critmonth: [],
        Critpass: [],
        Critsource: [],
        CritBTO: [],
        Crituploaddate: [],
        CritNum: '',
        CritMTM: '',
        CritFactPOSO: '',
        CritCustSO: '',
        Critcustname: '',
        CritreqID: '',
        Critdetail: '',
        Critowner: '',
        Critdategap: ''
      },
      Critfacts: [],
      Critfamilys: [],
      Critreasons: [],
      Critcustsegs: [],
      Critstatuss: [],
      Critbuslines: [],
      Critperfs: [],
      Critmonths: [],
      Critpasss: [],
      Critsources: [],
      CritBTOs: [],
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      tabPosition: 'left',
      menuArr: ['急单参数', '急单上传', '急单查询', '急单分析']
    }
  },
  components: {
    Upload,
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
    }, 3000)
  },
  methods: {
    onSubmit () {
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    updateSoPrio1 () {
      this.$refs.thinkSoPrio1.updateTabFun()
    },
    updatesSoPrio1 () {
      this.$refs.thinkSoPrio1.updateTimeChange()
    },
    updateSoPrio2 () {
      this.$refs.thinkSoPrio2.updateTabFun()
    },
    updatesSoPrio2 () {
      this.$refs.thinkSoPrio2.updateTimeChange()
    },
    updateSoPrio3 () {
      this.$refs.thinkSoPrio3.updateTabFun()
    },
    updatesSoPrio3 () {
      this.$refs.thinkSoPrio3.updateTimeChange()
    },
    updateSoPrio4 () {
      this.$refs.thinkSoPrio4.updateTabFun()
    },
    updatesSoPrio4 () {
      this.$refs.thinkSoPrio4.updateTimeChange()
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
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.soPrio
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .tarItem
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
        // margin-bottom 10px
  .el-form-item
    margin-bottom 0px !important
  .leftBtn
    float left
  .rightBtn
    float right
  .qResults-bottom
    width 96%
    height 240px
    margin-left 2%
    background #fff
    margin-bottom 10px
    .bottom-right
      float left
      width 40%
      padding-top 20px
      .bottom-r-item
        width 100%
        margin-left 50px
        .title,.data,.status
          display inline-block
          height 30px
          line-height 30px
        .title
          width 180px
        .data
          width 80px
    .bottom-left
      float left
      padding 10px
      height 100%
      width 50%
      overflow-y scroll
      .title
        width 100%
        height 44px
        line-height 44px
        font-size 14px
        font-weight 700
        .orderflow
          margin-left 120px
        .status
          margin-left 80px
        .length
          margin-left 70px
      .elsteps
        // height 500px
        margin-left 200px
        .elstep
          position relative
          .length
            position absolute
            left 162px
            top 3px
            width 100px
            height 20px
            font-size #ccc
</style>

