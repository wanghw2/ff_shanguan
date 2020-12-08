<template>
  <div class="mtm-family">
    <div class="family">
      <div class="block">
        <h2>Family对应关系
          <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '折叠' : '展开'"></a>
          <div class="form-box">
            <upload
              @on-success="updatefamilyTable"
              :sheetsName="'Think_Family对应关系'"
              :logTableName="'Think_Family_Mapping'"
              :logObj="'family'">
            </upload>
          </div>
        </h2>
        <div class="addFamily">
          <v-table
            :sheetsName="'Think_Family对应关系'"
            :tableName="'Think_Family_Mapping'"
            :source="'Think'"
            :fileName="'Think_Family对应关系'"
            ref="thinkfamily">
          </v-table>
        </div>
      </div>
      <div class="block">
        <h2 class="h2">业务线对应关系
        <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
          <div class="form-box">
            <upload
              @on-success="updatemtmTable"
              :sheetsName="'Think_业务线对应关系'"
              :logTableName="'Think_Family'"
              :logObj="'mtm'">
            </upload>
          </div>
        </h2>
        <div class="addMTM">
          <v-table
            :sheetsName="'Think_业务线对应关系'"
            :tableName="'Think_Family'"
            :source="'Think'"
            :fileName="'Think_业务线对应关系'"
            ref="thinkmtm">
          </v-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {domainUrl} from '@/config/config.js'
import Upload from '@/components/public/upload1'
import VTable from '@/components/public/vtable1'
// const $ = window.$
export default {
  data () {
    return {
      toggle: true,
      toggle1: true,
      serverUrl: domainUrl
    }
  },
  components: {
    Upload,
    VTable
  },
  mounted () {
    this.toggleList()
    this.toggleList1()
  },
  methods: {
    updatefamilyTable () { // 调用自动更新新数据的方法
      // console.log(this.$refs.thinkfamily)
      this.$refs.thinkfamily.updateTabFun()
    },
    updatemtmTable () { // 调用自动更新新数据的方法
      this.$refs.thinkmtm.updateTabFun()
    },
    toggleList () {
      let addFamily = document.getElementsByClassName('addFamily')[0]
      if (this.toggle) {
        addFamily.style.display = 'none'
      } else {
        addFamily.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let addMTM = document.getElementsByClassName('addMTM')[0]
      if (this.toggle1) {
        addMTM.style.display = 'none'
      } else {
        addMTM.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mtm-family
  width 100%
  height 100%
  padding 10px
  .family
    width 100%
    height 100%
    .block
      width 100%
      height auto
      overflow hidden
      h2
        width 100%
        height 38px
        line-height 38px
        font-weight normal
        box-shadow: 0 2px 8px #ccc
        font-size 14px
        margin-bottom 10px
        padding 0 20px
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
      .addFamily,.addMTM
        min-height 10px
        width 100%
        overflow hidden
        margin 10px
        margin-top 0
</style>
