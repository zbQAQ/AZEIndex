<template>
	<div class="temp">
    <actBox />

		<div class="container cantactBox">

      <div class="row">

        <div class="col-md-3 col-xs-6 iconItem">
          <div class="myIcon">
            <span class="fa fa-list-alt fa-lg"></span>
          </div>
          <div class="itemTxt">
            <p class="tTitle">公司名称</p>
            <span class="tName">安志生态环保有限公司</span>
          </div>
        </div>
        <div class="col-md-3 col-xs-6 iconItem">
          <div class="myIcon">
            <span class="fa fa-level-up fa-lg"></span>
          </div>
          <div class="itemTxt">
            <p class="tTitle">传真</p>
            <span class="tName">0755-22672445</span>
          </div>
        </div>
        <div class="col-md-3 col-xs-6 iconItem">
          <div class="myIcon">
            <span class="fa fa-phone fa-lg"></span>
          </div>
          <div class="itemTxt">
            <p class="tTitle">电话</p>
            <span class="tName">13751082562</span>
          </div>
        </div>
        <div class="col-md-3 col-xs-6 iconItem">
          <div class="myIcon">
            <span class="fa fa-envelope-o fa-lg"></span>
          </div>
          <div class="itemTxt">
            <p class="tTitle">邮箱</p>
            <span class="tName">alucard263096@126.com</span>
          </div>
        </div>

      </div>

    </div>

    <div class="mapbox" id="mapbox">
      <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
        <el-amap-info-window
          :position="currentWindow.position"
          :content="currentWindow.content"
          :visible="currentWindow.visible"
          :events="currentWindow.events">
        </el-amap-info-window>
      </el-amap>
    </div>

	</div>
</template>
<script>
import actBox from './pageComp/actbox'
export default {
  name: 'contact',
  data () {
    return {
      msg: 'hello contact!',

      zoom: 16,
      center: [113.941146,22.527268],
      currentWindow: {
        position: [113.941146,22.527268],
        content: `
          <p>公司: 深圳安志生态环境有限公司</p>
          <p style="width:354px;">地址: 深圳市南山区粤兴四道与高新南九道交叉口东100米 北航大厦A座8006 </p>
        `,
        events: {},
        visible: true
      },
      slotWindow: {
        position: [113.941146,22.527268], //深圳北航大厦坐标
      },
		}
  },
  components: {
    actBox
  },
  mounted() {
  },
	methods: {
    
  }
}
</script>
<style scoped>
.temp {
  margin-bottom: 50px;
}
.temp .contact {
  background: #fff;
  padding-top: 55px;
}
.cantactBox {
  /* margin-top: 40px; */
  margin-bottom: 50px;
}
.mapbox {
  height: 280px;
  margin-bottom: 50px;
}

.cantactBox .iconItem {
  text-align: center;
  padding: 30px 0;
}
.cantactBox .iconItem .myIcon{
  font-size: 24px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #d8d8d8;
  margin-bottom: 8px;
  
}
.cantactBox .iconItem:nth-child(1) .myIcon {
  color: #00a4f0;
}
.cantactBox .iconItem:nth-child(2) .myIcon {
  color: #ff8a8a;
}
.cantactBox .iconItem:nth-child(3) .myIcon {
  color: #c2e378;
}
.cantactBox .iconItem:nth-child(4) .myIcon {
  color: #ffbb32;
}

.cantactBox .iconItem .itemTxt{}
.cantactBox .iconItem .itemTxt .tTitle{
  margin-bottom: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
}
.cantactBox .iconItem .itemTxt .tName{
  font-size: 13px;
}

@media (min-width: 768px) {
  .mapbox {
    height: 400px;
  }
}


</style>
