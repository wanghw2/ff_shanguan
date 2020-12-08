<template>
  <div class="form-public">
    <h2>CV查询 <span class="CVvalue">{{CVvalue}}</span><a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '展开' : '折叠'"></a></h2>
    <div class="innerbox">
      <el-form :inline="true" :model="form" ref="form" label-width="58px" class="demo-form-inline">
        <div class="cpu">
          <el-form-item label="CPU: " label-width="60px"></el-form-item>
          <el-form-item label="厂商" prop="cpuVendor" >
            <el-select v-model="form.cpuVendor" @visible-change="getQueryCpu1" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in cpuVendor"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="平台" prop="cpuPlatform" >
            <el-select v-model="form.cpuPlatform" @visible-change="getQueryCpu2" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in cpuPlatform"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Band" prop="cpuBand" >
            <el-select v-model="form.cpuBand" @visible-change="getQueryCpu3" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in cpuBand"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="特征值" prop="cpu" >
            <el-select v-model="form.cpu" @visible-change="getQueryCpu4" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in cpu"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="hdd">
          <el-form-item label="硬盘: " label-width="60px"></el-form-item>
          <el-form-item label="类型" prop="hddType" >
            <el-select v-model="form.hddType" @visible-change="getQueryHdd1" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in hddType"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="容量" prop="hddVolumn" >
            <el-select v-model="form.hddVolumn" @visible-change="getQueryHdd2" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in hddVolumn"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="HDD" prop="hddAbbr" >
            <el-select v-model="form.hddAbbr" @visible-change="getQueryHdd3" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in hddAbbr"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="SSD" prop="ssdAbbr"  >
            <el-select v-model="form.ssdAbbr" @visible-change="getQueryHdd4" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in ssdAbbr"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="特征值" prop="hdd" >
            <el-select v-model="form.hdd" @visible-change="getQueryHdd5" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in hdd"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="ram">
          <el-form-item label="内存: " label-width="60px"></el-form-item>
          <el-form-item label="类型" prop="ramType" >
            <el-select v-model="form.ramType" @visible-change="getQueryRam1" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in ramType"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="容量" prop="ramVolumn" >
            <el-select v-model="form.ramVolumn"  @visible-change="getQueryRam2" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in ramVolumn"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简称" prop="ramAbbr"  >
            <el-select v-model="form.ramAbbr" @visible-change="getQueryRam3" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in ramAbbr"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="结构" prop="ramStruct" >
            <el-select v-model="form.ramStruct" @visible-change="getQueryRam4" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in ramStruct"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="特征值" prop="ram" >
            <el-select v-model="form.ram" @visible-change="getQueryRam5" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in ram"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="vga">
          <el-form-item label="显卡: " label-width="60px"></el-form-item>
          <el-form-item label="类型" prop="vgaType" >
            <el-select v-model="form.vgaType" @visible-change="getQueryVga1" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in vgaType"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="厂商" prop="vgaVendor" >
            <el-select v-model="form.vgaVendor" @visible-change="getQueryVga2" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in vgaVendor"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简称" prop="vgaAbbr" >
            <el-select v-model="form.vgaAbbr" @visible-change="getQueryVga3" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in vgaAbbr"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="特征值" prop="vga" >
            <el-select v-model="form.vga" @visible-change="getQueryVga4" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in vga"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="lcd">
          <el-form-item label="屏幕: " label-width="60px"></el-form-item>
          <el-form-item label="类型" prop="lcdType" >
            <el-select v-model="form.lcdType" @visible-change="getQueryLcd1" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in lcdType"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="尺寸" prop="lcdSize" >
            <el-select v-model="form.lcdSize" @visible-change="getQueryLcd2" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in lcdSize"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="触屏" prop="lcdTouch" >
            <el-select v-model="form.lcdTouch" @visible-change="getQueryLcd3" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in lcdTouch"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简称" prop="lcdAbbr"  >
            <el-select v-model="form.lcdAbbr" @visible-change="getQueryLcd4" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in lcdAbbr"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="特征值" prop="lcd" >
            <el-select v-model="form.lcd" @visible-change="getQueryLcd5" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in lcd"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="color">
          <el-form-item label="颜色: " label-width="60px"></el-form-item>
          <el-form-item label="简称" prop="colorAabbr" >
            <el-select v-model="form.colorAabbr" @visible-change="getQueryColor1" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in colorAabbr"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="特征值" prop="color" >
            <el-select v-model="form.color" @visible-change="getQueryColor2" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in color"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="外观" prop="surface" >
            <el-select v-model="form.surface" @visible-change="getQuerysurface" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in surface"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="网卡" prop="wlan"  >
            <el-select v-model="form.wlan" @visible-change="getQuerywlan" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in wlan"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="os">
          <el-form-item label="OS: " label-width="60px"></el-form-item>
          <el-form-item label="版本" prop="osVersion" >
            <el-select v-model="form.osVersion" @visible-change="getQueryOs1" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in osVersion"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="特征值" prop="os"  >
            <el-select v-model="form.os" @visible-change="getQueryOs2" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in os"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电池" prop="battery" >
            <el-select v-model="form.battery" @visible-change="getQuerybattery" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in battery"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="适配器" prop="adapter"  >
            <el-select v-model="form.adapter" @visible-change="getQueryadapter" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in adapter"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="office">
          <el-form-item label="Office: " label-width="60px"></el-form-item>
          <el-form-item label="版本" prop="officeVersion" >
            <el-select v-model="form.officeVersion" @visible-change="getQueryOffice1" size="mini" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in officeVersion"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="特征值" prop="office"  >
            <el-select v-model="form.office" size="mini" @visible-change="getQueryOffice2" multiple filterable collapse-tags clearable placeholder="请选择">
              <el-option
                v-for="(item, index) in office"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pn: {
      type: Array
    }
  },
  data () {
    return {
      toggle: true,
      CVvalue: '',
      form: {
        officeVersion: [],
        cpuBand: [],
        office: [],
        cpuVendor: [],
        cpuPlatform: [],
        cpu: [],
        hddType: [],
        hddVolumn: [],
        hddAbbr: [],
        ssdAbbr: [],
        hdd: [],
        ramType: [],
        ramVolumn: [],
        ramAbbr: [],
        ramStruct: [],
        ram: [],
        vgaType: [],
        vgaVendor: [],
        vgaAbbr: [],
        vga: [],
        lcdType: [],
        lcdSize: [],
        lcdTouch: [],
        lcdAbbr: [],
        lcd: [],
        colorAabbr: [],
        color: [],
        osVersion: [],
        os: [],
        surface: [],
        wlan: [],
        battery: [],
        adapter: []
      },
      cpuBand: [],
      officeVersion: [],
      office: [],
      cpuVendor: [],
      cpuPlatform: [],
      cpu: [],
      hddType: [],
      hddVolumn: [],
      hddAbbr: [],
      ssdAbbr: [],
      hdd: [],
      ramType: [],
      ramVolumn: [],
      ramAbbr: [],
      ramStruct: [],
      ram: [],
      vgaType: [],
      vgaVendor: [],
      vgaAbbr: [],
      vga: [],
      lcdType: [],
      lcdSize: [],
      lcdTouch: [],
      lcdAbbr: [],
      lcd: [],
      colorAabbr: [],
      color: [],
      osVersion: [],
      os: [],
      surface: [],
      wlan: [],
      battery: [],
      adapter: []
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    getQueryadapter () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '适配器特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.adapter = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerybattery () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '电池特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.battery = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerywlan () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '网卡特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.wlan = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQuerysurface () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '外观特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.surface = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryOffice2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'Office特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.officeVersion) && this.form.officeVersion.length !== 0) {
        params['objk2'] = 'Office版本'
        params['objv2'] = this.form.officeVersion
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.office = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryOffice1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'Office版本'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.officeVersion = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryOs2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'OS特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.osVersion) && this.form.osVersion.length !== 0) {
        params['objk2'] = 'OS版本'
        params['objv2'] = this.form.osVersion
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.os = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryOs1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'OS版本'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.osVersion = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryColor2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '颜色特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.colorAabbr) && this.form.colorAabbr.length !== 0) {
        params['objk2'] = '颜色简称'
        params['objv2'] = this.form.colorAabbr
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.color = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryColor1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '颜色简称'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.colorAabbr = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryLcd5 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '屏幕特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.lcdType) && this.form.lcdType.length !== 0) {
        params['objk2'] = '屏幕类型'
        params['objv2'] = this.form.lcdType
      }
      if (Array.isArray(this.form.lcdSize) && this.form.lcdSize.length !== 0) {
        params['objk3'] = '屏幕尺寸'
        params['objv3'] = this.form.lcdSize
      }
      if (Array.isArray(this.form.lcdTouch) && this.form.lcdTouch.length !== 0) {
        params['objk4'] = '屏幕触屏'
        params['objv4'] = this.form.lcdTouch
      }
      if (Array.isArray(this.form.lcdAbbr) && this.form.lcdAbbr.length !== 0) {
        params['objk5'] = '屏幕简称'
        params['objv5'] = this.form.lcdAbbr
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.lcd = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryLcd4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '屏幕简称'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.lcdType) && this.form.lcdType.length !== 0) {
        params['objk2'] = '屏幕类型'
        params['objv2'] = this.form.lcdType
      }
      if (Array.isArray(this.form.lcdSize) && this.form.lcdSize.length !== 0) {
        params['objk3'] = '屏幕尺寸'
        params['objv3'] = this.form.lcdSize
      }
      if (Array.isArray(this.form.lcdTouch) && this.form.lcdTouch.length !== 0) {
        params['objk4'] = '屏幕触屏'
        params['objv4'] = this.form.lcdTouch
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.lcdAbbr = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryLcd3 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '屏幕触屏'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.lcdType) && this.form.lcdType.length !== 0) {
        params['objk2'] = '屏幕类型'
        params['objv2'] = this.form.lcdType
      }
      if (Array.isArray(this.form.lcdSize) && this.form.lcdSize.length !== 0) {
        params['objk3'] = '屏幕尺寸'
        params['objv3'] = this.form.lcdSize
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.lcdTouch = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryLcd2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '屏幕尺寸'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.lcdType) && this.form.lcdType.length !== 0) {
        params['objk2'] = '屏幕类型'
        params['objv2'] = this.form.lcdType
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.lcdSize = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryLcd1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '屏幕类型'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.lcdType = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVga4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '显卡特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.vgaType) && this.form.vgaType.length !== 0) {
        params['objk2'] = '显卡类型'
        params['objv2'] = this.form.vgaType
      }
      if (Array.isArray(this.form.vgaVendor) && this.form.vgaVendor.length !== 0) {
        params['objk3'] = '显卡厂商'
        params['objv3'] = this.form.vgaVendor
      }
      if (Array.isArray(this.form.vgaAbbr) && this.form.vgaAbbr.length !== 0) {
        params['objk4'] = '显卡简称'
        params['objv4'] = this.form.vgaAbbr
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.vga = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVga3 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '显卡简称'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.vgaType) && this.form.vgaType.length !== 0) {
        params['objk2'] = '显卡类型'
        params['objv2'] = this.form.vgaType
      }
      if (Array.isArray(this.form.vgaVendor) && this.form.vgaVendor.length !== 0) {
        params['objk3'] = '显卡厂商'
        params['objv3'] = this.form.vgaVendor
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.vgaAbbr = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVga2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '显卡厂商'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.vgaType) && this.form.vgaType.length !== 0) {
        params['objk2'] = '显卡类型'
        params['objv2'] = this.form.vgaType
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.vgaVendor = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryVga1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '显卡类型'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.vgaType = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryRam5 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '内存特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.ramType) && this.form.ramType.length !== 0) {
        params['objk2'] = '内存类型'
        params['objv2'] = this.form.ramType
      }
      if (Array.isArray(this.form.ramVolumn) && this.form.ramVolumn.length !== 0) {
        params['objk3'] = '内存容量'
        params['objv3'] = this.form.ramVolumn
      }
      if (Array.isArray(this.form.ramAbbr) && this.form.ramAbbr.length !== 0) {
        params['objk4'] = '内存简称'
        params['objv4'] = this.form.ramAbbr
      }
      if (Array.isArray(this.form.ramStruct) && this.form.ramStruct.length !== 0) {
        params['objk5'] = '内存结构'
        params['objv5'] = this.form.ramStruct
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.ram = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryRam4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '内存结构'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.ramType) && this.form.ramType.length !== 0) {
        params['objk2'] = '内存类型'
        params['objv2'] = this.form.ramType
      }
      if (Array.isArray(this.form.ramVolumn) && this.form.ramVolumn.length !== 0) {
        params['objk3'] = '内存容量'
        params['objv3'] = this.form.ramVolumn
      }
      if (Array.isArray(this.form.ramAbbr) && this.form.ramAbbr.length !== 0) {
        params['objk4'] = '内存简称'
        params['objv4'] = this.form.ramAbbr
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.ramStruct = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryRam3 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '内存简称'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.ramType) && this.form.ramType.length !== 0) {
        params['objk2'] = '内存类型'
        params['objv2'] = this.form.ramType
      }
      if (Array.isArray(this.form.ramVolumn) && this.form.ramVolumn.length !== 0) {
        params['objk3'] = '内存容量'
        params['objv3'] = this.form.ramVolumn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.ramAbbr = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryRam2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '内存容量'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.ramType) && this.form.ramType.length !== 0) {
        params['objk2'] = '内存类型'
        params['objv2'] = this.form.ramType
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.ramVolumn = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryRam1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '内存类型'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.ramType = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryHdd5 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '硬盘特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.hddType) && this.form.hddType.length !== 0) {
        params['objk2'] = '硬盘类型'
        params['objv2'] = this.form.hddType
      }
      if (Array.isArray(this.form.hddVolumn) && this.form.hddVolumn.length !== 0) {
        params['objk3'] = '硬盘容量'
        params['objv3'] = this.form.hddVolumn
      }
      if (Array.isArray(this.form.hddAbbr) && this.form.hddAbbr.length !== 0) {
        params['objk4'] = 'HDD'
        params['objv4'] = this.form.hddAbbr
      }
      if (Array.isArray(this.form.ssdAbbr) && this.form.ssdAbbr.length !== 0) {
        params['objk5'] = 'SSD'
        params['objv5'] = this.form.ssdAbbr
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.hdd = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryHdd4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'SSD'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.hddType) && this.form.hddType.length !== 0) {
        params['objk2'] = '硬盘类型'
        params['objv2'] = this.form.hddType
      }
      if (Array.isArray(this.form.hddVolumn) && this.form.hddVolumn.length !== 0) {
        params['objk3'] = '硬盘容量'
        params['objv3'] = this.form.hddVolumn
      }
      if (Array.isArray(this.form.hddAbbr) && this.form.hddAbbr.length !== 0) {
        params['objk4'] = 'HDD'
        params['objv4'] = this.form.hddAbbr
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.ssdAbbr = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryHdd3 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'HDD'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.hddType) && this.form.hddType.length !== 0) {
        params['objk2'] = '硬盘类型'
        params['objv2'] = this.form.hddType
      }
      if (Array.isArray(this.form.hddVolumn) && this.form.hddVolumn.length !== 0) {
        params['objk3'] = '硬盘容量'
        params['objv3'] = this.form.hddVolumn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.hddAbbr = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryHdd2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '硬盘容量'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.hddType) && this.form.hddType.length !== 0) {
        params['objk2'] = '硬盘类型'
        params['objv2'] = this.form.hddType
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.hddVolumn = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryHdd1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = '硬盘类型'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.hddType = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryCpu4 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'CPU特征值'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.cpuVendor) && this.form.cpuVendor.length !== 0) {
        params['objk2'] = 'CPU厂商'
        params['objv2'] = this.form.cpuVendor
      }
      if (Array.isArray(this.form.cpuPlatform) && this.form.cpuPlatform.length !== 0) {
        params['objk3'] = 'CPU平台'
        params['objv3'] = this.form.cpuPlatform
      }
      if (Array.isArray(this.form.cpuBand) && this.form.cpuBand.length !== 0) {
        params['objk4'] = 'CPUband'
        params['objv4'] = this.form.cpuBand
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cpu = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryCpu3 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'CPUband'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.cpuVendor) && this.form.cpuVendor.length !== 0) {
        params['objk2'] = 'CPU厂商'
        params['objv2'] = this.form.cpuVendor
      }
      if (Array.isArray(this.form.cpuPlatform) && this.form.cpuPlatform.length !== 0) {
        params['objk3'] = 'CPU平台'
        params['objv3'] = this.form.cpuPlatform
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cpuBand = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryCpu2 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'CPU平台'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      if (Array.isArray(this.form.cpuVendor) && this.form.cpuVendor.length !== 0) {
        params['objk2'] = 'CPU厂商'
        params['objv2'] = this.form.cpuVendor
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cpuPlatform = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    getQueryCpu1 () {
      let vm = this
      let params = {}
      params['dbName'] = 'FF_IDSS_Data_CON'
      params['tableName'] = 'ConNB_MTM_CV'
      params['obj0'] = 'CPU厂商'
      if (Array.isArray(this.pn) && this.pn.length !== 0) {
        params['objk1'] = 'pn'
        params['objv1'] = this.pn
      }
      vm.$ajax({
        url: '/querySelCode',
        data: params,
        done (data) {
          vm.cpuVendor = data
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    valieForm () {
      let params = {}
      if (this.form.cpuVendor.join() !== '') {
        params['cpuVendor'] = this.form.cpuVendor
      }
      if (this.form.cpuPlatform.join() !== '') {
        params['cpuPlatform'] = this.form.cpuPlatform
      }
      if (this.form.cpuBand.join() !== '') {
        params['cpuBand'] = this.form.cpuBand
      }
      if (this.form.cpu.join() !== '') {
        params['cpu'] = this.form.cpu
      }
      if (this.form.hddType.join() !== '') {
        params['hddType'] = this.form.hddType
      }
      if (this.form.hddVolumn.join() !== '') {
        params['hddVolumn'] = this.form.hddVolumn
      }
      if (this.form.hddAbbr.join() !== '') {
        params['hddAbbr'] = this.form.hddAbbr
      }
      if (this.form.ssdAbbr.join() !== '') {
        params['ssdAbbr'] = this.form.ssdAbbr
      }
      if (this.form.hdd.join() !== '') {
        params['hdd'] = this.form.hdd
      }
      if (this.form.ramType.join() !== '') {
        params['ramType'] = this.form.ramType
      }
      if (this.form.ramVolumn.join() !== '') {
        params['ramVolumn'] = this.form.ramVolumn
      }
      if (this.form.ramAbbr.join() !== '') {
        params['ramAbbr'] = this.form.ramAbbr
      }
      if (this.form.ramStruct.join() !== '') {
        params['ramStruct'] = this.form.ramStruct
      }
      if (this.form.ram.join() !== '') {
        params['ram'] = this.form.ram
      }
      if (this.form.vgaType.join() !== '') {
        params['vgaType'] = this.form.vgaType
      }
      if (this.form.vgaVendor.join() !== '') {
        params['vgaVendor'] = this.form.vgaVendor
      }
      if (this.form.vgaAbbr.join() !== '') {
        params['vgaAbbr'] = this.form.vgaAbbr
      }
      if (this.form.vga.join() !== '') {
        params['vga'] = this.form.vga
      }
      if (this.form.lcdType.join() !== '') {
        params['lcdType'] = this.form.lcdType
      }
      if (this.form.lcdSize.join() !== '') {
        params['lcdSize'] = this.form.lcdSize
      }
      if (this.form.lcdTouch.join() !== '') {
        params['lcdTouch'] = this.form.lcdTouch
      }
      if (this.form.lcdAbbr.join() !== '') {
        params['lcdAbbr'] = this.form.lcdAbbr
      }
      if (this.form.lcd.join() !== '') {
        params['lcd'] = this.form.lcd
      }
      if (this.form.colorAabbr.join() !== '') {
        params['colorAabbr'] = this.form.colorAabbr
      }
      if (this.form.color.join() !== '') {
        params['color'] = this.form.color
      }
      if (this.form.osVersion.join() !== '') {
        params['osVersion'] = this.form.osVersion
      }
      if (this.form.os.join() !== '') {
        params['os'] = this.form.os
      }
      if (this.form.surface.join() !== '') {
        params['surface'] = this.form.surface
      }
      if (this.form.wlan.join() !== '') {
        params['wlan'] = this.form.wlan
      }
      if (this.form.battery.join() !== '') {
        params['battery'] = this.form.battery
      }
      if (this.form.adapter.join() !== '') {
        params['adapter'] = this.form.adapter
      }
      if (this.form.office.join() !== '') {
        params['office'] = this.form.office
      }
      if (this.form.officeVersion.join() !== '') {
        params['officeVersion'] = this.form.officeVersion
      }
      return params
    },
    valieForm1 () {
      let params = {}
      if (this.form.cpuVendor.join() !== '') {
        params['CPU厂商'] = this.form.cpuVendor
      }
      if (this.form.cpuPlatform.join() !== '') {
        params['CPU平台'] = this.form.cpuPlatform
      }
      if (this.form.cpuBand.join() !== '') {
        params['CPUBand'] = this.form.cpuBand
      }
      if (this.form.cpu.join() !== '') {
        params['CPU特征值'] = this.form.cpu
      }
      if (this.form.hddType.join() !== '') {
        params['硬盘类型'] = this.form.hddType
      }
      if (this.form.hddVolumn.join() !== '') {
        params['硬盘容量'] = this.form.hddVolumn
      }
      if (this.form.hddAbbr.join() !== '') {
        params['硬盘HDD'] = this.form.hddAbbr
      }
      if (this.form.ssdAbbr.join() !== '') {
        params['硬盘SSD'] = this.form.ssdAbbr
      }
      if (this.form.hdd.join() !== '') {
        params['硬盘特征值'] = this.form.hdd
      }
      if (this.form.ramType.join() !== '') {
        params['内存类型'] = this.form.ramType
      }
      if (this.form.ramVolumn.join() !== '') {
        params['内存容量'] = this.form.ramVolumn
      }
      if (this.form.ramAbbr.join() !== '') {
        params['内存简称'] = this.form.ramAbbr
      }
      if (this.form.ramStruct.join() !== '') {
        params['内存结构'] = this.form.ramStruct
      }
      if (this.form.ram.join() !== '') {
        params['内存特征值'] = this.form.ram
      }
      if (this.form.vgaType.join() !== '') {
        params['显卡类型'] = this.form.vgaType
      }
      if (this.form.vgaVendor.join() !== '') {
        params['显卡厂商'] = this.form.vgaVendor
      }
      if (this.form.vgaAbbr.join() !== '') {
        params['显卡简称'] = this.form.vgaAbbr
      }
      if (this.form.vga.join() !== '') {
        params['显卡特征值'] = this.form.vga
      }
      if (this.form.lcdType.join() !== '') {
        params['屏幕类型'] = this.form.lcdType
      }
      if (this.form.lcdSize.join() !== '') {
        params['屏幕尺寸'] = this.form.lcdSize
      }
      if (this.form.lcdTouch.join() !== '') {
        params['屏幕触屏'] = this.form.lcdTouch
      }
      if (this.form.lcdAbbr.join() !== '') {
        params['屏幕简称'] = this.form.lcdAbbr
      }
      if (this.form.lcd.join() !== '') {
        params['屏幕特征值'] = this.form.lcd
      }
      if (this.form.colorAabbr.join() !== '') {
        params['颜色简称'] = this.form.colorAabbr
      }
      if (this.form.color.join() !== '') {
        params['颜色特征值'] = this.form.color
      }
      if (this.form.osVersion.join() !== '') {
        params['OS版本'] = this.form.osVersion
      }
      if (this.form.os.join() !== '') {
        params['OS特征值'] = this.form.os
      }
      if (this.form.surface.join() !== '') {
        params['外观'] = this.form.surface
      }
      if (this.form.wlan.join() !== '') {
        params['网卡'] = this.form.wlan
      }
      if (this.form.battery.join() !== '') {
        params['电池'] = this.form.battery
      }
      if (this.form.adapter.join() !== '') {
        params['适配器'] = this.form.adapter
      }
      if (this.form.office.join() !== '') {
        params['office特征值'] = this.form.office
      }
      if (this.form.officeVersion.join() !== '') {
        params['office版本'] = this.form.officeVersion
      }
      return params
    },
    toggleList () {
      let innerbox = document.getElementsByClassName('innerbox')[0]
      if (this.toggle) {
        innerbox.style.display = 'block'
      } else {
        this.CVvalue = (JSON.stringify(this.valieForm1())).replace(/"/g, '').replace(/\{|\}/g, '')
        innerbox.style.display = 'none'
      }
      this.toggle = !this.toggle
    },
    resetForm () {
      this.$refs['form'].resetFields()
    },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.form-public
  width 100%
  height 100%
  box-shadow: 0 2px 8px #ccc
  margin-top 10px
  .el-form-item
    margin-bottom 0 !important
  .CVvalue
    color: #ccc
  h2
    width 100%
    height 38px
    line-height 38px
    font-weight normal
    font-size 14px
    padding 0 20px
    background #fafafa
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
  .innerbox
    display none
  .office
    padding-bottom 10px
</style>
