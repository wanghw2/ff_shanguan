<template>
<div class="orderQuery">
  <div class="formBox">
    <el-form ref="form" class="formBoxContent" :model="form" label-width="80px" size="mini">
      <div class="item2">
        <el-form-item label="SO" prop="so" class="item41">
          <el-input v-model="form.so" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="物料编码" prop="matCode" class="item21">
            <el-input v-model="form.matCode" placeholder="请输入">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="渠道编码" prop="bpCode" class="item21">
          <el-input v-model="form.bpCode" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="通路"  prop="channel" class="item41" >
            <el-select v-model="form.channel" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in channel.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="客户细分1" prop="cusSegment1" class="item25" >
          <el-select v-model="form.cusSegment1" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in cusSegment1.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户细分4" prop="cusSegment4" class="item25" >
          <el-select v-model="form.cusSegment4" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in cusSegment4.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="item2">
        <el-form-item label="订单状态" prop="orderState" class="item21" >
          <el-select v-model="form.orderState" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in orderState.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料描述" prop="matDesc" class="item21">
            <el-input v-model="form.matDesc" placeholder="请输入" >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="渠道名称" prop="bpName" class="item21">
          <el-input v-model="form.bpName" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="物料类型" prop="matType" class="item21" >
          <el-select v-model="form.matType" @change="getzdjx" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in matType.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单类型" prop="orderType" class="item25" >
          <el-select v-model="form.orderType" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in orderType.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单原因" prop="orderReason" class="item25" >
          <el-select v-model="form.orderReason" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in orderReason.children"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="fold">
        <div class="senior">高级查询</div>
        <div class="toggle" @click="toggleList">
          <a href="javascript:;" v-text="toggle ? '展开' : '折叠'"></a>
        </div>
      </div>
      <div class="innerbox">
        <div class="item2">
          <el-form-item  label="创建日期" prop="createDate" class='item31'>
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.createDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item  label="CRAD日期" prop="craDate" class='item31'>
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.craDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="接单编码" prop="pn" class="item21">
            <el-input v-model="form.pn" placeholder="请输入">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="重点机型" prop="keyModel"  class="item21" >
            <el-select v-model="form.keyModel" multiple :disabled="disabled" ref="keyModel1" collapse-tags  placeholder="请选择">
              <el-option
                v-for="item in keyModel.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="大区"  prop="large" class="item24" >
            <el-select v-model="form.large" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in large.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="item2">
          <el-form-item class='item31' label="确认日期" prop="conDate">
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.conDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item class='item31' label="PSD日期" prop="paDate">
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.paDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="接单描述" prop="desc" class="item21">
            <el-input v-model="form.desc" placeholder="请输入" >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="产品系列" prop="proSeries" class="item21" >
            <el-select v-model="form.proSeries" :disabled="disabled"  multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in proSeries.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="省份" prop="shipProCode" class="item24" >
            <el-select v-model="form.shipProCode" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in shipProCode.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="item2">
          <el-form-item class='item31' prop="trialDate" label="资审日期">
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.trialDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item class='item31' prop="logisticsDate" label="物流发货">
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.logisticsDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="确认编码" prop="confirmPn"  class="item21">
            <el-input v-model="form.confirmPn" placeholder="请输入">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="产品细分" prop="proSub" class="item21" >
            <el-select v-model="form.proSub" :disabled="disabled" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in proSub.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来单" prop="tcFactory" class="item24" >
            <el-select v-model="form.tcFactory" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in tcFactory.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="item2">
          <el-form-item class='item31' prop="issueDate" label="发货过账">
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.issueDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item class='item31' prop="signDate" label="签收日期">
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.signDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="确认描述" prop="confirmDesc" class="item21">
            <el-input v-model="form.confirmDesc" placeholder="请输入">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="Family" prop="Family" class="item21" >
            <el-select v-model="form.Family" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in Family.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发货" prop="fhFactory" class="item24" >
            <el-select v-model="form.fhFactory" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in fhFactory.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="item2">
          <el-form-item class='item31' prop="invoiceDate" label="发票日期">
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.invoiceDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item class='item31' prop="cancelDate" label="撤单日期">
            <div class="block">
              <el-date-picker
                class="item221"
                v-model="form.cancelDate"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="产品组" prop="division" class="item21">
            <el-select v-model="form.division" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in division.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="CRAD" prop="CRAD" class="item21" >
            <el-select v-model="form.CRAD" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in CRAD.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="PSD" prop="PSD" class="item24">
            <el-select v-model="form.PSD" multiple collapse-tags placeholder="请选择">
              <el-option
                v-for="item in PSD.children"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>
      <el-form-item class="item3">
        <el-button type="primary" @click="submitForm('form')">查询</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
        <el-dropdown class="bianshi" size="mini" split-button type="primary">
          变式
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in VariableList" :key="index"><span @click="transVariant(item.vid,item.variantValue)">{{item.variantName}}</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="primary" class="bianshi" @click.prevent="details">编辑列变式</el-button>
        <el-button type="primary" class="download" :disabled='disabledload' @click.prevent="downloadDate">数据下载</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="lableDate">
    <div class="dateView"></div>
  </div>
  <Modal ref="mymodal" :systemList='systemList' :VariableList='VariableList' @save-delet="getQueryVariant"></Modal>
  <modal-detail ref="sodatashow"></modal-detail>
