<template>
  <div class="newsCnt">
    <div class="container">
      <div class="itemBox" v-for="(item, index) of newsList" :key="index" @click="goNewsDetail(item.id)">
        <div class="itemNews col-md-12">
					<div class="row itemShadow">
						<div class="imgBox col-md-3 col-xs-12" v-if="item.imgUrl.length > 0">
							<img :src="item.imgUrl" alt="新闻缩略图" class="news1">
						</div>
						<div class="content col-xs-12" :class="{'col-md-12': item.imgUrl.length <= 0, 'col-md-9': item.imgUrl.length > 0}">
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
  </div>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
      msg: "hello news", //140 max length
      newsList: [
				{
					id: 1,
					title: '以创新引领超大型城市可持续发展 深圳可持续发展交出靓丽“年报”',
					desc: '2018年，深圳新增国家高新技术企业超过3100家，累计超过1.44万家，预计R&D占GDP比重达4.2%。主要知识产权数量持续提高，PCT国际专利申请继续居全国城市首位，专利授权量增长40%。深圳还获得科技进步一等奖等国家科技奖16项、中国专利金奖4项。全年新引进人才28.5万，新增全职院士12名。光明科学城、鹏城实验室、深圳湾实验室等重大创新平台启动建设，新增各类创新载体189家。',
					imgUrl: '',
					time: '2019-02-27 10:43'
				},
				{
					id: 2,
					title: '深圳市宝安区在2月22日召开水污染治理决战年动员会',
					desc: '2月22日下午，宝安召开2019年宝安区污染防治攻坚战指挥部第一次全体会议暨水污染治理决战年动员会，要求今年必须不折不扣全面消除黑臭水体的任务。今年是宝安水污染治理决战年、交卷年，宝安要求，必须全力以赴、不折不扣、坚决完成全面消除黑臭水体，茅洲河干支流均达到地表五类水、入库支流达到地表V类水，燕罗碧道试验段达地表IV类水和新增海绵城市14.4平方公里的总目标',
					imgUrl: '', ///static/img/news2.jpg
					time: '2019-02-25 09:58'
				},
				{
					id: 3,
					title: '粤大批重大水利工程加速推进 今年将完成2000公里中小河流治理',
					desc: '作为广东1号水利工程的珠三角水资源配置工程，将力争4月底前全面动工；韩江高陂水利枢纽工程、韩江榕江练江水系连通工程、中小河流治理等也将继续加快推进。记者从21日召开的全省河长制与水利工作会议了解到，近年来，我省每年的水利建设规模都保持在300亿元的高位，今年要推进一大批重大水利工程建设，投资规模之大前所未有。',
					imgUrl: '',
					time: '2019-02-22 09:28'
				},
				{
					id: 4,
					title: '深圳市罗湖区部署2019年污染防治攻坚战工作 今年将完成7个小微黑臭水体整治',
					desc: '2月21日，2019年罗湖区污染防治攻坚战指挥部第一次全体会议暨水污染治理决战年动员会召开，深入贯彻落实深圳市污染防治攻坚战指挥部第一次全体会议暨水污染治理决战年动员会精神，罗湖区委书记贺海涛、区长罗育德签署发布2019年罗湖第一号指挥令《罗湖区污染防治攻坚战指挥部关于开展全面攻坚国考、省考断面水质达标和全面消除黑臭水体行动的命令》，要求相关部门行动起来，推进水污染治理。',
					imgUrl: '', ///static/img/news1.jpg
					time: '2019-02-22 09:27'
				},
				{
					id: 5,
					title: '深圳着力打造排污许可“特区模式” 做好“加减乘除”，全面推动排污许可制度改革落地见效',
					desc: '排污许可制度改革以来，广东省深圳市两年累计高质量完成12个重点行业、268家企业的国家排污许可证核发，并成为全国电镀工业排污许可管理试点城市，核发全省第一张电镀工业排污许可证。',
					imgUrl: '',
					time: '2019-02-20 10:10'
				},
				{
					id: 6,
					title: '餐饮企业开业及环保指引',
					desc: '餐饮企业开业及环保指引',
					imgUrl: '',
					time: '2019-03-1 11:15'
				},
				{
					id: 7,
					title: '开店指引',
					desc: '开店指引',
					imgUrl: '',
					time: '2019-03-1 13:40'
				},
			]
    };
	},
	methods: {
		goNewsDetail(id) {
			this.$router.push({ path: '/newsChild', query: { newsId: id }})
		}
	}
};
</script>
<style scoped>
.newsCnt {
  margin-bottom: 55px;
  padding-top: 55px;
}
.newsCnt .itemNews {
	position: relative;
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
