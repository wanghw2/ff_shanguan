<template>
  <div class="pdtpara">
    <div class="formBox">
      <el-form :inline="true"  ref="form" class="formBoxContent" :model="form" label-width="80px" size="mini">
        <div class="item1">
          <el-form-item label='财年' prop='fiscalyear' class='item11' >
            <el-select v-model='form.fiscalyear' multiple collapse-tags placeholder='请选择'>
              <el-option
                v-for='item in fiscalyear.children'
                :key='item.value'
                :label='item.name'
                :value='item.value'>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label='财月' prop='fiscalmonth' class='item11' >
            <el-select v-model='form.fiscalmonth' multiple collapse-tags placeholder='请选择'>
              <el-option
                v-for='item in fiscalmonth.children'
                :key='item.value'
                :label='item.name'
                :value='item.value'>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="item2">
            <el-button type="primary" @click="submitForm('form')">查询</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </div>
      </el-form>      
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
// const $ = window.$
export default {
  data () {
    return {
      serverUrl: domainUrl,
      form: {
        fiscalyear: [],
        fiscalmonth: []
      },
      fiscalyear: [],
      fiscalmonth: []
    }
  },
  created () {
    this.getQuerydata()
  },
  components: {
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
    valieForm () { // params参数
      let params = {}
      if (this.form.fiscalyear.join() !== '') {
        params['fiscalyear'] = this.form.fiscalyear
      }
      if (this.form.fiscalmonth.join() !== '') {
        params['fiscalmonth'] = this.form.fiscalmonth
      }
      return params
    },
    getQuerydata () { // 获取查询条件
      let vm = this
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': 'KPI财年_0001,财月_0001'
        },
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === 'KPI财年_0001') {
              vm.fiscalyear = data[i]
            }
            if (data[i].value === '财月_0001') {
              vm.fiscalmonth = data[i]
            }
          }
        },
        fail (msg) {
          alert(msg)
        }
      })
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.pdtpara
  width: 100%
  height: 100%
  padding: 10px
  margin-top 10px
  .formBox
    width 98%
    height 100%
    margin 0 1%
    border 1px solid #eceef4
    padding 5px
    .el-form-item
      margin-bottom 4px
    .item1
      overflow hidden
      width 100%
      .item11
        float left
        width 30%
        margin-left -10px
    .item2
      .el-button--mini
        padding 7px 35px

</style>