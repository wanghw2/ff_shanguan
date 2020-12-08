<template>
  <div class="messbox">
    <template >
      <el-alert
        v-for="(item,index) in alertData"
        :key="index"
        :title='item.message'
        :type="item.type"
        :closable="false">
      </el-alert>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    alertData: {
      type: Array,
      default: function() {
        return [
          { type: "error", message: "Think选件运作低风险" },
          { type: "info", message: "Think选件运作低风险" },
          { type: "success", message: "Think选件运作低风险" },
          { type: "warning", message: "Think选件运作低风险" }
        ];
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.messbox {
  width: 100%;
  min-height: 33px;
  height: auto;
  margin: 5px 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 3px 7px 3px rgba(0, 0, 0, 0.1);

  .el-alert--error, .el-alert--warning, .el-alert--info, .el-alert--success {
    background: #fff url('/static/imgs/success.png') no-repeat 20px 10px;
    color: #000;
  }

  .el-alert--warning {
    background: #fff url('/static/imgs/success1.png') no-repeat 20px 10px;
  }

  .el-alert--info {
    background: #fff url('/static/imgs/success2.png') no-repeat 20px 10px;
  }

  .el-alert--success {
    background: #fff url('/static/imgs/success3.png') no-repeat 20px 10px;
  }
}
</style>
