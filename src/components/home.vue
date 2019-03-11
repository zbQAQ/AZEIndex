<template>
	<div class="temp">
		<div v-show="!loadingFlag">
			<carousel> </carousel>
			<div class="content container">
				<div class="row">	
					<div class="col-md-6 contLeft" @click="toAboutme">
						<img src="/static/img/proimg1.jpg" alt="">
						<div class="imgTips">
							<h3>智慧生态环保系统</h3>
							<p class="tipsTxt">环保咨询、环境监测、环境治理、环保管家服务等</p>
						</div>
						<div class="bottom"></div>
					</div>
					<div class="col-md-6 contRight">

						<div class="col-md-12 rightTop" @click="toAboutme">
							<img src="/static/img/proimg2.jpg" alt="">
							<div class="imgTips">
								<h3>设备智能制造</h3>
								<p class="tipsTxt">生态环保监测、治理设备等</p>
							</div>
						</div>

						<div class="col-md-12 boxMargin">间隔区</div>

						<div class="col-md-12 rightBottom" @click="toAboutme">
							<img src="/static/img/proimg3.jpg" alt="">
							<div class="imgTips">
								<h3>创新服务</h3>
								<p class="tipsTxt">环保税、绿色金融、绿色保险等</p>
							</div>
						</div>

					</div>
				</div>
				<div class="row"></div>
			</div>
			<!-- <div class="contVideo container">
				<div class="row">
					<div class="col-md-12">
						<div class="videoBox">
							<video controls="controls" autoplay="autoplay" height="450" width="100%" 
								src="">
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			</div> -->
			<actBox />
		</div>
		<loading v-show="loadingFlag" />
	</div>
</template>

<script>
import carousel from './pageComp/carousel'
import actBox from './pageComp/actbox'
import loading from './pageComp/loading'
import posts from '@/tools/request'
export default {
  name: 'Home',
  data () {
    return {
			msg: 'hellow myHome',
			loadingFlag: true
		}
	},
	mounted() {},
	async created() {
		const data = await posts.getWebConfig() 
		let hasConfig = sessionStorage.getItem('webConfig')
		if(hasConfig != JSON.stringify(data) || hasConfig == null) {
			// console.log('本地存储为空或者有变， 我修改了config')
			if(data != null) {
				sessionStorage.setItem('webConfig', JSON.stringify(data));
				this.loadingFlag = false
			}
		}else {
			// console.log('没变我就没改了')
			this.loadingFlag = false
		}

	},
	methods: {
		toAboutme() {
			this.$router.push({ path: '/aboutme' })
		}
	},
	components: {
		carousel, actBox, loading
	}
}
</script>

<style scoped>
.temp {
	/* height: 3200px; */
	padding-bottom: 50px;
}
.boxMargin {
	font-size: 0;
	margin-bottom: 26px;
}
.content {
	margin-bottom: 30px
}
.content .contLeft {
	position: relative;
	overflow: hidden;
	margin-bottom: 26px;
}
.content .imgTips {
	position: absolute;
	bottom: 20px;
	width: calc(100% - 30px);
	padding: 20px 10% 10px 20px;
	background: rgba(0,0,0,0.4);
	color: #fff;
	transition: 0.5s ease;
	/* transform: translateY(70%); */
}
.content .imgTips .tipsTxt {
	/* height: 120px; */
	overflow: hidden;
	margin-top: 20px;
}
.contLeft:hover .imgTips{
	/* transform: translateY(0) */
}
.content .bottom {
	position: absolute;
	width: calc(100% - 30px);
	bottom: 0;
	height: 20px;
	background: rgb(1, 4, 26);
}
.content .contRight {
	padding-left: 0;
}
.contRight .imgTips{
	width: calc(100% - 15px);
	bottom: 0;
	/* transform: translateY(70%); */
}
.contRight .rightTop {
	height: 220px;
	padding-right: 0;
	overflow: hidden;
}
.contRight .rightBottom {
	height: 220px;
	padding-right: 0;
	overflow: hidden;
}
.contRight h3 {
	margin-top: 0;
}
.contRight .imgTips .tipsTxt{
	margin-top: 10px;
	/* height: 120px; */
}
.contRight .rightTop:hover .imgTips,
.contRight .rightBottom:hover .imgTips {
	/* transform: translateY(0) */
}
@media (min-width: 523px) {
	.content .imgTips .tipsTxt {
		height: auto;
	}
	.content .imgTips {
		/* transform: translateY(58%); */
	}
}
@media (min-width: 992px) {
	.content .contLeft {
		margin-bottom: 0;
	}
	.contLeft .imgTips {
		/* transform: translateY(63%); */
	}
	.content .contRight .imgTips {
		/* transform: translateY(65%); */
	}
	.contRight .rightTop,
	.contRight .rightBottom {
		height: auto;
	}
	.boxMargin {
		margin-bottom: 11px;
	}

}
@media (min-width: 1200px) {	
	.content .contRight .imgTips {
		/* transform: translateY(60%) */
	}
}

.contVideo {
	margin-bottom: 40px;
}
.contVideo .videoBox{
	width: 100%;
	height: 100%;
	/* background: url('../assets/image/carousel1.jpg') center no-repeat; */
}

</style>
