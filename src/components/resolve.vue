<template>
  <div class="resolve">
		<div v-show="!loadingFlag">
			<div class="container" >
				<div class="topTit">
					解决方案
				</div>
				<div class="row">
					<div class="item col-md-4" v-for="(item, index) of resolveList" :key="index" @click="goResDetail(item.id)">
						<div class="itemBox">
							<div class="thumb">
								<img :src="'https://alioss.app-link.org/alucard263096/blog/wangzhanid/' + item.thumb" alt>
							</div>
							<p>{{item.name}}</p>
						</div>
					</div>
				</div>
			</div>
			<actBox/>
		</div>
		<loading v-show="loadingFlag"/>
  </div>
</template>
<script>
import actBox from "./pageComp/actbox";
import posts from '@/tools/request'
import loading from './pageComp/loading'
export default {
  name: "resolve",
  data() {
    return {
      msg: "hello resolve",
			resolveList: [],
			loadingFlag: true
    };
  },
  methods: {
		goResDetail(id) {
			this.$router.push({path: '/resoDetail', query: { resoId: id }})
		}
	},
	async created() {
		const data = await posts.getResolveList()
		if(data != null) {
			setTimeout(() => {
				this.resolveList = data
				this.loadingFlag = false
			}, 200) 
		}
		// console.log(data)
	},
  components: {
    actBox, loading
  }
};
</script>
<style scoped>
.resolve {
	padding-bottom: 50px;
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
