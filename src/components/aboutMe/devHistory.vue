<template>
	<div class="devHistory">

		<div class="box">
      <span class="">发展历程</span>
    </div>
    
		<div class="hisMain">

			<ul class="course">
				<li>

					<div class="cbot"><span class="fa fa-angle-double-down icon"></span></div>
					<div class="contxt">
						<div class="time">
							<span>2000</span>年 ---
						</div>
						<div class="desc">
							公司成立于深圳, 并成功推出首款产品"博安达数字环境信息网络系统", 提出了污染源全生命周期管理的理念, 并成功实施.
						</div>
					</div>

				</li>
				<li>

					<div class="cbot"><span class="fa fa-angle-double-down icon"></span></div>
					<div class="contxt">
						<div class="time">
							<span>2000</span>年 ---
						</div>
						<div class="desc">
							推出市区两级应用的一体化建设项目环评审批系统
						</div>
					</div>

				</li>
				<li></li>
				<li></li>
			</ul>

		</div>

	</div>
</template>
<script>
export default {
  name: 'devHistory',
  data () {
    return {
			msg: 'hello devHistory!'
		}
  },
	methods: {}
}
</script>
<style scoped>

.box {
  background-color: #ededed;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
	border-left: 5px #20ace6 solid;
	padding-left: 10px;
}

.hisMain,
.hisMain .course {
	width: 100%;
	height: auto;
}
.hisMain .course {
	margin-top: 20px;
	padding: 0 8px 0; 
}
.course li {
	position: relative;
	width: 100%;
	margin-bottom: 25px;
}
.course li .cbot {
	position: absolute;
	top: 50%;
	left: 8px;
	display: inline-block;
	margin-top: -8px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: #20ace6;
	box-shadow: 0px 0px 0px 3px #caeaff inset;
}
.course li .cbot::before {
	position: absolute;
	top: -25px;
	left: 50%;
	content: '';
	display: block;
	width: 1px;
	height: 25px;
	background: #d2d2d2;
	
}
.course li .cbot::after {
	position: absolute;
	bottom: -25px;
	left: 50%;
	content: '';
	display: block;
	width: 1px;
	height: 25px;
	background: #d2d2d2;
}
.course li .cbot .icon {
	position: absolute;
	top: 33px;
	left: 2px;
	font-size: 20px;
	color: #d2d2d2;
}

.course li .contxt {
	display: inline-block;
	padding-left: 40px;
}

.contxt .time{
	display: inline-block;
	float: left;
}
.contxt .time span{}
.contxt .desc{
	display: inline-block;
}


</style>

