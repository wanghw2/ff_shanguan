<template>
<div class="orderQuery-show">
  <div class="qResults">
    <ul class="qResults-top">
      <li><span>PN:</span><i>3874325y845</i></li>
      <li><span>QTY:</span><i>dvdvfv</i></li>
      <li><span>Customer to sold:</span><i>aasvfvdda</i></li>
      <li><span>ISID:</span><i>dvferf34</i></li>
      <li><span>MFG PO:</span><i>sfd33e</i></li>
      <li><span>MFG PO Item:</span><i>dsvf3345r</i></li>
      <li><span>MFG SO:</span><i>sdvdvff</i></li>
      <li><span>MFG SO Item:</span><i>3233333fd</i></li>
      <li><span>Site:</span><i>sdcds23</i></li>
      <li><span>Family:</span><i>232323</i></li>
      <li><span>Think 业务线:</span><i>cdf</i></li>
      <li><span>业务类型:</span><i>dvdvf</i></li>
      <li><span>Order Date:</span><i>dfv</i></li>
      <li><span>FPSD:</span><i>adadfdada</i></li>
      <li><span>Re-PSD:</span><i>sdsd</i></li>
      <li><span>订单接收日期:</span><i>20180303</i></li>
    </ul>
    <div class="qResults-center">
      <div class="center-item">
        <div class="item">
          <span class="left">当前Step :</span>
          <span class="right">{{detailDate.订单状态}}</span>
        </div>
        <div class="item">
          <span class="left">Offspc来源:</span>
          <span class="right">{{detailDate.采购订单编号}}</span>
        </div>
        <div class="item">
          <span class="left">需求ID:</span>
          <span class="right">{{detailDate.用户状态}}</span>
        </div>
        <div class="item">
          <span class="left">Offspc 编码:</span>
          <span class="right">{{detailDate.信用状态}}</span>
        </div>
        <div class="item">
          <span class="left">DPMS 状态:</span>
          <span class="right">{{detailDate.交货单号}}</span>
        </div>
      </div>
      <div class="center-item">
        <div class="item">
          <span class="left">Remark:</span>
          <span class="right">{{detailDate.创建日期}}</span>
        </div>
        <div class="item">
          <span class="left">OFFSPC 原因:</span>
          <span class="right">{{detailDate.CRAD}}</span>
        </div>
        <div class="item">
          <span class="left">Offspc 根本原因:</span>
          <span class="right">{{detailDate.FPSD}}</span>
        </div>
        <div class="item">
          <span class="left">商品类型:</span>
          <span class="right">{{detailDate.PSD}}</span>
        </div>
      </div>
      <div class="center-item">
        <div class="item">
          <span class="left">From SBB:</span>
          <span class="right">{{detailDate.BP_Code}}</span>
        </div>
        <div class="item">
          <span class="left">From SBB Dec:</span>
          <span class="right">{{detailDate.Reseller_BP_Code}}</span>
        </div>
        <div class="item">
          <span class="left">From PN:</span>
          <span class="right">{{detailDate.商机编号}}</span>
        </div>
        <div class="item">
          <span class="left">From SBB Cost:</span>
          <span class="right">{{detailDate.最终客户}}</span>
        </div>
      </div>
      <div class="center-item">
        <div class="item">
          <span class="left">To SBB:</span>
          <span class="right">{{detailDate.BP_Code}}</span>
        </div>
        <div class="item">
          <span class="left">To SBB Dec:</span>
          <span class="right">{{detailDate.Reseller_BP_Code}}</span>
        </div>
        <div class="item">
          <span class="left">to PN:</span>
          <span class="right">{{detailDate.商机编号}}</span>
        </div>
        <div class="item">
          <span class="left">To SBB Cost:</span>
          <span class="right">{{detailDate.最终客户}}</span>
        </div>
      </div>
      <div class="center-item">
        <div class="item">
          <span class="left">OE 建议:</span>
          <span class="right">20180508</span>
        </div>
        <div class="item">
          <span class="left">OE 建议时间:</span>
          <span class="right">20180508</span>
        </div>
        <div class="item">
          <span class="left">DPMS 提交时间:</span>
          <span class="right">20180508</span>
        </div>
        <div class="item">
          <span class="left">DPMS 审批时间:</span>
          <span class="right">20180508</span>
        </div>
        <div class="item">
          <span class="left">FF审批:</span>
          <span class="right">asadsdad</span>
        </div>
        <div class="item">
          <span class="left">FF审批时间:</span>
          <span class="right">20180606</span>
        </div>
        <div class="item">
          <span class="left">MO审批:</span>
          <span class="right">20180606</span>
        </div>
        <div class="item">
          <span class="left">MO审批时间:</span>
          <span class="right">20180203</span>
        </div>
        <div class="item">
          <span class="left">Sales 审批:</span>
          <span class="right">20180203</span>
        </div>
        <div class="item">
          <span class="left">Sales 审批时间:</span>
          <span class="right">20180807</span>
        </div>
      </div>
    </div>
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
          <span class="title">订单接收日期</span>
          <span class="data">1</span>
          <span class="status"><i class="el-icon-success"></i></span>
        </div>
        <div class="bottom-r-item">
          <span class="title">DPMS 提交时间</span>
          <span class="data">1</span>
          <span class="status"><i class="el-icon-success"></i></span>
        </div>
        <div class="bottom-r-item">
          <span class="title">DPMS 审批时间</span>
          <span class="data">1</span>
          <span class="status"><i class="el-icon-success"></i></span>
        </div>
        <div class="bottom-r-item">
          <span class="title">FF审批</span>
          <span class="data">1</span>
          <span class="status"><i class="el-icon-success"></i></span>
        </div>
        <div class="bottom-r-item">
          <span class="title">FF审批时间</span>
          <span class="data">8</span>
          <span class="status"><i class="el-icon-success"></i></span>
        </div>
        <div class="bottom-r-item">
          <span class="title">MO审批</span>
          <span class="data">10</span>
          <span class="status"><i class="el-icon-error"></i></span>
        </div>
        <div class="bottom-r-item">
          <span class="title">MO审批时间</span>
          <span class="data">10</span>
          <span class="status"><i class="el-icon-error"></i></span>
        </div>
        <div class="bottom-r-item">
          <span class="title">Sales 审批</span>
          <span class="data">10</span>
          <span class="status"><i class="el-icon-error"></i></span>
        </div>
        <div class="bottom-r-item">
          <span class="title">Sales 审批时间</span>
          <span class="data">10</span>
          <span class="status"><i class="el-icon-error"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="block">
    <v-table
      ref="SNn"
      :tableName="'ConNB_Workflow_SN'"
      :source="'FF_IDSS_Data_CON'"
      :fileName="'SN明细'">
    </v-table>
  </div>
