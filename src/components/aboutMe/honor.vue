<template>
	<div class="honor">
    <div class="box">
      <span class="">荣誉资质</span>
    </div>
		<div class="box5">
      <div class="box5-p1">
        <p>
          技术合同软件著作权登记书
        </p>
      </div>
    </div>
    <div class="box2">
      <img src="/static/img/honor-img.jpg" class="img-responsive" alt="公司简介">
    </div>
    

	</div>
</template>
<script>
export default {
  name: 'honor',
  data () {
    return {
			msg: 'hello honor!'
		}
  },
	methods: {}
}
</script>
<style scoped>

.box2 {
  padding-top: 20px;
}

.box {
  background-color: #ededed;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
	border-left: 5px #20ace6 solid;
	padding-left: 10px;
}

.box5 {
  margin-top: 20px;
	line-height: 2.5;
}

.box6 {
  margin-top: 40px;
}
</style>
