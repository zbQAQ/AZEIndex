<template>
	<div class="honor">
    <div class="box">
      <span class="">荣誉资质</span>
    </div>
		<div class="box5">
      <div class="box5-p1">
        <p>
          博安达取得专利4项，其中实用新型专利证书3项，发明专利1项。另外还有9项发明专利正在授权中。计算机软件著作权登记156项，产品登记43项。
        </p>
      </div>
    </div>
    <div class="box2">
      <img src="../../assets/image/honor-img.jpg" class="img-responsive" alt="公司简介">
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
