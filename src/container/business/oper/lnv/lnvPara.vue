<template>
  <div class="inv-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="invItem">
          <div class="block">
            <h2>FF_Aging_think
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgthink"
                  @updateTimeChange="updateAgthink1"
                  :logTableName="'FF_Aging_Think'"
                  :sheetsName="'Aging_Think'"
                  :logObj="'gridAgthink'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Aging_Think'"
                :tableName="'FF_Aging_Think'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_Think'"
                :allPages="false"
                ref="gridAgthink">
              </v-table>
            </div>
            <h2>FF_Aging_L_DT
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgLDT"
                  @updateTimeChange="updateAgLDT"
                  :logTableName="'FF_Aging_L_DT'"
                  :sheetsName="'Aging_L_DT'"
                  :logObj="'gridAgLDT'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Aging_L_DT'"
                :tableName="'FF_Aging_L_DT'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_L_DT'"
                :allPages="false"
                ref="gridAgLDT">
              </v-table>
            </div>
            <h2>FF_Aging_L_NB
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgLNB"
                  @updateTimeChange="updateAgLNB1"
                  :logTableName="'FF_Aging_L_NB'"
                  :sheetsName="'Aging_L_NB'"
                  :logObj="'AgingLNB'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'Aging_L_NB'"
                :tableName="'FF_Aging_L_NB'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_L_NB'"
                :allPages="false"
                ref="gridAgLNB">
              </v-table>
            </div>
            <h2>FF_Aging_KQ
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgKQ"
                  @updateTimeChange="updateAgKQ1"
                  :logTableName="'FF_Aging_KQ'"
                  :sheetsName="'Aging_KQ'"
                  :logObj="'AgingKQ'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'Aging_KQ'"
                :tableName="'FF_Aging_KQ'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_KQ'"
                :allPages="false"
                ref="gridAgKQ">
              </v-table>
            </div>
            <h2>FF_Aging_OPT_VIS
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgOPTVIS"
                  @updateTimeChange="updateAgOPTVIS1"
                  :logTableName="'FF_Aging_OPT_VIS'"
                  :sheetsName="'Aging_OPT_VIS'"
                  :logObj="'AgingOPTVIS'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'Aging_OPT_VIS'"
                :tableName="'FF_Aging_OPT_VIS'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_OPT_VIS'"
                :allPages="false"
                ref="gridAgOPTVIS">
              </v-table>
            </div>
            <h2>FF_Aging_TB
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgTB"
                  @updateTimeChange="updateAgTB1"
                  :logTableName="'FF_Aging_TB'"
                  :sheetsName="'Aging_TB'"
                  :logObj="'AgingTB'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'Aging_TB'"
                :tableName="'FF_Aging_TB'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_TB'"
                :allPages="false"
                ref="gridAgTB">
              </v-table>
            </div>
            <h2>FF_Aging_VMI
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgVMI"
                  @updateTimeChange="updateAgVMI1"
                  :logTableName="'FF_Aging_VMI'"
                  :sheetsName="'Aging_VMI'"
                  :logObj="'gridupdateAgVMI'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid7">
              <v-table
                :sheetsName="'Aging_VMI'"
                :tableName="'FF_Aging_VMI'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_VMI'"
                :allPages="false"
                ref="gridAgVMI">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="invItem">
          <div class="block">
            <h2>FF_Aging_FCST_think
              <a href="javascript:;" class="fold" @click="toggleList8" v-text="toggle8 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgfcstthink"
                  @updateTimeChange="updatefcstAgthink1"
                  :logTableName="'FF_Aging_FCST_Think'"
                  :sheetsName="'Aging_FCST_Think'"
                  :logObj="'gridAgfcstthink'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid8">
              <v-table
                :sheetsName="'Aging_FCST_Think'"
                :tableName="'FF_Aging_FCST_Think'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_FCST_Think'"
                :allPages="false"
                ref="gridAgfcstthink">
              </v-table>
            </div>
            <h2>FF_Aging_FCST_L_DT
              <a href="javascript:;" class="fold" @click="toggleList9" v-text="toggle9 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgfcstLDT"
                  @updateTimeChange="updateAgfcstLDT"
                  :logTableName="'FF_Aging_FCST_L_DT'"
                  :sheetsName="'Aging_FCST_L_DT'"
                  :logObj="'gridAgfcstLDT'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid9">
              <v-table
                :sheetsName="'Aging_FCST_L_DT'"
                :tableName="'FF_Aging_FCST_L_DT'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_FCST_L_DT'"
                :allPages="false"
                ref="gridAgfcstLDT">
              </v-table>
            </div>
            <h2>FF_Aging_FCST_L_NB
              <a href="javascript:;" class="fold" @click="toggleList10" v-text="toggle10 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgfcstLNB"
                  @updateTimeChange="updateAgfcstLNB1"
                  :logTableName="'FF_Aging_FCST_L_NB'"
                  :sheetsName="'Aging_FCST_L_NB'"
                  :logObj="'gridAgfcstLNB'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid10">
              <v-table
                :sheetsName="'Aging_FCST_L_NB'"
                :tableName="'FF_Aging_FCST_L_NB'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_FCST_L_NB'"
                :allPages="false"
                ref="gridAgfcstLNB">
              </v-table>
            </div>
            <h2>FF_Aging_FCST_KQ
              <a href="javascript:;" class="fold" @click="toggleList11" v-text="toggle11 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgfcstKQ"
                  @updateTimeChange="updateAgfcstKQ1"
                  :logTableName="'FF_Aging_FCST_KQ'"
                  :sheetsName="'Aging_FCST_KQ'"
                  :logObj="'gridAgfcstKQ'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid11">
              <v-table
                :sheetsName="'Aging_FCST_KQ'"
                :tableName="'FF_Aging_FCST_KQ'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_FCST_KQ'"
                :allPages="false"
                ref="gridAgfcstKQ">
              </v-table>
            </div>
            <h2>FF_Aging_FCST_OPT_VIS
              <a href="javascript:;" class="fold" @click="toggleList12" v-text="toggle12 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgfcstOPTVIS"
                  @updateTimeChange="updateAgfcstOPTVIS1"
                  :logTableName="'FF_Aging_FCST_OPT_VIS'"
                  :sheetsName="'Aging_FCST_OPT_VIS'"
                  :logObj="'gridAgfcstOPTVIS'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid12">
              <v-table
                :sheetsName="'Aging_FCST_OPT_VIS'"
                :tableName="'FF_Aging_FCST_OPT_VIS'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_FCST_OPT_VIS'"
                :allPages="false"
                ref="gridAgfcstOPTVIS">
              </v-table>
            </div>
            <h2>FF_Aging_FCST_TB
              <a href="javascript:;" class="fold" @click="toggleList13" v-text="toggle13 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgfcstTB"
                  @updateTimeChange="updateAgfcstTB1"
                  :logTableName="'FF_Aging_FCST_TB'"
                  :sheetsName="'Aging_FCST_TB'"
                  :logObj="'gridAgfcstTB'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid13">
              <v-table
                :sheetsName="'Aging_FCST_TB'"
                :tableName="'FF_Aging_FCST_TB'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_FCST_TB'"
                :allPages="false"
                ref="gridAgfcstTB">
              </v-table>
            </div>
            <h2>FF_Aging_FCST_VMI
              <a href="javascript:;" class="fold" @click="toggleList14" v-text="toggle14 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgfcstVMI"
                  @updateTimeChange="updateAgfcstVMI1"
                  :logTableName="'FF_Aging_FCST_VMI'"
                  :sheetsName="'Aging_FCST_VMI'"
                  :logObj="'gridAgfcstVMI'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid14">
              <v-table
                :sheetsName="'Aging_FCST_VMI'"
                :tableName="'FF_Aging_FCST_VMI'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'FF_Aging_FCST_VMI'"
                :allPages="false"
                ref="gridAgfcstVMI">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="invItem">
          <div class="block">
            <h2>汇率参数
              <div class="form-box">
                <upload
                  @on-success="updateExcRate"
                  @updateTimeChange="updateExcRate1"
                  :logTableName="'FF_Exchange_Rate'"
                  :sheetsName="'汇率参数'"
                  :logObj="'gridExcRate'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'汇率参数'"
                :tableName="'FF_Exchange_Rate'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'汇率参数'"
                ref="gridExcRate">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[3]" class="invItem">
          <div class="block">
            <h2>业务线划分
              <a href="javascript:;" class="fold" @click="toggleList15" v-text="toggle15 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgbizmap"
                  @updateTimeChange="updateAgbizmap1"
                  :logTableName="'Aging_业务线划分'"
                  :sheetsName="'Aging_业务线划分'"
                  :logObj="'gridAgbizmap'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid15">
              <v-table
                :sheetsName="'Aging_业务线划分'"
                :tableName="'FF_Aging_Mapping_Bizline'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'Aging_业务线划分'"
                ref="gridAgbizmap">
              </v-table>
            </div>
            <h2>业务线报表
              <a href="javascript:;" class="fold" @click="toggleList16" v-text="toggle16 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateAgbizrep"
                  @updateTimeChange="updateAgbizrep1"
                  :logTableName="'Aging_业务线报表'"
                  :sheetsName="'Aging_业务线报表'"
                  :logObj="'gridAgbizrep'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid16">
              <v-table
                :sheetsName="'Aging_业务线报表'"
                :tableName="'FF_Aging_Report_Bizline'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'Aging_业务线报表'"
                ref="gridAgbizrep">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import VTable from '@/components/public/vtablePage'
