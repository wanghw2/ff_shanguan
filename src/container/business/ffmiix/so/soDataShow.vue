<template>
<div class="orderQuery">
  <div class="qResults">
    <div class="qResults-top">
      <div class="qResults-top-left">
        <div class="top-t">
          <h3 class="left-l">160051244</h3>
          <span class="left-r">000010</span>
        </div>
        <div class="br"></div>
        <p class="message1">采购订单编号：AXXXX</p>
        <p class="message1">sold to: 安徽安联胜特信息技术有限公司</p>
      </div>
      <div class="qResults-top-right">
        <div class="top-t">
          <span class="right-l">PN: 80Y70023CD</span>
          <span class="right-r">order Qty：2</span>
        </div>
        <div class="br"></div>
        <p class="message2">Desc: LenovoYOGA920-13IKBBOXI58250U8G25610H</p>
        <p class="message2">Confirm PN: 80Y70023CD</p>
        <p class="message2">Confirm Desc: LenovoYOGA920-13IKBBOXI58250U8G25610H</p>
      </div>
    </div>
    <div class="qResults-center">
      <div class="center-item1">
        <span class="item1">order status</span>
        <span class="item2">已发货</span>
        <span class="item1">数签状态</span>
        <span class="item3">ZA1/ZA2</span>
      </div>
      <div class="center-item1">
        <span class="item1">order date</span>
        <span class="item2">2017/11/6</span>
        <span class="item1">CRAD</span>
        <span class="item3">2017/11/7</span>
      </div>
      <div class="center-item1">
        <span class="item1">FPSD</span>
        <span class="item2">2017/11/7</span>
        <span class="item1">PSD</span>
        <span class="item3">2017/11/10</span>
      </div>
    </div>
    <div class="qResults-bottom">
      <div class="bottom-left">
        <h5 class="status">status trucking</h5>
        <div class="bottom-item">
          <span class="item1">……</span>
          <span class="item2">客户签收日期</span>
          <span class="item3"></span>
        </div>
        <div class="bottom-item">
          <span class="item1">……</span>
          <span class="item2">物流发货日期</span>
          <span class="item3"></span>
        </div>
        <div class="bottom-item">
          <span class="item1">……</span>
          <span class="item2">开票日期</span>
          <span class="item3"></span>
        </div>
        <div class="bottom-item">
          <span class="item1">2017/11/10</span>
          <span class="item2">发货过账日期</span>
          <span class="item3">49xxxxxx</span>
        </div>
        <div class="bottom-item">
          <span class="item1">2017/11/10</span>
          <span class="item2">89交货单</span>
          <span class="item3">89xxxxxx</span>
        </div>
        <div class="bottom-item">
          <span class="item1">2017/11/9</span>
          <span class="item2">Credit</span>
          <span class="item3">A/B/D</span>
        </div>
        <div class="bottom-item">
          <span class="item1">2017/11/8</span>
          <span class="item2">确认日期</span>
          <span class="item3"></span>
        </div>
        <div class="bottom-item">
          <span class="item1">2017/11/6</span>
          <span class="item2">order date</span>
          <span class="item3"></span>
        </div>
      </div>
      <div class="bottom-right">
        <h5 class="status">status analysis</h5>
        <div class="bottom-item">
          <span class="item1">创建日期-CRAD</span>
          <span class="item2">1</span>
          <span class="item3">CRAD-确认日期</span>
          <span class="item4">1</span>
        </div>
        <div class="bottom-item">
          <span class="item1">确认日期-PSD</span>
          <span class="item2">1</span>
          <span class="item3">确认日期-交货日期</span>
          <span class="item4">0</span>
        </div>
        <div class="bottom-item">
          <span class="item1">交货日期-发货日期</span>
          <span class="item2">1</span>
          <span class="item3">Shipdate-SO date</span>
          <span class="item4">4</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.orderQuery
  width 100%
  height 100%
  margin-top 10px
  .qResults
    width 74%
    height 300px
    font-size 12px
    margin 40px 13%  180px
    .qResults-bottom
      font-size 12px
      line-height 22px
      width 100%
      height 240px
      border 1px solid #e8e8e8
      .bottom-left,.bottom-right
        width 50%
        height 233px
        float left
        .status
          padding-left 10px
          height 30px
          line-height 30px
          width 100%
          background #f3f3f3
          margin-bottom 7px
      .bottom-left
        border-right 1px solid #e8e8e8
        .bottom-item
          border-bottom 1px dashed #e8e8e8
          padding-left 15px
          .item1,.item2,.item3
            display inline-block
          .item1
            width 130px
          .item2
            width 170px
      .bottom-right
        .bottom-item
          padding-left 15px
          border-bottom 1px dashed #e8e8e8
          .item1,.item2,.item3,.item4
            display inline-block
            height 35px
            line-height 35px
          .item1
            width 120px
          .item2
            width 80px
          .item3
            width 120px
    .qResults-center
      width 100%
      height 110px
      border 1px solid #e8e8e8
      padding 5px 10px
      .center-item1
        height auto
        .item1,.item2,.item3
          width 15%
          display inline-block
          height 30px
          color #000
          line-height 30px
          border-bottom 1px dashed #e8e8e8
        .item2,.item3
          color #888a92
        .item3
          width 52%
    .qResults-top
      width 100%
      height 100px
      border 1px solid #e8e8e8
      padding 10px
      background #f3f3f3
      .qResults-top-left,.qResults-top-right
        width 49%
        height 80px
        float left
        .br
          width 100%
          height 1px
          border-bottom 1px solid #e8e8e8
          margin-bottom 5px
        .top-t
          height 25px
          overflow hidden
      .qResults-top-left
        .left-l
          width 90px
          margin-right 150px
        .left-l,.left-r
          float left
        .message1
          font-size 14px
          color #000
          margin-top 13px
          &:last-child
            margin-top 0px
      .qResults-top-right
        .right-l,.right-r
          float left
          margin-right 100px
          color #a9a9a9
        .message2
          color #a9a9a9

</style>
