<template>
	<div class="contact">
    <div class="container">
      <div class="row">
        
        <div class="col-xs-12 col-sm-6 col-md-5 actItem">
          <div class="title">新闻</div>

          <div class="newsItem">
            <a href="#" class="nLink">广饶县开展网格化环境监管平台上线培训</a>
            <p class="nTime">2017-12-26</p>
          </div>
          <div class="newsItem">
            <a href="#" class="nLink">广饶县开展网格化环境监管平台上线培训</a>
            <p class="nTime">2017-12-26</p>
          </div>
          <div class="newsItem">
            <a href="#" class="nLink">广饶县开展网格化环境监管平台上线培训</a>
            <p class="nTime">2017-12-26</p>
          </div>

        </div>
        <div class="col-xs-12 col-sm-6 col-md-5 actItem act">
          <div class="title">联系我们</div>

          <p class="address">
            总部地址: <span>深圳市南山区粤兴四道与高新南交汇处北航大厦8楼8006</span>
          </p>
          <p class="phone">
            联系电话: <span>0755-26734049</span>
          </p>
          <p class="landline ">
            座机号码: <span>26734049-8002</span>
          </p>
          <p class="QQnumber">
            联系QQ: <span>674418063，2725424670</span>
          </p>

        </div>
        <div class="col-xs-12 col-sm-12 col-md-2 actItem">

          <div class="qrCode">
            <img src="../../assets/image/qrcodeimg.png" alt="微信二维码">
          </div>

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
			msg: 'hello myContact!'
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
	margin-bottom: 20px;
}
.actItem .newsItem .nTime {
	color: #636363;
}

.actItem .newsItem .nLink {
	display: block;
	width: 100%;
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
	.contact .actItem.act {
		text-align: left;
	}
}
@media (min-width: 1200px) {

}

</style>
