<template>
  <div class="db-box">
    <div class="content">
      <el-form :inline="true" :model="form" ref="form" label-width="75px" class="demo-form-inline">
        <el-form-item label="客户细分1" prop="cussegment1">
          <el-select v-model="form.cussegment1" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in cussegment1s"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="大区" prop="area">
          <el-select v-model="form.area" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in areas"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道编码" prop="bpCode">
          <el-select v-model="form.bpCode" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in bpCodes"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单类型" prop="orderType" label-width="80px">
          <el-select v-model="form.orderType" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in orderTypes.children"
              :key="index"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户细分4" prop="cussegment4">
          <el-select v-model="form.cussegment4" size="mini" @visible-change="''" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in cussegment4s"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="战区" prop="subarea">
          <el-select v-model="form.subarea" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in subareas"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道名称" prop="bpName">
          <el-input v-model="form.bpName" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="物料类型" prop="matType" label-width="80px">
          <el-select v-model="form.matType" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in matTypes.children"
              :key="index"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品细分" prop="prosub">
          <el-select v-model="form.prosub" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in prosubs"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family1" prop="family1">
          <el-select v-model="form.family1" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in family1s"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Family2" prop="family2">
          <el-select v-model="form.family2" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in family2s"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="FCST Family" prop="fcstfamily" label-width="80px">
          <el-select v-model="form.fcstfamily" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in fcstfamilys"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="接单编码" prop="matPN">
          <el-select v-model="form.matPN" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in matPNs"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="接单描述" prop="matDesc">
          <el-input v-model="form.martidesc" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="确认编码" prop="confirmPN">
          <el-select v-model="form.confirmPN" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in confirmPNs"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="确认描述" prop="confirmDesc" label-width="80px">
          <el-input v-model="form.confirmDesc" size="mini" placeholder="请输入">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="发货过账" prop="cadate">
          <el-date-picker
            v-model="form.cadate"
            type="daterange"
            size="mini" 
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="时间维度" prop="timeDimension">
          <el-select v-model="form.timeDimension" size="mini" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="(item, index) in timeDimensions"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left: 75px">
          <el-button type="primary" size="mini" @click="onSubmit(form)">查询</el-button>
          <el-button @click="resetForm('form')" size="mini" >重置</el-button>
        </el-form-item>
        <formPublic/>
      </el-form>
      <h2>SellIn 查询
        <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
      </h2>
      <div class="addgrid">
        <v-table-query
          :params='params'
          :url="'getProReg'"
          :sheetsName="'ConNB_SellIn_查询'"
          :tableName="'ConNB_SellIn_Tracking_Detail'"
          :source="'FF_IDSS_Data_CON'"
          :fileName="'ConNB_SellIn_查询'">
        </v-table-query>
      </div>
    </div>
  </div>
</template>
<script>
import formPublic from '@/components/public/formPublic1'
import VTableQuery from '@/components/public/vtableQuery'
// const $ = window.$
export default {
  data () {
    return {
      params: {},
      toggle: false,
      form: {
        cussegment1: [],
        cussegment4: [],
        matType: [], // 物料类型
        confirmPN: [], // 确认编码
        matDesc: '',
        orderType: [],
        bpCode: [],
        bpName: '',
        family1: [],
        family2: [],
        prosub: [],
        fcstfamily: [],
        timeDimension: '',
        area: [],
        subarea: [],
        confirmDesc: '', // 确认描述
        matPN: [],
        cadate: [] // 发货过账日期
      },
      matTypes: [],
      cussegment1s: [],
      cussegment4s: [],
      bpCodes: [],
      confirmPNs: [],
      orderTypes: [],
      matPNs: [],
      family1s: [],
      family2s: [],
      prosubs: [],
      fcstfamilys: [],
      areas: [],
      subareas: [],
      timeDimensions: ['自然年', '自然季', '自然月', '自然周', '财年', '财季', '财月', '财周', '天']
    }
  },
  components: {
    formPublic,
    VTableQuery
  },
  created () {
    this.getordertype()
  },
  mounted () {
    this.toggleList()
  },
  methods: {
    toggleList () {
      let addgrid = document.getElementsByClassName('addgrid')[0]
      if (this.toggle) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    onSubmit (form) {
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    valieForm () { // params参数
      let params = {}
      if (this.form.cussegment1.join() !== '') {
        params['cusSegment1'] = this.form.cussegment1
      }
      if (this.form.cussegment4.join() !== '') {
        params['cusSegment4'] = this.form.cussegment4
      }
      if (this.form.family.join() !== '') {
        params['family'] = this.form.family
      }
      if (this.form.area.join() !== '') { // 大区
        params['area'] = this.form.area
      }
      if (this.form.wararea.join() !== '') { // 战区
        params['wararea'] = this.form.wararea
      }
      if (this.form.alloType.join() !== '') {
        params['alloType'] = this.form.alloType
      }
      if (this.form.martidesc !== '') {
        params['matDesc'] = this.form.martidesc.replace(/ /g, ',')
      }
      if (this.form.materialcode !== '') {
        params['matPN'] = this.form.materialcode.replace(/ /g, ',')
      }
      if (this.form.craddate !== '') {
        params['cradStartDay'] = this.form.craddate[0]
        params['cradEndDay'] = this.form.craddate[1]
      }
      if (this.form.cadate !== '') {
        params['caStartDay'] = this.form.cadate[0] // 发货过账
        params['caEndDay'] = this.form.cadate[1] // 发货过账
      }
      if (this.form.qdname !== '') {
        params['bpName'] = this.form.qdname.replace(/ /g, ',') // 渠道名称
      }
      if (this.form.qdcode !== '') {
        params['bpCode'] = this.form.qdcode.replace(/ /g, ',')
      }
      this.params = params
    },
    getordertype () { // 获取查询条件（公用接口）
      let vm = this
      vm.$ajax({
        url: '/queryCode',
        method: 'get',
        params: {
          'codeValue': '物料类型_0002,订单类型_0002'
        },
        done (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === '订单类型_0002') {
              vm.orderTypes = data[i]
            }
            if (data[i].value === '物料类型_0002') {
              vm.matTypes = data[i]
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
<style lang="stylus" rel="stylesheet/stylus" scoped>
.db-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .el-form-item
      margin-bottom 0 !important
    .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner
      width 192px !important // 输入框
    .el-form--inline .el-form-item__content
      width 192px !important
  .content
    width 100%
    height 100%
    h2
      width 100%
      height 38px
      line-height 38px
      font-weight normal
      box-shadow: 0 2px 8px #ccc
      font-size 14px
      padding 0 20px
      margin-bottom 5px
      background #fafafa
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
        background #ff9933
        font-size 12px
        box-sizing border-box
</style>
