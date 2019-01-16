<template>
	<div class="temp">
		<div class="container cantactBox">
      <div class="row">

        <div class="col-md-12">
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

      </div>
      <div class="row">

        <div class="col-md-3">
          
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>

      </div>
      <div class="row"></div>

    </div>
	</div>
</template>
<script>

export default {
  name: 'contact',
  data () {
    return {
      msg: 'hello myTemplate!',
      zuobiao: [113.941146,22.527268],


      zoom: 16,
      center: [113.941146,22.527268],
      currentWindow: {
        position: [113.941146,22.527268],
        content: `
          <p>公司: 深圳安志生态环境有限公司</p>
          <p style="width:354px;">地址: 深圳市南山区粤兴四道与高新南九道交叉口东100米 </p>
          <p style="text-indent: 2.5em;">北航大厦A座8006 </p>
        `,
        events: {},
        visible: true
      },
      slotWindow: {
        position: [113.941146,22.527268], //深圳北航大厦坐标
      },
		}
  },
  mounted() {
  },
	methods: {
    
  }
}
</script>
<style scoped>

.cantactBox {
  margin-top: 40px;
}

.mapbox {
  height: 400px;
}

p.winName {
  color: red;
}
p.winAddr {
  color: red;
}


</style>
