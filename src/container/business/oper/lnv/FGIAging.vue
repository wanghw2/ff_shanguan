<template>
  <div class="oper-box">
    <ul class="desc">
      <li>Date: <span>2018-04-20</span></li>
      <li>Exchange：<span>exchangeexchangeexchange</span></li>
      <li>
        <el-button type="primary" :disabled="disabledDet" @click="showDetail" size="mini">查看详情表</el-button>
      </li>
      <li>
        <el-button type="primary" :disabled="disabledSum" @click="showSummary"  size="mini">查看汇总表</el-button>
      </li>
      <li>
        <el-button type="primary" size="mini">下载</el-button>
      </li>
    </ul>
    <table class="detail-table table" border="0">
      <tr align="center">
        <th class="black">Segment</th>
        <th class="black">Product</th>
        <th class="black">Sub Product</th>
        <th class="red">Q* Write Off  Budget</th>
        <th class="red">Q* Beginning Reserve</th>
        <th class="blue">Current Reserve</th>
        <th class="blue">Current Writeoff</th>
        <th class="green">Qend Reserve Outlook</th>
        <th class="green">Q* Writeoff Outlook</th>
        <th class="green">Writeoff Gap (Bgt.-OL)</th>
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
      <tr align="center">
        <td>IdeaPad 非良品</td>
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
      </tr>
    </table>
    <table class="summary-table table" border="0" style="display:none">
      <tr align="center">
        <th class="black">Segment</th>
        <th class="black">Product</th>
        <th class="black">Sub Product</th>
        <th class="red">Q* Write Off  Budget</th>
        <th class="red">Q* Beginning Reserve</th>
        <th class="blue">Current Reserve</th>
        <th class="blue">Current Writeoff</th>
        <th class="green">Qend Reserve Outlook</th>
        <th class="green">Q* Writeoff Outlook</th>
        <th class="green">Writeoff Gap (Bgt.-OL)</th>
      </tr>
      <tr align="center">
        <td rowspan="5">REL</td>
        <td>TCM&QT</td>
        <td>TCM&QT TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>Zhaoyang</td>
        <td>Zhaoyang TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>ThinkCentre-R</td>
        <td>ThinkCentre-R TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>ThinkStation</td>
        <td>ThinkStation TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>ThinkPad-R</td>
        <td>ThinkPad-R TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center" class="Total">
        <td colspan="3">COMM TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td rowspan="2">YT</td>
        <td>Yangtian DT</td>
        <td>Yangtian DT TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>Yangtian NB</td>
        <td>Yangtian NB TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center" class="Total">
        <td colspan="3">YT TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td rowspan="5">Think-T</td>
        <td>ThinkCentre-T</td>
        <td>ThinkCentre-T TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>TP Edge</td>
        <td>TP Edge TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>TP Premium</td>
        <td>TP Premium TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>Windows Tablet-Think-T</td>
        <td>Windows Tablet-Think-T TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>Option TBG</td>
        <td>Option TBG TTL</td>
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
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td rowspan="2">CON</td>
        <td>IdeaCentre</td>
        <td>IdeaCentre TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center">
        <td>IdeaPad</td>
        <td>IdeaPad TTL</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr align="center" class="Total">
        <td colspan="3">CON TTL</td>
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
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </table>
  </div>
</template>
<script>
const $ = window.$
export default {
  data () {
    return {
      disabledDet: true, // 控制详情按钮的开关
      disabledSum: false // 控制汇总表按钮的开关
    }
  },
  methods: {
    showSummary () {
      $('.detail-table').css('display', 'none')
      $('.summary-table').css('display', 'block')
      this.disabledDet = false
      this.disabledSum = true
    },
    showDetail () {
      $('.detail-table').css('display', 'block')
      $('.summary-table').css('display', 'none')
      this.disabledDet = true
      this.disabledSum = false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.oper-box
  width 100%
  height 100%
  padding 10px
  overflow hidden
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
  .table
    width 98%
    height 100%
    margin 0 auto 10px
    border-collapse collapse
    tr,td,th
      border 1px solid #ccc
    th
      height 55px
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
</style>
