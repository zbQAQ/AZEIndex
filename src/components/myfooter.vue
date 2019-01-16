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
}
.myfooter {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background: #f5f5f5;
}
.footerTxt {
	display: inline-block;
}
</style>


