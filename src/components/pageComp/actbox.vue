<template>
	<div class="contact">
    <div class="container">
      <div class="row">
        
        <div class="col-xs-12 col-sm-6 col-md-5 actItem">
          <div class="title">新闻</div>

          <div class="newsItem" v-for="(item, index) of newsList" :key="index">
            <router-link :to="{ path: '/newsChild', query: { newsId: item.id }}" class="nLink">{{item.title}}</router-link>
            <p class="nTime">{{item.time}}</p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-5 actItem act">
          <div class="title">联系我们</div>

          <p class="address">
            公司地址: <span>深圳市南山区粤兴四道与高新南交汇处北航大厦8楼8006</span>
          </p>
          <p class="phone">
            <!-- 联系电话: <span>13751082562</span> -->
          </p>
          <p class="landline ">
            座机号码: <span>0755-22672445</span>
          </p>
          <!-- <p class="QQnumber">
            联系QQ: <span>674418063，2725424670</span>
          </p> -->
          <p class="fax">
            传 真: <span>0755-22672445 </span>
          </p>
          <p class="fax">
            邮 箱: <span>az@anzhie.com </span>
          </p>

        </div>
        <div class="col-xs-12 col-sm-12 col-md-2 actItem">

          <!-- <div class="qrCode">
            <img src="../../assets/image/qrcodeimg.png" alt="微信二维码">
          </div> -->

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myContact',
	props: [],
  data () {
    return {
      msg: 'hello myContact!',
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
      ]
		}
  },
	methods: {}
}
</script>
<style scoped>

.contact{
	background: #F5F5F5;
	padding-top: 25px;
}
.contact .actItem{
	margin-bottom: 26px;
}
.contact .actItem.act{
	text-align: center;
}

.contact .actItem.act p{
	margin-bottom: 18px;
}

.actItem .title {
	font-size: 18px;
	font-weight: bold;
	border-left: 5px solid #0251d9;
	border-right: 5px solid #0251d9;
	padding-left: 10px;
	margin-bottom: 10px;
	text-align: center;
}
.actItem .newsItem {
  padding-left: 1.2rem;
	margin-bottom: 15px;
  text-align: center;
}
.actItem .newsItem .nTime {
	color: #636363;
}

.actItem .newsItem .nLink {
	display: block;
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
	color: #666;
	text-decoration: none;
	transition: 0.3s ease;
	margin-bottom: 5px;
}
.actItem .newsItem .nLink:hover {
	color: #000;
}
.actItem .qrCode {
	text-align: center;
}
.actItem .qrCode img {
	width: 150px;
	height: auto;
}

@media (min-width: 768px) {
	.actItem .title {
		text-align: left;
		border-right: 5px solid transparent;
	}
	.contact .actItem.act,
  .contact .actItem .newsItem {
		text-align: left;
	}
}
@media (min-width: 1200px) {

}

</style>
