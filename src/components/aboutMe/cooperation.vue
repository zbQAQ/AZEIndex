<template>
	<div class="cooperation">

		<div class="box">
      <span class="">合作伙伴</span>
    </div>
    <div class="box2">
      <img src="/static/img/cooperation.png" alt="">
    </div>
	</div>
</template>
<script>
export default {
  name: 'cooperation',
  data () {
    return {
			msg: 'hello cooperation!'
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
.box2 {
	padding-top: 20px;
	text-align: center;
}

</style>
