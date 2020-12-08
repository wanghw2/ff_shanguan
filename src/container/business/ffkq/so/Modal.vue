<template>
<div v-show="isHide" class="fade" >
  <div class="box">
    <div class="close"><i class="el-icon-close" @click="hide()"></i></div>
    <div class="container">
      <el-select class="search" clearable size="mini" v-model="value1" filterable placeholder="请选择变式">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        class="input"
        placeholder="我的变式名"
        v-model="input1"
        size="mini"
        clearable>
      </el-input>
      <el-transfer class="transfer" v-model="value2" :data="data"></el-transfer>
      <el-button class="save" size="mini" type="primary" >保存</el-button>
       <el-button class="delete" size="mini" type="primary" >删除</el-button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: '',
      input1: '',
      isHide: false,
      data: generateData(),
      value2: []
    }
  },
  props: ['systemList', 'VariableList'],
  methods: {
    show () {
      this.isHide = true
    },
    hide () {
      this.isHide = false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fade
  position: fixed
  left: 0
  top: 50px
  width: 100%
  height: 100%
  z-index: 998
  background: rgba(0,0,0, 0.6)
  opacity: 1
  border-radius 4px
  .box
    width 500px
    height 400px
    background #fff
    margin-left 32%
    margin-top 50px
    position relative
    border-radius 5px
    .close
      position absolute
      top 0px
      right -28px
      font-size 14px
      text-align center
      vertical-align middle
      width 20px
      height 20px
      display block
      background #fff
      border-radius 10px
    .container
      float left
      margin-left 23px
      margin-top 20px
      .search
        margin-bottom 10px
        width 45%
      .input
        width 45%
        margin-bottom 10px
        margin-left 41px
      .save,.delete
        float right
        margin-top 10px
      .delete
        margin-right 20px
</style>
