<template>
<div class="orderQuery-show" v-show="isHide">
  <div class="close"><i class="el-icon-close" @click="hide()"></i></div>
  <div class="qResults">
    <div class="qResults-top">
      <div class="qResults-top-left">
        <div class="top-t">
          <span class="left-l">{{detailDate.SO}}</span>
          <span class="left-r">{{detailDate.Order_Item}}</span>
        </div>
        <p class="message1">BP Name: {{detailDate.BP_Name}}</p>
        <p class="message1">Reseller BP Name: {{detailDate.Reseller_BP_Name}}</p>
        <p class="message1">Ship to Address: {{detailDate.Ship_to_Address}}</p>
      </div>
      <div class="qResults-top-right">
        <div class="top-t">
          <span class="right-l">PN: {{detailDate.PN}}</span>
          <span class="right-r">Qty：{{detailDate.Qty}}</span>
        </div>
        <p class="message2">Desc: {{detailDate.Desc}}</p>
        <p class="message2">业务类型: {{detailDate.业务类型}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Family ECC: {{detailDate.Family_ECC}}</p>
        <p class="message2">ND: {{detailDate.ND}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Think业务线: {{detailDate.Think业务线}}</p>
      </div>
    </div>
    <div class="qResults-center">
      <div class="center-item">
        <div class="item">
          <span class="left">订单状态:</span>
          <span class="right">{{detailDate.订单状态}}</span>
        </div>
        <div class="item">
          <span class="left">采购订单编号:</span>
          <span class="right">{{detailDate.采购订单编号}}</span>
        </div>
        <div class="item">
          <span class="left">用户状态:</span>
          <span class="right">{{detailDate.用户状态}}</span>
        </div>
        <div class="item">
          <span class="left">信用状态:</span>
          <span class="right">{{detailDate.信用状态}}</span>
        </div>
        <div class="item">
          <span class="left">交货单号:</span>
          <span class="right">{{detailDate.交货单号}}</span>
        </div>
        <div class="item">
          <span class="left">生产工单:</span>
          <span class="right">{{detailDate.MO}}</span>
        </div>
        <div class="item">
          <span class="left">订单交付类型:</span>
          <span class="right">{{detailDate.订单交付类型}}</span>
        </div>
      </div>
      <div class="center-item">
        <div class="item">
          <span class="left">创建日期:</span>
          <span class="right">{{detailDate.创建日期}}</span>
        </div>
        <div class="item">
          <span class="left">CRAD:</span>
          <span class="right">{{detailDate.CRAD}}</span>
        </div>
        <div class="item">
          <span class="left">FPSD:</span>
          <span class="right">{{detailDate.FPSD}}</span>
        </div>
        <div class="item">
          <span class="left">PSD:</span>
          <span class="right">{{detailDate.PSD}}</span>
        </div>
        <div class="item">
          <span class="left">发货过账日期:</span>
          <span class="right">{{detailDate.发货过账日期}}</span>
        </div>
        <div class="item">
          <span class="left">急单描述:</span>
          <span class="right">{{detailDate.急单描述}}</span>
        </div>
        <div class="item">
          <span class="left">重点机型描述:</span>
          <span class="right">{{detailDate.重点机型描述}}</span>
        </div>
      </div>
      <div class="center-item">
        <div class="item">
          <span class="left">BP Code:</span>
          <span class="right">{{detailDate.BP_Code}}</span>
        </div>
        <div class="item">
          <span class="left">Reseller BP Code:</span>
          <span class="right">{{detailDate.Reseller_BP_Code}}</span>
        </div>
        <div class="item">
          <span class="left">商机编号:</span>
          <span class="right">{{detailDate.商机编号}}</span>
        </div>
        <div class="item">
          <span class="left">最终客户:</span>
          <span class="right">{{detailDate.最终客户}}</span>
        </div>
        <div class="item">
          <span class="left">大区:</span>
          <span class="right">{{detailDate.大区}}</span>
        </div>
        <div class="item">
          <span class="left">战区:</span>
          <span class="right">{{detailDate.战区}}</span>
        </div>
        <div class="item">
          <span class="left">省份:</span>
          <span class="right">{{detailDate.Ship_to_Province_Name}}</span>
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
  </div>
  <div class="block">
    <h2>我的备注
      <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
    </h2>
    <div class="note">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="remark">
      </el-input>
      <el-button class="save" @click='submitsave' size="mini" type="primary">保存</el-button>
    </div>
  </div>
  <div class="block">
    <h2>3S（SN明细）
      <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
    </h2>
    <div class="sn">
      <v-table4
        ref="SNn"
        :tableName="'ConNB_Workflow_SN'"
        :source="'FF_IDSS_Data_CON'"
        :fileName="'SN明细'">
      </v-table4>
    </div>
  </div>
  <div class="block">
    <h2>供应信息
      <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
    </h2>
    <div class="supply">
    </div>
  </div>
  <div class="block">
    <h2>CRAD&PSD信息
      <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
    </h2>
    <div class="cradpsd">
      <v-table5
        ref="CRADpsd"
        :tableName="'ConNB_SaleOrder_Month_TTL'"
        :source="'FF_IDSS_Data_CON'"
        :orderItem='orderItem'
        :so='so'
        :fileName="'CRAD&PSD信息'">
      </v-table5>
    </div>
  </div>
  <div class="block">
    <h2>特征值
      <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
    </h2>
    <div class="charactvalue">
    </div>
  </div>
  <div class="block">
    <h2>BOM Change
      <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
    </h2>
    <div class="bomChange">
    </div>
  </div>
  <div class="block">
    <h2>物流信息
      <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
    </h2>
    <div class="logistics">
    </div>
  </div>
</div>
</template>
<script>
import VTable4 from '@/components/public/vtable4'
import VTable5 from '@/components/public/vtable5'
export default {
  data () {
    return {
      detailDate: [],
      remark: '',
      isHide: false,
      toggle: false,
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      toggle5: false,
      toggle6: false,
      orderItem: '',
      so: ''
    }
  },
  components: {
    VTable4,
    VTable5
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
      this.toggle1 = true
      this.toggle2 = true
      this.toggle3 = true
      this.toggle4 = true
      this.toggle5 = true
      this.toggle6 = true
      this.toggleList()
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
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
          console.log(data)
          let detailDate = [].concat(data).map(item => {
            let newItem = {}
            // 处理列名带有空格的情况
            for (var key in item) {
              newItem[key.replace(/\s/g, '_')] = item[key]
            }
            return newItem
          })
          vm.detailDate = detailDate[0]
          console.log(vm.detailDate)
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
    },
    toggleList1 () {
      let supply = document.getElementsByClassName('supply')[0]
      if (this.toggle1) {
        supply.style.display = 'none'
      } else {
        supply.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let charactvalue = document.getElementsByClassName('charactvalue')[0]
      if (this.toggle2) {
        charactvalue.style.display = 'none'
      } else {
        charactvalue.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    toggleList3 () {
      let cradpsd = document.getElementsByClassName('cradpsd')[0]
      if (this.toggle3) {
        cradpsd.style.display = 'none'
      } else {
        cradpsd.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let logistics = document.getElementsByClassName('logistics')[0]
      if (this.toggle4) {
        logistics.style.display = 'none'
      } else {
        logistics.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let bomChange = document.getElementsByClassName('bomChange')[0]
      if (this.toggle5) {
        bomChange.style.display = 'none'
      } else {
        bomChange.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
    },
    toggleList6 () {
      let note = document.getElementsByClassName('note')[0]
      if (this.toggle6) {
        note.style.display = 'none'
      } else {
        note.style.display = 'block'
      }
      this.toggle6 = !this.toggle6
    },
    hide () {
      this.isHide = false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.orderQuery-show
  width 100%
  height auto
  position: absolute
  left: 0
  top: 55px
  z-index: 998
  border-radius 4px
  background #fafafa
  .block
    width 100%
    background #fafafa
    margin 10px 0px
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
    .qResults-center
      width 96%
      height 187px
      overflow hidden
      margin -40px 2% 20px
      background #fff
      padding 10px
      .center-item
        padding 0px 30px
        float left
        width 33%
        height 100%
        border-right 1px solid #e8e8e8
        &:last-child
          border 0px
        .item
          width 100%
          margin-left 10px
          .left,.right
            display block
            float left
            height 25px
            line-height 25px
            font-size 12px
          .left
            width 60%
            font-weight 600
    .qResults-top
      width 100%
      height 190px
      margin-top -10px
      padding 20px 3%
      background url(/static/imgs/banner.png) repeat-x
      color #fff
      overflow hidden
      .qResults-top-left,.qResults-top-right
        width 46%
        height auto
        float left
      .qResults-top-left
        .top-t
          height 30px
          margin-bottom 30px
          .left-l,.left-r
            margin-right 80px
            font-size 28px
            font-weight 500
            float left
            height 100%
        .message1
          font-size 14px
          height 21px
          line-height 21px
      .qResults-top-right
        padding-left 120px
        .top-t
          margin-top 25px
          height 30px
        .right-l,.right-r
          float left
          font-size 14px
          height 21px
          margin-right 100px
        .message2
          font-size 14px
          height 21px
          line-height 21px
.el-icon-success
  color green
.el-icon-error
  color red
.close
  position absolute
  top 0px
  right 28px
  z-index 2000
  font-size 14px
  text-align center
  vertical-align middle
  width 20px
  height 20px
  display block
  background #fff
  border-radius 10px
</style>
