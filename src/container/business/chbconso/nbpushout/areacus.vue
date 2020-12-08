<template>
  <div class="push-box">
    <div class="target" style="width:100%;height:500px;overflow:hidden;">
      <!-- <p>你的浏览器不支持iframe标签</p> -->
      <iframe width="100%" height="100%" src="http://10.99.5.22:81/Reports/powerbi/承载率分析?rs:embed=true" frameborder="0" allowFullScreen="true"></iframe>
      <!-- <iframe width="100%" height="100%" src="http://10.99.5.22:81/Reports/powerbi/ConNB_Sellout_Dashboard?rs:embed=true" frameborder="0" allowFullScreen="true"></iframe> -->
      <!-- <iframe width="100%" height="600" src="http://yangshuang6-3gl:81/Reports/powerbi/预测?rs:embed=true" frameborder="0" allowFullScreen="true"></iframe> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.push-box
  width 100%
  height 100%
  overflow hidden
  padding 10px
</style>
