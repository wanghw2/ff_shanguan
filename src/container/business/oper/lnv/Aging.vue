<template>
  <div class="callendar-box">
    <div class="content">
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane :label="menuArr[0]" class="callendarItem">
          <div class="block">
            <h2>库龄汇总
              <a :class="['small', 'emailBtn', {'disabled': disabledemail}]" @click="sendemail" >发送邮件</a>
              <a :class="['small', {'disabled': disableddownload}]" class="small downBtn" @click="download" >下载</a>
              <div class="form-box">
                <updata
                  @on-success="updataFinCal"
                  :menuId="'450'"
                  :menuName= "''"
                  :logTableName="'FF_Aging_Report'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'库龄汇总'"
                :tableName="'FF_Aging_Report'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'库龄汇总'"
                ref="gridFinCal">
              </v-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[1]" class="callendarItem">
          <div class="block">
            <ul class="desc">
              <li>Reserve</li>
              <li>FY1819</li>
              <li>Date: <span>2018-04-20</span></li>
              <li>Unit:<span>$M</span></li>
            </ul>
            <div class="tableBox">
              <table class="tableReserve" border="0">
                <tr align="center">
                  <th class="black">Segment</th>
                  <th class="black">Product</th>
                  <th class="black">SubProduct</th>
                  <th class="green">4/31</th>
                  <th class="green">5/31</th>
                  <th class="blue">6/30</th>
                  <th class="green">7/31</th>
                  <th class="green">8/31</th>
                  <th class="blue">9/30</th>
                  <th class="green">10/31</th>
                  <th class="green">11/30</th>
                  <th class="blue">12/31</th>
                  <th class="green">1/31</th>
                  <th class="green">2/28</th>
                  <th class="blue">3/31</th>
                </tr>
                <tr align="center">
                  <td rowspan="23">REL</td>
                  <td rowspan="6">TCM&QT</td>
                  <td>TCM&QT BOX</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>TCM&QT AIO</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>TCM&QT Visual Inhouse</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>TCM&QT Visual VMI</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>TCM&QT 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>TCM&QT TTL</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                </tr>
                <tr align="center">
                  <td rowspan="4">Zhaoyang</td>
                  <td>Zhaoyang Not Miix</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Zhaoyang Miix</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Zhaoyang 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>Zhaoyang TTL</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                </tr>
                <tr align="center">
                  <td rowspan="3">ThinkCentre-R</td>
                  <td>ThinkCentre-R</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>ThinkCentre-R 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>ThinkCentre-R TTL</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                </tr>
                <tr align="center">
                  <td rowspan="5">ThinkStation</td>
                  <td>ThinkStation</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>ThinkStation Visual Inhouse</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>ThinkStation VMI</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>ThinkStation 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>ThinkStation TTL</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                </tr>
                <tr align="center">
                  <td rowspan="5">ThinkPad-R</td>
                  <td>ThinkPad-R GAB</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>ThinkPad-R KAB</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>ThinkPad-R Windows Tablet</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>ThinkPad-R 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>ThinkPad-R TTL</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                </tr>
                <tr align="center" class="Total">
                  <td colspan="3">COMM TTL</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                </tr>
                <tr align="center">
                  <td rowspan="9">YT</td>
                  <td rowspan="6">Yangtian DT</td>
                  <td>Yangtian DT BOX</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Yangtian DT AIO</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Yangtian DT Visual Inhouse</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Yangtian DT Visual VMI</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Yangtian DT 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal" >
                  <td>Yangtian DT TTL</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                </tr>
                <tr align="center">
                  <td rowspan="3">Yangtian NB</td>
                  <td>Yangtian NB </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Yangtian NB 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>Yangtian NB TTL</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr align="center" class="Total">
                  <td colspan="3">YT TTL</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                </tr>
                <tr align="center">
                  <td rowspan="17">Think-T</td>
                  <td rowspan="4">ThinkCentre-T</td>
                  <td>ThinkCentre-T BOX</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>ThinkCentre-T AIO</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>ThinkCentre-T 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>ThinkCentre-T TTL</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr align="center">
                  <td rowspan="3">TP Edge</td>
                  <td>TP Edge</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>TP Edge 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>TP Edge TTL</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr align="center">
                  <td rowspan="3">TP Premium</td>
                  <td>TP Premium</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>TP Premium 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>TP Premium TTL</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr align="center">
                  <td rowspan="3">Windows Tablet-Think-T</td>
                  <td>Windows Tablet-Think-T</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Windows Tablet-Think-T 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>Windows Tablet-Think-T TTL</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td rowspan="4">Option TBG</td>
                  <td>Option TBG</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr align="center">
                  <td>Option DOA PI</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Option TBG 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal">
                  <td>Option TBG TTL</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="Total">
                  <td colspan="3">Think-T TTL</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                </tr>
                <tr align="center">
                  <td rowspan="9">CON</td>
                  <td rowspan="6">IdeaCentre</td>
                  <td>IdeaCentre BOX</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>IdeaCentre AIO</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>IdeaCentre Visual Inhouse</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>IdeaCentre Visual VMI</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>IdeaCentre 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="grayTotal" >
                  <td>IdeaCentre TTL</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                </tr>
                <tr align="center">
                  <td rowspan="3">IdeaPad</td>
                  <td>IdeaPad</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                <tr align="center">
                  <td>IdeaPad 非良品</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                <tr align="center" class="grayTotal">
                  <td>IdeaPad TTL</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr align="center" class="Total">
                  <td colspan="3">CON TTL</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                </tr>
                <tr align="center" >
                  <td rowspan="3">Option-LBG</td>
                  <td>IdeaPad</td>
                  <td>Option-LBG</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" >
                  <td>ZY</td>
                  <td>Option-LBG</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>IdeaCentre</td>
                  <td>Option-LBG</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="Total">
                  <td colspan="3">PC TTL</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr align="center">
                  <td>IdeaPad Miix</td>
                  <td>IdeaPad Miix</td>
                  <td>IdeaPad Miix</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>Android Tablet</td>
                  <td>Android Tablet</td>
                  <td>Android Tablet</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr align="center" class="Total">
                  <td colspan="3">PCSD TTL</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
              </table>
            </div>
            <h2>Reserve趋势</h2>
            <el-form :inline="true" :model="form" ref="form" label-width="100px" class="demo-form-inline">
              <el-form-item label="Sub product" prop="Subproduct">
                <el-select v-model="form.Subproduct" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in Subproducts"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="财年" prop="year">
                <el-select v-model="form.year" size="mini" multiple filterable collapse-tags placeholder="请选择">
                  <el-option
                    v-for="(item, index) in years"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div class="lineChart" ref="lineChart"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="menuArr[2]" class="callendarItem">
          <div class="block">
            <h2>库存WriteOff
              <a :class="['small', 'emailBtn', {'disabled': disabledemail1}]" @click="sendemail1" >发送邮件</a>
              <a :class="['small', {'disabled': disableddownload1}]" class="small downBtn" @click="download1" >下载</a>
              <div class="form-box">
                <updata
                  @on-success="updataWriteOff"
                  :menuId="'450'"
                  :menuName= "''"
                  :logTableName="'FF_Aging_Report'"
                  :proIndex="'1'" >
                </updata>
              </div>
            </h2>
            <div class="addgrid">
              <v-table
                :sheetsName="'库存WriteOff'"
                :tableName="'FF_Aging_Report'"
                :source="'FF_IDSS_Data_FF'"
                :fileName="'库存WriteOff'"
                ref="gridWriteOff">
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
import VTable from '@/components/public/vtable1'
import updata from '@/components/public/updata'
import echarts from 'echarts'
const $ = window.$
export default {
  data () {
    return {
      disabledemail: false,
      disableddownload: false,
      disabledemail1: false,
      disableddownload1: false,
      tabPosition: 'left',
      menuArr: ['库龄汇总', '库存Reserve', '库存WriteOff'],
      form: {
        Subproduct: [],
        year: []
      },
      Subproducts: [],
      years: []
    }
  },
  components: {
    Upload,
    VTable,
    updata
  },
  mounted () {
    this.$nextTick(() => {
      this.lineChart()
    }, 3000)
  },
  methods: {
    download () {
      let vm = this
      vm.disableddownload = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
          vm.disableddownload = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    sendemail () {
      let vm = this
      vm.disabledemail = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1
        },
        done (data) {
          alert(data)
          vm.disabledemail = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    download1 () {
      let vm = this
      vm.disableddownload1 = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 0
        },
        done (data) {
          let $a = $('<a></a>')
          $a.attr('href', data)[0].click()
          $a.remove()
          vm.disableddownload1 = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    sendemail1 () {
      let vm = this
      vm.disabledemail1 = true
      vm.$ajax({
        url: vm.serverUrl + '/downloadExcelByTN',
        method: 'get',
        params: {
          type: 1,
          ismail: 1
        },
        done (data) {
          alert(data)
          vm.disabledemail1 = false
        },
        fail (msg) {
          alert(msg)
        }
      })
    },
    updataFinCal () { // 上传后自动刷新表格数据
      this.$refs.gridFinCal.updateTabFun()
    },
    updateCDTCal () {
      this.$refs.gridCDTCal.updateTabFun()
    },
    updateCDTCal1 () {
      this.$refs.gridCDTCal.updateTimeChange()
    },
    updataWriteOff () {
      this.$refs.gridWriteOff.updateTimeChange()
    },
    lineChart () {
      var option = {
        title: {
          text: 'ThinkCentre',
          top: 0,
          left: '3%',
          textStyle: {
            fontSize: 14,
            color: '#333'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            },
            restore: {}
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['ThinkCentre'],
          left: '25%'
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['20180501', '20180502', '20180503', '20180504', '20180505', '20180506', '20180507']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'ThinkCentre',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      }
      let lineChart = echarts.init(this.$refs.lineChart)
      lineChart.setOption(option)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.callendar-box
  width 100%
  height 100%
  padding 10px
  .callendarItem
    width 100%
    height 100%
    .block
      width 100%
      height auto
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
      .addgrid
        width 100%
        min-height 10px
        overflow hidden
        margin-bottom 10px
      .desc
        width 95%
        height 30px
        margin 0 auto 10px
        li
          height 30px
          line-height 30px
          padding 0 10px
          float left
          font-size 14px
          font-weight bold
          margin-right 10px
          span
            display inline-block
            float right
            font-weight normal
            min-width 100px
            height 30px
            padding 0 15px
      .tableBox
        width 100%
        height 400px
        margin-bottom 15px
        overflow auto
        .tableReserve
          width 100%
          height 100%
          margin 0 auto 10px
          border-collapse collapse
          tr,td,th
            border 1px solid #ccc
          th
            height 36px
            padding 0 10px
            color #fff
            &.black
              background #404040
            &.red
              background #632523
            &.blue
              background #16365C
            &.green
              background #4F6228
          td
            height 28px
          .grayTotal
            background #eee
          .Total
            background #eee
      .lineChart
        width 1100px
        height 400px
        margin 10px auto
</style>
