<template>
	<div class="honor">
    <div class="box">
      <span class="">联系我们</span>
    </div>
		<div class="box5">
      <p>公司全称：深圳安志生态环境有限公司</p>
      <p>地址：深圳市南山区粤兴四道与高新南交汇处北航大厦8楼8006</p>
      <p>座机号码: 0755-22672445</p>
      <p>传 真: 0755-22672445</p>
      <p>邮 箱: az@anzhie.com</p>
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
export default {
  name: 'honor',
  data () {
    return {
      msg: 'hello honor!',
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
	methods: {}
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
  margin-top: 20px;
	line-height: 2.5;
  padding-left: 1em;
}

.box6 {
  margin-top: 40px;
}
.mapbox {
  height: 480px;
  margin-top: 30px;
  border-radius: 4px;
  overflow: hidden;
}
</style>
