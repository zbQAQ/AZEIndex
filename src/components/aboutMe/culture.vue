<template>
	<div class="culture">

		<div class="box">
      <span class="">企业文化</span>
    </div>
    <div class="box2">
      <h3 class="culTit">企业文化核心价值观解析</h3>
    </div>
    <div class="box5">
      <div class="box5-p1">
        <p>
          <strong>人才资源：</strong>构建了一只由海内外知名院校博、硕士构成的研发团队；专业涵盖环保、计算机、电子工程、工程管理等。
        </p>
      </div>
      <div class="box5-p2">
        <p><strong>高校资源：</strong>
          目前公司正与清华伯克利、北京大学、武汉大学、中山大学等多家高等院校开展产学研深度合作。
        </p>
      </div>
      <div class="box5-p3">
        <p><strong>产业资源：</strong>
          安志生态立足深圳市，同时也为湖北、湖南、安徽、辽宁等省份各级环保职能部门提供环保综合服务；并与中国中铁、中船重工、中国电子、中国冶金总局、成都大数据产业技术研究院等多家公司达成战略合作意向。携手环保上下游企业共同打造了完善的生态产业链。
        </p>
      </div>
    </div>

	</div>
</template>
<script>
export default {
  name: 'myCulture',
  data () {
    return {
			msg: 'hello myCulture!'
		}
  },
	methods: {}
}
</script>
<style scoped>

.box2 {
	padding-top: 20px;
	text-align: center;
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
  margin-top: 40px;
  line-height: 2.5;
}
.box5 p {
  margin-top: 40px;
}
.box6 {
  margin-top: 40px;
}
</style>
