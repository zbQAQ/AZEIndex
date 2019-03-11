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
            公司地址: <span>{{webConfig.addr}}</span>
          </p>
          <p class="phone">
            <!-- 联系电话: <span>13751082562</span> -->
          </p>
          <p class="landline ">
            座机号码: <span>{{webConfig.mobile}}</span>
          </p>
          <!-- <p class="QQnumber">
            联系QQ: <span>674418063，2725424670</span>
          </p> -->
          <p class="fax">
            传 真: <span>{{webConfig.fax}} </span>
          </p>
          <p class="fax">
            邮 箱: <span>{{webConfig.email}} </span>
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
import posts from '@/tools/request'
export default {
  name: 'myContact',
	props: [],
  data () {
    return {
      msg: 'hello myContact!',
			newsList: [],
			webConfig: {}
		}
  },
	methods: {},
	async created() {
		const newsData = await posts.getThreeNews()
		// console.log(data, 'actbox created')
		this.webConfig = JSON.parse(sessionStorage.getItem('webConfig'));
		if(newsData != null) {
			this.newsList = newsData
		}
	}
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
  width: 100%;
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
  .actItem .newsItem .nLink {
    width: 75%;
  }
}
@media (min-width: 1200px) {

}

</style>
