<template>
  <div class="newsCnt">
    <div class="container" v-show="!loadingFlag">
      <div class="itemBox" v-for="(item, index) of newsList" :key="index" @click="goNewsDetail(item.id)">
        <div class="itemNews col-md-12">
					<div class="row itemShadow">
						<div class="imgBox col-md-3 col-xs-12" v-if="item.imgurl.length > 0">
							<img :src="item.imgurl" alt="新闻缩略图" class="news1">
						</div>
						<div class="content col-xs-12" :class="{'col-md-12': item.imgurl.length <= 0, 'col-md-9': item.imgurl.length > 0}">
							<div class="itemTit">
								<h3>{{item.title}}</h3>
							</div>
							<div class="itemTxt">{{item.desc}}</div>
							<div class="itemTime">{{item.time}}</div>
						</div>
					</div>
        </div>
      </div>
    </div>
		<loading v-show="loadingFlag"/>
  </div>
</template>
<script>
import posts from '@/tools/request'
import loading from './pageComp/loading'
export default {
  name: "news",
  data() {
    return {
      msg: "hello news", //140 max length
			newsList: [],
			loadingFlag: true
    };
	},
	async created() {
		
		const data = await posts.getNewsList()
		// console.log('data', data)
		// setTimeout(() => {
			if(data != null) {
				this.newsList = data
				this.loadingFlag = false
			}
		// }, 200)
		// this.newsList = data
		// this.loadingFlag = false
	},
	methods: {
		goNewsDetail(id) {
			this.$router.push({ path: '/newsChild', query: { newsId: id }})
		}
	},
	components: {
		loading
	}
};
</script>
<style scoped>
.newsCnt {
  padding-bottom: 55px;
  padding-top: 55px;
}
.newsCnt .itemNews {
	position: relative;
	float: none;
  display: flex;
  flex-direction: column;
	cursor: pointer;
	margin: 0 15px 50px 15px;
}
.newsCnt .itemNews::after {
	content: 'line';
	position: absolute;
	left: 0;
	bottom: -25px;
	width: 100%;
	height: 1px;
	font-size: 0;
	background-color: #ddd;
}
.newsCnt .itemNews .itemShadow {
	overflow: hidden;
	padding-top: 8px;
	transition: 0.3s ease;
}
.newsCnt .itemNews:hover .itemShadow {
	box-shadow: 2px 3px 10px #989898;
	border-radius: 2px;
}
.newsCnt .itemNews .imgBox {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 8px;
	padding: 0;
}
.newsCnt .itemNews .imgBox img {
	width: 100%;
	height: auto;
}
.newsCnt .itemNews .content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.newsCnt .itemNews .content .itemTit {
	margin-bottom: 8px;
	color: #2b2b2b;
	transition: 0.2s ease;
}
.newsCnt .itemNews .content .itemTit h3 {
	line-height: 1.5;
}
.newsCnt .itemNews .content .itemTit:hover,
.newsCnt .itemNews .content .itemTxt:hover {
	color: #000;
}
.newsCnt .itemNews .content .itemTxt {
	position: relative;
	max-height: 112px;
	overflow: hidden;
	margin-bottom: 8px;
	text-indent: 2em;
	line-height: 2;
	transition: 0.2s ease;
}
.newsCnt .itemNews .content .itemTxt.moreTxt::after {
	content: "...";
	font-weight: bold;
	position: absolute;
	bottom: 0;
	right: 0;
	padding: 0 20px 1px 45px;
	background: url(/static/img/ellipsis_bg.png) repeat-y;
}
.newsCnt .itemNews .content .itemTime {
	margin-bottom: 12px;
	align-self: flex-end;
}


@media (min-width: 768px) {
	.newsCnt .itemNews {
		flex-direction: row;
	}
	.newsCnt .itemNews .itemShadow {
		min-width: 100%;
		margin: 0;
	}
}
@media (min-width: 992px) {
	.newsCnt .itemNews .imgBox {
		height: 100%;
		margin-bottom: 0;
		padding: 5px;
	}
	.newsCnt .itemNews .content {
		position: relative;
		height: 100%;	
		/* padding-top: 5px; */
		padding-bottom: 5px;
	}
	.newsCnt .itemNews .content .itemTime {
		margin-bottom: 0;
	}
	.newsCnt .itemNews .content .itemTxt {
		margin-bottom: 0;
	}
}

</style>
