<template>
	<div class="temp">
		<div class="myfooter">
			<strong>Copyright&copy;2018-2019 <a href="#">安志环保监控</a>.</strong> 
			粤ICP备19016648号
			<!-- <div class="footerTxt">
				<b>Version</b> 1.0
			</div> -->
		</div>
	</div>
</template>
<script>
export default {
	name: 'myfooter',
  data () {
    return {
			msg: 'hello myfooter!'
		}
  }
}
</script>
<style scoped>
.temp {
	/* position: relative; */
	position: absolute;
	/* position: fixed; */
	bottom: 0;
	z-index: 99;
	margin-top: 50px;
}
.myfooter {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #8e8e8e;
	/* background: #f5f5f5; */
	background-color: #3a3a3a;
	/*yinjianquan更改了footer样式*/
	font-size: 12px
}
.footerTxt {
	display: inline-block;
}

@media screen and (max-width: 400px){
	.myfooter {
		height: auto;
		line-height: 28px;
		padding: 5px 0;
	}
	.myfooter strong{
		display: block;
	}
}

</style>


