<template>
  <div class="sup-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" v-model="activeName" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="supItem">
          <div class="block">
            <h2>Think Wistron PSD
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal1"
                  @updateTimeChange="updateFinalPSD1"
                  :sheetNames="'PSD,Shipment'"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :analysisCName="''"
                  :analysisCValue="''"
                  :analysisCName2="''"
                  :analysisCValue2="''"
                  :tableName='"Think_Wistron_PSD_Backlog,Think_Wistron_PSD_Shipment"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'PSD'"
                :tableName='"Think_Wistron_PSD_Backlog"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Wistron_TNB_PRC_PSD'"
                :allPages="false"
                ref="thinkFinalPSD1">
              </v-table>
              <v-table
                :sheetsName="'Shipment'"
                :tableName='"Think_Wistron_PSD_Shipment"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Wistron_TNB_PRC_PSD'"
                :allPages="false"
                ref="thinkFinalPSD1two">
              </v-table>
            </div>
            <h2>Think Compal PSD
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal2"
                  @updateTimeChange="updateFinalPSD2"
                  :sheetNames="'PSD'"
                  :analysisCName="'GEO'"
                  :analysisCValue="'PRC'"
                  :analysisCName2="''"
                  :analysisCValue2="''"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :tableName='"Think_Compal_PSD"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'PSD'"
                :tableName='"Think_Compal_PSD"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Compal_TNB_PSD_Report'"
                :allPages="false"
                ref="thinkFinalPSD2">
              </v-table>
            </div>
            <h2>Think Quanta PSD
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal3"
                  @updateTimeChange="updateFinalPSD3"
                  :sheetNames="'PSD'"
                  :analysisCName="'GEO'"
                  :analysisCValue="'PRC'"
                  :analysisCName2="''"
                  :analysisCValue2="''"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :tableName='"Think_Quanta_PSD"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table
                :sheetsName="'PSD'"
                :tableName='"Think_Quanta_PSD"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Quanta_TBG_PSD_report'"
                :allPages="false"
                ref="thinkFinalPSD3">
              </v-table>
            </div>
            <h2>Think LCFC PSD
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal4"
                  @updateTimeChange="updateFinalPSD4"
                  :sheetNames="'PSD'"
                  :analysisCName="'GEO'"
                  :analysisCValue="'PRC'"
                  :analysisCName2="''"
                  :analysisCValue2="''"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :tableName='"Think_LCFC_PSD"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'PSD'"
                :tableName='"Think_LCFC_PSD"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LCFC_PSD'"
                :allPages="false"
                ref="thinkFinalPSD4">
              </v-table>
            </div>
            <h2>Think Compal AIO PSD
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal5"
                  @updateTimeChange="updateFinalPSD5"
                  :sheetNames="'PSD'"
                  :analysisCName="'Model'"
                  :analysisCValue="'E95Z'"
                  :analysisCName2="''"
                  :analysisCValue2="''"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :tableName='"Think_Compal_AIO_PSD"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid5">
              <v-table
                :sheetsName="'Think_Compal_AIO_PSD'"
                :tableName='"Think_Compal_AIO_PSD"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Compal_AIO_PSD'"
                :allPages="false"
                ref="thinkFinalPSD5">
              </v-table>
            </div>
            <h2>Think Foxconn DT PSD
              <a href="javascript:;" class="fold" @click="toggleList19" v-text="toggle19 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal19"
                  @updateTimeChange="updateFinalPSD19"
                  :sheetNames="'PSD'"
                  :analysisCName="'GEO'"
                  :analysisCValue="'PRC'"
                  :analysisCName2="''"
                  :analysisCValue2="''"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :tableName='"Think_Foxconn_DT_PSD"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid19">
              <v-table
                :sheetsName="'PSD'"
                :tableName='"Think_Foxconn_DT_PSD"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Lenovo_WW_PSD_Think_DT_Foxconn'"
                :allPages="false"
                ref="thinkFinalPSD19">
              </v-table>
            </div>
            <h2>Think LIPC NB PSD
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal6"
                  @updateTimeChange="updateFinalPSD6"
                  :sheetNames="'PSD Report,Shipment Report'"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :analysisCName="'GEO,SO_ID'"
                  :analysisCValue="'PRC,414'"
                  :analysisCName2="'GeoItems,Salesorde'"
                  :analysisCValue2="'PRC,414'"
                  :tableName='"Think_LIPC_NB_PSD_Backlog,Think_LIPC_NB_PSD_Shipment"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid6">
              <v-table
                :sheetsName="'PSD Report'"
                :tableName='"Think_LIPC_NB_PSD_Backlog"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'AP_&_PRC_PSD_report'"
                :allPages="false"
                ref="thinkFinalPSD6">
              </v-table>
              <v-table
                :sheetsName="'Shipment Report'"
                :tableName='"Think_LIPC_NB_PSD_Shipment"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'AP_&_PRC_PSD_report'"
                ref="thinkFinalPSD6two">
              </v-table>
            </div>
            <h2>Think LIPC NB PSD TTL
              <a href="javascript:;" class="fold" @click="toggleList7" v-text="toggle7 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateFinal7"
                  :menuId="'430'"
                  :menuName="''"
                  :logTableName="'Think_LIPC_NB_PSD_TTL'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid7">
              <v-table
                :sheetsName="'Think_LIPC_NB_PSD_TTL'"
                :tableName='"Think_LIPC_NB_PSD_TTL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LIPC_NB_PSD_TTL'"
                :allPages="false"
                ref="thinkFinalPSD7">
              </v-table>
            </div>
            <h2>Think LIPC DT PSD
              <a href="javascript:;" class="fold" @click="toggleList8" v-text="toggle8 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal8"
                  @updateTimeChange="updateFinalPSD8"
                  :sheetNames="'PSD Report,Shipment'"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :analysisCName="'GEO,SO_ID'"
                  :analysisCValue="'PRC,414'"
                  :analysisCName2="'GEO,Sales Order'"
                  :analysisCValue2="'PRC,414'"
                  :tableName='"Think_LIPC_DT_PSD_Backlog,Think_LIPC_DT_PSD_Shipment"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid8">
              <v-table
                :sheetsName="'PSD Report'"
                :tableName='"Think_LIPC_DT_PSD_Backlog"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'PSD'"
                :allPages="false"
                ref="thinkFinalPSD8">
              </v-table>
              <v-table
                :sheetsName="'Shipment'"
                :tableName='"Think_LIPC_DT_PSD_Shipment"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'PSD'"
                :allPages="false"
                ref="thinkFinalPSD8two">
              </v-table>
            </div>
            <h2>Think LIPC DT PSD TTL
              <a href="javascript:;" class="fold" @click="toggleList9" v-text="toggle9 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateFinal9"
                  :menuId="'430'"
                  :menuName="''"
                  :logTableName="'Think_LIPC_DT_PSD_TTL'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid9">
              <v-table
                :sheetsName="'Think_LIPC_DT_PSD_TTL'"
                :tableName='"Think_LIPC_DT_PSD_TTL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LIPC_DT_PSD_TTL'"
                :allPages="false"
                ref="thinkFinalPSD9">
              </v-table>
            </div>
            <h2>Think LIPC OPT PSD
              <a href="javascript:;" class="fold" @click="toggleList10" v-text="toggle10 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal10"
                  @updateTimeChange="updateFinalPSD10"
                  :sheetNames="'OPT,MTD'"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :analysisCName="'GEO,SO_ID'"
                  :analysisCValue="'PRC,414'"
                  :analysisCName2="'Sub Geo it,Sales orde'"
                  :analysisCValue2="'PRC,414'"
                  :tableName='"Think_LIPC_OPT_PSD_Backlog,Think_LIPC_OPT_PSD_Shipment"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid10">
              <v-table
                :sheetsName="'OPT'"
                :tableName='"Think_LIPC_OPT_PSD_Backlog"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'PSD_report'"
                :allPages="false"
                ref="thinkFinalPSD10">
              </v-table>
              <v-table
                :sheetsName="'MTD'"
                :tableName='"Think_LIPC_OPT_PSD_Shipment"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'PSD_report'"
                :allPages="false"
                ref="thinkFinalPSD10two">
              </v-table>
            </div>
            <h2>Think LIPC OPT PSD TTL
              <a href="javascript:;" class="fold" @click="toggleList11" v-text="toggle11 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <updata
                  @on-success="updateFinal11"
                  :menuId="'430'"
                  :menuName="''"
                  :logTableName="'Think_LIPC_OPT_PSD_TTL'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid addgrid11">
              <v-table
                :sheetsName="'Think_LIPC_OPT_PSD_TTL'"
                :tableName='"Think_LIPC_OPT_PSD_TTL"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LIPC_OPT_PSD_TTL'"
                :allPages="false"
                ref="thinkFinalPSD11">
              </v-table>
            </div>
            <h2>PSD上传配置参数
              <a href="javascript:;" class="fold" @click="toggleList20" v-text="toggle20 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal20"
                  @updateTimeChange="updateFinalPSD20"
                  :logTableName="'Think_PSD_Mapping'"
                  :sheetsName="'Think_PSD_Mapping'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid20">
              <v-table
                :sheetsName="'Think_PSD_Mapping'"
                :tableName='"Think_PSD_Mapping"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_PSD_Mapping'"
                :allPages="false"
                ref="thinkFinalPSD20">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="supItem">
          <div class="block">
            <h2>Think Wistron 缺料信息
              <a href="javascript:;" class="fold" @click="toggleList12" v-text="toggle12 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal12"
                  @updateTimeChange="updateFinalPSD12"
                  :logTableName="'Think_Parts_Shortage_Wistron'"
                  :sheetsName="'OEM report'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid12">
              <v-table
                :sheetsName="'OEM report'"
                :tableName='"Think_Parts_Shortage_Wistron"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Wistron_缺料信息'"
                :allPages="false"
                ref="thinkFinalPSD12">
              </v-table>
            </div>
            <h2>Think Compal 缺料信息
              <a href="javascript:;" class="fold" @click="toggleList13" v-text="toggle13 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal13"
                  @updateTimeChange="updateFinalPSD13"
                  :logTableName="'Think_Parts_Shortage_Compal'"
                  :sheetsName="'Critical parts'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid13">
              <v-table
                :sheetsName="'Critical parts'"
                :tableName='"Think_Parts_Shortage_Compal"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Compal_缺料信息'"
                :allPages="false"
                ref="thinkFinalPSD13">
              </v-table>
            </div>
            <h2>Think Quanta 缺料信息
              <a href="javascript:;" class="fold" @click="toggleList14" v-text="toggle14 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal14"
                  @updateTimeChange="updateFinalPSD14"
                  :logTableName="'Think_Parts_Shortage_Quanta'"
                  :sheetsName="'Critical shortage'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid14">
              <v-table
                :sheetsName="'Critical shortage'"
                :tableName='"Think_Parts_Shortage_Quanta"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Quanta_缺料信息'"
                :allPages="false"
                ref="thinkFinalPSD14">
              </v-table>
            </div>
            <h2>Think LCFC 缺料信息
              <a href="javascript:;" class="fold" @click="toggleList15" v-text="toggle15 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal15"
                  @updateTimeChange="updateFinalPSD15"
                  :logTableName="'Think_Parts_Shortage_LCFC'"
                  :sheetsName="'D2'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid15">
              <v-table
                :sheetsName="'D2'"
                :tableName='"Think_Parts_Shortage_LCFC"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LCFC_缺料信息'"
                :allPages="false"
                ref="thinkFinalPSD15">
              </v-table>
            </div>
            <h2>Think Compal AIO 缺料信息
              <a href="javascript:;" class="fold" @click="toggleList16" v-text="toggle16 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal16"
                  @updateTimeChange="updateFinalPSD16"
                  :logTableName="'Think_Parts_Shortage_CompalAIO'"
                  :sheetsName="'Think_Compal_AIO 缺料信息'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid16">
              <v-table
                :sheetsName="'Think_Compal_AIO 缺料信息'"
                :tableName='"Think_Parts_Shortage_CompalAIO"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Compal_AIO 缺料信息'"
                :allPages="false"
                ref="thinkFinalPSD16">
              </v-table>
            </div>
            <h2>Think LIPC NB 缺料信息
              <a href="javascript:;" class="fold" @click="toggleList17" v-text="toggle17 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal17"
                  @updateTimeChange="updateFinalPSD17"
                  :logTableName="'Think_Parts_Shortage_LIPCNB'"
                  :sheetsName="'Missing Parts by Parts'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid17">
              <v-table
                :sheetsName="'Missing Parts by Parts'"
                :tableName='"Think_Parts_Shortage_LIPCNB"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LIPC_NB_缺料信息'"
                :allPages="false"
                ref="thinkFinalPSD17">
              </v-table>
            </div>
            <h2>Think LIPC DT 缺料信息
              <a href="javascript:;" class="fold" @click="toggleList18" v-text="toggle18 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateFinal18"
                  @updateTimeChange="updateFinalPSD18"
                  :sheetNames="'missing list'"
                  :dbName="'FF_IDSS_Data_Think'"
                  :url="'/uploadExcelManySheet'"
                  :analysisCName="'Geo'"
                  :analysisCValue="'PRC'"
                  :analysisCName2="''"
                  :analysisCValue2="''"
                  :tableName='"Think_Parts_Shortage_LIPCDT"'
                  :logTableName='"Think_Wistron_PSD_Backlog"'>
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid18">
              <v-table
                :sheetsName="'missing list'"
                :tableName='"Think_Parts_Shortage_LIPCDT"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_LIPC DT_缺料信息'"
                :allPages="false"
                ref="thinkFinalPSD18">
              </v-table>
            </div>
            <h2>缺料信息上传配置参数
              <a href="javascript:;" class="fold" @click="toggleList21" v-text="toggle21 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateFinal21"
                  @updateTimeChange="updateFinalPSD21"
                  :logTableName="'Think_Parts_Shortage_Mapping'"
                  :sheetsName="'Think_Parts_Shortage_Mapping'"
                  :logObj="'thinkallotype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid21">
              <v-table
                :sheetsName="'Think_Parts_Shortage_Mapping'"
                :tableName='"Think_Parts_Shortage_Mapping"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Parts_Shortage_Mapping'"
                :allPages="false"
                ref="thinkFinalPSD21">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="supItem">
          <div class="block">
            <h2>Think Final PSD 缺料信息表
              <div class="form-box">
                <form class="download-box">
                  <input type="file" name="file" class="input" :disabled="disabled1" />
                  <span class="submit" :class="{'disabled': disabled1}" >一键上传</span>
                </form>
              </div>
              <div class="form-box">
                <updata
                  @on-success="updatePartsFinal"
                  :menuId="'430'"
                  :menuName="''"
                  :logTableName="'Think_Parts_Shortage_Final'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'Think_Final_PSD_缺料信息表'"
                :tableName='"Think_Parts_Shortage_Final"'
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Final_PSD_缺料信息表'"
                ref="gridPartsFinal" >
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtablePage'
import UploadNew from '@/components/public/upload5'
import updata from '@/components/public/updata'
// const $ = window.$
export default {
  data () {
    return {
      activeName: 'second',
      disabled: false,
      disabled1: false,
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
      toggle16: true,
      toggle17: true,
      toggle18: true,
      toggle19: true,
      toggle20: true,
      toggle21: true,
      tabPosition: 'left',
      menuArr: ['Think PSD上传', 'Think缺料信息', 'Final PSD 缺料信息表']
    }
  },
  components: {
    Upload,
    VTable,
    UploadNew,
    updata
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
      this.toggleList17()
      this.toggleList18()
      this.toggleList19()
      this.toggleList20()
      this.toggleList21()
    }, 3000)
  },
  methods: {
    updateFinal1 () {
      this.$refs.thinkFinalPSD1.updateTabFun()
      this.$refs.thinkFinalPSD1two.updateTabFun()
    },
    updateFinalPSD1 () {
      this.$refs.thinkFinalPSD1.updateTimeChange()
      this.$refs.thinkFinalPSD1two.updateTimeChange()
    },
    updateFinal2 () {
      this.$refs.thinkFinalPSD2.initTabTable()
    },
    updateFinalPSD2 () {
      this.$refs.thinkFinalPSD2.initTabTable()
    },
    updateFinal3 () {
      this.$refs.thinkFinalPSD3.updateTabFun()
    },
    updateFinalPSD3 () {
      this.$refs.thinkFinalPSD3.updateTimeChange()
    },
    updateFinal4 () {
      this.$refs.thinkFinalPSD4.updateTabFun()
    },
    updateFinalPSD4 () {
      this.$refs.thinkFinalPSD4.updateTimeChange()
    },
    updateFinal5 () {
      this.$refs.thinkFinalPSD5.updateTabFun()
    },
    updateFinalPSD5 () {
      this.$refs.thinkFinalPSD5.updateTimeChange()
    },
    updateFinal6 () {
      this.$refs.thinkFinalPSD6.updateTabFun()
      this.$refs.thinkFinalPSD6two.updateTabFun()
    },
    updateFinalPSD6 () {
      this.$refs.thinkFinalPSD6.updateTimeChange()
      this.$refs.thinkFinalPSD6two.updateTimeChange()
    },
    updateFinal7 () {
      this.$refs.thinkFinalPSD7.updateTabFun()
    },
    updateFinal8 () {
      this.$refs.thinkFinalPSD8.updateTabFun()
      this.$refs.thinkFinalPSD8two.updateTabFun()
    },
    updateFinalPSD8 () {
      this.$refs.thinkFinalPSD8.updateTimeChange()
      this.$refs.thinkFinalPSD8two.updateTimeChange()
    },
    updateFinal9 () {
      this.$refs.thinkFinalPSD9.updateTabFun()
    },
    updateFinal10 () {
      this.$refs.thinkFinalPSD10.updateTabFun()
      this.$refs.thinkFinalPSD10two.updateTabFun()
    },
    updateFinalPSD10 () {
      this.$refs.thinkFinalPSD10.updateTimeChange()
      this.$refs.thinkFinalPSD10two.updateTimeChange()
    },
    updateFinal11 () {
      this.$refs.thinkFinalPSD11.updateTabFun()
    },
    updateFinal12 () {
      this.$refs.thinkFinalPSD12.updateTabFun()
    },
    updateFinalPSD12 () {
      this.$refs.thinkFinalPSD12.updateTimeChange()
    },
    updateFinal13 () {
      this.$refs.thinkFinalPSD13.updateTabFun()
    },
    updateFinalPSD13 () {
      this.$refs.thinkFinalPSD13.updateTimeChange()
    },
    updateFinal14 () {
      this.$refs.thinkFinalPSD14.updateTabFun()
    },
    updateFinalPSD14 () {
      this.$refs.thinkFinalPSD14.updateTimeChange()
    },
    updateFinal15 () {
      this.$refs.thinkFinalPSD15.updateTabFun()
    },
    updateFinalPSD15 () {
      this.$refs.thinkFinalPSD15.updateTimeChange()
    },
    updateFinal16 () {
      this.$refs.thinkFinalPSD16.updateTabFun()
    },
    updateFinalPSD16 () {
      this.$refs.thinkFinalPSD16.updateTimeChange()
    },
    updateFinal17 () {
      this.$refs.thinkFinalPSD17.updateTabFun()
    },
    updateFinalPSD17 () {
      this.$refs.thinkFinalPSD17.updateTimeChange()
    },
    updateFinal18 () {
      this.$refs.thinkFinalPSD18.updateTabFun()
    },
    updateFinalPSD18 () {
      this.$refs.thinkFinalPSD18.updateTimeChange()
    },
    updateFinal19 () {
      this.$refs.thinkFinalPSD19.updateTabFun()
    },
    updateFinalPSD19 () {
      this.$refs.thinkFinalPSD19.updateTimeChange()
    },
    updateFinal20 () {
      this.$refs.thinkFinalPSD20.updateTabFun()
    },
    updateFinalPSD20 () {
      this.$refs.thinkFinalPSD20.updateTimeChange()
    },
    updateFinal21 () {
      this.$refs.thinkFinalPSD21.updateTabFun()
    },
    updateFinalPSD21 () {
      this.$refs.thinkFinalPSD21.updateTimeChange()
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
        this.$refs.thinkFinalPSD2.initTabTable()
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
    toggleList7 () {
      let addgrid = document.getElementsByClassName('addgrid7')[0]
      if (this.toggle7) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle7 = !this.toggle7
    },
    toggleList8 () {
      let addgrid = document.getElementsByClassName('addgrid8')[0]
      if (this.toggle8) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle8 = !this.toggle8
    },
    toggleList9 () {
      let addgrid = document.getElementsByClassName('addgrid9')[0]
      if (this.toggle9) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle9 = !this.toggle9
    },
    toggleList10 () {
      let addgrid = document.getElementsByClassName('addgrid10')[0]
      if (this.toggle10) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle10 = !this.toggle10
    },
    toggleList11 () {
      let addgrid = document.getElementsByClassName('addgrid11')[0]
      if (this.toggle11) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle11 = !this.toggle11
    },
    toggleList12 () {
      let addgrid = document.getElementsByClassName('addgrid12')[0]
      if (this.toggle12) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle12 = !this.toggle12
    },
    toggleList13 () {
      let addgrid = document.getElementsByClassName('addgrid13')[0]
      if (this.toggle13) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle13 = !this.toggle13
    },
    toggleList14 () {
      let addgrid = document.getElementsByClassName('addgrid14')[0]
      if (this.toggle14) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle14 = !this.toggle14
    },
    toggleList15 () {
      let addgrid = document.getElementsByClassName('addgrid15')[0]
      if (this.toggle15) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle15 = !this.toggle15
    },
    toggleList16 () {
      let addgrid = document.getElementsByClassName('addgrid16')[0]
      if (this.toggle16) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle16 = !this.toggle16
    },
    toggleList17 () {
      let addgrid = document.getElementsByClassName('addgrid17')[0]
      if (this.toggle17) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle17 = !this.toggle17
    },
    toggleList18 () {
      let addgrid = document.getElementsByClassName('addgrid18')[0]
      if (this.toggle18) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle18 = !this.toggle18
    },
    toggleList19 () {
      let addgrid = document.getElementsByClassName('addgrid19')[0]
      if (this.toggle19) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle19 = !this.toggle19
    },
    toggleList20 () {
      let addgrid = document.getElementsByClassName('addgrid20')[0]
      if (this.toggle20) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle20 = !this.toggle20
    },
    toggleList21 () {
      let addgrid = document.getElementsByClassName('addgrid21')[0]
      if (this.toggle21) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle21 = !this.toggle21
    },
    updatethinkPSDSUM () { // 上传后自动刷新表格数据
      this.$refs.gridthinkPSDSUM.updateTabFun()
    },
    updateShortageSUM () { // 上传后自动刷新表格数据
      this.$refs.gridShortageSUM.updateTabFun()
    },
    updateFinalPSD () {
      this.$refs.gridFinalPSD.updateTabFun()
    },
    updatePartsFinal () {
      this.$refs.gridPartsFinal.updateTabFun()
    },
    updateFinal () {
      this.$refs.gridFinalPSD.updateTabFun()
    },
    updateReport () {
      this.$refs.gridReport.updateTabFun()
    },
    updatethinkPSDSUM1 () { // 上传后自动刷新表格数据
      this.$refs.gridthinkPSDSUM.updateTimeChange()
    },
    updateShortageSUM1 () { // 上传后自动刷新表格数据
      this.$refs.gridShortageSUM.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.sup-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .supItem
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
        margin-bottom 5px
        padding 0 20px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
          .download-box
            width 81px
            height 30px
            margin-top 7px
            margin-left 20px
            &:hover
              .submit
                background #00b000
                &.disabled
                  background #ccc
                  cursor not-allowed
            .input
              width 100%
              height 30px
              line-height 24px
              display block
              opacity 0
              position absolute
              left 0
              top 0
              z-index 99
              cursor pointer
            .submit
              z-index 1
              width 100%
              height 24px
              line-height 24px
              display block
              font-size 12px
              color #fff
              border-radius 6px
              background #76d467
              text-align center
              &.disabled
                background #ccc
                cursor not-allowed
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
