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
          <strong>服务客户：</strong>就是想客户之所想，急客户之所急；提供解决方案时比客户想的更全面；具体服务时比客户预想的更多，努力把系统做得稳定、简单、便捷、易用，让客户用得顺手。一句话，就是“提供超越客户预期的服务”。
        </p>
      </div>
      <div class="box5-p2">
        <p><strong>创新进取：</strong>
          创新就是要有新思路、新方法、新技术、新成果。创新是要用不同于既往的套路来做事。创新是敢于突破自己，勇于学习的过程。创新的导向是要产生价值，平台的同事创新支撑了产品部门，产生了价值；产品部门的同事创新为我们客户带来了便利，产生了价值；支撑部门为产品部门、平台部门提供创新测试、管理方法，也产生了价值。我们的每个部门都在创新，平台的研发、产品的研发、项目的交付、服务的交付等。
        </p>
      </div>
      <div class="box5-p3">
        <p><strong>艰苦奋斗：</strong>
          要想取得成功，除创新之外，艰苦奋斗也是必要条件，没有随随便便的成功。别人起步更早，条件更好，我们怎么样才能成功，只有艰苦奋斗一条路。但努力的方向、奋斗的方向，应该是为客户创造价值。没有为客户产生价值，再辛苦也不叫奋斗。奋斗就是要付出，付出了就要有回报，我们一定把激励导向付出的同事。
        </p>
      </div>
      <div class="box6">
        <p><strong>包容协作：</strong>
          没有完美的个人，只有无敌的团队，我们不同部门之间要组成铁三角、金三角，面向客户提供最佳解决方案。尺有所短、寸有所长，我们只有取长补短，相互包容、相互协作、及时补位，才能取得持续的成功。
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