</div>
</template>
<script>
import VTable from '@/components/public/vtable4'
export default {
  data () {
    return {
      detailDate: {
        BP_Code: '0100043736',
        BP_Name: '翰林汇信息产业股份有限公司',
        CRAD: '2018-05-01',
        CRAD财周: 'W1',
        CRAD财季: 'Q1',
        CRAD财年: '2018',
        CRAD财月: '5月',
        Channel: '11',
        Confirm: 'N',
        Confirm_Desc: 'WARRANTY ThinkPad L warranty 1 year(V)',
        Confirm_PN: '5WS0R51222',
        DataDownloadTime: '2018-06-19 1: : 5',
        Delivery_Block: 'ZG',
        Desc: 'WARRANTY ThinkPad L warranty 1 year(V)',
        Division: '86',
        Dlv: 'N',
        FF_Code: 'Think_T_06',
        From: 'LastMonth_Rolling_Order',
        GI: 'N',
        'Higher-level': '000000',
        ID: 8571082,
        Ini_Plant: '0176',
        Invoice: 'N',
        LastUpdateTime: '2018-06-19 1: : 5',
        MTM: '5WS0R51222',
        Material_Type: '选件',
        ND: 'Highly',
        Order: 'N',
        Order_Item: '000010',
        Order_Reason: 'NSO',
        Order_Reason_Desc: 'NSO',
        Order_Type: 'ZOR',
        PN: '5WS0R51222',
        Plant: '0176',
        Product_Hierarchy: 'YY18',
        Province_Code: '010',
        Province_Name: '北京',
        Qty: 100,
        Refuse: 'N',
        Region_Code: '100121',
        Region_Name: '四川',
        Reseller_BP_Code: '0100043736',
        Reseller_BP_Name: '翰林汇信息产业股份有限公司',
        Return: 'N',
        SO: '0160127175',
        Sales_Org: 'CN65',
        Ship_to_Address: '自提信息 余习武（421022197012047674）/华大乐(44',
        Ship_to_Province_Code: '020',
        Ship_to_Province_Name: '上海',
        Think业务线: 'Think_T_OPT',
        Version: '2018-06-19 1: : 5',
        交货优先权: '00',
        产品类型: 'OPT',
        代理价: 155,
        代理总价: 15500,
        信用状态: 'B',
        净价: 133.62,
        创建日期: '2018-04-25',
        创建时间: '2018-04-25 1: : 2',
        前返价: 155,
        前返总价: 15500,
        大区: '西南大区',
        总净价: 13362.07,
        战区: '川渝战区',
        来单工厂: '上海',
        来单财周: 'W4',
        来单财季: 'Q1',
        来单财年: '2018',
        来单财月: '4月',
        用户状态: 'za1',
        订单状态: '欠单未数签',
        订单状态Aging: '55天_23时_7分',
        订单状态编码: '110',
        订单财周: 'W3',
        订单财季: 'Q1',
        订单财年: '2018',
        订单财月: '6月',
        采购订单编号: 'A100043736P7949',
        首次CRAD: '2018-05-01'
      },
      remark: '',
      toggle: false,
      orderItem: '',
      so: ''
    }
  },
  components: {
    VTable
  },
  methods: {
    submitsave () {
      let vm = this
      vm.$ajax({
        url: '/soruRemark',
        data: {
          'tableName': 'ConDT_SaleOrder_Remark',
          'so': vm.so,
          'remark': vm.remark
        },
        done (data) {
          vm.remark = ''
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    show (_id, _orderItem, _so) {
      this.orderItem = _orderItem
      this.so = _so
      this.isHide = true
      this.toggle = true
      this.toggleList()
      let vm = this
      vm.$ajax({
        url: '/queryOrderDetail',
        method: 'get',
        params: {
          'dbName': 'FF_IDSS_Data_Think',
          'tableName': 'Think_SaleOrder_TTL',
          'id': _id
        },
        done (data) {
          let detailDate = [].concat(data).map(item => {
            let newItem = {}
            // 处理列名带有空格的情况
            for (var key in item) {
              newItem[key.replace(/\s/g, '_')] = item[key]
            }
            return newItem
          })
          vm.detailDate = detailDate[0]
        },
        fail (msg) {
          alert(msg)
        }
      })
      vm.$refs.CRADpsd.getColumns()
      vm.$refs.SNn.getColumns()
    },
    toggleList () {
      let sn = document.getElementsByClassName('sn')[0]
      if (this.toggle) {
        sn.style.display = 'none'
      } else {
        sn.style.display = 'block'
      }
      this.toggle = !this.toggle
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.orderQuery-show
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .block
    width 100%
    height auto
    overflow hidden
    h2
      width 96%
      margin 0 2%
      height 38px
      line-height 38px
      font-weight normal
      box-shadow: 0 2px 8px #ccc
      font-size 14px
      padding 0 20px
      margin-bottom 5px
      background #fff
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
    .sn,.supply,.charactvalue,.cradpsd,.logistics,.bomChange,.note
      width 96%
      margin 0 2%
      padding 5px
      min-height 40px
      height auto
      display none
      overflow hidden
      background #fff
    .note
      .save
        float right
        margin-top 5px
      .el-button--mini
        padding 5px 7px
  .qResults
    width 100%
    height 100%
    font-size 12px
    .qResults-bottom
      width 96%
      height 240px
      margin-left 2%
      background #fff
      margin-bottom 10px
      .bottom-right
        float left
        width 50%
        height 240px
        overflow-y auto
        padding-top 20px
        .bottom-r-item
          width 100%
          padding-left 50px
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
        overflow-y auto
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
    .qResults-center
      width 96%
      height 192px
      overflow hidden
      margin -40px 2% 20px
      background #fff
      padding 10px
      .center-item
        padding 0px 15px
        float left
        width 20%
        height 100%
        overflow auto
        border-right 1px solid #e8e8e8
        &:last-child
          border 0px
        .item
          width 100%
          margin-left 10px
          .left,.right
            display block
            float left
            width 50%
            height 25px
            line-height 25px
            font-size 12px
          .left
            width 50%
            font-weight 600
    .qResults-top
      width 100%
      height 190px
      margin-top -10px
      padding 20px 3%
      background url(/static/imgs/banner.png) repeat-x
      color #fff
      overflow hidden
      li
        width 24%
        height 22px
        float left
        span
          display inline-block
          min-width 100px
          font-weight 600
          font-size 13px
          float left
          height 22px
          margin-right 10px
        i
          font-style normal
          display inline-block
          font-size 13px
          width auto
          float left
          height 22px
.el-icon-success
  color green
.el-icon-error
  color red
</style>
