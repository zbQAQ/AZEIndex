<template>
	<div class="temp">
		<div class="myfooter">
			<strong>Copyright &copy; 2014-2019 <a href="#">安志环保监控</a>.</strong> All rights
			reserved.
			<div class="footerTxt">
				<b>Version</b> 2.4.0
			</div>
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
	position: fixed;
	bottom: 0;
	z-index: 99999;

}
.myfooter {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: white;
	/* background: #f5f5f5; */
	background-color: #3a3a3a;
	/*yinjianquan更改了footer样式*/
}
.footerTxt {
	display: inline-block;
}
</style>


