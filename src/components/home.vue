<template>
	<div class="temp">
		
		<carousel> </carousel>

		<div class="content container">
			<div class="row">
				<div class="col-md-6 contLeft">
					<img src="../assets/image/proimg1.jpg" alt="">
					<div class="imgTips">
						<h3>生态环境监察执法</h3>
						<p class="tipsTxt">包括环境执法、网格化巡查、行政处罚、环境信访、环境稽查、排污申报、在线监控以及环保督察、环保专项督查等业务，通过创新环境执法手段，为环保执法工作上升到一个新台阶提供了有力的技术保障，达到了规范行为、落实责任、提高效率的目的。</p>
					</div>
					<div class="bottom"></div>
				</div>
				<div class="col-md-6 contRight">

					<div class="col-md-12 rightTop">
						<img src="../assets/image/proimg2.jpg" alt="">
						<div class="imgTips">
							<h3>生态环境监察执法</h3>
							<p class="tipsTxt">包括环境执法、网格化巡查、行政处罚、环境信访、环境稽查、排污申报、在线监控以及环保督察、环保专项督查等业务，通过创新环境执法手段，为环保执法工作上升到一个新台阶提供了有力的技术保障，达到了规范行为、落实责任、提高效率的目的。</p>
						</div>
					</div>

					<div class="col-md-12 boxMargin">间隔区</div>

					<div class="col-md-12 rightBottom">
						<img src="../assets/image/proimg3.jpg" alt="">
						<div class="imgTips">
							<h3>生态环境监察执法</h3>
							<p class="tipsTxt">包括环境执法、网格化巡查、行政处罚、环境信访、环境稽查、排污申报、在线监控以及环保督察、环保专项督查等业务，通过创新环境执法手段，为环保执法工作上升到一个新台阶提供了有力的技术保障，达到了规范行为、落实责任、提高效率的目的。</p>
						</div>
					</div>

				</div>
			</div>
			<div class="row"></div>
		</div>

		<div class="contVideo container">
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
		</div>

		<actBox />
			
	</div>
</template>

<script>
import carousel from './pageComp/carousel'
import actBox from './pageComp/actbox'
export default {
  name: 'Home',
  data () {
    return {
			msg: 'hellow myHome'
		}
	},
	/*添加了一个钩子函数*/ 
	mounted:function(){
			// alert("欢迎来到安志生态环境有限公司");
	},
	components: {
		carousel, actBox
	}
}
</script>

<style scoped>
.temp {
	/* height: 3200px; */
	margin-bottom: 50px;
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
	transform: translateY(70%);
}
.content .imgTips .tipsTxt {
	height: 120px;
	overflow: hidden;
	margin-top: 20px;
}
.contLeft:hover .imgTips{
	transform: translateY(0)
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
	transform: translateY(70%);
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
	height: 120px;
}
.contRight .rightTop:hover .imgTips,
.contRight .rightBottom:hover .imgTips {
	transform: translateY(0)
}
@media (min-width: 523px) {
	.content .imgTips .tipsTxt {
		height: auto;
	}
	.content .imgTips {
		transform: translateY(58%);
	}
}
@media (min-width: 992px) {
	.content .contLeft {
		margin-bottom: 0;
	}
	.contLeft .imgTips {
		transform: translateY(63%);
	}
	.content .contRight .imgTips {
		transform: translateY(65%);
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
		transform: translateY(60%)
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
