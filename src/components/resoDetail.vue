<template>
	<div class="temp">
		<div class="container">
			<div class="row detail">

				<div class="title">
					污染源在线监控系统
				</div>
	
				<div class="cont">
					<div class="contTit">系统概述</div>
					<div class="content">

						应用物联网传感技术，全面感知废水、废气等污染源排放企业的排污状况，充分发挥已建设和即将扩展建设的污染源企业废水、废气自动监控

						<img src="../assets/image/resolve-detail.jpg" alt="">

						应用物联网传感技术，全面感知废水、废气等污染源排放企业的排污状况，充分发挥已建设和即将扩展建设的污染源企业废水、废气自动监控

					</div>
				</div>
				<div class="cont">
					<div class="contTit">系统特点</div>
					<div class="content">
					
						<p>应用物联网传感技术，全面感知废水、废气等污染源排放企业的排污状况，充分发挥已建设和即将扩展建设的污染源企业废水、废气自动监控设备的作用，将污染源前端在线监控站点做为环境物联网络的前端数据感知设备，污染源在线监控软件系统做为环境物联网络的数据分析与展示平台，实现污染源监控的全面物联与管理，具体实现以下建设目标</p>

					</div>
				</div>
				<div class="cont">
					<div class="contTit">系统功能</div>
					<div class="content">

						<p>
							建立领导驾驶舱，将全市污染源管理数据，污染源废水、废气排放数据，水、气、声环境质量数据，项目环评审批、信访投诉、行政处罚等业务处理数据全部关联、串联起来，进行整体分析，并应用BI、GIS对分析结果进行多形式的可视化，在一个平台界面上展示，提供领导一个宏观、直观、信息全、信息量大、关键信息突出的可视化展示平台。
							基于GIS服务平台并叠加在线监测点位数据，以一张图形式展示在线监控企业分布情况，同时展示预警报警信息。提供GIS在线监控点位监测信息查看功能，点击在线监控点位可查看监测数据及预警报警处置信息。
						</p>
						<p>
							通过污染源在线监控信息化管理平台实时监控、及时报警和统计分析，能够为各级领导进行污染分析判断、科学决策提供依据，为提高环境监察部门处置突发性污染事故的效能起到积极作用，并最大限度降低污染事故的危害。
						</p>

					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'resolve detail',
  data () {
    return {
			msg: 'hello resolve detail!'
		}
  },
	methods: {}
}
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
.cont .content img {
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
