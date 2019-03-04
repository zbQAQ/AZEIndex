<template>
	<div class="proAir">
    <div class="box">
      <span class="">设备描述</span>
    </div>

    <div class="proBox">

      <div class="col-md-4 col-xs-12 proImg">
        <img :src="proDetail[proId - 1].imgUrl" alt="">
      </div>
      <div class="col-md-8 col-xs-12 proDesc" v-html="proDetail[proId - 1].desc"></div>

    </div>
    <goBack />
	</div>
</template>
<script>
import goBack from "../pageComp/goBack";
export default {
  name: 'proAir',
  data () {
    return {
      msg: 'hello proAir!',
      proId: 1,
      proDetail: [
        {
          id: '1',
          name: '油烟监测',
          imgUrl: '/static/img/products/yyjc.jpg',
          desc: `通过设备对餐饮企业的排放和大气质量监测，并会对超标因子报警
                <p>1. GIS展示</p>
                <p>2. 数据查询</p>
                <p>3. 报警反馈</p>
                <p>4. 统计分析</p>
                <p>5. 站点管理</p>
                <p>6. 设备运维管理</p>`
        },
        {
          id: '2',
          name: '大气移动监测车',
          imgUrl: '/static/img/products/jcc.jpg',
          desc: '大气环境移动监测车承载微型空气质量监测站的 功能，移动便捷响应及时，提供的数据精准全面、覆盖范围广，不仅可满足复杂多变的的监控环境，还可有效对大气污染进行追踪、溯源。大气环境监测车搭载气象六参数、TSP、PM2.5、PM10、TVOC、SO2、NO2、CO、CO2、O3、H2S、NH3、CH2O等多参数传感装置，可以根据当地的排污特征选择最合适的监测地点，将全市范围内所有施工区域、工业园区、道路都纳入监测范围。通过结合在线监测平台、微型监测站、无人机、移动端等模块，真正保障环保执法部门能够迅速赶赴事发现场进行定量定性地分析污染状况，及时准确地掌握污染事故的污染程度，判明事件性质和危害性，为决策部门制定应急措施提供科学依据。'
        },
        {
          id: '3',
          name: 'VOCs监测设备',
          imgUrl: '/static/img/products/vocs.jpg',
          desc: `取样单元：由电加热取样探头、电加热取样管线和反吹系统等组成。<br />预处理单元：由精细过滤器、压缩机冷凝器、蠕动泵、采样泵、除水罐、和流量计等组成。<br />分析单元：采用PID光离子气体检测报警仪,精度高，可靠性好, 维修成本较低。<br />校准单元：包含标气瓶、标准气体、减压阀等`
        },
        {
          id: '4',
          name: '水质监测设备',
          imgUrl: '/static/img/products/szjc.jpg',
          desc: '水质监测，是监视和测定水体中污染物的种类、各类污染物的浓度及变化趋势，评价水质状况的过程。监测范围十分广泛，包括未被污染和已受污染的天然水（江、河、湖、海和地下水）及各种各样的工业排水等。主要监测项目可分为两大类：一类是反映水质状况的综合指标，如温度、色度、浊度、pH值、电导率、悬浮物、溶解氧、化学需氧量和生化需氧量等；另一类是一些有毒物质，如酚、氰、砷、铅、铬、镉、汞和有机农药等。为客观的评价江河和海洋水质的状况，除上述监测项目外，有时需进行流速和流量的测定。'
        },
        {
          id: '5',
          name: '无人船水质监测',
          imgUrl: '/static/img/products/wrc.jpg',
          desc: `<p>无人船技术是一种新型的自动化监测平台，依托小型船体，利用GPS定位、自主导航和控制设备，在航行过程中可到达水体的绝大部分区域，对水体进行连续性原位监测。</p>
          <p>应用于突发环境事件处置时，进行应急采样</p>
          <p>无人船尺寸小、重量轻，可随时装载于车辆后备箱，随车辆在第一时间赶往事发区域，深入污染禁区</p>
          <p>可实现连续多个监测点的在线水质检测和水样采集</p>
          <p>监测数据实时传输、显示、存储以及绘制水质参数图</p>`
        },
      ]
		}
  },
  methods: {},
  created() {
    this.proId = this.$route.query.proId
  },
  components: {
    goBack
  }
}
</script>
<style scoped>
@import "./pro.css";
.proDesc {
  line-height: 25px;
  color: #4c4c4c;
}
</style>
