<template>
  <div class="resolve">
    <div class="container">
			<div class="topTit">
				历史解决方案
			</div>
      <div class="row">
        <div class="item col-md-4" v-for="(item, index) of list" :key="index" @click="goResDetail(item.id)">
					<div class="itemBox">
						<div class="thumb">
							<img :src="item.imgUrl" alt>
						</div>
						<p>{{item.name}}</p>
					</div>
        </div>
      </div>
    </div>

    <actBox/>
  </div>
</template>
<script>
import actBox from "./pageComp/actbox";
export default {
  name: "resolve",
  data() {
    return {
      msg: "hello resolve",
      list: [
				{
					id: 1,
					name: '水质监测网格化',
					imgUrl: '/static/img/resolve/resolve12.jpg'
				},
				{
					id: 2,
					name: '城市地下管网水质在线监测系统',
					imgUrl: '/static/img/resolve/resolve8.jpg'
				},
				{
					id: 3,
					name: '无人船监测系统',
					imgUrl: '/static/img/resolve/resolve3.jpg'
				},
				{
					id: 4,
					name: '大气环境移动监测方案',
					imgUrl: '/static/img/resolve/resolve14.jpg'
				},
				{
					id: 5,
					name: '高光谱监测系统',
					imgUrl: '/static/img/resolve/resolve2.jpg'
				},
				{
					id: 6,
					name: '汽车尾气遥感监控系统',
					imgUrl: '/static/img/resolve/resolve11.jpg'
				},
				{
					id: 7,
					name: '餐饮油烟监管系统',
					imgUrl: '/static/img/resolve/resolve16.jpg'
				},
				{
					id: 8,
					name: '固废环境精细化管理系统',
					imgUrl: '/static/img/resolve/resolve17.jpg'
				},
				{
					id: 9,
					name: '蚀刻液综合处理监管系统',
					imgUrl: '/static/img/resolve/resolve15.jpg'
				},
				{
					id: 10,
					name: '环保税智慧管理系统',
					imgUrl: '/static/img/resolve/resolve10.jpg'
				},
				{
					id: 11,
					name: '医院环境综合管理系统',
					imgUrl: '/static/img/resolve/resolve13.jpg'
				},	
			]
    };
  },
  methods: {
		goResDetail(id) {
			this.$router.push({path: '/resoDetail', query: { resoId: id }})
		}
	},
  components: {
    actBox
  }
};
</script>
<style scoped>
.resolve {
	margin-bottom: 50px;
}
.container {
  padding-top: 55px;
  padding-bottom: 55px;
}
.container .topTit {
	font-size: 22px;
	font-weight: 700;
	text-align: center;
	padding-bottom: 15px;
	margin-bottom: 25px;
	border-bottom: 1px solid #eee;
}
.container .item {
	margin-bottom: 35px;
  transition: 0.3s ease;
}
.container .item:hover {
	transform: translateY(-10px);
}
.container .item .itemBox {
	box-shadow: 2px 2px 5px #999;
	border-radius: 2px;
	overflow: hidden;
}
.container .item .thumb {
  /* border: 1px solid #a7a4a4; */
  /* border-bottom: none; */
}
.container .item p {
  text-align: center;
  font-size: 16px;
  padding: 10px 0;
  /* border: 1px solid #a7a4a4; */
  /* border-top: none; */
}
</style>
