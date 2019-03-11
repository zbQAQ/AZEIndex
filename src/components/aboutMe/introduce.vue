<template>
	<div class="introduce">
    <div class="box">
      <span class="">公司简介</span>
    </div>
    <div class="box2">
      <img src="/static/img/about1.png" class="img-responsive" alt="公司简介">
    </div>
    <div class="box5">
      <div class="box5-p1">
        <p>
          安志生态是一家融合物联网、人工智能、大数据算法、区块链等技术，提供智慧化整体解决方案的新型环保生态平台公司。
        </p>
      </div>
      <div class="box5-p2">
        <p>
          基于生态环境需求，为客户提供整体解决方案的新型环保生态平台公司。方案涵盖生态环保云规划设计与实施服务、云安全服务、云运维服务、大数据服务，建立生态环境全生命周期的精细化管理体系，帮助客户全面了解环境现状、准确分析、解决环境问题。
        </p>
      </div>
      <div class="box5-p3">
        <p>
         公司电话：{{webConfig.mobile}}<br />
         传真：{{webConfig.fax}}<br />
         地址：{{webConfig.addr}}<br />
         邮箱：{{webConfig.email}}<br />

        </p>
      </div>
      <!-- <div class="box6">
        <a href="#">安志生态...第一期</a>
      </div> -->
    </div>

	</div>
</template>
<script>
export default {
  name: 'introduce',
  data () {
    return {
      msg: 'hello introduce!',
      webConfig: {}
		}
  },
  methods: {},
  created() {
    this.webConfig = JSON.parse(sessionStorage.getItem('webConfig'));
  }
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
