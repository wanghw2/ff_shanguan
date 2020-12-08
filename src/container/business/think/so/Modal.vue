<template>
<div v-show="isHide" class="fade" >
  <div class="modal-box">
    <div class="close"><i class="el-icon-close" @click="hide()"></i></div>
    <div class="container">
      <el-select class="search" clearable size="mini" v-model="vid" @change="getChoose()" filterable placeholder="请选择变式">
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
        v-model="newName"
        size="mini"
        clearable>
      </el-input>
      <el-transfer class="transfer" v-model="transferValue" :data="variantData"></el-transfer>
      <el-button v-show="isHide1" class="save" size="mini" type="primary" @click="save" >{{saveMessage}}</el-button>
       <el-button v-show="isHide2" class="delete" size="mini" type="primary" @click="delet" >删除</el-button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    systemList: {
      type: Array,
      default: function () {}
    },
    VariableList: {
      type: Array,
      default: function () {}
    },
    saveDelet: {
      type: Function,
      default: function () {}
    }
  },
  data () {
    return {
      saveMessage: '新增',
      variantType: '',
      options: [], // 变式全部选项
      variantName: '', // 下拉框选择变式的名字
      newName: '', // 变式另存名字，新增变式名字
      isHide: false, // 控制显示和隐藏样式
      isHide1: true, // 控制显示和隐藏样式
      isHide2: false, // 控制显示和隐藏样式
      variantData: [], // 变式左侧所有列的值
      variantValue: '', // 字符串形式的变式列名
      vid: '', // 变式id
      userId: '', // 用户id
      transferValue: [], // 变式右侧所有列的值
      businessType: '001' // 变式的业务线类型
    }
  },
  methods: {
    save () {
      let variantValueArr = [] // 将索引值形式的数组转换成字符串形式的值
      for (let i = 0; i < this.transferValue.length; i++) {
        variantValueArr.push(this.systemList[this.transferValue[i]])
      }
      let vm = this
      let message = ''
      if (vm.saveMessage === '新增' || vm.saveMessage === '复制') {
        vm.$ajax({
          url: '/variantRepeat',
          method: 'get',
          params: {
            'variantName': vm.newName
          },
          done (data) {
          },
          fail (msg) {
            alert(msg)
            message = msg
          }
        })
      }
      setTimeout(() => {
        if (message === '变式名字重复') return
        if (vm.saveMessage === '新增' || vm.saveMessage === '更新') {
          vm.$ajax({
            url: '/addVariant',
            data: {
              'businessType': vm.businessType,
              'variantValue': variantValueArr.toString(),
              'vid': vm.vid,
              'variantName': vm.newName
            },
            done (data) {
              alert(data)
              vm.transferValue = []
              vm.vid = ''
              vm.newName = ''
              vm.variantValue = ''
              vm.saveMessage = '新增'
              vm.isHide2 = false
              vm.$emit('save-delet') // 重新获取当前所有业务线
              setTimeout(() => {
                vm.getOptions() // 要先执行vm.$emit('save-delet')，所以需要延迟
              }, 1000)
            },
            faild (data) {
              alert('添加失败')
            }
          })
        }
        if (vm.saveMessage === '复制') {
          vm.$ajax({
            url: '/saveAsVariant', // 如果不是用户自己变式，复制为自己的变式
            data: {
              'vid': vm.vid,
              'variantName': vm.newName
            },
            done (data) {
              alert(data)
              vm.transferValue = []
              vm.vid = ''
              vm.newName = ''
              vm.variantValue = ''
              vm.saveMessage = '新增'
              vm.$emit('save-delet') // 重新获取当前所有业务线
              setTimeout(() => {
                vm.getOptions() // 要先执行vm.$emit('save-delet')，所以需要延迟
              }, 1000)
            },
            faild (data) {
              alert('添加失败')
            }
          })
        }
      }, 1000)
    },
    delet () {
      let vm = this
      vm.$ajax({
        url: '/delUserVariant',
        method: 'get',
        params: {
          'vid': vm.vid,
          'businessType': vm.businessType
        },
        done (data) {
          alert(data)
          vm.transferValue = []
          vm.newName = ''
          vm.vid = ''
          vm.variantValue = ''
          vm.saveMessage = '新增'
          vm.isHide2 = false
          vm.$emit('save-delet')
          setTimeout(() => {
            vm.getOptions()
          }, 1000)
        },
        faild (data) {
          alert('删除失败')
        }
      })
    },
    getChoose () { // 点击选择变式触发事件
      this.isHide1 = false
      this.isHide2 = false
      for (let i = 0; i < this.options.length; i++) {
        if (this.vid === this.options[i].value) { // 根据选择的值vid得到对应
          this.variantValue = this.options[i].variantValue // 字符串形式的列名
          this.variantName = this.options[i].variantName // 变式的名字
          this.businessType = this.options[i].businessType // 业务线类型，用于传参
          this.userId = this.options[i].userId
          this.variantType = this.options[i].variantType
        }
      }
      this.newName = this.variantName // 删除或修改的时候，输入框显示我的变式名
      if (this.vid === '') {
        this.isHide1 = true
        this.isHide2 = true
        this.newName = ''
        this.transferValue = []
      }
      if (this.userId === this.$store.state.token.id && this.variantType === 2) {
        this.saveMessage = '更新'
        this.isHide1 = true
        this.isHide2 = true
      }
      if (this.userId !== this.$store.state.token.id && this.variantType === 2) {
        this.saveMessage = '复制'
        this.isHide1 = true
        this.isHide2 = false
      }
      // 处理获得的字符串形式的列名，先转换成数组，然后再转换成每个元素在总数组中对应的索引值组成的数组，作为变式右侧所有列的值
      let systemList = this.systemList
      let oldArr = this.variantValue.split(',')
      let newArr = []
      let oldArrValue = ''
      for (oldArrValue of oldArr) {
        for (let i = 0; i < systemList.length; i++) {
          if (systemList[i].indexOf(oldArrValue) >= 0) {
            newArr.push(i)
          }
        }
      }
      this.transferValue = Array.from(new Set(newArr)) // 数组去重
      if (this.variantValue === '') {
        this.transferValue = []
      }
    },
    generateData () { // 获取变式左侧列表
      let columns = this.systemList // 根据订单查询[系统的值]得到，订单查询系统包含全部的列名
      columns.forEach((column, index) => {
        this.variantData.push({
          label: column,
          key: index
        })
      })
    },
    getOptions () {
      this.options = [].concat(this.VariableList).map((item) => {
        return {
          label: item.variantName,
          variantName: item.variantName,
          value: item.vid, // value值不允许有重复，选id作为选择条件
          variantValue: item.variantValue,
          userId: item.userId,
          variantType: item.variantType,
          businessType: item.businessType
        }
      })
    },
    show () {
      this.isHide = true
      this.generateData()
      this.getOptions()
    },
    hide () {
      this.isHide = false
      this.variantData = []
      this.transferValue = []
      this.newName = ''
      this.vid = ''
      this.variantValue = ''
      this.saveMessage = '新增'
      this.isHide2 = false
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
  .modal-box
    width 500px
    height 400px
    background #fff
    margin-left 30%
    margin-top 50px
    position relative
    border-radius 5px
    padding 20px 26px
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
.el-button--mini
  padding 5px 9px
</style>
