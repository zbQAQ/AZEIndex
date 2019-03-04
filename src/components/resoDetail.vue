<template>
  <div class="temp resoDetail">
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
          desc: `<p class="ind2">平台数据中心可提供所属地区各监测点位数据的实时采集传输、实时监控空气环境质量，实现在线数据查询及报表统计、数据自动预警、环保信息综合分析、数据归集和排名反馈等，为环保的研究提供信息资源和手段，为环保业务管理提供统一的管理平台。</p>
                <img class="cntImg" src="/static/img/resolve/1.png" alt="" />`,
          trait: ``,
          func: `<p>1.监测点位GIS地图在线显示</p>
                <p>2.站点环境远程视频实时监控</p>
                <p>3.数据图表展示</p>
                <p>4.站点数据实时状态查看</p>
                <p>5.预警、日报通知</p>
                <p>6.环境质量数据排名</p>
                <p>7.AQI实时报、日报自动生成</p>
                <p>8.污染物来源分析</p>
                <p>9.设备监控</p>
                <p>10.环境数据动态云图展示</p>
                <p>11.空气质量、气象数据导出</p>
                <p>12.站点管理、短信配置、数据修约</p>`
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
          func: `<h4>无人船基站</h4>
                <p>无人船基站搭配MM70无人船的地面基站软件，具有水质采样设置、采样监控、采样工作报告生成等功能。</p>

                <h4>智能遥控器</h4>
                <p>智能遥控器可人工远距离遥控无人船进行监测活动，遥感活动范围为360°</p>

                <h4>系统架构</h4>
                <p>1. 系统采用Hi3518E模块采集无人船实时作业视频</p>
                <p>2. 通过4G通信模块Quectel EC20上传至云服务器端</p>
                <p>3. 地面控制中心登录云服务器端即可实现对无人船的远程实时视频监控。</p>`
        },
        {
          id: 4,
          title: "大气环境移动监测方案",
          desc: `<p class="ind2">随着经济快速发展，我国工业化、城镇化进程加快，大气污染成为难以避免的严重问题。近年来，我国空气质量改善缓慢，大气污染物的排放总量长年居高，呈现出污染来源复杂，污染类型多，污染及时、有效监测和溯源难。目前城市空气污染物主要来自于建筑、拆迁、道路施工、堆料及厂区遗撒、工业园区排放、汽车尾气等。受气象因素、空间时间等影响，现有监测手段无法及时、有效、精准的监控、预警。</p>
                <p class="ind2">大气环境移动监测车承载微型空气质量监测站的
                功能，移动便捷响应及时，提供的数据精准全面、覆盖范围广，不仅可满足复杂多变的的监控环境，还可有效对大气污染进行追踪、溯源。大气环境监测车搭载气象六参数、TSP、PM2.5、PM10、TVOC、SO2、NO2、CO、CO2、O3、H2S、NH3、CH2O等多参数传感装置，可以根据当地的排污特征选择最合适的监测地点，将全市范围内所有施工区域、工业园区、道路都纳入监测范围。通过结合在线监测平台、微型监测站、无人机、移动端等模块，真正保障环保执法部门能够迅速赶赴事发现场进行定量定性地分析污染状况，及时准确地掌握污染事故的污染程度，判明事件性质和危害性，为决策部门制定应急措施提供科学依据。</p>
                <img class="cntImg" src="/static/img/resolve/4-1.png" alt="" style="width:auto;" />`,
          trait: `<p>大气环境监测车通过光散射在线监测仪、360度球形摄像、气象六参数监测仪和数据采集传输等设备，将数据传输至监测管理平台，监测管理平台集成了物联网、大数据和云计算技术，实现了实时、远程、自动监控颗粒物浓度。监测的数据和视频通过4G网络传输，可以在智能移动平台、桌面PC机等多终端访问，可实现监管部门对环境污染排放的远程监管。</p>`,
          func: `<p>1. 全天候连续监测，监测参数多</p>
                <p>2. 整车设计合理，集方便、舒适于一体，为操作人员提供舒适的工作环境。</p>
                <p>3. 配备GPS全球卫星定位和GIS地理信息系统及各种监测仪器，适合不同场合和不同用途。</p>
                <p>4. 采用先进的在线监测技术，全面监控扬尘的污染情况，自动上传到监测管理平台。</p>
                <p>5. 数据超标自动发出声光报警，短信提示相关人员。</p>
                <p>6. 在线监测各项数据，结合报警抓拍图片、实时视频图像的多维度数据综合分析、为环境监测与执法提供多维度证据。</p>
								<img class="cntImg" src="/static/img/resolve/4-2.png" alt="" style="width:auto;" />`
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
					desc: `<img class="cntImg" src="/static/img/resolve/7-1.png" alt="" style="width:auto;" />`,
          trait: `<img class="cntImg" src="/static/img/resolve/7-2.png" alt="" style="width:auto;" />`,
					func: `<p>1. GIS展示</p>
                <p>2. 数据查询</p>
                <p>3. 报警反馈</p>
                <p>4. 统计分析</p>
                <p>5. 站点管理</p>
                <p>6. 设备运维管理</p>`
        },
        {
          id: 8,
          title: "固废环境精细化管理系统",
          desc: `<p class="ind2">固废（一般废物及危险废物）环境监管系统通过对废物的来源到最终处理进行全生命周期的管理和跟踪，记录从合同、转移联单、入库、出库、运输、处置的全过程信息。该系统将环保部门、固废（危废）产生、固废存储、固废运输、固废处理单位进行连接，帮助企业管理者记录及分析生产过程中的每个环节、每项数据。</p>
                <img class="cntImg" src="/static/img/resolve/8.png" alt="" style="width:auto;" />`,
          trait: `<p">固废地图管理系统是应用现代物联网技术、RFID身份识别、红外线防入侵、GIS定位、视频监控、无线通信等技术，将固废的全生命周期进行可视化管理。</p>`,
					func: `<h4>01建立固废“个人档案”</h4>
                <p>对固废进行分类，建立个人档案，包括固废的类型、产生环节、组成成分、产生特性、产生时间、存储要求等信息进行记录。</p>
                <h4>02数据查询与统计</h4>
                <p>系统可以实时查询目标废物的所有信息，包括它的本身属性、所处位置、处理环节等。</p>
                <h4>03目标追踪</h4>
                <p>对固废的转移进行全程跟踪，包括转移途径、位置定位、运输车辆的类型、运输距离等信息进行实时记录。</p>
                <h4>04非法转移报警</h4>
                <p>一些有特殊处理存储、处理、转移要求的危险废物，需要有相关的手续才能进行转移，若非法转移，系统会通过人脸识别、位置移动、RFID等技术进行预报预警。</p>
                <h4>05管理台账</h4>
                <p>建立固废管理台账，对固废从产生到处置的全部过程进行记录。</p>
                <h4>06建立管理规范</h4>
                <p>通过本系统建立并完善固废相关管理条例及制度。</p>`
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
          desc: `<h4>国务院税务--环境保护主管部门</h4>
                <p>1.制定平台的技术标准</p>
                <p>2.制定平台数据采集、存储、传输、查询、使用的规范</p>
                <h4>税务机关需交送信息</h4>
                <p>1.纳税申报信息</p>
                <p>2.税款入库、减免税额、欠缴税款、风险疑点等信息</p>
                <p>3.纳税人涉税违法和受行政处罚情况</p>
                <p>4.纳税人纳税申报数据资料异常，或纳税人没有按照规定期限输纳税申报的信息</p>
                <p>5.与环境保护主管部门商定交送的其他信息</p>
                <h4>环境保护主管部门需交送信息</h4>
                <p>1.排污单位基本信息（单位名称、统一社会信用代码、污染物排放口、排放污染物种类）</p>
                <p>2.排污单位污染物放数据（污染物排放量、大气、水污染物浓度值）</p>
                <p>3.排污单位环境违法和受行政处罚情况</p>
                <p>4.对税务机关提请复核的复核意见</p>
                <p>5.与税务机关商定交送的其他信息</p>
                <img class="cntImg" src="/static/img/resolve/10-1.png" alt="" style="width:auto;" />`,
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
        },
        {
          id: 12,
          title: "环保咨询",
					desc: ``,
          trait: `<p>环保咨询</p>
									`,
					func: ``
        }
      ]
    };
  },
	methods: {},
  created() {
		this.detailId = this.$route.query.resoId
	},
	components: {
		goBack
	}
};
</script>
<style scoped>
.resoDetail {
  min-height: 93%;
}
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
.cont .content >>> h4 {
  font-weight: 700;
  margin: 25px 0 8px 0;
}
.cont .content >>> .ind2 {
  text-indent: 2em;
}

@media (min-width: 768px) {
  .detail {
    margin-right: -15px;
    margin-left: -15px;
  }
}

</style>
