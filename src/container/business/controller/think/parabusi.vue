<template>
  <div class="npi-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="npi-box">
          <div class="block">
            <h2>Think Para Channel Type
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatechanneltype"
                  @updateTimeChange="updatechanneltype1"
                  :sheetsName="'Think_Para_Channel_Type'"
                  :logTableName="'Think_Para_Channel_Type'"
                  :logObj="'gridchanneltype'" >
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'Think_Para_Channel_Type'"
                :tableName="'Think_Para_Channel_Type'"
                :source="'FF_IDSS_Data_Think'"
                :fileName="'Think_Para_Channel_Type'"
                ref="gridchanneltype">
              </v-table>
            </div>
            <h2>Think Para Channel Type Knowledge库
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
            </h2>
            <div class="addgrid addgrid2">
              <v-table
                :sheetsName="'Think_Para_Channel_Type'"
                :tableName="'Think_Para_Channel_Type'"
                :source="'FF_IDSS_Knowledge'"
                :fileName="'Think_Para_Channel_Type'"
                ref="gridchanneltypeKnowledge">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtablePage'
// const $ = window.$
export default {
  data () {
    return {
      tabPosition: 'left',
      toggle1: true,
      toggle2: true,
      menuArr: ['Channel Type']
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
    }, 3000)
  },
  methods: {
    toggleList1 () {
      let addgrid = document.getElementsByClassName('addgrid1')[0]
      if (this.toggle1) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let addgrid = document.getElementsByClassName('addgrid2')[0]
      if (this.toggle2) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    },
    updatechanneltype () { // 上传后自动刷新表格数据
      this.$refs.gridchanneltype.updateTabFun()
      this.$refs.gridchanneltypeKnowledge.updateTabFun()
    },
    updatechanneltype1 () { // 上传后自动刷新表格数据
      this.$refs.gridchanneltype.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.npi-box
  overflow hidden
  width 100%
  height 100%
  padding 10px
  .content
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      display none
      &:nth-child(1)
        display block
      h2
        width 100%
        height 38px
        line-height 38px
        font-weight normal
        box-shadow: 0 2px 8px #ccc
        font-size 14px
        padding 0 20px
        margin-bottom 10px
        background #fafafa
        .form-box
          min-width 80px
          height auto
          float right
        .small
          margin-top 6px
          float right
          margin-left 20px
          border-radius 6px
          font-size 12px
          height 24px
          width 60px
          line-height 24px
          text-align center
          border 0
          font-size 12px
          background #6ab7fc
          color #fff
          box-sizing border-box
          &:hover
            background #4691e4
        .emailBtn
          background #e6199e
          &:hover
            background #ca3997
        .disabled
          background #ccc
          cursor not-allowed
          &:hover
            background #ccc
            cursor not-allowed
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
</style>

