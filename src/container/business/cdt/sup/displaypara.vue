
<template>
  <div class="fastpara">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="fcstItem">
          <div class="block">
            <h2>ConDT LCD 到货计划
              <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateconplan"
                  @updateTimeChange="updateconplan1"
                  :sheetNames="'ConDT_LCD到货计划'"
                  :tableName='"ConDT_LCD_Arrival_Plan"'
                  :dbName="'FF_IDSS_Data_CON'"
                  :url="'/uploadLCD'"
                  :logTableName='"ConDT_LCD_Arrival_Plan"'
                  :logObj="'conplan'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid1">
              <v-table
                :sheetsName="'ConDT_LCD到货计划'"
                :tableName='"ConDT_LCD_Arrival_Plan"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_LCD到货计划'"
                ref="gridconplan">
              </v-table>
            </div>
            <h2>YTDT LCD 到货计划
              <a href="javascript:;" class="fold" @click="toggleList2" v-text="toggle2 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updateytplan"
                  @updateTimeChange="updateytplan1"
                  :sheetNames="'YTDT_LCD到货计划'"
                  :tableName='"YTDT_LCD_Arrival_Plan"'
                  :dbName="'FF_IDSS_Data_YT'"
                  :url="'/uploadLCD'"
                  :logTableName='"YTDT_LCD_Arrival_Plan"'
                  :logObj="'ytplan'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid2">
              <v-table-251
                :sheetsName="'YTDT_LCD到货计划'"
                :tableName='"YTDT_LCD_Arrival_Plan"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_LCD到货计划'"
                ref="gridytplan">
              </v-table-251>
            </div>
            <h2>KQ LCD 到货计划
              <a href="javascript:;" class="fold" @click="toggleList3" v-text="toggle3 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload-new
                  @on-success="updatekqplan"
                  @updateTimeChange="updatekqplan1"
                  :sheetNames="'KQ_LCD到货计划'"
                  :tableName='"KQ_LCD_Arrival_Plan"'
                  :dbName="'FF_IDSS_Data_REL'"
                  :url="'/uploadLCD'"
                  :logTableName='"KQ_LCD_Arrival_Plan"'
                  :logObj="'kqplan'">
                </upload-new>
              </div>
            </h2>
            <div class="addgrid addgrid3">
              <v-table-251
                :sheetsName="'KQ_LCD到货计划'"
                :tableName='"KQ_LCD_Arrival_Plan"'
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_LCD到货计划'"
                ref="gridkqplan">
              </v-table-251>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="fcstItem">
          <div class="block">
            <h2>ConDT_LCD工厂比例
              <a href="javascript:;" class="fold" @click="toggleList4" v-text="toggle4 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateconrate"
                  @updateTimeChange="updateconrate1"
                  :sheetsName="'ConDT_LCD工厂比例'"
                  :logTableName='"ConDT_LCD_Plant_Rate"'
                  :logObj="'gridconrate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid4">
              <v-table
                :sheetsName="'ConDT_LCD工厂比例'"
                :tableName='"ConDT_LCD_Plant_Rate"'
                :source="'FF_IDSS_Data_CON'"
                :fileName="'ConDT_LCD工厂比例'"
                ref="gridconrate">
              </v-table>
            </div>
            <h2>YTDT_LCD工厂比例
              <a href="javascript:;" class="fold" @click="toggleList5" v-text="toggle5 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updateytrate"
                  @updateTimeChange="updateytrate1"
                  :sheetsName="'YTDT_LCD工厂比例'"
                  :logTableName='"YTDT_LCD_Plant_Rate"'
                  :logObj="'gridytrate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid5">
              <v-table-251
                :sheetsName="'YTDT_LCD工厂比例'"
                :tableName='"YTDT_LCD_Plant_Rate"'
                :source="'FF_IDSS_Data_YT'"
                :fileName="'YTDT_LCD工厂比例'"
                ref="gridytrate">
              </v-table-251>
            </div>
            <h2>KQ_LCD工厂比例
              <a href="javascript:;" class="fold" @click="toggleList6" v-text="toggle6 ? '折叠' : '展开'"></a>
              <div class="form-box">
                <upload
                  @on-success="updatekqrate"
                  @updateTimeChange="updatekqrate1"
                  :sheetsName="'KQ_LCD工厂比例'"
                  :logTableName='"KQ_LCD_Plant_Rate"'
                  :logObj="'gridkqrate'">
                </upload>
              </div>
            </h2>
            <div class="addgrid addgrid6">
              <v-table-251
                :sheetsName="'KQ_LCD工厂比例'"
                :tableName='"KQ_LCD_Plant_Rate"'
                :source="'FF_IDSS_Data_REL'"
                :fileName="'KQ_LCD工厂比例'"
                ref="gridkqrate">
              </v-table-251>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import UploadNew from '@/components/public/upload5'
import VTable from '@/components/public/vtablePage'
import Upload from '@/components/public/upload1'
import VTable251 from '@/components/public/vtablePage251'
// const $ = window.$
export default {
  data () {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      tabPosition: 'left',
      menuArr: ['到货计划', '工厂比例']
    }
  },
  components: {
    UploadNew,
    Upload,
    VTable,
    VTable251
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList1()
      this.toggleList2()
      this.toggleList3()
      this.toggleList4()
      this.toggleList5()
      this.toggleList6()
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
    toggleList3 () {
      let addgrid = document.getElementsByClassName('addgrid3')[0]
      if (this.toggle3) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle3 = !this.toggle3
    },
    toggleList4 () {
      let addgrid = document.getElementsByClassName('addgrid4')[0]
      if (this.toggle4) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle4 = !this.toggle4
    },
    toggleList5 () {
      let addgrid = document.getElementsByClassName('addgrid5')[0]
      if (this.toggle5) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle5 = !this.toggle5
    },
    toggleList6 () {
      let addgrid = document.getElementsByClassName('addgrid6')[0]
      if (this.toggle6) {
        addgrid.style.display = 'none'
      } else {
        addgrid.style.display = 'block'
      }
      this.toggle6 = !this.toggle6
    },
    updateconplan () {
      this.$refs.gridconplan.updateTabFun()
    },
    updateconplan1 () {
      this.$refs.gridconplan.updateTimeChange()
    },
    updateytplan () {
      this.$refs.gridytplan.updateTabFun()
    },
    updateytplan1 () {
      this.$refs.gridytplan.updateTimeChange()
    },
    updatekqplan () {
      this.$refs.gridkqplan.updateTabFun()
    },
    updatekqplan1 () {
      this.$refs.gridkqplan.updateTimeChange()
    },
    updateconrate () {
      this.$refs.gridconrate.updateTabFun()
    },
    updateconrate1 () {
      this.$refs.gridconrate.updateTimeChange()
    },
    updateytrate () {
      this.$refs.gridytrate.updateTabFun()
    },
    updateytrate1 () {
      this.$refs.gridytrate.updateTimeChange()
    },
    updatekqrate () {
      this.$refs.gridkqrate.updateTabFun()
    },
    updatekqrate1 () {
      this.$refs.gridkqrate.updateTimeChange()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fastpara
  width 100%
  height 100%
  padding 10px
  overflow hidden
  .content
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
        padding 0 20px
        margin-bottom 5px
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

