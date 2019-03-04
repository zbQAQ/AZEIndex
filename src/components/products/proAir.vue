<template>
	<div class="proAir">
    <div class="box">
      <span class="">气</span>
    </div>

    <div class="proBox">
      <div class="proItem col-md-4 col-sm-6 col-xs-12" v-for="(item, index) of proAir" :key="index" @click="goProDetail(item.id)">
        <img :src="item.imgUrl" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
	</div>
</template>
<script>
export default {
  name: 'proAir',
  data () {
    return {
      msg: 'hello proAir!',
      proAir: [
        {
          id: '1',
          name: '油烟监测',
          imgUrl: '/static/img/products/yyjc.jpg'
        },
        {
          id: '2',
          name: '大气移动监测车',
          imgUrl: '/static/img/products/jcc.jpg'
        },
        {
          id: '3',
          name: 'VOCs监测设备',
          imgUrl: '/static/img/products/vocs.jpg'
        }
      ]
		}
  },
	methods: {
    goProDetail(id) {
      this.$router.push({ path: 'proDetail', query: { proId: id }})
    }
  }
}
</script>
<style scoped>
@import "./pro.css";

</style>
