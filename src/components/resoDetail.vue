<template>
  <div class="temp">
    <div class="container">
      <div class="row detail">
        <div class="title">{{detailData[detailId - 1].title}}</div>

        <div class="cont" v-if="detailData[detailId - 1].desc.length > 0">
          <div class="contTit">系统概述</div>
          <div class="content" v-html="detailData[detailId - 1].desc"></div>
        </div>
        <div class="cont" v-if="detailData[detailId - 1].trait.length > 0">
          <div class="contTit">系统特点</div>
          <div class="content" v-html="detailData[detailId - 1].trait"></div>
        </div>
        <div class="cont" v-if="detailData[detailId - 1].func.length > 0">
          <div class="contTit">系统功能</div>
          <div class="content" v-html="detailData[detailId - 1].func"></div>
        </div>
      </div>
    </div>

		<goBack />

  </div>
</template>
<script>
import goBack from './pageComp/goBack'
export default {
  name: "resolveDetail",
  data() {
    return {
      msg: "hello resolve detail!",
      detailId: 0,
      detailData: [
        {
          id: 1,
          title: "水质监测网格化",
          desc: `信息化应用<img class="cntImg" src="/static/img/resolve/1.png" alt="" />`,
          trait: ``,
          func: ``
        },
        {
          id: 2,
          title: "城市地下管网水质在线监测系统",
          desc: `<p>采样单元、预处理单元、水质分析单元、数据采集传输单元、供电单元及控制单元等。</p>
								<img class="cntImg" src="/static/img/resolve/2-1.png" alt="" style="width:970px;" /><br />
								<strong>	监测因子</strong>
								<p>水质五参数、COD、BOD、氨氮、总磷、特征性重金属（砷、铅、镍、汞）、流速、流量、液位等。</p>`,
          trait: ``,
          func: `<img class="cntImg" src="/static/img/resolve/2-2.png" alt="" style="width:549px;" />`
        },
        {
          id: 3,
          title: "无人船监测系统",
          desc: `<p>无人船技术是一种新型的自动化监测平台，依托小型船体，利用GPS定位、自主导航和控制设备，在航行过程中可到达水体的绝大部分区域，对水体进行连续性原位监测。</p>
								<img class="cntImg" src="/static/img/resolve/3-1.png" alt="" style="width:auto;" />`,
          trait: `<p>应用于突发环境事件处置时，进行应急采样</p>
									<p>无人船尺寸小、重量轻，可随时装载于车辆后备箱，随车辆在第一时间赶往事发区域，深入污染禁区</p>
									<p>可实现连续多个监测点的在线水质检测和水样采集</p>
									<p>监测数据实时传输、显示、存储以及绘制水质参数图</p>
									<img class="cntImg" src="/static/img/resolve/3-2.png" alt="" style="width:auto;" />`,
          func: ``
        },
        {
          id: 4,
          title: "大气环境移动监测方案",
					desc: `<img class="cntImg" src="/static/img/resolve/4-1.png" alt="" style="width:auto;" />
								<img class="cntImg" src="/static/img/resolve/4-2.png" alt="" style="width:auto;" />`,
          trait: ``,
          func: ``
        },
        {
          id: 5,
          title: "高光谱监测系统",
					desc: `<p>高光谱技术是一种新型的地物探测技术，该技术以其敏锐的地物光谱特征探测能力为精准识别地物属性提供了强有力的手段</p>
								<p>基于高光谱CHRIS图像数据获得的营养状态指数和富营养化分级图如下</p>
								<img class="cntImg" src="/static/img/resolve/5-1.png" alt="" style="width:auto;" />`,
          trait: ``,
					func: `<p>1. 获取的地物连续光谱更加真实</p>
								 <p>2. 能全面反映自然界各种植被所固有的光谱特性及其间的细节差异性</p>
								 <p>3. 提高植被遥感分类的精细度和准确性</p>
								 <p>4. 提高植被指数反演的信息量</p>
								 <p>5. 利用植被的光谱差异区分性质相似的土壤类型。</p>
								 <img class="cntImg" src="/static/img/resolve/5-2.png" alt="" style="width:auto;" />`
        },
        {
          id: 6,
          title: "汽车尾气遥感监控系统",
					desc: `<img class="cntImg" src="/static/img/resolve/6-1.png" alt="" style="width:1000px;" />
								<img class="cntImg" src="/static/img/resolve/6-2.png" alt="" style="width:auto;" />
								<img class="cntImg" src="/static/img/resolve/6-3.png" alt="" style="width:auto;" />
								<img class="cntImg" src="/static/img/resolve/6-4.png" alt="" style="width:auto;" />`,
          trait: ``,
					func: ``
        },
        {
          id: 7,
          title: "餐饮油烟监管系统",
					desc: `<img class="cntImg" src="/static/img/resolve/7.png" alt="" style="width:auto;" />`,
          trait: ``,
					func: ``
        },
        {
          id: 8,
          title: "固废环境精细化管理系统",
					desc: `<img class="cntImg" src="/static/img/resolve/8.png" alt="" style="width:auto;" />`,
          trait: ``,
					func: ``
        },
        {
          id: 9,
          title: "蚀刻液综合处理监管系统",
					desc: `<img class="cntImg" src="/static/img/resolve/9.png" alt="" style="width:auto;" />`,
          trait: ``,
					func: ``
        },
        {
          id: 10,
          title: "环保税智慧管理系统",
					desc: `<img class="cntImg" src="/static/img/resolve/10-1.png" alt="" style="width:auto;" />`,
          trait: ``,
					func: `<img class="cntImg" src="/static/img/resolve/10-2.png" alt="" style="width:auto;" />`
        },
        {
          id: 11,
          title: "医院环境综合管理系统",
					desc: ``,
          trait: `<p>环境质量监管方面，可获取所有能获取的数据</p>
									<p>经过平台数据分析，可进行具体的污染治理和污染预测</p>
									<p>数据分析和治理的结果可以进一步指导监管部门的工作，让数据更加精准，进一步强化平台作用，形成良性循环</p>
									<img class="cntImg" src="/static/img/resolve/11.png" alt="" style="width:auto;" />`,
					func: ``
        }
      ]
    };
  },
	methods: {},
  created() {
		this.detailId = this.$route.query.id
	},
	components: {
		goBack
	}
};
</script>
<style scoped>
.detail {
  margin: 35px 0 70px 0;
}
.title {
  width: 100%;
  line-height: 40px;
  font-size: 26px;
  font-weight: bold;
  /* border-bottom: 1px solid #eee;
	margin-bottom: 15px;
	padding-bottom: 15px; */
  text-align: center;
  margin-bottom: 25px;
}

.cont {
  margin-bottom: 35px;
}
.cont .contTit {
  font-size: 22px;
  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
  padding-bottom: 15px;
  font-weight: bold;
}
.cont .content {
  font-size: 16px;
  line-height: 35px;
}
.cont .content >>> .cntImg {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
.cont .content p {
  text-indent: 2em;
}

@media (min-width: 768px) {
  .detail {
    margin-right: -15px;
    margin-left: -15px;
  }
}

</style>