import Upload from '@/components/public/upload1'
import Updata from '@/components/public/updata'
export default {
  data () {
    return {
      tabPosition: 'left',
      menuArr: ['当前库龄', '预估库龄', '汇率参数', '业务线参数'],
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      toggle7: true,
      toggle8: true,
      toggle9: true,
      toggle10: true,
      toggle11: true,
      toggle12: true,
      toggle13: true,
      toggle14: true,
      toggle15: true,
      toggle16: true
    }
  },
  components: {
    Upload,
    Updata,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
      this.toggleList7()
      this.toggleList8()
      this.toggleList9()
      this.toggleList10()
      this.toggleList11()
      this.toggleList12()
      this.toggleList13()
      this.toggleList14()
      this.toggleList15()
      this.toggleList16()
    }, 3000)
  },
  methods: {
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgthink.initTabTable()
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('addgrid2')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgLDT.initTabTable()
      }
      this.toggle2 = !this.toggle2
    },
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgLNB.initTabTable()
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgKQ.initTabTable()
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgOPTVIS.initTabTable()
      }
      this.toggle5 = !this.toggle5
    },
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgTB.initTabTable()
      }
      this.toggle6 = !this.toggle6
    },
    toggleList7 () {
      let addgrid = document.getElementsByClassName('addgrid7')[0]
      if (this.toggle7) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgVMI.initTabTable()
      }
      this.toggle7 = !this.toggle7
    },
    toggleList8 () {
      let addgrid = document.getElementsByClassName('addgrid8')[0]
      if (this.toggle8) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgfcstthink.initTabTable()
      }
      this.toggle8 = !this.toggle8
    },
    toggleList9 () {
      let addgrid = document.getElementsByClassName('addgrid9')[0]
      if (this.toggle9) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgfcstLDT.initTabTable()
      }
      this.toggle9 = !this.toggle9
    },
    toggleList10 () {
      let addgrid = document.getElementsByClassName('addgrid10')[0]
      if (this.toggle10) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgfcstLNB.initTabTable()
      }
      this.toggle10 = !this.toggle10
    },
    toggleList11 () {
      let addgrid = document.getElementsByClassName('addgrid11')[0]
      if (this.toggle11) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgfcstKQ.initTabTable()
      }
      this.toggle11 = !this.toggle11
    },
    toggleList12 () {
      let addgrid = document.getElementsByClassName('addgrid12')[0]
      if (this.toggle12) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgfcstOPTVIS.initTabTable()
      }
      this.toggle12 = !this.toggle12
    },
    toggleList13 () {
      let addgrid = document.getElementsByClassName('addgrid13')[0]
      if (this.toggle13) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgfcstTB.initTabTable()
      }
      this.toggle13 = !this.toggle13
    },
    toggleList14 () {
      let addgrid = document.getElementsByClassName('addgrid14')[0]
      if (this.toggle14) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgfcstVMI.initTabTable()
      }
      this.toggle14 = !this.toggle14
    },
    toggleList15 () {
      let addgrid = document.getElementsByClassName('addgrid15')[0]
      if (this.toggle15) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgbizmap.initTabTable()
      }
      this.toggle15 = !this.toggle15
    },
    toggleList16 () {
      let addgrid = document.getElementsByClassName('addgrid16')[0]
      if (this.toggle16) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
        this.$refs.gridAgbizrep.initTabTable()
      }
      this.toggle16 = !this.toggle16
    },
    updateExcRate () {
      this.$refs.gridExcRate.initTabTable()
    },
    updateExcRate1 () {
      this.$refs.gridExcRate.initTabTable()
    },
    updateAgbizmap () {
      this.$refs.gridAgbizmap.initTabTable()
    },
    updateAgbizmap1 () {
      this.$refs.gridAgbizmap.initTabTable()
    },
    updateAgbizrep () {
      this.$refs.gridAgbizrep.initTabTable()
    },
    updateAgbizrep1 () {
      this.$refs.gridAgbizrep.initTabTable()
    },
    updateAgthink () {
      this.$refs.gridAgthink.initTabTable()
    },
    updateAgthink1 () {
      this.$refs.gridAgthink.initTabTable()
    },
    updateAgLDT () {
      this.$refs.gridAgLDT.initTabTable()
    },
    updateAgLDT1 () {
      this.$refs.gridAgLDT.initTabTable()
    },
    updateAgLNB () {
      this.$refs.gridAgLNB.initTabTable()
    },
    updateAgLNB1 () {
      this.$refs.gridAgLNB.initTabTable()
    },
    updateAgKQ () {
      this.$refs.gridAgKQ.initTabTable()
    },
    updateAgKQ1 () {
      this.$refs.gridAgKQ.initTabTable()
    },
    updateAgOPTVIS () {
      this.$refs.gridAgOPTVIS.initTabTable()
    },
    updateAgOPTVIS1 () {
      this.$refs.gridAgOPTVIS.initTabTable()
    },
    updateAgTB () {
      this.$refs.gridAgTB.initTabTable()
    },
    updateAgTB1 () {
      this.$refs.gridAgTB.initTabTable()
    },
    updateAgVMI () {
      this.$refs.gridAgVMI.initTabTable()
    },
    updateAgVMI1 () {
      this.$refs.gridAgVMI.initTabTable()
    },
    updateAgfcstthink () {
      this.$refs.gridAgfcstthink.initTabTable()
    },
    updateAgfcstthink1 () {
      this.$refs.gridAgfcstthink.initTabTable()
    },
    updateAgfcstLDT () {
      this.$refs.gridAgfcstLDT.initTabTable()
    },
    updateAgfcstLDT1 () {
      this.$refs.gridAgfcstLDT.initTabTable()
    },
    updateAgfcstLNB () {
      this.$refs.gridAgfcstLNB.initTabTable()
    },
    updateAgfcstLNB1 () {
      this.$refs.gridAgfcstLNB.initTabTable()
    },
    updateAgfcstKQ () {
      this.$refs.gridAgfcstKQ.initTabTable()
    },
    updateAgfcstKQ1 () {
      this.$refs.gridAgfcstKQ.initTabTable()
    },
    updateAgfcstOPTVIS () {
      this.$refs.gridAgfcstOPTVIS.initTabTable()
    },
    updateAgfcstOPTVIS1 () {
      this.$refs.gridAgfcstOPTVIS.initTabTable()
    },
    updateAgfcstTB () {
      this.$refs.gridAgfcstTB.initTabTable()
    },
    updateAgfcstTB1 () {
      this.$refs.gridAgfcstTB.initTabTable()
    },
    updateAgfcstVMI () {
      this.$refs.gridAgfcstVMI.initTabTable()
    },
    updateAgfcstVMI1 () {
      this.$refs.gridAgfcstVMI.initTabTable()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.inv-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .invItem
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
          background #fdbc40
          font-size 12px
          box-sizing border-box
          &:hover
            background #ff9933
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>