</div>
</template>
<script>
// import axios from 'axios'
import {domainUrl} from '@/config/config.js'
import Modal from './Modal.vue'
import ModalDetail from './ModalDetail.vue'
const $ = window.$
export default {
  components: {
    Modal,
    ModalDetail
  },
  data () {
    return {
      disabledload: false,
      systemList: [], // 系统默认列名
      disabled: true,
      serverUrl: domainUrl,
      variantValue: '', // 列名
      VariableList: [], // 变式组
      vid: 1, // 变式id
      columnsList: [],
      toggle: true,
      form: {
        orderState: [],
        orderReason: [],
        cusSegment1: [],
        cusSegment4: [],
        large: [],
        channel: [],
        CRAD: [],
        PSD: [],
        matType: [],
        orderType: [],
        division: [],
        fhFactory: [],
        tcFactory: [],
        shipProCode: [],
        invoiceDate: [],
        createDate: [],
        craDate: [],
        pn: '',
        proSub: [],
        keyModel: [],
        proSeries: [],
        conDate: [],
        paDate: [],
        so: '',
        bpName: '',
        matDesc: '',
        matCode: '',
        bpCode: '',
        desc: '',
        logisticsDate: [],
        confirmPn: '',
        confirmDesc: '',
        issueDate: [],
        signDate: [],
        kpDate: [],
        cancelDate: [],
        trialDate: [],
        partition: '',
        type2: [],
        Family: []
      },
      proSub: [],
      Family: [],
      keyModel: [],
      proSeries: [],
      orderState: [],
      orderReason: [],
      cusSegment1: [],
      cusSegment4: [],
      large: [],
      channel: [],
      CRAD: [],
      PSD: [],
      matType: [],
      orderType: [],
      division: [],
      fhFactory: [],
      tcFactory: [],
      shipProCode: []
    }
  },
  created () {
    this.getQuerydata()
    this.getCurrentValue()
    this.getQueryVariant()
  },
  methods: {
    downloadDate () {
      this.disabledload = true
      let vm = this
      let params = vm.valieForm()
      this.$ajax1({
        url: '/downloadExelByServers',
        data: params,
        done (data) {
          let blob = new Blob([data], {type: 'application/vnd.ms-excel;charset=utf-8'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = '订单查询明细'
          link.click()
          window.URL.revokeObjectURL(link.href)
          vm.disabledload = false
        }
      })
      setTimeout(() => {
        vm.disabledload = false
      }, 20000)
    },
    transVariant (vid, variantValue) {
      this.vid = vid
      this.variantValue = variantValue
      this.dealColName()
      this.initTab()
      this.$ajax({
        url: '/updUserConfig',
        data: {
          'businessType': '001',
          'vid': vid
        },
        done (data) {
        },
        faild (data) {
          alert('绑定失败')
        }
      })
    },
    dealColName () {
      let vm = this
      let string = vm.variantValue + ''
      let arr = string.split(',')
      vm.columnsList = [].concat(arr).map((item) => {
        return {
          title: item,
          field: ('' + item).replace(/\s|\\|\/|（|）|<|>|-/g, '_'),
          width: '120px'
        }
      })
      vm.columnsList.unshift(
        {command: [{
          name: '详情',
          click: function (e) {
            e.preventDefault()
            let tr = $(e.target).closest('tr')
            let data = this.dataItem(tr)
            vm.dataDetails(data.id, data.Order_Item, data.SO)
          }
        }],
          width: '90px'
        }
      )
    },
    getCurrentValue () { // 获取当前变式，如果没有返回默认变式
      let vm = this
      vm.$ajax({
        url: '/queryVarCurrValue',
        method: 'get',
        params: {
          'businessType': '001'
        },
        done (data) {
          vm.vid = data.id
          vm.variantValue = data.variantValue
          vm.dealColName()
          vm.initTab()
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVariant () { // 查询当前业务下所有变式
      let vm = this
      vm.$ajax({
        url: '/queryVariantByType',
        method: 'get',
        params: {
          'businessType': '001'
        },
        done (data) {
          // console.log(vm.$store.state.token.id)
          vm.VariableList = [].concat(data).map((item) => {
            return {
              variantName: item.variantName,
              variantValue: item.variantValue,
              vid: item.id,
              userId: item.userId,
              variantType: item.variantType,
              businessType: item.businessType
            }
          })
          let systemLists = [].concat(data).filter((item) => { // 系统变式，根据系统变式获取全部列名
            return item.variantType === 0
          }).map((item) => {
            let string = item.variantValue + ''
            let systemList = string.split(',')
            return systemList
          })
          vm.systemList = systemLists[0]
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    submitForm (formName) {
      this.initTab()
    },
    initTab () { // 初始化表格
      let vm = this
      $('.dateView').html('')
      $('.dateView').kendoGrid({
        toolbar: ['excel'],
        sortable: true,
        columnMenu: true,
        reorderable: true,
        scrollable: true,
        filterable: true,
        resizable: true,
        columnHide: function (e) {
          console.log(e.column) // 打印隐藏列
        },
        excel: {
          fileName: '我的订单.xlsx',
          allPages: true
        },
        excelExport (e) {
          e.workbook.sheets[0].name = '我的订单'
        },
        columns: vm.columnsList,
        dataSource: {
          transport: {
            read (options) {
              let params = vm.valieForm()
              params['pageNum'] = options.data.page
              params['pageSize'] = options.data.pageSize
              vm.$ajax({
                url: '/queryOrder',
                data: params,
                done (data) {
                  options.success(data)
                },
                fail (msg) {
                  options.error(msg)
                }
              })
            }
          },
          serverPaging: true,
          schema: {
            data: function (response) {
              response.list = response.list.map(item => {
                let newItem = {}
                for (var key in item) {
                  newItem[key.replace(/\s/g, '_')] = item[key]
                }
                return newItem
              })
              return response.list
            },
            total: function (response) {
              return response.total
            }
          }
        },
        pageable: {
          buttonCount: 5,
          page: 1,
          pageSize: 10,
          pageSizes: [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'all']
        }
      })
    },
    valieForm () { // params参数
      let params = {}
      if (this.form.confirmPn !== '') {
        params['confirmPn'] = this.form.confirmPn.replace(/ /g, ',').split(',')
      }
      if (this.form.so !== '') {
        params['so'] = this.form.so.replace(/ /g, ',').split(',')
      }
      if (this.form.matCode !== '') {
        params['matCode'] = this.form.matCode.replace(/ /g, ',').split(',')
      }
      if (this.form.matDesc !== '') {
        params['matDesc'] = this.form.matDesc.replace(/ /g, ',').split(',')
      }
      if (this.form.bpCode !== '') {
        params['bpCode'] = this.form.bpCode.replace(/ /g, ',').split(',')
      }
      if (this.form.bpName !== '') {
        params['bpName'] = this.form.bpName.replace(/ /g, ',').split(',')
      }
      if (this.form.confirmDesc !== '') {
        params['confirmDesc'] = this.form.confirmDesc.replace(/ /g, ',').split(',')
      }
      if (this.form.createDate[0] !== undefined) {
        params['createDateBgn'] = this.form.createDate[0]
        params['createDateEnd'] = this.form.createDate[1]
      }
      if (this.form.conDate[0] !== undefined) {
        params['conDateBgn'] = this.form.conDate[0]
        params['conDateEnd'] = this.form.conDate[1]
      }
      if (this.form.trialDate[0] !== undefined) {
        params['trialDateBgn'] = this.form.trialDate[0]
        params['trialDateEnd'] = this.form.trialDate[1]
      }
      if (this.form.issueDate[0] !== undefined) {
        params['issueDateBgn'] = this.form.issueDate[0]
        params['issueDateEnd'] = this.form.issueDate[1]
      }
      if (this.form.invoiceDate[0] !== undefined) {
        params['invoiceDateBgn'] = this.form.invoiceDate[0]
        params['invoiceDateEnd'] = this.form.invoiceDate[1]
      }
      if (this.form.paDate[0] !== undefined) {
        params['paDateBgn'] = this.form.paDate[0]
        params['paDateEnd'] = this.form.paDate[1]
      }
      if (this.form.logisticsDate[0] !== undefined) {
        params['logisticsDateBgn'] = this.form.logisticsDate[0]
        params['logisticsDateEnd'] = this.form.logisticsDate[1]
      }
      if (this.form.signDate[0] !== undefined) {
        params['signDateBgn'] = this.form.signDate[0]
        params['signDateEnd'] = this.form.signDate[1]
      }
      if (this.form.cancelDate[0] !== undefined) {
        params['cancelDateBgn'] = this.form.cancelDate[0]
        params['cancelDateEnd'] = this.form.cancelDate[1]
      }
      if (this.form.craDate[0] !== undefined) {
        params['craDateBgn'] = this.form.craDate[0]
        params['craDateEnd'] = this.form.craDate[1]
      }
      if (this.form.keyModel.join() !== '') {
        params['keyModel'] = this.form.keyModel
      }
      if (this.form.proSub.join() !== '') {
        params['proSub'] = this.form.proSub
      }
      if (this.form.orderState.join() !== '') {
        params['orderState'] = this.form.orderState
      }
      if (this.form.channel.join() !== '') {
        params['channel'] = this.form.channel
      }
      if (this.form.orderReason.join() !== '') {
        params['orderReason'] = this.form.orderReason
      }
      if (this.form.orderType.join() !== '') {
        params['orderType'] = this.form.orderType
      }
      if (this.form.matType.join() !== '') {
        params['matType'] = this.form.matType
      }
      if (this.form.division.join() !== '') {
        params['division'] = this.form.division
      }
      if (this.form.proSeries.join() !== '') {
        params['proSeries'] = this.form.proSeries
      }
      if (this.form.tcFactory.join() !== '') {
        params['tcFactory'] = this.form.tcFactory
      }
      if (this.form.fhFactory.join() !== '') {
        params['fhFactory'] = this.form.fhFactory
      }
      if (this.form.cusSegment1.join() !== '') {
        params['cusSegment1'] = this.form.cusSegment1
      }
      if (this.form.cusSegment4.join() !== '') {
        params['cusSegment4'] = this.form.cusSegment4
      }
      if (this.form.shipProCode.join() !== '') {
        params['shipProCode'] = this.form.shipProCode
      }
      if (this.form.large.join() !== '') {
        params['large'] = this.form.large
      }
      let isnull = (JSON.stringify(params) === '{}')
      if (isnull) {
        params['init'] = 0
        params['dbName'] = 'FF_IDSS_Data_CON'
        params['tName'] = 'ConNB_SaleOrder_ttl'
        params['vid'] = this.vid
      }
      if (!isnull) {
        params['dbName'] = 'FF_IDSS_Data_CON'
        params['tName'] = 'ConNB_SaleOrder_ttl'
        params['vid'] = this.vid
      }
      return params
    },
    getQueryzdjx () { // 获取重点机型下拉条件
      let vm = this
      vm.$ajax({
        url: '/queryzdjx',
        method: 'get',
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === 'keyModel') {
              vm.keyModel = data[i]
            }
            if (data[i].value === 'proSeries') {
              vm.proSeries = data[i]
            }
            if (data[i].value === 'proSub') {
              vm.proSub = data[i]
            }
          }
        }
      })
    },
    getzdjx () { // 判断重点机型等三个条件是否禁用
      if (this.form.matType[0] === '主机') {
        this.getQueryzdjx()
        this.disabled = false
      }
      if (this.form.matType[0] !== '主机') {
        this.getQueryzdjx()
        this.disabled = true
      }
    },
    getQuerydata () { // 获取查询条件
      let vm = this
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': '通路_0002,订单状态_0001,CRAD_0001,订单类型_0001,PSD_0001,订单原因_0001,物料类型_0001,大区_CON,客户细分1_CON,客户细分4_CON,发货工厂_CONNB,产品组_CONNB,省份_0001'
        },
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === '订单状态_0001') {
              vm.orderState = data[i]
            }
            if (data[i].value === '订单类型_0001') {
              vm.orderType = data[i]
            }
            if (data[i].value === '产品组_CONNB') {
              vm.division = data[i]
            }
            if (data[i].value === '发货工厂_CONNB') {
              vm.fhFactory = data[i]
            }
            if (data[i].value === '物料类型_0001') {
              vm.matType = data[i]
            }
            if (data[i].value === '订单原因_0001') {
              vm.orderReason = data[i]
            }
            if (data[i].value === '省份_0001') {
              vm.shipProCode = data[i]
            }
            if (data[i].value === '客户细分1_CON') {
              vm.cusSegment1 = data[i]
            }
            if (data[i].value === '客户细分4_CON') {
              vm.cusSegment4 = data[i]
            }
            if (data[i].value === '大区_CON') {
              vm.large = data[i]
            }
            if (data[i].value === '通路_0002') {
              vm.channel = data[i]
            }
            if (data[i].value === 'CRAD_0001') {
              vm.CRAD = data[i]
            }
            if (data[i].value === 'PSD_0001') {
              vm.PSD = data[i]
            }
          }
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.disabled = true
    },
    toggleList () {
      let innerbox = document.getElementsByClassName('innerbox')[0]
      if (this.toggle) {
        innerbox.style.display = 'block'
      } else {
        innerbox.style.display = 'none'
      }
      this.toggle = !this.toggle
    },
    details () {
      this.$refs.mymodal.show()
    },
    dataDetails (_id, _orderItem, _so) {
      this.$refs.sodatashow.show(_id, _orderItem, _so)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.orderQuery
  width 100%
  height 100%
  padding 10px
  margin-top 10px
  .lableDate
    width 98%
    margin 10px 1%
    .dateView
      width 100%
      min-height 30px
      height auto
      margin-bottom 10px
  .formBox
    width 98%
    height 100%
    margin 0 1%
    border 1px solid #eceef4
    padding 5px
    .el-form-item
      margin-bottom 4px
    .item1
      height 22px
      overflow hidden
    .item2
      overflow hidden
      width 100%
      .item21,.item22,.item23,.item31,.item41,.item24,.item25
        float left
        width 192px
        margin-left -10px
        .item221
          width 100%
      .item23
        margin-left -35px
      .item31
        width 260px
      .item41
        margin-left -10px
      .item24
        margin-left -30px
      .item25
        margin-left -5px
    .item3
      .el-button--mini
        padding 7px 35px
    .fold
      height 35px
      overflow hidden
      width 100%
      margin-top 3px
      margin-bottom 8px
      padding-bottom 6px
      position relative
      box-shadow 0px 3px 3px 0px rgba(0,0,0,0.1)
      .senior
        width 100%
        background #fafafa
        font-weight 400
        height 35px
        line-height 35px
        font-size 14px
        padding-left 25px
        margin-bottom 8px
      .toggle
        position absolute
        top 0
        right 20px
        height 30px
        transition 0.5s
        a
          display block
          color #37a6cc
          padding 0 15px
          height 30px
          line-height 30px
          text-align center
          &:hover
            color #37a6cc
    .innerbox
      display none
      margin 15px 0px 5px
    .bianshi, .download
      float right
      margin-left 15px
</style>
